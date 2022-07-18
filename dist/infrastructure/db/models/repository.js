"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repository = void 0;
const sequelize_1 = require("sequelize");
const config_1 = require("../config");
exports.Repository = config_1.sequelize.define('repository', {
    id_repository: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    status: {
        type: sequelize_1.DataTypes.ENUM('A', 'I'),
        allowNull: false
    },
    id_tribe: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    state: {
        type: sequelize_1.DataTypes.ENUM('A', 'D', 'E'),
        allowNull: false
    }
}, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});
