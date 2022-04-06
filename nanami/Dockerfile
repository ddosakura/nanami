FROM node:16.14

curl -fsSL https://get.pnpm.io/install.sh | PNPM_VERSION=7.0.0-rc.2 sh -

ENV PNPM_HOME "/home/node/.local/share/pnpm"
ENV PATH "$PNPM_HOME:$PATH"

pnpm i -g zx
