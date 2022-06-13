import React from 'react'
import { ThemeContext } from '../context/ThemeProvider'

const Navbar = () => {

  const {theme, cambioColor} =  React.useContext(ThemeContext)

  return (
    <div style={
      {
        background: theme.background,
        color: theme.color
      }
    }>
        <h1>Navbar</h1>
        <label>Color Texto</label>
        <input 
            type="color"
            onChange={e  => cambioColor({...theme, color: e.target.value})}
        />
        <label>Color Fondo</label>
        <input 
            type="color"
            onChange={e  => cambioColor({...theme, background: e.target.value})}
        />
    </div>
  )
}

export default Navbar