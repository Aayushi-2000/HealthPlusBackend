// dbConnection.js
import pkg from "pg";
const { Pool } = pkg;
export class Db {
  constructor() {
    this.pool = new Pool({
      user: "postgres",
      host: "localhost",
      database: "pharma",
      password: "2002",
      port: 5432,
    });
  }

  async connectDb() {
    try {
      await this.pool.connect();
      console.log("Connected to the database");
    } catch (err) {
      console.error("Database connection error", err.stack);
    }
  }

  async query(text, params) {
    try {
      const res = await this.pool.query(text, params);
      return res;
    } catch (err) {
      console.error("Error executing query", err.stack);
    }
  }
}
