"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var config_1 = require("./config");
var morgan_1 = __importDefault(require("morgan"));
var api_1 = __importDefault(require("./routes/api"));
var app = (0, express_1.default)();
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded());
app.use("/api", api_1.default);
app.listen(config_1.PORT, "127.0.0.1", function () {
    return console.log("[i] server is running on :".concat(config_1.PORT, " ..."));
});
