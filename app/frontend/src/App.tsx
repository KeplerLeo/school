/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext } from 'react'
import './App.css'
import appContext from './context/appContext'
import DisciplinaCard from './components/disciplinaCard'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function App () {
  const { state } = useContext<any>(appContext)
  function formatDate (dateString: string): string {
    const date = new Date(dateString)
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()

    return `${day}/${month}/${year}`
  }

  const bimestre1 = state.filter(
    (disciplina: any) => disciplina.bimestre === 'PRIMEIRO'
  )
  const bimestre2 = state.filter(
    (disciplina: any) => disciplina.bimestre === 'SEGUNDO'
  )
  const bimestre3 = state.filter(
    (disciplina: any) => disciplina.bimestre === 'TERCEIRO'
  )
  const bimestre4 = state.filter(
    (disciplina: any) => disciplina.bimestre === 'QUARTO'
  )

  return (
    <div>
      <section>
        <div className="container">
          <div>
            <button className="btnAdicionar">+</button>
            <h1>Bimestre 1</h1>
          </div>
          <div className="cards">
            {bimestre1.map((disciplina: any) => (
              <DisciplinaCard
                bimestre="PRIMEIRO"
                disciplina={disciplina.disciplina}
                data={formatDate(disciplina.updatedAt as string)}
                nota={disciplina.nota}
                key={disciplina.id}
              />
            ))}
          </div>
          <div>
            <button className="btnAdicionar">+</button>
            <h1>Bimestre 2</h1>
          </div>
          <div className="cards"></div>
          <div>
            <button className="btnAdicionar">+</button>
            <h1>Bimestre 3</h1>
          </div>
          <div className="cards"></div>
          <div>
            <button className="btnAdicionar">+</button>
            <h1>Bimestre 4</h1>
          </div>
          <div className="cards"></div>
        </div>
      </section>
    </div>
  )
}

export default App
