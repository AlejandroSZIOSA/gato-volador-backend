"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//3
const router = (0, express_1.Router)();
//8
let vinyls = []; //11 using the right type
//7
router.get("/", (req, res, next) => {
    //9
    res.status(200).json({ vinyls: vinyls });
});
//12 post method
router.post("/vinyl", (req, res, next) => {
    const body = req.body; //19
    const newVinyl = {
        id: new Date().toISOString(),
        artist: req.body.artist, //15
    };
    vinyls.push(newVinyl); //16
    res.status(201).json({ message: "Vinyl added successfully", vinyls: vinyls });
});
//17 put method
/* router.put("/vinyl/:vinylId", (req, res, next) => {
  const tid = req.params.vinylId;
  const body= req.body as RequestBody; //19
  const vinylIndex = vinyls.findIndex((vinylItem) => vinylItem.id === tid);
  if (vinylIndex >= 0) {
    vinyls[vinylIndex] = { id: vinyls[vinylIndex].id, artist: body.artist };
    return res
      .status(200)
      .json({ message: "Vinyl updated successfully", vinyls: vinyls });
  }
  res.status(404).json({ message: "Vinyl not found" });
}); */
//18 delete method
router.delete("/vinyl/:vinylId", (req, res, next) => {
    const params = req.params; //21
    vinyls = vinyls.filter((vinylItem) => vinylItem.id !== params.vinylId);
    res
        .status(200)
        .json({ message: "Vinyl deleted successfully", vinyls: vinyls });
});
//4
exports.default = router;
