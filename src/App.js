import React, { useState } from "react"
import Header from "./components/Header"
import CovidForCountry from "./components/CovidForCountry"
import CovidForWorld from "./components/CovidForWorld"
import CovidForContinent from "./components/CovidForContinent"

const App = () => {
  const [id, setId] = useState(1)

  return (
    <>
      <Header activeId={id} onMenuChange={(id) => setId(id)} />

      <div className="md:container md:mx-auto p-0 sm:p-8 overflow-x-auto md:overflow-x-hidden">
        {id === 1 && <CovidForWorld />}
        {id === 2 && <CovidForCountry />}
        {id === 3 && <CovidForContinent />}
      </div>

    </>
  )
}

export default App
