import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";

import { CreateCarUseCase } from "./CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Crate Car", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it("should be able to create a new car", async () => {
    const car = await createCarUseCase.execute({
      brand: "Brand",
      name: "Name Car",
      fine_amount: 60,
      daily_rate: 100,
      license_plate: "ABC-1234",
      description: "Test",
      category_id: "category",
    });

    expect(car).toHaveProperty("id");
  });

  it("should not be able to create a car with exists license plate", () => {
    expect(async () => {
      await createCarUseCase.execute({
        brand: "Brand",
        name: "Car1",
        fine_amount: 60,
        daily_rate: 100,
        license_plate: "ABC-1234",
        description: "Test",
        category_id: "category",
      });

      await createCarUseCase.execute({
        brand: "Brand",
        name: "Car2",
        fine_amount: 60,
        daily_rate: 100,
        license_plate: "ABC-1234",
        description: "Test",
        category_id: "category",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to create a car with available true by default", async () => {
    const car = await createCarUseCase.execute({
      brand: "Brand",
      name: "Car Available",
      fine_amount: 60,
      daily_rate: 100,
      license_plate: "ABB-1234",
      description: "Test",
      category_id: "category",
    });

    expect(car.available).toBe(true);
  });
});
