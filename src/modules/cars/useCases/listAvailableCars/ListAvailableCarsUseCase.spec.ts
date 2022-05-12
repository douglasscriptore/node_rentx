import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory
    );
  });

  it("Should be able to list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      brand: "Fiat",
      description: "Carro da Fiat",
      daily_rate: 110.0,
      fine_amount: 40,
      license_plate: "ABC-1234",
      category_id: "category_id",
      name: "Fiat Uno",
    });
    const cars = await listAvailableCarsUseCase.execute({});
    expect(cars).toEqual([car]);
  });

  it("Should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      brand: "Car_brand_test",
      description: "Carro da Fiat",
      daily_rate: 110.0,
      fine_amount: 40,
      license_plate: "ABC-1234",
      category_id: "category_id",
      name: "Fiat Uno",
    });
    const cars = await listAvailableCarsUseCase.execute({
      brand: "Car_brand_test",
    });
    expect(cars).toEqual([car]);
  });

  it("Should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      brand: "Car_brand_test",
      description: "Carro da Fiat",
      daily_rate: 110.0,
      fine_amount: 40,
      license_plate: "ABC-1234",
      category_id: "category_id",
      name: "Car3",
    });
    const cars = await listAvailableCarsUseCase.execute({ name: "Car3" });
    expect(cars).toEqual([car]);
  });

  it("Should be able to list all available cars by category", async () => {
    const car = await carsRepositoryInMemory.create({
      brand: "Car_brand_test",
      description: "Carro da Fiat",
      daily_rate: 110.0,
      fine_amount: 40,
      license_plate: "ABC-1234",
      category_id: "12345",
      name: "Fiat Uno",
    });
    const cars = await listAvailableCarsUseCase.execute({
      category_id: "12345",
    });
    expect(cars).toEqual([car]);
  });
});
