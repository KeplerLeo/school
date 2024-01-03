import PropTypes from 'prop-types'
import React, { useEffect, useMemo, useState } from 'react'
import { getRequest } from '../services/requests'
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

  const contextValue = useMemo(() => ({ state }), [state])

  return (
    <AppContext.Provider value={contextValue as unknown as never[]}>{children}</AppContext.Provider>
  )
}

Provider.propTypes = {
  children: PropTypes.shape({}).isRequired
}

export default Provider
