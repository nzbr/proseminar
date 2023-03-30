{

  inputs = {
    flake-utils.url = "github:numtide/flake-utils";
    copperflame.url = "github:nzbr/copperflame";
  };

  outputs = { self, flake-utils, copperflame }@inputs:
    (flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import copperflame.inputs.nixpkgs { inherit system; };
      in
      {
        packages = {
          praesentationskurs = pkgs.callPackage (./. + "/Praesentationskurs") copperflame.packages.${system};
        };
      }
    )) // {
      devShells = copperflame.devShells;
    };

}
