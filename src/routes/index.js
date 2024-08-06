"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var index_1 = require("./matrix/index");
var indexRoute = express.Router();
indexRoute.use('/matrix', index_1.default);
exports.default = indexRoute;
