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
exports.tribeRouter = void 0;
const express_1 = __importDefault(require("express"));
const tribe_1 = __importDefault(require("../../use-cases/tribe"));
const response_1 = require("../common/response");
const bad_request_error_1 = require("../errors/bad-request-error");
const dto_1 = __importDefault(require("../common/dto/"));
const express_validator_1 = require("express-validator");
const request_validate_1 = require("../middleware/request-validate");
const moment_1 = __importDefault(require("moment"));
const utils_1 = require("../common/utils");
const router = express_1.default.Router();
exports.tribeRouter = router;
router.get('/:id', [
    (0, express_validator_1.query)('state').isIn(['E', 'D', 'A']).withMessage('status must be E | D | A').optional(),
    (0, express_validator_1.query)('coverage').isFloat().optional(),
    (0, express_validator_1.query)('startDate').isISO8601().toDate().withMessage('startDate must be a valid date in ISO 8601 format (YYYY-MM-DD)').optional(),
    (0, express_validator_1.query)('endDate').isISO8601().toDate().withMessage('startDate must be a valid date in ISO 8601 format (YYYY-MM-DD)').optional()
], request_validate_1.requestValidate, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const queryParams = {};
    queryParams.state = req.query.status || 'E';
    queryParams.coverage = Number(req.query.coverage) || 70;
    queryParams.startDate = req.query.startDate ? (0, moment_1.default)(req.query.startDate).toDate() : (0, moment_1.default)((0, moment_1.default)().format('YYYY') + '-01-01').toDate();
    queryParams.endDate = req.query.endDate ? (0, moment_1.default)(req.query.endDate).toDate() : (0, moment_1.default)().toDate();
    const useCaseResponse = yield tribe_1.default.listTibreRepositories(id, queryParams);
    if (useCaseResponse.error) {
        throw new bad_request_error_1.BadRequestError(useCaseResponse.data.message);
    }
    const repositories = useCaseResponse.data.repositories;
    const organiation = useCaseResponse.data.organization;
    const tribe = useCaseResponse.data;
    const listMockRepositories = yield (0, utils_1.fetchMockRepository)();
    const response = dto_1.default.repository.ListRepositoriesFromTribeDTO(repositories, organiation, tribe, listMockRepositories);
    if (req.query.download) {
        try {
            const url = yield (0, utils_1.generateCsv)(response);
            (0, response_1.dowload)(res, url);
        }
        catch (error) {
            throw new bad_request_error_1.BadRequestError('Error generating CSV');
        }
    }
    else {
        (0, response_1.success)(res, response, 200);
    }
}));
