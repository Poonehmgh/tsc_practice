import "reflect-metadata";
import express, {Request, Response, Application} from "express";

function CGet(path: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (req: Request, res: Response) {
            originalMethod.call(req, res);
        };

        Reflect.defineMetadata("path", path, target, propertyKey);
        Reflect.defineMetadata("method", "get", target, propertyKey);
    };
}
    function CPost(path: string){
        return function(target: any, propertyKey:string, descriptor: PropertyDescriptor){
            const originalMethod = descriptor.value;
            descriptor.value = function (req: Request, res: Response)
            {
                originalMethod.call(req, res);
            };
            Reflect.defineMetadata("path", path, target, propertyKey);
            Reflect.defineMetadata("method", "post", target, propertyKey);
        };
    }
    function CParam(paramName:string){
        return function(target: any, propertyKey: string, parameterIndex:number){
            Reflect.defineMetadata("paramName", paramName, target, propertyKey);
            Reflect.defineMetadata("paramIndex", parameterIndex, target, propertyKey);
        };
    }
class UserController{
    @CGet("/users/id")
    getUserByID(@CParam("id") id: string, req: Request, res: Response){
        res.send(`Getiing user with ID: ${id}`);
    }
    @CPost("/users")
    createUser(req: Request, res: Response)
    {
        const {name, email} = req.body;
        res.send(`creating user with name: ${name} and Email: ${email}`);

    }
}

//set up the express app

const myApp: Application = express();
myApp.use(express.json());

const myUserController = new UserController();
const methods: string[] = Object.getOwnPropertyNames(Object.getPrototypeOf(myUserController));

methods.forEach((method) : void => {
    const path: string = Reflect.getMetadata("path", myUserController, method);
    const httpMethod: string = Reflect.getMetadata("method", myUserController, method);
    const handler : Function = (myUserController as any)[method].bind(myUserController);

    if (path && httpMethod) {
        myApp[httpMethod as keyof Application](path, handler as any); // Cast httpMethod to keyof Application to fix TS7053
    }
});

// Start the server
const port = 3000;
myApp.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

