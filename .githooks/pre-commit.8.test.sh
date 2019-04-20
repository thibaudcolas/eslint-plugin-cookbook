#!/usr/bin/env bash

set -e

if [ -n "$JS_STAGED" ];
then
  npm run build
  npm run test
fi

DANGER_STAGED=$(grep -e 'dangerfile.js$' <<< "$STAGED" || true)

if [ -n "$DANGER_STAGED" ];
then
  npx danger local
fi
