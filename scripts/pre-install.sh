#!/usr/bin/env bash
set -o xtrace

if [[ "$CI" != "" ]];
  then
  if [[ "$OSTYPE" == "darwin"* ]]; then
    echo 'Instalando dependencias MACOS'
    # Vamos ignorar esta parte por hora
  else
    echo 'Instalando dependencias linux'
    yes | sdkmanager "platforms;android-29"
    yes | sdkmanager "build-tools;29.0.2"
  fi
fi