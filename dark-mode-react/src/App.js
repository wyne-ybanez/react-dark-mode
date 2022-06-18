import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'

function App() {
  return (
    <main>
      {/* Navbar */}
      <nav>
        <div className="nav-center">
          <h1>overreacted</h1>
          <button className="btn">Toggle</button>
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
