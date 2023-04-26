#!/bin/bash

export HOST_UID="$(id -u)"

export HOST_GID="$(id -g)"

rm -rf client/node_modules 2>>/dev/null

rm client/package-lock.json 2>>/dev/null

docker-compose down