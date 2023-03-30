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
    for mode in light dark; do
        pandoc --to=beamer praesentationskurs.md -o "praesentationskurs-''${mode}.tex" --template="''${copperflame}/pandoc/copperflame-''${mode}.tex" --highlight-style="''${copperflame}/pandoc/copperflame-''${mode}.theme" --biblatex --filter pandoc-filter-copperflame-latex
    done

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
