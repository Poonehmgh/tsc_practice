"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var companies_1 = __importDefault(require("./companies"));
var jobListings_1 = __importDefault(require("./jobListings"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("api/companies", companies_1.default);
app.use("api/jobs", jobListings_1.default);
app.listen(1337, function () {
    console.log("server is running on the 1337 port");
});
//# sourceMappingURL=server.js.map