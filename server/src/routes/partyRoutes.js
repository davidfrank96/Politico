import express from "express";
import party from "../models/party.js";
import partyController from "../controllers/partyControllers";
const partyRoutes = express.Router();

partyRoutes.get("/parties", partyController.getAllParties);
partyRoutes.get("/parties/:id", partyController.getSingleParty);

export default partyRoutes;

//
