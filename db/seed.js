import db from "#db/client";
import { createEmployee } from "#db/queries/employees";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  for (let i = 0; i < 25; i++) {
    const employee = {
      name: "Employee" + i,
      birthday: "2011-05-02",
      salary: Math.floor(Math.random() * 999999),
    };
    await createEmployee(employee);
  }
}
