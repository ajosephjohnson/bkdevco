#!/usr/bin/env bash
USER_ID=$(id -u ${USER})
USER_GROUP=$(id -g ${USER})
docker-compose run --rm -u $USER_ID:$USER_GROUP app yarn