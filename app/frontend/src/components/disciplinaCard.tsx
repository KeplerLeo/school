import React from 'react'

interface DisciplinaCardProps {
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

const DisciplinaCard: React.FC<DisciplinaCardProps> = ({ disciplina, data, nota }) => {
  return (
    <div className={`card ${disciplina}`}>
      <h3>{disciplina}</h3>
      <p>Data: {data}</p>
      <p className={`nota ${classNotas(nota)}`}>Nota: {nota}</p>
    </div>
  )
}

export default DisciplinaCard
