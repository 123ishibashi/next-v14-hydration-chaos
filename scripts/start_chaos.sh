#!/bin/sh

set -Ceux

npm ci
npm run build

cp -r .next/static .next/standalone/.next/static
cp -r public .next/standalone/public

export TZ=${TZ:-UTC0}
cd .next/standalone/ && node ./server.js
