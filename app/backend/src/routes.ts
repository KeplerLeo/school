import express from 'express'
import ResultadoController from './controllers/resultado.controller'

const routes = express.Router()
const resultadoController = new ResultadoController()

routes.get('/', (req, res) => {
  return res.send('Hello World')
})

routes.post('/criacao', (req, res): void => {
  void resultadoController.create(req, res)
})

export default routes
