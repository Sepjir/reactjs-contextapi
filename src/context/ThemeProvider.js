import React from 'react'

export const ThemeContext =  React.createContext()

const ThemeProvider = (props) => {
    const themes = {
        background: '#eee',
        color: '#000'
    }

    React.useEffect(() => {
        if (localStorage.getItem('ThemeLocal')) {
            const ThemeLocal = JSON.parse(localStorage.getItem('ThemeLocal'))
            setTheme(ThemeLocal)
        }
    }, [])

    const [theme, setTheme] = React.useState(themes)

    const cambioColor = valor => {
        setTheme(valor)
        localStorage.setItem('ThemeLocal', JSON.stringify(valor))
    }

  return (
    <ThemeContext.Provider value = {{props, theme, cambioColor}}>
        {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider