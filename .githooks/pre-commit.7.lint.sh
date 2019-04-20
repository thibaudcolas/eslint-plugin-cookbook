#!/usr/bin/env bash

if [ -n "$JS_STAGED" ];
then
    npx prettier --check $JS_STAGED
fi

if [ -n "$SCSS_STAGED" ];
then
    npx prettier --check $SCSS_STAGED
fi

if [ -n "$MD_STAGED" ];
then
    npx prettier --check $MD_STAGED
fi

if [ -n "$JSON_STAGED" ];
then
    npx prettier --check $JSON_STAGED
fi

if [ -n "$YAML_STAGED" ];
then
    npx prettier --check $YAML_STAGED
fi

TRAVIS_STAGED=$(grep -e '.travis.yml$' -e '.travis.yaml$' <<< "$STAGED" || true)

if [ -n "$TRAVIS_STAGED" ];
then
  travis lint --exit-code $TRAVIS_STAGED
fi
