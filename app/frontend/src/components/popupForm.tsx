import React, { useContext } from 'react'
import appContext from '../context/appContext'

interface PopupProps {
  closePopup: () => void
  bimestre: string
}

// Popup component
const Popup: React.FC<PopupProps> = ({ closePopup, bimestre }) => {
  const { addDisciplina } = useContext<any>(appContext)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    const form = event.currentTarget
    const disciplina = (
      form.elements.namedItem('disciplina') as HTMLSelectElement
    ).value
    const nota = parseFloat(
      (form.elements.namedItem('nota') as HTMLInputElement).value
    )

    addDisciplina(bimestre, disciplina, nota)

    closePopup()
  }

  return (
    <div className="popup">
      <div className="popup_inner">
        <h1>{bimestre} BIMESTRE</h1>
        <form className="formCard" onSubmit={handleSubmit}>
          <label htmlFor="disciplina">Disciplina</label>
          <select name="disciplina" id="disciplina">
            <option value="Biologia">Biologia</option>
            <option value="Artes">Artes</option>
            <option value="Geografia">Geografia</option>
            <option value="Sociologia">Sociologia</option>
          </select>
          <label htmlFor="nota">Nota</label>
          <input
            type="number"
            name="nota"
            id="nota"
            step="any"
            min={0}
            max={10}
          />
          <button className="btnConfirm" type="submit">
            Confirmar
          </button>
          <button className="btnCancel" onClick={closePopup}>
            X
          </button>
        </form>
      </div>
    </div>
  )
}

export default Popup
