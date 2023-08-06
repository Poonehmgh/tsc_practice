"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
function CGet(path) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (req, res) {
            originalMethod.call(req, res);
        };
        Reflect.defineMetadata("path", path, target, propertyKey);
        Reflect.defineMetadata("method", "get", target, propertyKey);
    };
}
function CPost(path) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (req, res) {
            originalMethod.call(req, res);
        };
        Reflect.defineMetadata("path", path, target, propertyKey);
        Reflect.defineMetadata("method", "post", target, propertyKey);
    };
}
function CParam(paramName) {
    return function (target, propertyKey, parameterIndex) {
        Reflect.defineMetadata("paramName", paramName, target, propertyKey);
        Reflect.defineMetadata("paramIndex", parameterIndex, target, propertyKey);
    };
}
class UserController {
    getUserByID(id, req, res) {
        res.send(`Getiing user with ID: ${id}`);
    }
    createUser(req, res) {
        const { name, email } = req.body;
        res.send(`creating user with name: ${name} and Email: ${email}`);
    }
}
__decorate([
    CGet("/users/id"),
    __param(0, CParam("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getUserByID", null);
__decorate([
    CPost("/users"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "createUser", null);
//set up the express app
const myApp = (0, express_1.default)();
myApp.use(express_1.default.json());
const myUserController = new UserController();
const methods = Object.getOwnPropertyNames(Object.getPrototypeOf(myUserController));
methods.forEach((method) => {
    const path = Reflect.getMetadata("path", myUserController, method);
    const httpMethod = Reflect.getMetadata("method", myUserController, method);
    const handler = myUserController[method].bind(myUserController);
    if (path && httpMethod) {
        myApp[httpMethod](path, handler); // Cast httpMethod to keyof Application to fix TS7053
    }
});
// Start the server
const port = 3000;
myApp.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
