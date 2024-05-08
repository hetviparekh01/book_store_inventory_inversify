// // user.service.ts
// import { injectable } from 'inversify';
// import User from '../../models/user_model';
// import { IUser } from '../../interfaces/IUser';

// @injectable()
// export class UserService {
//   async createUser(name: string, password: string): Promise<IUser> {
//     return await User.create({name: name, password:password });
//   }

//   async getUsers(): Promise<IUser[]> {
//     return await User.find();
//   }

//   async getUserById(id: string): Promise<IUser | null> {
//     return await User.findById(id);
//   }

//   async updateUser(id: string, name: string, email: string): Promise<IUser | null> {
//     return await User.findByIdAndUpdate(id, { name, email }, { new: true });
//   }

//   async deleteUser(id: string): Promise<void> {
//     await User.findByIdAndDelete(id);
//   }
// }
