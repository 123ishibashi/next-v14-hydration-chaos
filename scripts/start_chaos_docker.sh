#!/bin/sh

set -Ceux

TZ=${TZ:-UTC0}

docker build -t next-v14-hydration-chaos .
docker run --rm -p 3000:3000 -e TZ="$TZ" next-v14-hydration-chaos
