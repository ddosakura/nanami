FROM ubuntu:20.04

RUN apt-get update
RUN apt-get -y install wget curl unzip
RUN apt-get clean

RUN useradd -ms /bin/bash deno
USER deno

# https://www.denojs.cn/manual/getting_started/installation
# https://github.com/justjavac/dvm
RUN curl -fsSL https://deno.land/x/dvm/install.sh | sh
RUN /bin/bash -c "source /home/deno/.bash_profile"
# ENV DENO_INSTALL="/home/deno/.deno"
# ENV PATH="$DENO_INSTALL/bin:$PATH"
# ENV DVM_DIR="/home/deno/.dvm"
# ENV PATH="$DVM_DIR/bin:$PATH"
RUN dvm install 1.20.4
