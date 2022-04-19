FROM ubuntu:20.04

# === base ===

RUN apt-get update
RUN apt-get -y install wget curl unzip git
RUN apt-get clean

# RUN useradd -ms /bin/bash ubuntu
# USER ubuntu

# === deno ===

# https://www.denojs.cn/manual/getting_started/installation
# https://github.com/justjavac/dvm
RUN curl -fsSL https://deno.land/x/dvm/install.sh | sh
# RUN /bin/bash -c "source /home/deno/.bash_profile"
ENV DENO_INSTALL="/home/deno/.deno"
ENV PATH="$DENO_INSTALL/bin:$PATH"
ENV DVM_DIR="/home/deno/.dvm"
ENV PATH="$DVM_DIR/bin:$PATH"

RUN dvm install 1.20.5

# === node ===

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

RUN export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

RUN nvm install 16.14.2
