"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//2
const express_1 = __importDefault(require("express")); // Like in the frontend, cambia tsconfig.json
//5
const vinyls_1 = __importDefault(require("./routes/vinyls")); //Puede ser cualquier nombre pero hace referencia a routes
//13
const body_parser_1 = __importDefault(require("body-parser"));
/* import express = require("express"); */
const app = (0, express_1.default)();
//14 register body parser
app.use(body_parser_1.default.json()); // To parse JSON request bodies
//6 middleware
app.use(vinyls_1.default);
//1
app.listen(3000);
