import bcrypt from 'bcrypt'
import { injectable } from 'inversify';

@injectable()
export class PasswordHashing{
    async passwordEncrypt(password:string){
        const hashedPassword :string= await bcrypt.hash(password,10)
        return hashedPassword
    }
    async isPasswordValidate(upassword:string,dbpassword:string){
        return await bcrypt.compare(upassword,dbpassword) 
   } 
}
