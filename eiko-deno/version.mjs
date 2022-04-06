#!/usr/bin/env zx

const DENO_VERSION = '1.20.4'
const VERSION_BETA = '-beta.0'

const file = String(await fs.readFile(`./Dockerfile`))
const [from, ...rest] = file.split('\n')
await fs.writeFile(`./Dockerfile`, [`FROM denoland/deno:${DENO_VERSION}`, ...rest].join('\n'))
await fs.writeFile(`./build.sh`, `docker build -t ddosakura/eiko-deno:${DENO_VERSION}${VERSION_BETA} -f Dockerfile .`)
