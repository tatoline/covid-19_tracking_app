import React, { useState } from "react"
import Header from "./components/Header"
import CovidForCountry from "./components/CovidForCountry"

const App = () => {
  const [id, setId] = useState(1)

  return (
    <>
      <Header activeId={id} onMenuChange={(id) => setId(id)} />

      <div className="md:container md:mx-auto p-0 sm:p-8 overflow-x-auto md:overflow-x-hidden">
        {id === 1 && 'World Statistics'}
        {id === 2 && <CovidForCountry />}
        {id === 3 && 'Continent Statistics'}
      </div>

    </>
  )
}

export default App
