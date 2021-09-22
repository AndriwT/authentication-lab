const express = require("express");
const {
  getAllTeams,
  getTeamById,
  createTeam,
  updateTeam,
  deleteTeam,
} = require("../controllers/teamController");
const router = express.Router();
const { validateJwt } = require("../middlewares/validateJwt");

//getall
router.get("/retrieve", validateJwt, getAllTeams);

//getbyid
router.get("/retrieve/:id", getTeamById);

//create
router.post("/create", createTeam);

//update
router.put("/update/:id", updateTeam);

//delete
router.delete("/delete/:id", deleteTeam);

module.exports = router;
