import { Router } from "express";
//10 Importa el nombre exacto enter parentesis
//Sin parentesis se puede escribir cualquier otro nombre :)
import { Vinyl } from "../models/vinyl";

//3
const router = Router();
//8
const vinyls: Vinyl[] = []; //11 using the right type

//7
router.get("/", (req, res, next) => {
  //9
  res.status(200).json({ vinyls: vinyls });
});

//12
router.post("/vinyl", (req, res, next) => {
  const newVinyl: Vinyl = {
    id: new Date().toISOString(),
    artist: req.body.artist, //15
  };
  vinyls.push(newVinyl); //16
});

//4
export default router;
