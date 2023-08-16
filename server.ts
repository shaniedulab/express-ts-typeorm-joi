import app from './app';
import dotenv from 'dotenv';
import "reflect-metadata"
import AppDataSource from './config/DataSourse';

//initialization of data source
AppDataSource.initialize().then(() => {
    console.log("Data Source has been initialized!")
}).catch((err) => {
    console.error("Error during Data Source initialization", err)
})

dotenv.config({path:'./config.env'})

//geting values from config file port and hostname
const hostname = process.env.HOSTNAME //|| 'localhost';
if (!hostname) throw new Error(`port is undefined ${hostname}`);

const port = process.env.PORT //|| 5000;
if (!port) throw new Error(`port is undefined ${port}`);


app.listen(port,()=>{
    console.log(`Express server is started at http://${hostname}:${port}`)
});