"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const not_found_error_1 = require("./errors/not-found-error");
const mocks_1 = require("./routes/mocks");
const organization_1 = require("./routes/organization");
const tribe_1 = require("./routes/tribe");
const routes = function (server) {
    server.use('/mock', mocks_1.mockRouter);
    server.use('/organization', organization_1.organizationRouter);
    server.use('/tribe', tribe_1.tribeRouter);
    server.all('*', () => {
        throw new not_found_error_1.NotFoundError();
    });
};
exports.routes = routes;
