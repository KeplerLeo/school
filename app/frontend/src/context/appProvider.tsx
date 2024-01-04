import PropTypes from 'prop-types'
import React, { useEffect, useMemo, useState } from 'react'
import { deleteRequest, getRequest } from '../services/requests'
import AppContext from './appContext'

const INITIAL_STATE: any[] | (() => any[]) = []

function Provider ({ children }: { children: React.ReactNode }): JSX.Element {
  const [state, setState] = useState(INITIAL_STATE)

  useEffect(() => {
    async function getData (): Promise<void> {
      const data = await getRequest('/listagem')
      setState(data)
    }
    void getData()
  }, [])

  async function deleteDisciplina (
    bimestre: string,
    disciplina: string
  ): Promise<void> {
    const newDisciplina = {
      bimestre,
      disciplina
    }
    await deleteRequest('/remocao', newDisciplina)

    // Update the state by filtering out the deleted disciplina
    setState((prevState) =>
      prevState.filter(
        (d) => d.bimestre !== bimestre || d.disciplina !== disciplina
      )
    )
  }

  const contextValue = useMemo(
    () => ({ state, deleteDisciplina }),
    [state, deleteDisciplina]
  )

  return (
    <AppContext.Provider value={contextValue as unknown as never[]}>
      {children}
    </AppContext.Provider>
  )
}

Provider.propTypes = {
  children: PropTypes.shape({}).isRequired
}

export default Provider
