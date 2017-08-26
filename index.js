"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var config_1 = require("./config");
var app = express();
app.get('/', function (req, res) {
    res.send({ hi: "there" });
});
app.listen(config_1.config.PORT, function () {
    console.log("server is listening at port " + config_1.config.PORT);
});
