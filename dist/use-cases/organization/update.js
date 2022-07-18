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
exports.update = void 0;
const organization_1 = require("../../infrastructure/db/models/organization");
const update = (id, organizationParams) => __awaiter(void 0, void 0, void 0, function* () {
    const organization = yield organization_1.Organization.findByPk(id);
    if (!organization) {
        return { data: { message: 'Origanization not found' }, error: true };
    }
    organization.update({
        name: organizationParams.name,
        status: organizationParams.status
    });
    yield organization.save();
    return { data: organization, error: false };
});
exports.update = update;
