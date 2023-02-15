#!/bin/sh
babel "$1" --out-file=public/scripts/app.js --presets=env,react --watch
