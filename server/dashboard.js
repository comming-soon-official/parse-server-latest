//if maindashboard not working use this
const express = require("express");
const ParseDashboard = require("parse-dashboard");
const app = express();
const port = 3030;

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

app.listen(port, function () {
  console.log(`Parse Dashboard running on port ${port}.`);
});
