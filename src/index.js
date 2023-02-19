const core = require("@actions/core");
const { exec } = require("@actions/exec");
const genTags = require("./lib/genTags");

const login = core.getInput("login");
const token = core.getInput("token");
const label = core.getInput("label");
const tags = core.getInput("tags");
const platforms = core.getInput("platforms");
const push = core.getInput("push");

// Login to docker hub
exec(`docker login -u ${login} -p ${token}`)
  .then((d) => {
    // Create docker buildx builder
    exec(`docker buildx create --use --platform ${platforms} --name multibuild`)
      .then((d) => {
        // Build the image
        exec(
          `docker buildx build ${push ? "--push " : ""} --platform ${platforms} ${genTags(
            label,
            tags
          )} .`
        ).catch(core.error);
      })
      .catch(core.error);
  })
  .catch(core.error);
