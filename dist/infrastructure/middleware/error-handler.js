"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const custom_error_1 = require("../errors/custom-error");
const errorHandler = (err, _req, res, _next) => {
    if (err instanceof custom_error_1.CustomError) {
        return res.status(err.statusCode).json(err.serializateError());
    }
    res.status(400).send({
        message: err.message,
        errors: []
    });
};
exports.errorHandler = errorHandler;
