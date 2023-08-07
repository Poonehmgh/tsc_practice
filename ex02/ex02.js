"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
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
let UserController = (() => {
    var _a;
    let _instanceExtraInitializers = [];
    let _getUserByID_decorators;
    let _createUser_decorators;
    return _a = class UserController {
            getUserByID(id, req, res) {
                res.send(`Getiing user with ID: ${id}`);
            }
            createUser(req, res) {
                const { name, email } = req.body;
                res.send(`creating user with name: ${name} and Email: ${email}`);
            }
            constructor() {
                __runInitializers(this, _instanceExtraInitializers);
            }
        },
        (() => {
            _getUserByID_decorators = [CGet("/users/id")];
            _createUser_decorators = [CPost("/users")];
            __esDecorate(_a, null, _getUserByID_decorators, { kind: "method", name: "getUserByID", static: false, private: false, access: { has: obj => "getUserByID" in obj, get: obj => obj.getUserByID } }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _createUser_decorators, { kind: "method", name: "createUser", static: false, private: false, access: { has: obj => "createUser" in obj, get: obj => obj.createUser } }, null, _instanceExtraInitializers);
        })(),
        _a;
})();
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
