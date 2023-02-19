#!/bin/sh
babel "$1" --out-file=public/scripts/"$2" --presets=env,react --watch
