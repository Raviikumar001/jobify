import User  from "../models/user.js";
import { StatusCodes } from "http-status-codes";
import {BadRequestError} from '../errors/Index.js'





const register = async (req,res, next)=>{
        const {name, email, password} = req.body;
        if(!name  || !email || !password )
        {
            throw new BadRequestError('Please provide all values');
        }
        const userAlreadyExists = await User.findOne({email});
        if(userAlreadyExists){
            throw new BadRequestError('Email already in use');
        }

        const user = await User.create({name, email,password});
        res.status(StatusCodes.CREATED).json({user}); 

      

}

const login = async (req,res) => {  
    res.send('login user');
}



 const updateUser  = async (req, res)=>{
    res.send('updateUser user')
 }

 export {register, login, updateUser};