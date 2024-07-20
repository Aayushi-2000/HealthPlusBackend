import { Db } from "../common/db.connection.js";

const database = new Db();

export class ProductService {
  async addProduct(req) {
    try {
      const { name, description, price, quantity, discount, tag } = req?.body;
      const addProductrQuery = `
        INSERT INTO pharma_db.products (name, description, price , quantity, discount , tag)
        VALUES ($1, $2, $3, $4, $5 , $6)
        RETURNING id, name, description, price , quantity, discount , tag, createdAt,updatedAt,deletedAt,createdBy,updatedBy,deletedBy
      `;

      const result = await database.query(addProductrQuery, [
        name,
        description,
        price,
        quantity,
        discount,
        tag,
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

  async findAllProduct(req) {
    try {
      let findAllProductrQuery;
      let pageNumber = req?.query?.pageNumber;
      let pageSize = req?.query?.pageSize;
      let admin = req?.query?.admin;    
      if (pageNumber && pageSize && admin) {
        console.log("2");
        findAllProductrQuery = `SELECT * FROM pharma_db.products 
          ORDER BY id
          LIMIT ${pageSize} OFFSET ${(pageNumber - 1) * pageSize}
          `;
      } else if (pageNumber && pageSize && admin) {
        console.log("2");
        findAllProductrQuery = `SELECT * FROM pharma_db.products WHERE( "isactive" = 'TRUE' )
          ORDER BY id
          LIMIT ${pageSize} OFFSET ${(pageNumber - 1) * pageSize}
          `;
      } else if (admin) {
        findAllProductrQuery = `SELECT * FROM pharma_db.products`;
      } else {
        findAllProductrQuery = `SELECT * FROM pharma_db.products WHERE "isactive" = 'TRUE'`;
      }
      const result = await database.query(findAllProductrQuery);

      if (result && result.rows.length > 0) {
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
