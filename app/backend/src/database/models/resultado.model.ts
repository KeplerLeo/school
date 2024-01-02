import { DataTypes, Model } from 'sequelize'
import database from '../config/database'

class Resultado extends Model {
  id!: number
  bimestre!: string
  diciplina!: string
  nota!: number
  criadoEm!: Date
  atualizadoEm!: Date
}

Resultado.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    bimestre: {
      type: DataTypes.STRING(6),
      allowNull: false
    },
    diciplina: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    nota: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    criadoEm: {
      type: DataTypes.DATE,
      allowNull: false
    },
    atualizadoEm: {
      type: DataTypes.DATE,
      allowNull: false
    }
  },
  {
    tableName: 'resultado',
    sequelize: database
  }
)

export default Resultado
