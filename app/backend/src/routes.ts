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

routes.get('/listagem', (req, res): void => {
  void resultadoController.getAll(req, res)
})

routes.delete('/remocao', (req, res): void => {
  void resultadoController.remove(req, res)
})

export default routes
