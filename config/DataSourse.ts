import { DataSource } from "typeorm";
import Students from "../Entities/Student";
import StudentDetails from "../Entities/StudentDetails";

// const port=process.env.PORT;
// if(!port) throw new Error("port is undefined");

// const username=process.env.USERNAME;
// if(!username) throw new Error("username is undefined");

// const password=process.env.PASSWORD;
// if(!password) throw new Error("password");

// const database=process.env.DATABASE;
// if(!database) throw new Error("database is undefined");

const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "ms",
    logging: false,
    synchronize: true,
    entities: [Students,StudentDetails]
})

export default AppDataSource;