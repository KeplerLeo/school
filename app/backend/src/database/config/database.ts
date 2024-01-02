/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Sequelize } from 'sequelize'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import dotenv from 'dotenv/config.js'

const dbName = process.env.DB_NAME || 'SCHOOL'
const dbUser = process.env.DB_USER || 'root'
const dbPassword = process.env.DB_PASSWORD || '123456'
const dbHost = process.env.DB_HOST || 'localhost'

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  dialect: 'mysql',
  host: dbHost
})

export default sequelize
