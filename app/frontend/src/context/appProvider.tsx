import PropTypes from 'prop-types'
import React, { useEffect, useMemo, useState } from 'react'
import { deleteRequest, getRequest, setRequest } from '../services/requests'
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

    const data = await getRequest('/listagem')
    setState(data)
  }

  async function addDisciplina (
    bimestre: string,
    disciplina: string,
    nota: string
  ): Promise<void> {
    const newDisciplina = {
      bimestre,
      disciplina,
      nota
    }
    await setRequest('/criacao', newDisciplina)

    const data = await getRequest('/listagem')
    setState(data)
  }

  const contextValue = useMemo(
    () => ({ state, deleteDisciplina, addDisciplina }),
    [state, deleteDisciplina, addDisciplina]
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
