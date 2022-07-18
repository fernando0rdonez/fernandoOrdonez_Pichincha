"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tribe = void 0;
const sequelize_1 = require("sequelize");
const config_1 = require("../config");
exports.Tribe = config_1.sequelize.define('tribe', {
    id_tribe: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_organization: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
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
