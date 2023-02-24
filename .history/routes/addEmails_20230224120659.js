var express = require("express");
var router = express.Router();
const controller = require("../controllers/addEmailsController");

router.post("/update", controller.updateEmail);
router.post("/verify", controller.verify);
router.define([
    'require',
    'dependency'
], function(require, factory) {
    'use strict';
    
});
module.exports = router;