import "reflect-metadata";
import { DataSource } from "typeorm";

const AppDataSource: DataSource = new DataSource({
  type: "postgres",
  host: "database_ignite",
  port: 5432,
  username: "docker",
  password: "ignite",
  database: "rentx",
  // synchronize: true,
  // logging: true,
  entities: ["./src/modules/**/entities/*.ts"],
  migrations: ["./src/shared/infra/typeorm/migrations/*.ts"],
});

export { AppDataSource };
