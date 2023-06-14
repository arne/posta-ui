{ pkgs, ... }:

{
  name = "posta-ui";
  languages.typescript.enable = true;

  # https://devenv.sh/packages/
  packages = [ pkgs.yarn ];

  # https://devenv.sh/scripts/
  scripts.dev.exec = "yarn run dev";

  enterShell = ''
    git --version
  '';

  # https://devenv.sh/pre-commit-hooks/
  pre-commit.hooks.prettier.enable = true;

  processes.posta-ui.exec = "yarn run dev";

  containers."processes".copyToRoot = false;
}
