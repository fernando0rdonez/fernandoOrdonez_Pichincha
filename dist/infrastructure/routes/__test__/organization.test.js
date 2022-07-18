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
const faker_1 = require("@faker-js/faker");
let idOrganization;
describe('POST /organization', () => {
    it('after create an organization return 201  with correct format', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(server_1.server)
            .post('/organization')
            .send({
            name: faker_1.faker.company.companyName(),
            status: faker_1.faker.datatype.number({
                min: 150,
                max: 200
            })
        }).expect(201).expect((res) => {
            idOrganization = res.body.id;
        });
        expect(response.body.id).toBeDefined();
        expect(response.body.name).toBeDefined();
    }));
});
describe('PUT /organization', () => {
    it('after update an organization return 200  with updated values', () => __awaiter(void 0, void 0, void 0, function* () {
        const newName = faker_1.faker.company.companyName();
        const newStatus = faker_1.faker.datatype.number({
            min: 150,
            max: 200
        });
        const response = yield (0, supertest_1.default)(server_1.server)
            .put(`/organization/${idOrganization}`)
            .send({
            name: newName,
            status: newStatus
        }).expect(200);
        expect(response.body.id).toBe(idOrganization);
        expect(response.body.name).toBe(newName);
        expect(response.body.status).toBe(newStatus);
    }));
});
describe('GET /organization', () => {
    it('should return status 200', () => __awaiter(void 0, void 0, void 0, function* () {
        return (0, supertest_1.default)(server_1.server).get('/organization').expect(200);
    }));
    it('should return a Array', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(server_1.server).get('/organization').expect(200);
        expect(Array.isArray(response.body)).toBe(true);
    }));
    it('check format', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(server_1.server).get('/organization').expect(200);
        expect(response.body[0].id).toBeDefined();
        expect(response.body[0].name).toBeDefined();
        expect(response.body[0].status).toBeDefined();
    }));
});
describe('DELETE /organization', () => {
    it('Delete item succesful', () => __awaiter(void 0, void 0, void 0, function* () {
        return (0, supertest_1.default)(server_1.server)
            .delete(`/organization/${idOrganization}`)
            .expect(200);
    }));
});
