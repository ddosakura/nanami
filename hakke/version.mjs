#!/usr/bin/env zx

const IMAGE_NAME = 'ddosakura/hakke'
const IMAGE_VERSION = '0.0.0'
const BASE_IMAGE = 'ubuntu:20.04'
const DENO_VERSION = '1.20.5'
const NODE_VERSION = '16.14.2'

const file = String(await fs.readFile(`./Dockerfile`))
await fs.writeFile(`./Dockerfile`, file.split('\n').map(line => {
    if (line.startsWith('FROM ')) return `FROM ${BASE_IMAGE}`
    if (line.startsWith('RUN dvm install')) return `RUN dvm install ${DENO_VERSION}`
    if (line.startsWith('RUN nvm install')) return `RUN nvm install ${NODE_VERSION}`
    return line
}).join('\n'))
await fs.writeFile(`./build.sh`, `docker build -t ${IMAGE_NAME}:${IMAGE_VERSION} -f Dockerfile .`)
await fs.writeFile(`./push.sh`, `docker push ${IMAGE_NAME}:${IMAGE_VERSION}`)
