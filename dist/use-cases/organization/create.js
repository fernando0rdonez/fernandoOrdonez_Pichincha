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
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const organization_1 = require("../../infrastructure/db/models/organization");
const create = (organizationParams) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const org = yield organization_1.Organization.create({
            name: organizationParams.name,
            status: organizationParams.status
        }, { fields: ['name', 'status'] });
        return { data: org, error: false };
    }
    catch (error) {
        return { data: { message: 'Error to create Organization' }, error: true };
    }
});
exports.create = create;
