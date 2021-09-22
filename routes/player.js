const express = require("express");
const {
  getAllPlayers,
  getPlayerById,
  createPlayer,
  updatePlayer,
  deletePlayer,
} = require("../controllers/playerController");
const router = express.Router();

//getall
router.get("/retrieve", getAllPlayers);

//getbyid
router.get("/retrieve/:id", getPlayerById);

//create
router.post("/create", createPlayer);

//update
router.put("/update/:id", updatePlayer);

//delete
router.delete("/delete/:id", deletePlayer);

module.exports = router;
