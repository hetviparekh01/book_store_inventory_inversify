import { injectable } from 'inversify'
import User from '../../models/user_model'

@injectable()
export class LogOutService {
    async logoutuser(userid: string){
        if(!user){
            res.status(400).json({message:"user not found"})
        } 
        return await User.findByIdAndUpdate(userid, 
            {
                $unset: 
                {
                    refreshToken: 1
                }
            } 
        )
    }
}