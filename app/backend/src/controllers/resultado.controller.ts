import { type Request, type Response } from 'express'
import type Resultado from 'src/database/models/resultado.model'
import ResultadoService from 'src/services/resultado.service'

class ResultadoController {
  private readonly _service = new ResultadoService()

  public async create (req: Request, res: Response): Promise<Response> {
    const resultado = await this._service.create(req.body as Partial<Resultado>)
    if (resultado === null || resultado === undefined) return res.status(400).json({ message: 'Erro ao criar resultado' })
    return res.status(201).json(resultado)
  }
}

export default ResultadoController
