#!/bin/bash

eval "$(ssh-agent -s)" &&
ssh-add -k ~/.ssh/id_rsa &&

source ~/.profile
echo "$DOCKER_PASSWORD" | docker login --username $DOCKER_USERNAME --password-stdin
sudo docker stop sevoucher-fe
sudo docker rm sevoucher-fe
sudo docker rmi alulfazlur/sevoucher-fe:latest
sudo docker run -d --name sevoucher-fe -p 8443:80 alulfazlur/sevoucher-fe:latest
