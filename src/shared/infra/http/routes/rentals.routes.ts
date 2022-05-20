import { Router } from "express";

import { CreateRentalController } from "@modules/rentals/useCases/createRental/CreateRentalController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const creteRentalController = new CreateRentalController();

const rentalsRoutes = Router();

rentalsRoutes.post("/", ensureAuthenticated, creteRentalController.handle);

export { rentalsRoutes };
