FROM ubuntu:20.04

# === base ===

RUN apt-get update && apt-get -y install wget curl unzip git
RUN apt-get clean

# RUN useradd -ms /bin/bash ubuntu
# USER ubuntu
# ENV HOME="/home/ubuntu"
ENV HOME="/root"

# === deno ===

# https://www.denojs.cn/manual/getting_started/installation
# https://github.com/justjavac/dvm
RUN curl -fsSL https://deno.land/x/dvm/install.sh | sh
# RUN /bin/bash -c "source /home/deno/.bash_profile"
ENV DENO_INSTALL="$HOME/.deno"
ENV PATH="$DENO_INSTALL/bin:$PATH"
ENV DVM_DIR="$HOME/.dvm"
ENV PATH="$DVM_DIR/bin:$PATH"

RUN dvm install 1.20.5

# === node ===

RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

ENV NVM_DIR="$HOME/.nvm"
RUN [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm

RUN nvm install 16.14.2
