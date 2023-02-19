# Simple Docker Buildx Action

## Input Options

### login

Login used for docker hub

### token

Token generated on docker hub or password

### label

The image name. Example `deejayadi/docker-buildx`

### tags

The image tag or tags. Example: `latest,v1,v2,...` or only one tag `latest`

### platforms

Example: `linux/amd64,linux/arm64`

### push

Boolean: `true` or `false`. To push the image to the registry
