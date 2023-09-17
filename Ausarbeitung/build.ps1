New-Item -ItemType Directory -Force auxil
pandoc ./Ausarbeitung.md --template=template.tex -o auxil/Ausarbeitung.tex --biblatex
latexmk auxil/Ausarbeitung.tex --cd --xelatex --latexoption=-interaction=nonstopmode
Move-Item -Force auxil/Ausarbeitung.pdf Ausarbeitung.pdf
