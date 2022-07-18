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
exports.organizationRouter = void 0;
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const organization_1 = __importDefault(require("../../use-cases/organization"));
const dto_1 = __importDefault(require("../common/dto/"));
const response_1 = require("../common/response");
const request_validate_1 = require("../middleware/request-validate");
const bad_request_error_1 = require("../errors/bad-request-error");
const router = express_1.default.Router();
exports.organizationRouter = router;
router.get('/', (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    const useCaseResponse = yield organization_1.default.list();
    const response = dto_1.default.organization.listOrganizationDTO(useCaseResponse.data);
    (0, response_1.success)(res, response, 200);
}));
router.post('/', [
    (0, express_validator_1.body)('name').notEmpty().withMessage('name is required'),
    (0, express_validator_1.body)('status').notEmpty().withMessage('status is required')
], request_validate_1.requestValidate, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const params = req.body;
    const useCaseResponse = yield organization_1.default.create(params);
    if (useCaseResponse.error) {
        throw new bad_request_error_1.BadRequestError(useCaseResponse.data.message);
    }
    const response = dto_1.default.organization.organizationDTO(useCaseResponse.data);
    (0, response_1.success)(res, response, 201);
}));
router.put('/:id', [
    (0, express_validator_1.body)('name').notEmpty().withMessage('name is required'),
    (0, express_validator_1.body)('status').notEmpty().withMessage('status is required')
], request_validate_1.requestValidate, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const params = req.body;
    const idOrganization = req.params.id;
    const useCaseResponse = yield organization_1.default.update(idOrganization, params);
    if (useCaseResponse.error) {
        throw new bad_request_error_1.BadRequestError(useCaseResponse.data.message);
    }
    const response = dto_1.default.organization.organizationDTO(useCaseResponse.data);
    (0, response_1.success)(res, response, 200);
}));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idOrganization = req.params.id;
    const useCaseResponse = yield organization_1.default.destroy(idOrganization);
    if (useCaseResponse.error) {
        throw new bad_request_error_1.BadRequestError(useCaseResponse.data.message);
    }
    (0, response_1.success)(res, useCaseResponse.data, 200);
}));
