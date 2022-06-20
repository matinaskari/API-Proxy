"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var proxy_routes_1 = require("../routes/proxy.routes");
var path_1 = require("path");
var router = (0, express_1.Router)();
router.use("/proxy", proxy_routes_1.router);
router.get("/", function (req, res) {
    res.sendFile("set-secret.html", {
        root: (0, path_1.join)(__dirname, "../views"),
    });
});
exports.default = router;
