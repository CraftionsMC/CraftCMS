/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

const path = require("path");
const fs = require("fs");
const os = require("os");

if (!fs.existsSync(path.join(os.homedir(), ".craftcms", "roles"))) {
  fs.mkdirSync(path.join(os.homedir(), ".craftcms", "roles"));
}

if (
  !fs.existsSync(path.join(os.homedir(), ".craftcms", "roles", "roles.json"))
) {
  fs.writeFileSync(
    path.join(os.homedir(), ".craftcms", "roles", "roles.json"),
    "{}"
  );
}

function getRole(username) {
  return (
    JSON.parse(
      fs
        .readFileSync(
          path.join(os.homedir(), ".craftcms", "roles", "roles.json")
        )
        .toString()
    )[username] || "user"
  );
}

function setRole(username, role) {
  const x = JSON.parse(
    fs
      .readFileSync(path.join(os.homedir(), ".craftcms", "roles", "roles.json"))
      .toString()
  );
  x[username] = role;
  fs.writeFileSync(
    path.join(os.homedir(), ".craftcms", "roles", "roles.json"),
    JSON.stringify(x)
  );
  return true;
}

module.exports = {
  getRole,
  setRole,
};
