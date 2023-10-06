import React, { useState } from "react"
import Header from "./components/Header"
import CovidForCountry from "./components/CovidForCountry"
import CovidForWorld from "./components/CovidForWorld"
import CovidForContinent from "./components/CovidForContinent"

const App = () => {
  const [id, setId] = useState(1)

  const onMenuChange = (id) => setId(id)

  return (
    <div className="bg-slate-100 min-h-screen min-w-full">
      <Header activeId={id} onMenuChange={onMenuChange} />

      <div className="md:container md:mx-auto p-0 sm:p-8 overflow-x-auto md:overflow-x-hidden">
        {id === 1 && <CovidForWorld activeId={id} onEarthClick={onMenuChange} />}
        {id === 2 && <CovidForCountry />}
        {id === 3 && <CovidForContinent />}
      </div>

    </div>
  )
}

export default App
