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
exports.mockRouter = void 0;
const express_1 = __importDefault(require("express"));
const mocks_1 = __importDefault(require("../../use-cases/mocks"));
const bad_request_error_1 = require("../errors/bad-request-error");
const dto_1 = __importDefault(require("../common/dto/"));
const router = express_1.default.Router();
exports.mockRouter = router;
router.get('/', (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    const useCaseResponse = yield mocks_1.default.listRepository();
    if (useCaseResponse.error) {
        throw new bad_request_error_1.BadRequestError(useCaseResponse.data.message);
    }
    const repositories = useCaseResponse.data;
    const response = dto_1.default.mock.makeDTOMock(repositories);
    res.json(response);
}));
