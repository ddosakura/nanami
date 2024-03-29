// deno run -A version.js

const IMAGE_NAME = 'ddosakura/hakke'
const IMAGE_VERSION = '0.2.2'
const BASE_IMAGE = 'ubuntu:20.04'
const DENO_VERSION = '1.25.3'
const NODE_VERSION = '16.16.0'
const PNPM_VERSION = '7.5.2'
// const RUST_VERSION = 'stable'
const RUST_VERSION = '1.62.0'

const file = await Deno.readTextFile(`./Dockerfile`)
await Deno.writeTextFile(`./Dockerfile`, file.split('\n').map(line => {
    if (line.startsWith('FROM ')) return `FROM ${BASE_IMAGE}`
    if (line.startsWith('ARG DENO_VERSION=')) return `ARG DENO_VERSION=${DENO_VERSION}`
    if (line.startsWith('ARG NODE_VERSION=')) return `ARG NODE_VERSION=${NODE_VERSION}`
    if (line.startsWith('ARG PNPM_VERSION=')) return `ARG PNPM_VERSION=pnpm@${PNPM_VERSION}`
    if (line.startsWith('ARG RUST_VERSION=')) return `ARG RUST_VERSION=${RUST_VERSION}`
    return line
}).join('\n'))
await Deno.writeTextFile(`./build.sh`, `docker build -t ${IMAGE_NAME}:${IMAGE_VERSION} -f Dockerfile .`)
await Deno.writeTextFile(`./push.sh`, `docker push ${IMAGE_NAME}:${IMAGE_VERSION}`)
