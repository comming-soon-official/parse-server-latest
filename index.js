const express = require("express");
const ParseServer = require("parse-server").ParseServer;
const ParseDashboard = require("parse-dashboard");
const app = express();
const port = 1337;

const Server = new ParseServer({
  databaseURI: "mongodb://localhost:27017/students",
  cloud: "./cloud/main.js",
  appId: "myAppId",
  masterKey: "myMasterKey",
  serverURL: "http://localhost:1337/parse",
  appName: "Myparse",
  encodeParseObjectInCloudFunction: false,
});

const parseDashboard = new ParseDashboard({
  apps: [
    {
      serverURL: "http://localhost:1337/parse",
      appId: "myAppId",
      masterKey: "myMasterKey",
      appName: "Myparse",
    },
  ],
  allowInsecureHTTP: true,
  useEncryptedPasswords: false,
});

app.use("/dashboard", parseDashboard);
app.use("/parse", Server.app);

Server.start().then((res) => res);

app.listen(port, function () {
  console.log(`Parse Server running on port ${port}.`);
  console.log(
    `parse Dashboard runniong on port "http://localhost:${port}/dashboard`
  );
});
