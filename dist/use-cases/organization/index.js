"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_1 = require("./create");
const list_1 = require("./list");
const update_1 = require("./update");
const destroy_1 = require("./destroy");
exports.default = { list: list_1.list, create: create_1.create, update: update_1.update, destroy: destroy_1.destroy };
