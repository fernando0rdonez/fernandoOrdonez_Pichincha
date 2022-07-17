import { DataTypes } from 'sequelize'
import { sequelize } from '../config'

export const Repository = sequelize.define(
  'repository',
  {
    id_repository: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('A', 'I'),
      allowNull: false
    },
    id_tribe: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    state: {
      type: DataTypes.ENUM('A', 'D', 'E'),
      allowNull: false
    }
  }, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  })
