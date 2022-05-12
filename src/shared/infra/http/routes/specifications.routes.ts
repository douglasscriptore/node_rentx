import { Router } from "express";

import { CreateSpecificationController } from "@modules/cars/useCases/createSpecification/CreateSpecificationController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const specficiationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specficiationsRoutes.use(ensureAuthenticated);

specficiationsRoutes.post("/", createSpecificationController.handle);

export { specficiationsRoutes };
