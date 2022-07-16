import { sequelize } from './config'

import './models/'

const sync = async () => {
  await sequelize.sync({ force: false })
}

export default sync
