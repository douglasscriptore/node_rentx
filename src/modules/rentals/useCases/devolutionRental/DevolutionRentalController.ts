import { Request, Response } from "express";
import { container } from "tsyringe";

import { DevolutionRentalUseCase } from "./DevolutionRentalUseCase";

class DevolutionRentalController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const { id } = request.params;

    const devolutionRentalsUseCase = container.resolve(DevolutionRentalUseCase);

    const rental = await devolutionRentalsUseCase.execute({
      user_id,
      id,
    });

    return response.status(200).json(rental);
  }
}

export { DevolutionRentalController };
