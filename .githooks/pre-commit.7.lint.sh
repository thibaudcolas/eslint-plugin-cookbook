#!/usr/bin/env bash

TRAVIS_STAGED=$(grep -e '.travis.yml$' -e '.travis.yaml$' <<< "$STAGED" || true)

if [ -n "$TRAVIS_STAGED" ];
then
  travis lint --exit-code $TRAVIS_STAGED
fi

if [ -n "$JS_STAGED" ];
then
  npx eslint --report-unused-disable-directives $JS_STAGED
fi
