import express, { type Express } from 'express'
import routes from './routes'
import db from './database/config/database'
import cors from 'cors'

const app: Express = express()
const port = 3001

app.use(express.json())
app.use(cors())
app.use(routes)

db.sync({})
  .then(() => { console.log(`Banco de dados conectado: ${process.env.DB_NAME}`) }) // Add .then() to handle the sync completion
  .catch((error) => { console.error(`Erro ao conectar banco de dados: ${error}`) }) // Add .catch() to handle any errors

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
