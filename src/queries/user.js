import { Db } from "../common/db.connection.js";
const database = new Db();

export const createUserTable = async () => {
  const createUserTableQuery = `
  CREATE TABLE IF NOT EXISTS pharma_db.users (
    id SERIAL PRIMARY KEY, 
    createdAt TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    deletedAt TIMESTAMPTZ DEFAULT NULL,
    createdBy VARCHAR(100) DEFAULT NULL,
    updatedBy VARCHAR(100) DEFAULT NULL,
    deletedBy VARCHAR(100) DEFAULT NULL,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL, 
    userType VARCHAR(10) NOT NULL, 
    phone VARCHAR(15),
    countryCode VARCHAR(10)
    password VARCHAR(100)
  );
  `;
  try {
    const result = await database.query(createUserTableQuery);
    console.log(result);
    if (result) {
      console.log("table created successfully");
    }
  } catch (error) {
    console.error("Error creating table 'users':", error);
    throw error; // Rethrow the error for further handling if needed
  }
};
