import express from "express"
import cors from 'cors'
import { Db } from "./src/common/db.connection.js";
import router from "./src/routes/routes.js";
const dbConnection = new Db();
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(router);
const port = 5600;
 dbConnection.connectDb();
app.listen(port, (item) => {
  console.log("server is running at " + port);
});
