#!/bin/sh
curl -o- -L https://yarnpkg.com/install.sh | bash -s -- --version 0.23.2
export PATH="$HOME/.yarn/bin:$PATH"
docker build -t $DOCKER_REPO .
docker run -p 5000:5000 -d $DOCKER_REPO
docker ps -a
export CHROME_BIN=/usr/bin/google-chrome
export DISPLAY=:99.0
sh -e /etc/init.d/xvfb start
sudo apt-get update
sudo apt-get install -y libappindicator1 fonts-liberation
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo dpkg -i google-chrome*.deb