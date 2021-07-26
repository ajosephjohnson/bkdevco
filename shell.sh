#!/usr/bin/env bash
XSH_USER_ID=$(id -u ${USER})
XSH_USER_GROUP=$(id -g ${USER})
docker-compose exec -u $XSH_USER_ID:$XSH_USER_GROUP app /bin/bash