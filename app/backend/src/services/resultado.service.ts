import { type ModelStatic } from 'sequelize'
import resultadoModel from '../database/models/resultado.model'

class ResultadoService {
  private readonly _model: ModelStatic<resultadoModel> = resultadoModel

  public async create (bimestre: string, disciplina: string, nota: number): Promise<string> {
    const resultado = await this._model.create({ bimestre, disciplina, nota })
    return `${resultado.id}`
  }
}

export default ResultadoService
