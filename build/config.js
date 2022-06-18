"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var checkEnv = function (envVar, defaultValue) {
    if (!process.env[envVar]) {
        if (defaultValue) {
            return defaultValue;
        }
        throw new Error("Please define the Enviroment variable\"".concat(envVar, "\""));
    }
    else {
        return process.env[envVar];
    }
};
exports.PORT = parseInt(checkEnv("PORT"), 10);
