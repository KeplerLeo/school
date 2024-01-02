import { type ModelStatic } from 'sequelize'
import resultadoModel from '../database/models/resultado.model'
import { type iResultado } from '../interfaces/iResultado'
import { type iResponse } from 'src/interfaces/iResponse'

class ResultadoService {
  private readonly _model: ModelStatic<resultadoModel> = resultadoModel

  public async create (bimestre: string, disciplina: string, nota: number): Promise<iResponse> {
    if (nota < 0 || nota > 10) {
      return { code: 400, message: 'Nota inválida' }
    }

    const existingResultado = await this._model.findOne({
      where: {
        bimestre,
        disciplina
      }
    })

    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (existingResultado) {
      return { code: 400, message: 'Resultado já cadastrado' }
    }

    const resultado = await this._model.create({ bimestre, disciplina, nota })
    return { code: 201, message: `Resultado cadastrado com sucesso com o id ${resultado.id}` }
  }

  public async getAll (): Promise<iResultado[]> {
    const resultado = await this._model.findAll()
    return resultado
  }

  public async remove (bimestre: string, disciplina: string): Promise<iResponse> {
    const resultado = await this._model.destroy({
      where: {
        bimestre,
        disciplina
      }
    })

    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!resultado) {
      return { code: 400, message: 'Resultado não encontrado' }
    }

    return { code: 200, message: 'Resultado removido com sucesso' }
  }
}

export default ResultadoService
