FROM ubuntu:20.04

RUN useradd -ms /bin/bash deno
USER deno

# https://www.denojs.cn/manual/getting_started/installation
# https://github.com/justjavac/dvm
RUN curl -fsSL https://deno.land/x/dvm/install.sh | sh

ENV DENO_INSTALL "/home/node/.deno"
ENV PATH "$DENO_INSTALL/bin:$PATH"
ENV DVM_DIR "/home/node/.dvm"
ENV PATH "$DVM_DIR/bin:$PATH"

RUN dvm install 1.20.4
