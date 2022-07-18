"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestValidate = void 0;
const express_validator_1 = require("express-validator");
const request_validator_1 = require("../errors/request-validator");
const requestValidate = (req, _, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (errors.array().length > 0) {
        throw new request_validator_1.RequestValidateError(errors.array());
    }
    next();
};
exports.requestValidate = requestValidate;
