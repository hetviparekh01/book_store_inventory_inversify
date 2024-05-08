import { IUser } from '../../interfaces/IUser'
import User from '../../models/user_model'
import { injectable, inject } from 'inversify'
import { statuscode } from '../../constants/status'
import { FatalErrorMessage, successMessage, errorMessage } from '../../constants/message'
import { TYPES } from '../../constants/type'
import { PasswordHashing } from '../../utils/bcryptpassword'
import { AuthMiddleWare, Tokens } from '../../middlewares/authmiddleware'



@injectable()
export class LoginService {
    constructor(@inject(TYPES.PasswordHashing) private passwordhashing: PasswordHashing, @inject(TYPES.AuthMiddleWare) private authmiddleware: AuthMiddleWare) { }

    async login(username: string, password: string) {

        const user = await User.findOne<IUser>({ name: username });
        if (!user) {
            return { status: statuscode.notfound, message: FatalErrorMessage.UserNtFnd }
        }

        const dbpassword = user.password;
        const isvalidate = await this.passwordhashing.isPasswordValidate(password, dbpassword)
        if (!isvalidate) {
            return { status: statuscode.unauthorized, message: FatalErrorMessage.InvalidCredentials }

        } 
        else 
        {
            const payload: Tokens = {
                id: user.id,
                name: username,
            };

            const Accesstoken = this.authmiddleware.generateAccessToken(payload);
            const Refreshtoken = this.authmiddleware.generateRefreshToken(payload)

            await User.findByIdAndUpdate(user.id, { refreshToken: Refreshtoken })
            const responseData = {
                Accesstoken: Accesstoken,
                Refreshtoken: Refreshtoken,
            };
            return { status:statuscode.success,data:responseData }
        }
    }

}
