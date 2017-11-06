# Push to Docker Hub
# docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD
# docker push $REPO

# Download CloudFoundry BlueMix plugin
curl -fsSL https://clis.ng.bluemix.net/install/linux | sh

bx plugin install container-registry -r Bluemix
bx login -u $BLUEMIX_USER -p $BLUEMIX_PASSWORD -a https://api.eu-gb.bluemix.net -c $BLUEMIX_ACCOUNT_ID -o $BLUEMIX_ORGANIZATION -s $BLUEMIX_SPACE
bx login
bx cr login
docker tag $DOCKER_REPO registry.eu-gb.bluemix.net/$BLUEMIX_NAMESPACE/$DOCKER_REPO:latest
docker push registry.eu-gb.bluemix.net/$BLUEMIX_NAMESPACE/$DOCKER_REPO
