import { ICreateCarDTO } from "@modules/cars/dtos/ICreateCarDTO";
import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { Category } from "@modules/cars/infra/typeorm/entities/Category";

import { ICarsRepository } from "../ICarsRepository";

class CarsRepositoryInMemory implements ICarsRepository {
  private cars: Car[] = [];

  public async findAvailable(
    brand?: string,
    category_id?: string,
    name?: string
  ): Promise<Car[]> {
    const cars = this.cars.filter((car) => {
      if (
        car.available === true ||
        (brand && car.brand === brand) ||
        (category_id && car.category_id === category_id) ||
        (name && car.name === name)
      ) {
        return car;
      }
      return null;
    });

    return cars;
  }

  public async findByLicensePlate(licensePlate: string): Promise<Car> {
    return this.cars.find((car) => car.license_plate === licensePlate);
  }

  public async create({
    brand,
    category_id,
    daily_rate,
    description,
    fine_amount,
    license_plate,
    name,
    id,
    specifications,
  }: ICreateCarDTO): Promise<Car> {
    const car = new Car();

    Object.assign(car, {
      brand,
      category_id,
      daily_rate,
      description,
      fine_amount,
      license_plate,
      name,
      id,
      specifications,
    });

    this.cars.push(car);

    return car;
  }

  public async findById(car_id: string): Promise<Car> {
    const car = this.cars.find((car) => car.id === car_id);
    return car;
  }

  public async updateAvailable(id: string, available: boolean): Promise<void> {
    const findIndex = this.cars.findIndex((car) => car.id === id);

    this.cars[findIndex].available = available;
  }
}

export { CarsRepositoryInMemory };
