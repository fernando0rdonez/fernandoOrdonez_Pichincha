"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Metrics = void 0;
const sequelize_1 = require("sequelize");
const config_1 = require("../config");
exports.Metrics = config_1.sequelize.define('metrics', {
    id_repository: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    coverage: {
        type: sequelize_1.DataTypes.DOUBLE,
        allowNull: false
    },
    bugs: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    vulnerabilities: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    hotspots: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    code_smells: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false
});
