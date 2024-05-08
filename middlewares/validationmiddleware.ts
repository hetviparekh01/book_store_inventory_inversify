import { Request, Response, NextFunction } from 'express'
import { BaseMiddleware } from 'inversify-express-utils';


export class ValidateMiddleware extends BaseMiddleware {
    private schema: any;

    // constructor(schema: any) {
    //     super();
    //     this.schema = schema;
    // }

    public setSchema(schema : any){
        this.schema = schema;
    }

    public async handler(req: Request, res: Response, next: NextFunction){
        const body = req.body;
        try {
            await this.schema.validate(body);
            return next();
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    }
}





// export class ValidateMiddleware extends BaseMiddleware{

//         private schema;

//         constructor(schema:any){
//             this.schema=schema
//             this.validator = this.validator.bind(this);
//         }


//         async validator(req:Request,res:Response,next:NextFunction){
//             const body=req.body
//             try {
//                 // console.log(this.schema);
//                 await this.schema.validate(body)
//                 return next()
//             } catch (error:any) {
//                 return res.status(500).json({message:error.message})
//             }
//         }
// }

