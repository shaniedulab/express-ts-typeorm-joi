import  express,{Request,Response,Application}  from "express";
import apiRoute from "./Routes/apiRoute";

const app:Application = express();

app.use(express.json());
app.use('/api',apiRoute);
app.get('/',(req:Request,res:Response)=>{
    res.send('Hello World');
});

export default app;

