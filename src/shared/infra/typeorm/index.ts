import "reflect-metadata";
import { DataSource } from "typeorm";

// const database = process.env.NODE_ENV === "test" ? "rentx_test" : "rentx";
// const host = process.env.NODE_ENV === "test" ? "localhost" : "database_ignite";

const AppDataSource: DataSource = new DataSource({
  type: "postgres",
  host: process.env.NODE_ENV === "test" ? "localhost" : "database_ignite",
  port: 5432,
  username: "docker",
  password: "ignite",
  database: process.env.NODE_ENV === "test" ? "rentx_test" : "rentx",
  // synchronize: true,
  // logging: true,
  entities: ["./src/modules/**/entities/*.ts"],
  migrations: ["./src/shared/infra/typeorm/migrations/*.ts"],
});

export { AppDataSource };
