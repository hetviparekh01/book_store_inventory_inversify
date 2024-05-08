import { IUser } from '../../interfaces/IUser'
import User from '../../models/user_model'
import { injectable } from 'inversify'
import { statuscode } from '../../constants/status'
import { FatalErrorMessage,successMessage,errorMessage } from '../../constants/message'



@injectable()
export class SignUpService{
    async signup(name:string,password:string,role:string):Promise<IUser |object>{

        const user=await User.findOne({name:name})
        if(!user){
            return await User.create({name:name,password:password,role:role}) ;
        }
        else{
            return {status:statuscode.alreadyExist,message:FatalErrorMessage.AlreadyUser}
        }
        
    }
}

