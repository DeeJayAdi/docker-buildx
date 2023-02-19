function genTags(label, tags) {
  let output = "";

  tags.split(",").forEach((tag) => {
    output += `-t ${label}:${tag} `;
  });

  return output;
}

module.exports = genTags;
