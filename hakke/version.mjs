#!/usr/bin/env zx

const IMAGE_NAME = 'ddosakura/hakke'
const IMAGE_VERSION = '0.2.0'
const BASE_IMAGE = 'ubuntu:20.04'
const DENO_VERSION = '1.20.5'
const NODE_VERSION = '16.14.2'
// const RUST_VERSION = 'stable'
const RUST_VERSION = '1.60.0'

const file = String(await fs.readFile(`./Dockerfile`))
await fs.writeFile(`./Dockerfile`, file.split('\n').map(line => {
    if (line.startsWith('FROM ')) return `FROM ${BASE_IMAGE}`
    if (line.startsWith('ARG DENO_VERSION=')) return `ARG DENO_VERSION=${DENO_VERSION}`
    if (line.startsWith('ARG NODE_VERSION=')) return `ARG NODE_VERSION=${NODE_VERSION}`
    if (line.startsWith('ARG RUST_VERSION=')) return `ARG RUST_VERSION=${RUST_VERSION}`
    return line
}).join('\n'))
await fs.writeFile(`./build.sh`, `docker build -t ${IMAGE_NAME}:${IMAGE_VERSION} -f Dockerfile .`)
await fs.writeFile(`./push.sh`, `docker push ${IMAGE_NAME}:${IMAGE_VERSION}`)
