import React from 'react'


export const HolaContext = React.createContext()

const HolaProvider = (props) => {

    const hola = 'Hola desde Global'

  return (
    <HolaContext.Provider value={{hola, props}}>
        {props.children}
    </HolaContext.Provider>
  )
}

export default HolaProvider