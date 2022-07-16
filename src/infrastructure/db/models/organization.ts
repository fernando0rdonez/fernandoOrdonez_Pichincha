import { DataTypes } from 'sequelize'
import { sequelize } from '../config'
import { Tribe } from './tribe'

export const Organization = sequelize.define(
  'organization',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
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
Organization.hasMany(Tribe, { foreignKey: 'id_organization', sourceKey: 'id' })
Tribe.belongsTo(Organization, { foreignKey: 'id_organization', targetKey: 'id' })
