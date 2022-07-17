import { DataTypes } from 'sequelize'
import { sequelize } from '../config'

export const Metrics = sequelize.define(
  'metrics',
  {
    id_repository: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    coverage: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    bugs: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    vulnerabilities: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    hotspots: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    code_smells: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  })
