import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'

// Get the theme from the local storage
const getStorageTheme = () => {
  let theme = 'light-theme'

  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme')
  }
  return theme
}

// App
function App() {
  const [theme, setTheme] = useState(getStorageTheme()) // This is how were are changing the color scheme

  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme')
    } else {
      setTheme('light-theme')
    }
  }

  useEffect(() => {
    document.documentElement.className = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <main>
      {/* Navbar */}
      <nav>
        <div className="nav-center">
          <h1>overreacted</h1>
          <button className="btn" onClick={toggleTheme}>
            Toggle
          </button>
        </div>
      </nav>

      {/* Section with article ID's being iterated */}
      <section className="articles">
        {data.map((item) => {
          return <Article key={item.id} {...item} />
        })}
      </section>
    </main>
  )
}

export default App
