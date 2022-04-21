FROM ubuntu:20.04

# === base ===

RUN apt-get update && \
  apt-get -y install wget curl unzip \
  build-essential \
  autoconf automake autotools-dev libtool xutils-dev \
  git && \
  apt-get clean

# ARG HOME="/root"
RUN useradd -ms /bin/bash ubuntu
USER ubuntu
ARG HOME="/home/ubuntu"

# === deno ===

ARG DENO_VERSION=1.20.5
# https://www.denojs.cn/manual/getting_started/installation
# https://github.com/justjavac/dvm
RUN curl -fsSL https://deno.land/x/dvm/install.sh | sh
RUN /bin/bash -c "source $HOME/.bash_profile && dvm install $DENO_VERSION"

# === node ===

ARG NODE_VERSION=16.14.2
ARG NVM_DIR="$HOME/.nvm"
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash \
  && . $NVM_DIR/nvm.sh \
  && nvm install $NODE_VERSION \
  # 从 v16.13 开始，Node.js发布了用于管理包管理器的Corepack
  && corepack enable \
  # 将在您的系统上自动安装 pnpm。但是，它可能不是最新版本的 pnpm。要升级它，请检查最新的 pnpm 版本并运行：
  # && corepack prepare pnpm@7.0.0-rc.7 --activate \
  && pnpm i -g zx

# === rust ===

# https://github.com/liuchong/docker-rustup
ARG RUST_VERSION=1.60.0
RUN curl https://sh.rustup.rs -sSf | sh -s -- --default-toolchain $RUST_VERSION -y \
  && . "$HOME/.cargo/env" \
  && cargo install wasm-pack
