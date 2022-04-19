FROM ubuntu:20.04

# === base ===

RUN apt-get update && apt-get -y install wget curl unzip git && apt-get clean

# RUN useradd -ms /bin/bash ubuntu
# USER ubuntu
# ARG HOME="/home/ubuntu"
ARG HOME="/root"

# === deno ===

ARG DENO_VERSION=1.20.5
# https://www.denojs.cn/manual/getting_started/installation
# https://github.com/justjavac/dvm
RUN curl -fsSL https://deno.land/x/dvm/install.sh | sh
RUN /bin/bash -c "source $HOME/.bash_profile && dvm install $DENO_VERSION"

# === node ===

ARG NODE_VERSION=16.14.2
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash \
  && . $NVM_DIR/nvm.sh \
  && nvm install $NODE_VERSION
