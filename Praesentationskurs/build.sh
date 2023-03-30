#! /usr/bin/env nix-shell
#! nix-shell -i bash -p jq

set -euxo pipefail
out="$(nix build .#praesentationskurs -vL --no-link --json | jq -r '.[0].outputs."out"')"
cp -r $out/. out
chmod +w -R out
