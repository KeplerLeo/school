import { type ModelStatic } from 'sequelize'
import resultadoModel from '../database/models/resultado.model'

class ResultadoService {
  private readonly _model: ModelStatic<resultadoModel> = resultadoModel

  public async create (resultado: Partial<resultadoModel>): Promise<resultadoModel> {
    return await this._model.create(resultado)
  }
}

export default ResultadoService
