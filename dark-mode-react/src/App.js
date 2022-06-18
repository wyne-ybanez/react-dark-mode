import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'

function App() {
  // This is how were are changing the color scheme
  const [theme, setTheme] = useState('light-theme')

  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme')
    } else {
      setTheme('light-theme')
    }
  }

  useEffect(() => {
    document.documentElement.className = theme
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
