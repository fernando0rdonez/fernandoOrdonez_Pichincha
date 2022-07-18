"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Organization = void 0;
const sequelize_1 = require("sequelize");
const config_1 = require("../config");
const metrics_1 = require("./metrics");
const repository_1 = require("./repository");
const tribe_1 = require("./tribe");
exports.Organization = config_1.sequelize.define('organization', {
    id_organization: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    status: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false
});
exports.Organization.hasMany(tribe_1.Tribe, { foreignKey: 'id_organization', sourceKey: 'id_organization' });
tribe_1.Tribe.belongsTo(exports.Organization, { foreignKey: 'id_organization', targetKey: 'id_organization' });
tribe_1.Tribe.hasMany(repository_1.Repository, { foreignKey: 'id_tribe', sourceKey: 'id_tribe' });
repository_1.Repository.belongsTo(tribe_1.Tribe, { foreignKey: 'id_tribe', targetKey: 'id_tribe' });
repository_1.Repository.hasOne(metrics_1.Metrics, { foreignKey: 'id_repository', sourceKey: 'id_repository' });
metrics_1.Metrics.belongsTo(repository_1.Repository, { foreignKey: 'id_repository', targetKey: 'id_repository' });
