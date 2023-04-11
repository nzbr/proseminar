{ mkCopperflamePandoc, texlive, texlive-scheme-copperflame, ... }:

mkCopperflamePandoc {
  name = "praesentationskurs";
   texlive = texlive.combine (texlive-scheme-copperflame // {
     inherit (texlive)
       attachfile2
       biblatex-ieee
       hologo
       polyglossia
       ;
   });

  src = ./.;

  buildPhase = ''
    pandoc --to=beamer praesentationskurs.md -o "praesentationskurs.tex" --template="''${copperflame}/pandoc/copperflame-light.tex" --highlight-style="''${copperflame}/pandoc/copperflame-light.theme" --biblatex --filter pandoc-filter-copperflame-latex

    latexmk -xelatex *.tex
    for x in *.tex; do
        xelatex -interaction=nonstopmode $x # Needed for file attachments
    done
  '';

  installPhase = ''
    mkdir -p $out
    cp -r *.tex *.pdf $out/
  '';

}
