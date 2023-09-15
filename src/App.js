import React, { useState } from "react"
import Header from "./components/Header"

const App = () => {
  const [id, setId] = useState(1)

  return (
    <>
      <Header activeId={id} onMenuChange={(id) => setId(id)} />

      <div>
        {id === 1 && 'World Statistics'}
        {id === 2 && 'Country Statistics'}
        {id === 3 && 'Continent Statistics'}
      </div>

    </>
  )
}

export default App
