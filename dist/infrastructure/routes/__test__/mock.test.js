"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const server_1 = require("../../server");
describe('GET /mock', () => {
    it('should return status 200', () => __awaiter(void 0, void 0, void 0, function* () {
        return (0, supertest_1.default)(server_1.server).get('/mock').expect(200);
    }));
    it('should return a Array', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(server_1.server).get('/mock').expect(200);
        expect(Array.isArray(response.body.repositories)).toBe(true);
    }));
    it('check format', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(server_1.server).get('/mock').expect(200);
        expect(response.body.repositories[0].id).toBeDefined();
        expect(response.body.repositories[0].state).toBeDefined();
    }));
});
