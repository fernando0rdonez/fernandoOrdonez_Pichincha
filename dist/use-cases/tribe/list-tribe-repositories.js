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
exports.listTibreRepositories = void 0;
const repository_1 = require("../../infrastructure/db/models/repository");
const metrics_1 = require("../../infrastructure/db/models/metrics");
const sequelize_cockroachdb_1 = require("sequelize-cockroachdb");
const tribe_1 = require("../../infrastructure/db/models/tribe");
const organization_1 = require("../../infrastructure/db/models/organization");
const listTibreRepositories = (id, queryParams) => __awaiter(void 0, void 0, void 0, function* () {
    const tribe = yield tribe_1.Tribe.findByPk(id);
    if (!tribe) {
        return { data: { message: 'The Tribe is not registered' }, error: true };
    }
    const response = yield tribe_1.Tribe.findOne({
        where: { id_tribe: id },
        include: [{
                model: repository_1.Repository,
                where: { id_tribe: id, state: queryParams.state, created_at: { [sequelize_cockroachdb_1.Op.between]: [queryParams.startDate, queryParams.endDate] } },
                include: [{
                        model: metrics_1.Metrics,
                        where: { coverage: { [sequelize_cockroachdb_1.Op.gt]: queryParams.coverage } }
                    }]
            },
            {
                model: organization_1.Organization
            }]
    });
    if (!response) {
        return { data: { message: 'The Tribe does not have repositories with the necessary coverage' }, error: true };
    }
    return { data: response, error: false };
});
exports.listTibreRepositories = listTibreRepositories;
