"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var proxy_routes_1 = require("../routes/proxy.routes");
var router = (0, express_1.Router)();
router.use("/proxy", proxy_routes_1.router);
exports.default = router;
