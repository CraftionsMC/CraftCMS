/**
 * @author The Craftions Developers <github.com/CraftionsMC>
 * @copyright (c) 2018-2021 Craftions.net. All rights reserved.
 */

const fs = require("fs");
const path = require("path");

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static(path.join(__dirname, "..", "dist")));

app.use(cors());
app.use(bodyParser());

app.listen(3000, "0.0.0.0");
