import {Request,Response} from 'express'
import { LoginService } from '../services/user/loginService'
import { TYPES } from '../constants/type';
import { inject } from "inversify";
import { statuscode } from '../constants/status';
import { FatalErrorMessage, errorMessage, successMessage } from '../constants/message';
import { controller,httpPost } from 'inversify-express-utils';


@controller('/user')
export class LoginController{
    constructor(@inject(TYPES.LoginService) private loginservice :LoginService){}

    @httpPost('/login')
    async login(req:Request,res:Response):Promise<Response>{
        try {
            const username: string = req.body.name;
            const passwordwithouthasded: string = req.body.password;
            
            const responseData=await this.loginservice.login(username,passwordwithouthasded)

            if(responseData.status===statuscode.notfound){
                return res
                .status(statuscode.notfound)
                .json({message:FatalErrorMessage.UserNtFnd,status:false})
            }
            else if(responseData.status===statuscode.unauthorized){
                return res
                .status(statuscode.unauthorized)
                .json({message:FatalErrorMessage.InvalidCredentials,status:false})
            }
            else{
                return res
                .status(statuscode.success)
                .json({message:successMessage.Loggedin,...responseData,status:true})
            } 
        } 
        catch (error:any) {
           return res
           .status(statuscode.error)
           .json({message:errorMessage.LoginErr})
        }
    }
}