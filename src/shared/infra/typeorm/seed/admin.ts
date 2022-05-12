import { hash } from "bcryptjs";
import { v4 as uuidv4 } from "uuid";

import { AppDataSource } from "..";

async function create() {
  const id = uuidv4();
  const password = await hash("qwe123", 8);

  await AppDataSource.query(`INSERT INTO users (id,name,email,password,"isAdmin", created_at, driver_license)
  VALUES('${id}','admin', 'admin@rentx.com.br', '${password}', true, now(),'XXXXXX')`);

  await AppDataSource.destroy();
}

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
    create().then(() => console.log("user admin created!"));
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
