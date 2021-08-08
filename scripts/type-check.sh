#!/usr/bin/env bash
XSH_USER_ID=$(id -u ${USER})
XSH_USER_GROUP=$(id -g ${USER})
docker-compose run --rm -u $XSH_USER_ID:$XSH_USER_GROUP app yarn run type-check