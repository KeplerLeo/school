import { Sequelize } from 'sequelize'

const dbName = 'SCHOOL'
const dbUser = 'root'
const dbPassword = '123456'
const dbHost = 'localhost'

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  dialect: 'mysql',
  host: dbHost
})

export default sequelize
