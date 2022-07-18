"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const organization_dto_1 = __importDefault(require("./organization-dto"));
const repositories_dto_1 = __importDefault(require("./repositories-dto"));
const mock_dto_1 = __importDefault(require("./mock-dto"));
exports.default = { organization: organization_dto_1.default, repository: repositories_dto_1.default, mock: mock_dto_1.default };
