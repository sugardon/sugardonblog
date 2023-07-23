#!/usr/bin/env bash

source $NVM_DIR/nvm.sh
nvm install
nvm use
yarn

# skaffold
curl -Lo skaffold https://storage.googleapis.com/skaffold/releases/v2.6.1/skaffold-linux-amd64 && \
sudo install skaffold /usr/local/bin/
rm skaffold
# buildpack
(curl -sSL "https://github.com/buildpacks/pack/releases/download/v0.29.0/pack-v0.29.0-linux.tgz" | sudo tar -C /usr/local/bin/ --no-same-owner -xzv pack)
# syft and grype
curl -sSfL https://raw.githubusercontent.com/anchore/syft/main/install.sh | sudo sh -s -- -b /usr/local/bin
curl -sSfL https://raw.githubusercontent.com/anchore/grype/main/install.sh | sudo sh -s -- -b /usr/local/bin

# Create `known_hosts` for skaffold (This is temporary solution.)
#
# $ skaffold dev --port-forward
# invalid skaffold config: getting minikube env: running [/usr/local/bin/minikube docker-env --shell none -p minikube --user=skaffold]
#  - stdout: "SSH_AUTH_SOCK=\nSSH_AGENT_PID=\nDOCKER_TLS_VERIFY=1\nDOCKER_HOST=tcp://192.168.49.2:2376\nDOCKER_CERT_PATH=/home/vscode/.minikube/certs\nMINIKUBE_ACTIVE_DOCKERD=minikube\n"
#  - stderr: "Host added: /home/vscode/.ssh/known_hosts ([127.0.0.1]:32772)\nOpenFile: open /home/vscode/.ssh/known_hosts: no such file or directory\n"
#  - cause: exit status 1
mkdir $HOME/.ssh && touch $HOME/.ssh/known_hosts
