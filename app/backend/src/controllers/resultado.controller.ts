import { type Request, type Response } from 'express'
import ResultadoService from '../services/resultado.service'
import { log } from 'console'

class ResultadoController {
  private readonly _service = new ResultadoService()

  public async create (req: Request, res: Response): Promise<void> {
    const { bimestre, disciplina, nota } = req.body as { bimestre: string, disciplina: string, nota: number }
    log(req.body)
    const resultado = await this._service.create(bimestre, disciplina, nota)
    res.status(resultado.code).json(resultado.message)
  }

  public async getAll (req: Request, res: Response): Promise<void> {
    const resultado = await this._service.getAll()
    res.status(200).json(resultado)
  }
}

export default ResultadoController
