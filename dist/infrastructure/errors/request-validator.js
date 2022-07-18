"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestValidateError = void 0;
const custom_error_1 = require("./custom-error");
class RequestValidateError extends custom_error_1.CustomError {
    constructor(erros) {
        super('Invalid request');
        this.erros = erros;
        this.statusCode = 400;
        Object.setPrototypeOf(this, RequestValidateError.prototype);
    }
    serializateError() {
        const fields = this.erros.map((error) => {
            return { message: error.msg, field: error.param };
        });
        return { message: this.message, fields };
    }
}
exports.RequestValidateError = RequestValidateError;
