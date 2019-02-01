import { Router } from "express";
import OfficeController from "../controllers/officeController";

const officeRoutes = Router();

officeRoutes.get("/office", OfficeController.getAllOffices);

officeRoutes.get("/office/:id", OfficeController.getSingleOffice);

export default officeRoutes;
