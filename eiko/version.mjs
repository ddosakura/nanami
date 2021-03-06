#!/usr/bin/env zx

const IMAGE_NAME = 'ddosakura/eiko'
const IMAGE_VERSION = '0.1.1'
const BASE_IMAGE = 'jrottenberg/ffmpeg:5.0.1-ubuntu2004'
const DENO_VERSION = '1.20.5'

const file = String(await fs.readFile(`./Dockerfile`))
await fs.writeFile(`./Dockerfile`, file.split('\n').map(line => {
    if (line.startsWith('FROM ')) return `FROM ${BASE_IMAGE}`
    if (line.startsWith('RUN dvm install')) return `RUN dvm install ${DENO_VERSION}`
    return line
}).join('\n'))
await fs.writeFile(`./build.sh`, `docker build -t ${IMAGE_NAME}:${IMAGE_VERSION} -f Dockerfile .`)
await fs.writeFile(`./push.sh`, `docker push ${IMAGE_NAME}:${IMAGE_VERSION}`)
