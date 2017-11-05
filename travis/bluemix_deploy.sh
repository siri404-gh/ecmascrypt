# Push to Docker Hub
# docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD
# docker push $REPO

# Download CloudFoundry BlueMix plugin
curl -fsSL https://clis.ng.bluemix.net/install/linux | sh

bx plugin install container-registry -r Bluemix

# Push to private repo
bx login -u $BLUEMIX_USER -p $BLUEMIX_PASSWORD -a https://api.eu-gb.bluemix.net -c $BLUEMIX_ACCOUNT_ID -o $BLUEMIX_ORGANIZATION -s $BLUEMIX_SPACE
bx login
bx cr login
docker tag $DOCKER_REPO registry.eu-gb.bluemix.net/$BLUEMIX_NAMESPACE/$DOCKER_REPO:latest
docker push registry.eu-gb.bluemix.net/$BLUEMIX_NAMESPACE/$DOCKER_REPO
# # Restart the container
# OLD_CONTAINER_NAME=`./cf ic ps | grep -oE '[^ ]+$' | grep $CONTAINER_NAME.* | cat`
# NEW_CONTAINER_NAME="$CONTAINER_NAME.`date +%s`"
# ./cf ic create -P -m $BLUEMIX_MEMORY $params --name $NEW_CONTAINER_NAME registry.ng.bluemix.net/$REPO
# sleep 30s  # sometimes we can't bind the IP to a container in a very early stage of building
# if [ "$OLD_CONTAINER_NAME" != "" ]; then
#   ./cf ic ip unbind $PUBLIC_IP $OLD_CONTAINER_NAME
#   ./cf ic rm -f $OLD_CONTAINER_NAME
# fi
# ./cf ic ip bind $PUBLIC_IP $NEW_CONTAINER_NAME
# sleep 30s
# ./cf ic start $NEW_CONTAINER_NAME