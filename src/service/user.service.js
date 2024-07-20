import { Db } from "../common/db.connection.js";
import { createUserTable } from "../queries/user.js";

const database = new Db();

export class UserService {
  async addUser(req) {
    try {
      const { name, email, phone, userType, countryCode } = req?.body;
      let emaildataQeury = `SELECT * FROM pharma_db.users WHERE "email" = '${email}' AND "deletedAt = 'NULL'`;
      let emailData = await database.query(emaildataQeury);
      console.log(emailData?.rows?.length);
      if (emailData.rows.length > 0) {
        throw new Error("user already exist");
      }

      const addUserQuery = `
        INSERT INTO pharma_db.users (name, email, userType, phone, countryCode , password)
        VALUES ($1, $2, $3, $4, $5 , $6)
        RETURNING id, name, email, userType, phone, countryCode, createdAt,updatedAt,deletedAt,createdBy,updatedBy,deletedBy,password
      `;

      const result = await database.query(addUserQuery, [
        name,
        email,
        userType,
        phone,
        countryCode,
      ]);

      if (result && result.rows.length > 0) {
        console.log("data added successfully");
        return result.rows;
      } else {
        throw new Error("Failed to add user. Database returned empty result.");
      }
    } catch (error) {
      if (error.code === "23505") {
        throw new Error("User with this email or phone number already exists.");
      } else {
        throw error; // Throw other errors
      }
    }
  }
}
