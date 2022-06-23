import { Router } from "express";

import { CreateRentalController } from "@modules/rentals/useCases/createRental/CreateRentalController";
import { DevolutionRentalController } from "@modules/rentals/useCases/devolutionRental/DevolutionRentalController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const creteRentalController = new CreateRentalController();
const devolutionRentalController = new DevolutionRentalController();

const rentalsRoutes = Router();

rentalsRoutes.post("/", ensureAuthenticated, creteRentalController.handle);
rentalsRoutes.post(
  "/:id/devolution",
  ensureAuthenticated,
  devolutionRentalController.handle
);

export { rentalsRoutes };
