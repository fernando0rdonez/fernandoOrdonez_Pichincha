import { DataTypes } from 'sequelize'
import { sequelize } from '../config'

export const Tribe = sequelize.define(
  'tribe',
  {
    id_tribe: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_organization: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    timestamps: false
  })
