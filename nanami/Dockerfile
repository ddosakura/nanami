FROM node:16.14

USER node

RUN curl -fsSL https://get.pnpm.io/install.sh | PNPM_VERSION=7.0.0-rc.2 sh -
RUN source /home/node/.bashrc
# ENV PNPM_HOME "/home/node/.local/share/pnpm"
# ENV PATH "$PNPM_HOME:$PATH"
RUN pnpm i -g zx
