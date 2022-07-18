"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dowload = exports.success = void 0;
const success = (res, body, status) => {
    res.status(status || 200).send(body);
};
exports.success = success;
const dowload = (res, url) => {
    res.download(url);
};
exports.dowload = dowload;
