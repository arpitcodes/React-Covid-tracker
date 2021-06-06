import React from 'react'
import Cases from "./components/cases";
import "./App.css"

const App = () => {
  return (
    <section>
      <h1 className="live__header">🔴 LIVE</h1>
      <h2 className="heading">Covid-19 Data Tracker</h2>
      <Cases />

    </section>
  )
}

export default App
