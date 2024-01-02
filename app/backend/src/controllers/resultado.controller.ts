import { type Request, type Response } from 'express'
import ResultadoService from '../services/resultado.service'
import { log } from 'console'

class ResultadoController {
  private readonly _service = new ResultadoService()

  public async create (req: Request, res: Response): Promise<void> {
    const { bimestre, disciplina, nota } = req.body
    log(req.body)
    const resultado = await this._service.create(bimestre, disciplina, nota)
    res.status(201).json(resultado)
  }
}

export default ResultadoController
