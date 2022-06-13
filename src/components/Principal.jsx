import React from 'react'
import { ThemeContext } from '../context/ThemeProvider'
import { HolaContext } from '../context/HolaProvider'

const Principal = () => {

    const {theme} = React.useContext(ThemeContext)
    const {hola} = React.useContext(HolaContext)
    
  return (
    <div style ={
        {
            background: theme.background,
            color: theme.color
        }
    }>
        <h1>Contenido de mi sitio Web</h1>
        <p>{hola}</p>
    </div>
  )
}

export default Principal