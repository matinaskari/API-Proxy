"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var test_middleware_1 = require("../middleware/test.middleware");
var test_controller_1 = require("../controllers/test.controller");
var router = (0, express_1.Router)();
router.post("/test", test_middleware_1.testLogger, test_controller_1.testController);
exports.default = router;
