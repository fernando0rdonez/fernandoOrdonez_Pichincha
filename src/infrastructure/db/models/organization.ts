import { DataTypes } from 'sequelize'
import { sequelize } from '../config'
import { Metrics } from './metrics'
import { Repository } from './repository'
import { Tribe } from './tribe'

export const Organization = sequelize.define(
  'organization',
  {
    id_organization: {
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
Organization.hasMany(Tribe, { foreignKey: 'id_organization', sourceKey: 'id_organization' })
Tribe.belongsTo(Organization, { foreignKey: 'id_organization', targetKey: 'id_organization' })

Tribe.hasMany(Repository, { foreignKey: 'id_tribe', sourceKey: 'id_tribe' })
Repository.belongsTo(Tribe, { foreignKey: 'id_tribe', targetKey: 'id_tribe' })

Repository.hasOne(Metrics, { foreignKey: 'id_repository', sourceKey: 'id_repository' })
Metrics.belongsTo(Repository, { foreignKey: 'id_repository', targetKey: 'id_repository' })
