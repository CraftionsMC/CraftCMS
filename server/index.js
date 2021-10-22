/**
 * @author The Craftions Developers <github.com/CraftionsMC>
 * @copyright (c) 2018-2021 Craftions.net. All rights reserved.
 */

const fs = require("fs");
const path = require("path");
const os = require("os");

if (!fs.existsSync(path.join(os.homedir(), ".craftcms"))) {
  fs.mkdirSync(path.join(os.homedir(), ".craftcms"));
}

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { accountServer, users } = require("@incodelang/accounts");
const { getRole, setRole } = require("./lib/module/roles");

const app = express();

app.use(express.static(path.join(__dirname, "..", "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.use(cors());
app.use(bodyParser());

accountServer({
  app,
  disable: {},
});

app.post("/api/v1/user/users/role/set", (req, res) => {
  if (
    req.body.username &&
    req.body.password &&
    req.body.name &&
    req.body.role
  ) {
    if (users.login(req.body.username, req.body.password)) {
      if (getRole(req.body.username) === "admin" && req.body.name !== "admin") {
        setRole(req.body.name, req.body.role);
        res.end('{"error": false, "message": "Role set."}');
      } else {
        res.end('{"error": true, "message": "Access Denied."}');
      }
    } else {
      return JSON.stringify(users.login(req.body.username, req.body.password));
    }
  } else {
    res.end('{"error": true, "message": "Invalid Request Body."}');
  }
});

app.post("/api/v1/user/users/role/get", (req, res) => {
  if (req.body.username && req.body.password && req.body.name) {
    if (users.login(req.body.username, req.body.password)) {
      if (getRole(req.body.username) === "admin") {
        res.end(
          '{"error": false, "message": "' + getRole(req.body.name) + '"}'
        );
      } else {
        res.end('{"error": true, "message": "Access Denied."}');
      }
    } else {
      return JSON.stringify(users.login(req.body.username, req.body.password));
    }
  } else {
    res.end('{"error": true, "message": "Invalid Request Body."}');
  }
});

app.listen(3000, "0.0.0.0");
