import { Router } from "express";
import OfficeController from "../controllers/officeController";

const officeRoutes = Router();

officeRoutes.get("/office", OfficeController.getAllOffices);

officeRoutes.get("/office/:id", OfficeController.getSingleOffice);

officeRoutes.post("/office", OfficeController.createNewOffice);

export default officeRoutes;
