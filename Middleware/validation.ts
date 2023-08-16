import joi ,{Schema} from "joi";

const validateRegister=joi.object().keys({
    name:joi.string().required().min(3).max(30),
    email:joi.string().email().required(),
    password:joi.string().required()
})

// const validateRegister=joi.object({
//     name:joi.string().required().min(3).max(30),
//     email:joi.string().email().required(),
//     password:joi.string().required()
// })

export default validateRegister;
