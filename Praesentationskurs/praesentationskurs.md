---
title: "Wissenschaftliches Schreiben mit \\LaTeX und \\BibTeX"
author: "Nico Jansen"
date: \today
lang: "de-DE"
pagenumbers: true
professional: true
header-includes:
    - |
        \usepackage[babelshorthands=true,localmarks=true]{polyglossia}
        \setdefaultlanguage{de-DE}
    - \usepackage[color=highlight]{attachfile2}
    - |
        \usepackage{hologo} # various TeX logos
        \newcommand\BibTeX{\textsc{Bib}\TeX}
        \newcommand\BibLaTeX{\textsc{Bib}\LaTeX}
    - |
        \newcommand{\lmr}{\fontfamily{lmr}\selectfont}
        \newcommand{\lmss}{\fontfamily{lmss}\selectfont}
        \newcommand{\lmtt}{\fontfamily{lmtt}\selectfont}
    - \renewcommand\mathfamilydefault{lmr} # Render math in latin modern        
    - |
        \newtcolorbox{OutputBox}{
            enhanced jigsaw,
            % colback=background,
            % colframe=background,
            opacityback=0,
            % boxrule=0pt,
            frame hidden,
            left=0.5em, right=0.5em, top=0.5em, bottom=0.5em,
        }
        \newenvironment{Output}{
            \begin{OutputBox}
            \begin{beamercolorbox}{foreground text}
                \lmr % Render simulated output in Latin Modern
        }{
                \end{beamercolorbox}
            \end{OutputBox}
        }
    - \newcommand{\link}[1]{\alert{\underline{#1}}}
    - |
        \newenvironment{cmddef}[1]{
            \alert{\ttfamily #1}
            \begin{quote}\upshape
        }{
            \end{quote}
        }
biblio-title: Quellen
biblio-style: ieee
bibliography:
    - "praesentationskurs.bib"
    
# dark-mode hinweis
notitle: true
include-before:
    - |
        \begin{frame}
            \maketitle
            \iflightmode
            \else
                \textcolor{foreground-secondary}{
                    Hinweis: Es ist auch eine 
                    \textattachfile[mimetype=application/x-pdf]{praesentationskurs-light.pdf}{\link{helle Version}}
                    an diese PDF angehängt. \\
                    (kein Weblink, funktioniert nicht in jedem PDF-Reader! Getestet mit \href{https://okular.kde.org)}{\link{Okular}}.)
                }
            \fi
        \end{frame}
---

# \LaTeX

- \enquote{[\ldots] a system for typesetting documents}[@latex]
- Erweiterung von \TeX[@latex]
- Erschienen 1985 in Version 2.09. Die heute gebräuchliche Version ist \hologo{LaTeX2e}[@latex]
- Erlaubt es Dokumente aus Code zu erzeugen[@latex]
    - Inhalt ist größtenteils unabhängig vom Design (im Gegensatz zu einem _WYSIWYG_-Editor)[@latex]
    - Umfassende Syntax für mathematische Ausdrücke[@latex]
    - Verschiedene Ausgabeformate (DVI[@latex], PostScript[@ctan-dvips], PDF[@ctan-dvipdfmx], \ldots)
- Erweiterbar mit über 6000 Paketen von [\link{CTAN}](https://ctan.org)[@ctan]

---

# Ein erstes Beispiel

:::{.minipage width=0.66}
```latex
\documentclass[a4paper]{article}
\begin{document}
    \textbf{Hallo Welt!}
\end{document}
```
:::
:::{.minipage width=0.33}
\begin{Output}
    \textbf{Hallo Welt!}
\end{Output}
:::
\vspace{0.5\baselineskip}
**Kompilieren:**

```terminal
$ latex beispiel.tex
```
Erzeugt `beispiel.dvi`.\
\
_pdflatex_[@ctan-pdftex], _xelatex_[@ctan-xetex] und _lualatex_[@ctan-luatex] geben PDF aus.\
(\hologo{XeTeX} und \hologo{LuaTeX} unterstützen auch Unicode und TrueType Schriftarten).

---

# \LaTeX-Befehle

\begin{cmddef}{\textbackslash name\{args\} \\ \textbackslash name[optional]\{args\}}
    Führt \textbackslash name mit den Argumenten \enquote{\ttfamily args} und \enquote{\ttfamily optional} aus.\cite{latex}
\end{cmddef}

\begin{cmddef}{\textbackslash newcommand\{\textbackslash name\}[$n$]\{Definition\}}
    Definiert einen neuen Befehl \textbackslash name mit $n$ (oder 0) Argumenten als \enquote{\ttfamily Definition}.
    Die Argumente können mit \texttt{\#1}, \texttt{\#2}, \ldots\ verwendet werden.\cite{latex}
\end{cmddef}

\begin{cmddef}{\textbackslash begin\{env\} \\ \textbackslash end\{env\}}
    Beginnt und beendet eine Umgebung namens \enquote{\ttfamily env}.\cite{latex}
\end{cmddef}

\begin{cmddef}{\textbackslash newenvironment\{env\}[$n$]\{vorher\}\{nachher\}}
    Definiert eine neue Umgebung namens \enquote{\ttfamily env} mit \enquote{\ttfamily vorher} und \enquote{\ttfamily nachher} vor und nach dem Inhalt und $n$ (oder 0) Argumenten.\cite{latex}
\end{cmddef}

_Zum Überschreiben_: `\renewcommand` und `\renewenvironment`[@latex]

---

# Einige häufig verwendete Befehle 1

:::{.minipage width=0.66}
```latex
\textbf{fett}, {\bfseries fett} \\
\textit{kursiv}, {\itshape kursiv} \\
\textsl{geneigt}, {\slshape geneigt}\\
\texttt{mono}, {\ttfamily mono} \\
\emph{sehr \emph{sehr} wichtig} \\
Fußnoten\footnote{Hier unten!} \\
\small klein \large groß
\Large größer \normalsize
% Ein Kommentar
```
:::
:::{.minipage width=0.33}
\begin{Output}
\textbf{fett}, {\bfseries fett} \\
\textit{kursiv}, {\itshape kursiv} \\
\textsl{geneigt}, {\slshape geneigt}\\
{\lmtt mono}, {\lmtt mono} \\
\emph{sehr \emph{sehr} wichtig} \\
Fußnoten\footnote{\lmr Hier unten!} \\
\small klein \large groß
\Large größer \normalsize
% Ein Kommentar
\end{Output}
:::

---

# Einige häufig verwendete Befehle 2

:::{.minipage width=0.66}
```latex
\begin{itemize}
    \item Einige
    \item Stichpunkte
    \begin{enumerate}
        \item Eine
        \item Aufzählung
    \end{enumerate}
\end{itemize}

\begin{description}
    \item[\TeX] Ein Textsatzsystem 
    \item[Löwe] \TeX Maskottchen 
\end{description}
```
:::
:::{.minipage width=0.33}
\begin{Output}
\begin{itemize}
    \item Einige
    \item Stichpunkte
    \begin{enumerate}
        \item Eine
        \item Aufzählung
    \end{enumerate}
\end{itemize}

\begin{description}
    \item[\TeX] Ein Textsatzsystem
    \item[Löwe] Das \TeX\ Maskottchen
\end{description}
\end{Output}
:::

---

# Mathematische Formeln

:::{.minipage width=0.66}
```latex
Daher ist \(x=4\). % oder $...$
\[
  x_{1,2} = -\frac{p}{2}\pm
  \sqrt{\left(\frac{p}{2}\right)^2-q}
\] % oder $$...$$
\begin{align*}
  0   =& 5x + 25 && -25 \\
  -25 =& 5x      && /-5 \\
  5   =& x
\end{align*}
$$ \sum\limits_{i=1}^n i 
   \leq \prod\limits_{i=1}^n i $$
$ \in, \cup, \cap, \land, \lor, \pi $
```
:::
:::{.minipage width=0.33}
\begin{Output}
Daher ist \(x=4\). % oder $...$
\[
    x_{1,2} = -\frac{p}{2}\pm
    \sqrt{\left(\frac{p}{2}\right)^2-q}
\] % oder $$...$$
\begin{align*}
  0   =& 5x + 25 && -25 \\
  -25 =& 5x      && /-5 \\
  5   =& x
\end{align*}
$$ \sum\limits_{i=1}^n i 
   \leq \prod\limits_{i=1}^n i $$
$ \in, \cup, \cap, \land, \lor, \pi $
\end{Output}
:::

Beim finden anderer Symbole hilft [\link{Detexify}](https://detexify.kirelabs.org/classify.html).[@detexify]

---

# Zitate 1

:::{.minipage width=0.66}
```latex
\documentclass{article}
\begin{document}
``Today ... paper'' \cite{latex}

\begin{thebibliography}{9}
    \bibitem{latex} 
    L. Lamport, \LaTeX, 1994.
\end{thebibliography}
\end{document}
```
:::
:::{.minipage width=0.33}
\begin{Output}
``Today you are likely to send a 
document electronically -- by e-mail 
or on a diskette -- 
rather than on paper'' [\textbf{?}]
\\ \\
\textbf{\Large References}

[1] L. Lamport, \LaTeX, 1994.
\end{Output}
:::

- Quellen in `\thebibliography` angegeben [@overleaf-bibtex]
- `\cite{key}` fügt Referenz zu \enquote{key} ein [@overleaf-bibtex]
- Referenzen werden noch nicht richtig aufgelöst, sondern als \mbox{\lmr [\textbf{?}]} angezeigt

\textcolor{foreground-secondary}{\tiny Der Eintrag wurde aus Platzgründen gekürzt. Der vollständige Eintrag ist unter \cite{latex} im Quellenverzeichnis zu finden.}

---

# Zitate 2

:::{.minipage width=0.66}
```terminal
$ xelatex zitate.tex
...
LaTeX Warning: There were 
    undefined references.
LaTeX Warning: Label(s) may have 
    changed. Rerun to get 
    cross-references right
...
$ xelatex zitate.tex
...    
```
:::
:::{.minipage width=0.33}
\begin{Output}
``Today you are likely to send a 
document electronically -- by e-mail 
or on a diskette -- 
rather than on paper'' [1]
\\ \\
\textbf{\Large References}

[1] L. Lamport, \LaTeX, 1994.
\end{Output}
:::

- \LaTeX\ muss zweimal ausgeführt werden [@overleaf-bibtex]
    1. Verweise werden in \enquote{zitate.aux} geschrieben
    2. Verweise werden aus \enquote{zitate.aux} gelesen und korrekt aufgelöst 

---

# \BibTeX

Ersetzt `thebibliography` mit einer `.bib` Datei [@overleaf-bibtex] \

:::{.minipage width=0.495}
```latex
\documentclass{article}
\begin{document}
``Today ... paper'' 
\cite{latex}

\bibliography{zitate.bib}
\bibliographystyle{plain}
\end{document}
```
:::
:::{.minipage width=0.01}
\phantom{x}
:::
:::{.minipage width=0.495}
```bibtex
@Book{latex,
  author = {Leslie Lamport},
  publisher = {Pearson 
      / Prentice Hall},
  title = {\LaTeX ...},
  year = {1994},
}
```
\centering{\textcolor{foreground-secondary}{\scriptsize zitate.bib}}
:::

\vspace{0.2\baselineskip}

:::{.minipage width=0.495}
```terminal
$ xelatex zitate.tex
$ bibtex zitate
$ xelatex zitate.tex
$ xelatex zitate.tex
```
:::
:::{.minipage width=0.01}
\phantom{x}
:::
:::{.minipage width=0.495}
\begin{flushleft}
In einem Schritt mit Build-Tools wie \mbox{\emph{latexmk}}\cite{ctan-latexmk} oder \mbox{\emph{tectonic}}\cite{tectonic}
\end{flushleft}
:::

---

# \BibTeX\ - Einträge und Felder

:::{.minipage width=0.7}
| Eintragstyp | Beschreibung |
| ---- | ---- |
| \@Article | Artikel (in einer Zeitschrift) \cite{bibtex} |
| \@Book | Ein Buch mit Verlag \cite{bibtex} |
| \@Booklet | Ein Buch ohne Verlag \cite{bibtex} |
| \@InBook | Teil eines Buches \cite{bibtex} |
| \@InCollection | Teil eines Sammelbandes \cite{bibtex} |
| \@Manual | Dokumentationen, Anleitungen \cite{bibtex} |
| \@MastersThesis | Masterarbeit \cite{bibtex} |
| \@PhdThesis | Doktorarbeit \cite{bibtex} |
| \@Techreport | Technischer Bericht \cite{bibtex} |
| \@Unpublished | Unveröffentlichte Arbeit \cite{bibtex} |
| \@Misc | Alles andere \cite{bibtex} |
:::
:::{.minipage width=0.3}
\phantom{m}Einige Felder: [@bibtex]

- author
- title
- year
- month
- publisher
- journal
- institution
- booktitle
- volume
- chapter
- edition
- note

\vfill
:::

Je nach Eintragstyp werden verschiedene Felder unterstützt [@bibtex]

---

# Quellen für \BibTeX\ Einträge
:::{.minipage width=0.7}
Einträge können aus Suchmaschinen kopiert werden:\

- Google Scholar [@google-scholar]
- IEEE Xplore [@ieee-xplore]
- DBLP\normalsize\ [@dblp]
  - Auf Informatik spezialisierte Literaturdatenbank
  - Über 6.000.000 Einträge
  - Alle Einträge werden manuell geprüft
    - Hohe Qualität gegenüber anderen Angeboten

:::
:::{.minipage width=0.3}
  \vfill

  \centering{\scriptsize Google Scholar}
  \hfill \includegraphics[width=.8\textwidth]{google-scholar.png}

  \vspace{.5\baselineskip}
  
  \centering{\scriptsize IEEE Xplore}
  \hfill \includegraphics[width=.8\textwidth]{ieee.png}

  \vspace{.5\baselineskip}
  
  \centering{\scriptsize DBLP}
  \includegraphics[width=\textwidth]{dblp.png}
:::

---

# JabRef

:::{.minipage width=0.4}
- GUI Editor für `.bib`-Dateien [@jabref]
- Bietet eine Suchfunktion für einige wissenschaftliche Datenbanken
  - Unter anderem DBLP
  - Gefundene Einträge können direkt importiert werden
:::
:::{.minipage width=0.6}
  \includegraphics[width=\textwidth]{jabref.png}
:::
---

# \BibLaTeX

- Neuentwicklung des Zitiersystems von \LaTeX [@ctan-biblatex]
- Bessere Unterstützung für Sprachen neben Englisch [@ctan-biblatex]
- Zusätzliche Eintragstypen wie `@online`, `@software` und `@dataset` [@biblatex]
- Kompatibel mit \BibTeX\ Einträgen [@biblatex]

:::{.minipage width=0.66}
```latex
\documentclass{article}
\usepackage[style=ieee]{biblatex}
\addbibresource{zitate.bib}
\begin{document}
``Today ... paper'' 
\cite{latex}

\printbibliography
\end{document}
```
:::
:::{.minipage width=0.33}
- Muss als Paket geladen werden [@biblatex]
  - Stil wird als Argument übergeben 
- `bibtex` wird durch `biber` ersetzt [@biblatex]
:::
