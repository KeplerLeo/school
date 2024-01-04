import React, { useContext } from 'react'
import trashIcon from '../assets/red-trash-can-icon.svg'
import appContext from '../context/appContext'

interface DisciplinaCardProps {
  bimestre: string
  disciplina: string
  data: string
  nota: string
}

function classNotas (nota: string): string {
  const notaNumber = Number(nota)

  if (notaNumber >= 8) {
    return 'notaAlta'
  } else if (notaNumber > 5) {
    return 'notaNormal'
  } else {
    return 'notaBaixa'
  }
}

const DisciplinaCard: React.FC<DisciplinaCardProps> = ({
  disciplina,
  data,
  nota,
  bimestre
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const { deleteDisciplina } = useContext<any>(appContext)
  return (
    <div className={`card ${disciplina}`}>
      <img
        className="btnExcluir"
        src={trashIcon}
        alt="Lixeira"
        onClick={() => {
          deleteDisciplina(bimestre, disciplina)
        }}
      />
      <h3>{disciplina}</h3>
      <p>Data: {data}</p>
      <p className={`nota ${classNotas(nota)}`}>Nota: {nota}</p>
    </div>
  )
}

export default DisciplinaCard
