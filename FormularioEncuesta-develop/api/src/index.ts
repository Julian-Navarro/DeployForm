import express from "express";
import RouterController from "./router/index";
import database from "./config/database";
import morgan from "morgan";
import cors from "cors";
import "reflect-metadata";
import { PORT, DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER} from "./config/config";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
database.initialize()
  .then(() => console.log("Database connected."))
  .catch((error) => console.log(error));

app.use("/api", RouterController);
app.listen(PORT, () => {
  
  console.log(`App execute in port: ${PORT}`);
  console.log(DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER);
});
