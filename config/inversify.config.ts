// inversify.config.ts
import { Container } from 'inversify';
import { AuthMiddleWare } from '../middlewares/authmiddleware';
import { PasswordHashing } from '../utils/bcryptpassword';
import { SignUpService } from '../services/user/signupservice';
import { TYPES } from '../constants/type';
import { ValidateMiddleware } from '../middlewares/validationmiddleware';
import { LoginService } from '../services/user/loginService';
import { LogOutService } from '../services/user/logoutoutService';
// import { userSchemaValidate } from '../validations/validation';



const container = new Container();
container.bind<SignUpService>(TYPES.SignUpService).to(SignUpService);
container.bind<AuthMiddleWare>(TYPES.AuthMiddleWare).to(AuthMiddleWare);
container.bind<PasswordHashing>(TYPES.PasswordHashing).to(PasswordHashing);
container.bind<ValidateMiddleware>(TYPES.ValidateMiddleware).to(ValidateMiddleware);
container.bind<LoginService>(TYPES.LoginService).to(LoginService);
container.bind<LogOutService>(TYPES.LogOutService).to(LogOutService);

// container.bind<ValidateMiddleware>("ValidateMiddleware").toDynamicValue(() => {
//     return new ValidateMiddleware(userSchemaValidate);
// });

export default container;