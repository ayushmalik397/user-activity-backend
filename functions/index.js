const functions = require("firebase-functions");
const express = require("express");
var cors = require("cors");
const { request, response } = require("express");

const jsonFile = require("./Test.json");

const app = express();
app.use(cors());
app.get("/members", (request, response) => {
  response.send(jsonFile);
});

app.get("/members/:id", (request, response) => {
  let result = jsonFile.members.find((rec) => rec.id === request.params.id);
  response.send(result);
});

exports.app = functions.https.onRequest(app);
