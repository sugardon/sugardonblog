#!/usr/bin/env bash

source $NVM_DIR/nvm.sh
nvm install
nvm use
yarn

# skaffold
curl -Lo skaffold https://storage.googleapis.com/skaffold/releases/latest/skaffold-linux-amd64 && \
sudo install skaffold /usr/local/bin/
rm skaffold
