---
title: "Pandocode"
author: "Nico Jansen"
date: 12.07.2023
lang: "de-DE"
showSlideNumber: print
controlsTutorial: false
css: "theme.scss"
csl: "../thirdparty/csl-styles/ieee.csl"
bibliography:
   - "hack.bib"
no-title-slide: true
header-includes:
    - <script src="./js/index.tsx" type="module"></script>
include-before:
    - |
        <section id="title-slide">
            <h2 class="title">Pandocode</h2>
            <p class="author">Nico Jansen</p>
            <p class="date">11.07.2023</p>
            <div id="connection-test"></div>
        </section>
---

# Was

- Python Code $\to$ LaTeX Pseudocode
- Implementiert in Python
- Standalone oder Pandoc Filter
  - panflute[@pypi-panflute] als Pandoc Filter Library

# Warum

**Warum wurde Pandocode geschrieben?**

- DAP2 Übungsblätter
- Algorithmen in Python getestet
- LaTeX Pseudocode[@ctan-algorithmicx] Syntax ist umständlich

<br/>

**Warum wird es vorgestellt?**

- Gute Technologien für schnelle Hacks
  - Python
  - Pandoc und Filter
  - CGI

# Verwendung (Standalone)

:::side-by-side
```{.editor #standalone-editor}
def f(x):
    result = 1
    for x in range(10):
        print(result)
        result *= x
    return result

print(f(10))
```
<div class="output" for="standalone-editor" type="code"></div>
:::

:::sidebar

**Control Sequences**:

- `#$begin` / `#$end`
    - Nur Code dazwischen verarbeiten
- `#$+ <text>`
    - Zeile einfügen
- `#$-`
    - Nächste Zeile entfernen
- `#$= <text>`
    - Nächste Zeile ersetzen

<br/>

**Aufruf**:

```sh
$ pandocode code.py
```
:::

# Pandoc

- Dokumentenkonverter
- 42 Eingabe- und 61 Ausgabeformate[@pandoc]

![](./diagram-pandoc.png?as=avif)

```sh
$ pandoc <eingabe> -o <ausgabe>
$ pandoc <eingabe> --template <template> -o <ausgabe>
```

# Pandoc Filter

- Ausführbare Programme
- Verändern das Dokument
  - Manipulation des AST

![](./diagram-filters.png?as=avif)

```sh
pandoc <eingabe> --filter <filter> -o <ausgabe>
pandoc <eingabe> --filter <filter> --template <template> -o <ausgabe>
```

```sh
pandoc <eingabe> --to=json | <filter> | pandoc --from=json -o <ausgabe>
pandoc <eingabe> --to=json | <filter> | pandoc --from=json --template <template> -o <ausgabe>
```

# Verwendung (Filter)

:::side-by-side
<pre class="editor" id="filter-editor"><code>
---
header-includes:
- \usepackage{algpseudocode}
---

# Markdown!

```pseudo 
def f(x):
    result = 1
    for x = 1 to x:
        result = result * x
    return result
```

Die Funktion $f(x)$ multipliziert
die Zahlen von $1$ bix $x$ mit einander
und gibt das Ergebnis zurück
</code></pre>
<div class="output" for="filter-editor" type="mdrender"></div>
:::

:::sidebar

- Wandelt alle Code-Blöcke des Typs `pseudo` um

**Pseudocode Block**:

    ```pseudo 
    def id(x):
        return x
    ```

<br/>

**Aufruf**:

```sh
$ pandoc dokument.md \
    --filter pandocode \
    -o dokument.pdf
```
:::

# Pandocode Live

- Wrapper um Pandocode
- HTTP-API
  - Python Code $\to$ POST-Request $\to$ LaTeX
- CGI (Common Gateway Interface)
  - Größtenteils verdrängt
  - **Aber**: Sehr einfach, perfekt für schnelle Hacks
    - Webserver führt Executable/Scripts aus
    - Anfragedaten per STDIN und Umgebungsvariablen
    - Antwort per STDOUT

# Links

<div style="display: flex; justify-content: space-between">
<div class="link-box" style="margin: 0; width: calc(50% - 2.25em)">
<div class="text">
<strong>Pandocode</strong>

<a href="https://github/nzbr/pandocode">https://github.com/nzbr/pandocode</a>
</div>
</div>

<div class="link-box" style="margin: 0; width: calc(50% - 2.25em)">
<div class="text">
<strong>Pandocode Live</strong>

<a href="https://pandocode.nzbr.de">https://pandocode.nzbr.de</a>
</div>
</div>
</div>

:::link-box
<div class="text">
<strong>Alle Vorträge</strong>

<a href="https://nzbr.pages.nzbr.de/proseminar">https://nzbr.pages.nzbr.de/proseminar</a>
und
<a href="https://git.nzbr.de/nzbr/proseminar">https://git.nzbr.de/nzbr/proseminar</a>
</div>
:::

:::link-box
<div class="text">
<strong>Andere Quellen</strong>

<div id="refs"></div>
</div>
:::
