const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const { API_VERSION } = require('./config');

// Load routings
const useRoutes = require('./routers/user');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Configure Header HTTP



//Basic Router
app.use(`/api/${API_VERSION}`, useRoutes);

module.exports = app;
