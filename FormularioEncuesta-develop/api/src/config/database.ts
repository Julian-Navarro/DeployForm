import { DataSource } from "typeorm";
import { Survey } from "../entity/Survey";
import { 
DB_PASSWORD,
DB_HOST,
DB_NAME,
DB_PORT,
DB_USER
} from "./config"

export default new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    entities: [Survey],
    synchronize: true,
    logging: false
})