import { hash } from "bcryptjs";
import request from "supertest";
import { v4 as uuid } from "uuid";

import { app } from "@shared/infra/http/app";
import { AppDataSource } from "@shared/infra/typeorm";

describe("Create Category Controller", () => {
  beforeAll(async () => {
    await AppDataSource.initialize();
    await AppDataSource.runMigrations();

    const id = uuid();
    const password = await hash("qwe123", 8);

    await AppDataSource.query(`INSERT INTO users (id,name,email,password,"isAdmin", created_at, driver_license)
    VALUES('${id}','admin', 'admin@rentx.com.br', '${password}', true, now(),'XXXXXX')`);
  });

  afterAll(async () => {
    await AppDataSource.dropDatabase();
    await AppDataSource.destroy();
  });

  it("Should be able to create a new category", async () => {
    const responseToken = await request(app)
      .post("/sessions")
      .send({ email: "admin@rentx.com.br", password: "qwe123" });

    const { token } = responseToken.body;

    const response = await request(app)
      .post("/categories")
      .send({ name: "Category Supertest", description: "Category supertest" })
      .set({ Authorization: `Bearer ${token}` });
    expect(response.status).toBe(201);
  });

  it("Should not be able to create a new category white name exists ", async () => {
    const responseToken = await request(app)
      .post("/sessions")
      .send({ email: "admin@rentx.com.br", password: "qwe123" });

    const { token } = responseToken.body;

    const response = await request(app)
      .post("/categories")
      .send({ name: "Category Supertest", description: "Category supertest" })
      .set({ Authorization: `Bearer ${token}` });
    expect(response.status).toBe(400);
  });
});
