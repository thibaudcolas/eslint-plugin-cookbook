#!/usr/bin/env bash

if [ -n "$JS_STAGED" ];
then
  npm run build
  npm run test
fi
