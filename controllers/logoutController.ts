import {Request,Response} from 'express'
import { LogOutService } from '../services/user/logoutoutService'
import { Request1,Tokens } from '../middlewares/authmiddleware'
import { inject } from "inversify";
import { controller,httpPost } from 'inversify-express-utils';


@controller('/user')
export class LogOutController{
    constructor(@inject(LogOutService) private logoutservice :LogOutService){}

    @httpPost('/logout')
    async logout(req:Request,res:Response){
        try {
        const userToken:Tokens=(req as Request1).user
        // console.log(userToken)
        
        const user=await this.logoutservice.logoutuser(userToken.id as string)
       
        return res.status(200).json("Logged out sucessfully")
        } catch (error:any) {
            res.status(500).json({message:error.message})
        }         
    }
}