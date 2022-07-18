"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.generateCsv = exports.fetchMockRepository = void 0;
const path = __importStar(require("path"));
const axios_1 = __importDefault(require("axios"));
const csv_writer_1 = require("csv-writer");
const moment_1 = __importDefault(require("moment"));
const fetchMockRepository = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.get(`${process.env.HOST_URL}/mock`);
    const repositories = yield response.data.repositories;
    return repositories;
});
exports.fetchMockRepository = fetchMockRepository;
const generateCsv = (repositories) => __awaiter(void 0, void 0, void 0, function* () {
    const pathFile = path.join(__dirname, 'files', `Repositories  ${(0, moment_1.default)().format('llll')}.csv`);
    return new Promise((resolve, reject) => {
        const csvWriterInstance = (0, csv_writer_1.createObjectCsvWriter)({
            path: pathFile,
            header: [
                { id: 'id', title: 'ID' },
                { id: 'name', title: 'NAME' },
                { id: 'tribe', title: 'TRIBE' },
                { id: 'organization', title: 'ORGANIZATION' },
                { id: 'coverage', title: 'COVERAGE' },
                { id: 'codeSmell', title: 'CODE SMELL' },
                { id: 'bugs', title: 'BUGS' },
                { id: 'vulnerabilities', title: 'VULNERABILITIES' },
                { id: 'hotspots', title: 'HOTSPOTS' },
                { id: 'verificationState', title: 'VERIFICATION STATE' },
                { id: 'state', title: 'STATE' }
            ]
        });
        csvWriterInstance.writeRecords(repositories).then(() => {
            resolve(pathFile);
        }).catch(err => {
            reject(err);
        });
        return 'csv';
    });
});
exports.generateCsv = generateCsv;
