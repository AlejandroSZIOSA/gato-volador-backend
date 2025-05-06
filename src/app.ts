//2
import express from "express"; // Like in the frontend, cambia tsconfig.json
//5
import vinylsRoutes from "./routes/vinyls"; //Puede ser cualquier nombre pero hace referencia a routes
//13
import bodyParser from "body-parser";

/* import express = require("express"); */
const app = express();

//14 register body parser
app.use(bodyParser.json()); // To parse JSON request bodies

//6 middleware
app.use(vinylsRoutes);

//1
app.listen(3000);
