FROM ubuntu:20.04

RUN useradd -ms /bin/bash deno
USER deno

# https://www.denojs.cn/manual/getting_started/installation
# https://github.com/justjavac/dvm
RUN curl -fsSL https://deno.land/x/dvm/install.sh | sh
RUN source /home/deno/.bash_profile
RUN dvm install 1.20.4
