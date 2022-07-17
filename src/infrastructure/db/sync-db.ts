import { sequelize } from './config'

import './models/'

const sync = async () => {
  await sequelize.authenticate()
}

export default sync
