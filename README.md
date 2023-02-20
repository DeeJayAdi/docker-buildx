# Simple Docker Buildx Action

## Input Options

### login

Login used for docker hub. Seted as repo secret.

### token

Token generated on docker hub or password. Seted as repo secret.

### label

The image name. Example `deejayadi/docker-buildx`

### tags

The image tag or tags. Example: `latest,v1,v2,...` or only one tag `latest`

### platforms

Example: `linux/amd64,linux/arm64`

### push

Boolean: `true` or `false`. To push the image to the registry

# Example:

```yaml
name: Publish Docker image
on: push
jobs:
  push_to_registry:
    name: Push Docker image to Docker Hub
    runs-on: ubuntu-latest
    steps:
      - name: Check out
        uses: actions/checkout@v3

      - name: Build docker image
        uses: deejayadi/docker-buildx@v1
        with:
          login: ${{secrets.login}}
          token: ${{secrets.token}}
          label: deejayadi/docker-buildx
          tags: latest
          platforms: linux/amd64,linux/arm64
          push: true
```
