import { Request,Response,NextFunction } from "express";
import joi,{Schema} from "joi";
const validate = (schema:Schema) =>(req:Request, res:Response, next:NextFunction) =>{
    const {error}=schema.validate(req.body);
    if(error){
        res.status(422).send(error.details[0].message);
        // res.status(422).send(error.details);
    }else{
        next();
    }
}

export default validate;
