import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateSpacificationUseCase } from "./CreateSpacificationUseCase";

class CreateSpecificationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    const createSpacificationUseCase = container.resolve(
      CreateSpacificationUseCase
    );

    await createSpacificationUseCase.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateSpecificationController };
