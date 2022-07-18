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
const tribe = '779719214333952001';
let coverage = 70;
const startDate = '2019-01-01';
const endDate = '2022-12-31';
const state = 'E';
const queryParams = `?coverage=${coverage}&startDate=${startDate}&endDate=${endDate}&state=${state}`;
describe('GET /tribe', () => {
    it('SCENERY 1: Get repository metric by tribe with correct values', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(server_1.server).get(`/tribe/${tribe}`).expect(200);
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body[0].id).toBeDefined();
        expect(response.body[0].name).toBeDefined();
        expect(response.body[0].organization).toBeDefined();
        const coverage = Number(response.body[0].coverage.replace('%', ''));
        expect(coverage).toBeGreaterThanOrEqual(70);
        expect(response.body[0].bugs).toBeDefined();
        expect(response.body[0].vulnerabilities).toBeDefined();
        expect(response.body[0].hotspots).toBeDefined();
        expect(response.body[0].verificationState).toBeDefined();
        expect(response.body[0].state).toBe('Habilitado');
    }));
    it('SCENERY 2: if tribe not exist should return status 400 ', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(server_1.server).get(`/tribe/${tribe}8`).expect(400);
        expect(response.body.message).toBe('The Tribe is not registered');
    }));
});
describe('GET /tribe with query params', () => {
    it('SCENERY 3: should return a Array and correct fields', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(server_1.server).get(`/tribe/${tribe}${queryParams}`).expect(200);
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body[0].id).toBeDefined();
        expect(response.body[0].name).toBeDefined();
        expect(response.body[0].organization).toBeDefined();
        const coverageResponse = Number(response.body[0].coverage.replace('%', ''));
        expect(coverageResponse).toBeGreaterThanOrEqual(coverage);
        expect(response.body[0].bugs).toBeDefined();
        expect(response.body[0].vulnerabilities).toBeDefined();
        expect(response.body[0].hotspots).toBeDefined();
        expect(response.body[0].verificationState).toBeDefined();
        expect(response.body[0].state).toBeDefined();
    }));
    it('SCENERY 4: If the tribe has no coverage required then return status 400', () => __awaiter(void 0, void 0, void 0, function* () {
        coverage = 90;
        const queryParams = `?coverage=${coverage}&startDate=${startDate}&endDate=${endDate}&state=${state}`;
        const response = yield (0, supertest_1.default)(server_1.server).get(`/tribe/${tribe}${queryParams}`).expect(400);
        expect(response.body.message).toBe('The Tribe does not have repositories with the necessary coverage');
    }));
});
