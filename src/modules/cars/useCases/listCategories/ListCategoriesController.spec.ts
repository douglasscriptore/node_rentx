import { hash } from "bcryptjs";
import request from "supertest";
import { v4 as uuid } from "uuid";

import { app } from "@shared/infra/http/app";
import { AppDataSource } from "@shared/infra/typeorm";

describe("List Categories", () => {
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

  it("Should be able to list all categories", async () => {
    const responseToken = await request(app)
      .post("/sessions")
      .send({ email: "admin@rentx.com.br", password: "qwe123" });

    const { token } = responseToken.body;

    await request(app)
      .post("/categories")
      .send({ name: "Category Supertest", description: "Category supertest" })
      .set({ Authorization: `Bearer ${token}` });

    const response = await request(app)
      .get("/categories")
      .set({ Authorization: `Bearer ${token}` });
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(1);
    expect(response.body[0]).toHaveProperty("id");
    expect(response.body[0].name).toEqual("Category Supertest");
  });
});
