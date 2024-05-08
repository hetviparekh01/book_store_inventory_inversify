// user.controller.ts
// import {Request,Response ,NextFunction} from 'express';
// import { inject } from 'inversify';
// import { controller, httpGet, httpPost, httpPut, httpDelete,Middleware } from 'inversify-express-utils';
// import { UserService } from '../services/user/UserService';
// import { Request1 } from '../middlewares/authmiddleware';

// @controller('/users')
// export class UserController {
//   constructor(@inject(UserService) private userService: UserService) {};
  
//   @httpGet('/getallusers')
//   async getUsers(req: Request, res: Response,next:NextFunction  ): Promise<void> {
//     try {
//       console.log("hit1")
    
//       const responsedata=(req as Request1).user
//       console.log(responsedata);
//       console.log("hit");
//       const users = await this.userService.getUsers();
//       res.status(200).json(users);
//     } catch (error:any) {
//       res.status(500).json({ error: error.message });
//     }
//   }

//   @httpPost('/')
//   async createUser(req: Request, res: Response): Promise<void> {
//     try {
//       const { name, password } = req.body;
//       const user = await this.userService.createUser(name, password);
//       res.status(201).json(user);
//     } catch (error:any) {
//       res.status(500).json({ error: error.message });
//     }
//   }


//   @httpGet('/:id')
//   async getUserById(req: Request, res: Response): Promise<void> {
//     try {
//       const id = req.params.id;
//       const user = await this.userService.getUserById(id);
//       if (!user) {
//         res.status(404).json({ error: 'User not found' });
//         return;
//       }
//       res.status(200).json(user);
//     } catch (error:any) {
//       res.status(500).json({ error: error.message });
//     }
//   }

//   @httpPut('/:id')
//   async updateUser(req: Request, res: Response): Promise<void> {
//     try {
//       const id = req.params.id;
//       const { name, email } = req.body;
//       const updatedUser = await this.userService.updateUser(id, name, email);
//       if (!updatedUser) {
//         res.status(404).json({ error: 'User not found' });
//         return;
//       }
//       res.status(200).json(updatedUser);
//     } catch (error:any) {
//       res.status(500).json({ error: error.message });
//     }
//   }

//   @httpDelete('/:id')
//   async deleteUser(req: Request, res: Response): Promise<void> {
//     try {
//       const id = req.params.id;
//       await this.userService.deleteUser(id);
//       res.status(200).json({message:"user deleted sucessfully"});
//     } catch (error:any) {
//       res.status(500).json({ error: error.message });
//     }
//   }
// }
