import express, {Router,Request,Response} from 'express';
import validate from '../Middleware/validationMiddleware';
import validateRegister from '../Middleware/validation';
import AppDataSource from '../config/DataSourse';
import Students from '../Entities/Student';

const apiRoute:Router = Router();

apiRoute.get('/', (req:Request, res:Response) => {
    res.json({
            message: 'Hello World!'
        })
});

apiRoute.post('/',validate(validateRegister),(req:Request, res:Response) => {
    res.send("request Protected!");
});

apiRoute.post('/students',async (req:Request, res:Response) => {
    try{
        const userRepository = AppDataSource.getRepository(Students);
        const student = new Students()
        student.studentName = "Shai"
        student.studentEmail = "shani@gmail.com"
        student.studentAge = 21
        const std=await userRepository.save(student)
        if(!std){
            return res.json({
                status:400,
                message: "Student not created"
            })
        }
        res.json({
            status:201,
            message: "Student created successfully"
        })
    }catch(error){
        res.status(500).json({
            message: error,
        })
    }
})

apiRoute.get('/students',async (req:Request, res:Response) => {
    try{
        const userRepository = AppDataSource.getRepository(Students);
        // const allUsers = await userRepository.find();
        const firstUser = await userRepository.findOneBy({id: 1})

        const removeStudent=await userRepository.delete({ id: 1 });
        if(!removeStudent){
            return res.json({
                status:404,
                message: "Student Not Found"
            })
        }
        res.json({
            status:200,
            message: "Student Retrieved successfully",
            data:removeStudent
        })
    }catch(error){
        res.status(500).json({
            message: error,
        })
    }
})

export default apiRoute;
