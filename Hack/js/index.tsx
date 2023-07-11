//@ts-ignore
import {c, g, r, x} from '@xeserv/xeact';
import {editor} from 'monaco-editor';
import IStandaloneEditorConstructionOptions = editor.IStandaloneEditorConstructionOptions;
import IStandaloneCodeEditor = editor.IStandaloneCodeEditor;

const backendUrl = 'https://pandocode.nzbr.de';

export default r(() => {
    const progress = <progress value={0} max={1}/>
    const resultText = <div>...</div>
    g('connection-test').append(<div>
        <div>Verbindung</div>
        {progress}
        {resultText}
    </div>);

    editor.defineTheme('copperflame', {
        base: 'vs',
        inherit: true,
        rules: [],
        colors: {
            "editor.background": "#00000000",
        }
    });

    const monacoCommonOptions: IStandaloneEditorConstructionOptions = {
        automaticLayout: true,
        theme: "copperflame",
        fontFamily: 'JetBrains Mono',
        fontSize: 16,
        lineNumbers: "off",
        minimap: {
            enabled: false
        },
        scrollBeyondLastLine: false,
    };

    const editors: Record<string, IStandaloneCodeEditor> = {};
    [...c('editor')].forEach((el: HTMLPreElement) => {
        let defaultCode = (el.firstChild as HTMLElement).innerHTML;
        while (
            defaultCode.split('\n').every((line) => line === '' || line.startsWith(' '))
            && !defaultCode.split('\n').every((line) => line === '')
            ) {
            defaultCode = defaultCode.split('\n').map((line) => line.slice(1)).join('\n');
        }
        defaultCode = defaultCode.trim() + '\n';
        const editorContainer = <div class="editor-container"></div>;
        el.replaceWith(<div class={el.className} id={el.id}>{editorContainer}</div>);
        editors[el.id] = editor.create(editorContainer, {
            value: defaultCode,
            language: el.getAttribute('lang') ?? "python",
            ...monacoCommonOptions,
        });
    });

    const updateFunctions: Record<string, () => Promise<void>> = {};
    [...c('output')].forEach((el: HTMLDivElement) => {
        const id = el.getAttribute('for')!;
        const editor = editors[id];
        const updateOutput = async () => {
            try {
                const code = editor.getValue();
                const updateSelf = () => updateFunctions[id]();
                let newContent: HTMLElement[];
                switch (el.getAttribute('type')) {
                    case 'code': {
                        const res = await fetch(`${backendUrl}/cgi-bin/latex.py`, {
                            method: "POST",
                            body: code,
                        });
                        const text = await res.text();
                        newContent = [
                            <button class="mode-toggle" onclick={($event: MouseEvent) => {
                                ($event.target as HTMLButtonElement).hidden = true;
                                el.setAttribute('type', 'render');
                                updateSelf();
                            }}>Render</button>,
                            <pre class="latex">{text}</pre>
                        ];
                        break;
                    }
                    case 'render': {
                        const res = await fetch(`${backendUrl}/cgi-bin/pandoc.py`, {
                            method: "POST",
                            body: code,
                        });
                        const blob = await res.blob();
                        const url = URL.createObjectURL(blob);
                        newContent = [
                            <button class="mode-toggle" onclick={($event: MouseEvent) => {
                                ($event.target as HTMLButtonElement).hidden = true;
                                el.setAttribute('type', 'code');
                                updateSelf();
                            }}>Code</button>,
                            <img src={url}/>
                        ];
                        break;
                    }
                    case 'mdrender': {
                        const res = await fetch(`${backendUrl}/cgi-bin/pandoc.py?markdown`, {
                            method: "POST",
                            body: code,
                        });
                        const blob = await res.blob();
                        const url = URL.createObjectURL(blob);
                        newContent = [
                            <button class="mode-toggle" onclick={($event: MouseEvent) => {
                                ($event.target as HTMLButtonElement).hidden = true;
                                el.setAttribute('type', 'mdcode');
                                updateSelf();
                            }}>Code</button>,
                            <img src={url}/>
                        ];
                        break;
                    }
                    case 'mdcode': {
                        const res = await fetch(`${backendUrl}/cgi-bin/pandoc.py?markdown&code`, {
                            method: "POST",
                            body: code,
                        });
                        const text = await res.text();
                        newContent = [
                            <button class="mode-toggle" onclick={($event: MouseEvent) => {
                                ($event.target as HTMLButtonElement).hidden = true;
                                el.setAttribute('type', 'mdrender');
                                updateSelf();
                            }}>Render</button>,
                            <pre class="latex">{text}</pre>
                        ];
                        break;
                    }
                    default:
                        throw new Error(`Unknown output type ${el.getAttribute('type')}`);
                }
                if (editor.getValue() === code) {
                    el.replaceChildren(...newContent);
                }
            } catch (e) {
                el.replaceChildren(<div class="error">Error: {e}</div>);
                throw e;
            }
        }
        updateFunctions[id] = updateOutput;
        editor.onDidChangeModelContent(updateOutput);
    });

    // Connection test (and initial rendering)

    const fns = Object.values(updateFunctions);
    progress.max = fns.length;
    Promise.all(fns.map(async (f) => {
        await f();
        progress.value++;
    })).then(() => {
        resultText.innerText = "OK";
        resultText.style.color = "green";
        setTimeout(() => {
            g('connection-test').remove();
        }, 1000);
    }).catch(() => {
        resultText.innerText = "Fehler!";
        resultText.style.color = "red";
    });
});
