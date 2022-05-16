import { Repository } from "typeorm";

import { ICarsImagesRepository } from "@modules/cars/repositories/ICarsImagesRepository";
import { AppDataSource } from "@shared/infra/typeorm";

import { CarImage } from "../entities/CarImage";

class CarsImagesRepository implements ICarsImagesRepository {
  private respository: Repository<CarImage>;

  constructor() {
    this.respository = AppDataSource.getRepository(CarImage);
  }

  public async create(car_id: string, image_name: string): Promise<CarImage> {
    const carImage = this.respository.create({ car_id, image_name });
    await this.respository.save(carImage);

    return carImage;
  }
}

export { CarsImagesRepository };
