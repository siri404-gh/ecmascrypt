curl -L "https://cli.run.pivotal.io/stable?release=linux64-binary&source=github" | tar -zx

./cf login -u $BLUEMIX_USER -p $BLUEMIX_PASSWORD -a  https://api.eu-gb.bluemix.net -o $BLUEMIX_ORGANIZATION -s $BLUEMIX_SPACE
./cf push  $CLOUDFOUNDRY_APP -o $DOCKER_REPO