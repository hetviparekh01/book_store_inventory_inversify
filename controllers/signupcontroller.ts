
import { SignUpService } from "../services/user/signupservice";
import { Request, Response } from "express"
import { PasswordHashing } from "../utils/bcryptpassword";
import { inject } from "inversify";
import { controller, httpPost } from 'inversify-express-utils';
import { TYPES } from "../constants/type";
import { statuscode } from '../constants/status';
import { errorMessage, successMessage, FatalErrorMessage } from '../constants/message';
import { IUser } from '../interfaces/IUser';




@controller('/user')
export class SignUpController {
    constructor(@inject(TYPES.SignUpService) private signupService: SignUpService, @inject(TYPES.PasswordHashing) private password_hashing: PasswordHashing) { }


    @httpPost('/signup')
    async signUp(req: Request, res: Response): Promise<Response> {
        try {
            const name = req.body.name;
            
            const passwordwithouthasded = req.body.password

            const passwordwithhased = await this.password_hashing.passwordEncrypt(passwordwithouthasded)

            const role = req.body.role

            const responsedata = await this.signupService.signup(name, passwordwithhased, role)

            if (typeof responsedata === 'object') {
                return res
                    .status(statuscode.alreadyExist)
                    .json({ message: FatalErrorMessage.AlreadyUser, status: false })
            }
            else {
                return res
                    .status(statuscode.success)
                    .json({ message: successMessage.UserCreated, status: true })
            }


        }
        catch (error: any) {

            return res
                .status(statuscode.error)
                .json({ message: errorMessage.UserCreating, status: false })
        }

    }
};
