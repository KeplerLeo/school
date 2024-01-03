import React from 'react'

interface DisciplinaCardProps {
  disciplina: string
  data: string
  nota: number
}

const DisciplinaCard: React.FC<DisciplinaCardProps> = ({ disciplina, data, nota }) => {
  return (
    <div className={`card ${disciplina}`}>
      <h3>{disciplina}</h3>
      <p>Data: {data}</p>
      <p className="nota">Nota: {nota}</p>
    </div>
  )
}

export default DisciplinaCard
