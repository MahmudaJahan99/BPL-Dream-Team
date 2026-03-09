import { Suspense, useState, useMemo } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Players from './components/Players/Players'

const fetchPlayers = async () => {
  const res = await fetch("/players.json")
  return res.json()
}

function App() {
  const playersPromise = useMemo(() => fetchPlayers(), [])

  const [balance, setBalance] = useState(6000000)
  const [selectPlayer, setSelectPlayer] = useState([])

  function handleChoosePlayer(selectedData) {
    setSelectPlayer(prev => [...prev, selectedData])
    setBalance(prev => prev - selectedData.price)
  }

  return (
    <>
      <Navbar balance={balance} />
      <Banner />
      <Suspense fallback={<span className="loading loading-dots loading-lg"></span>}>
        <Players
          playersPromise={playersPromise}
          handleChoosePlayer={handleChoosePlayer}
          selectPlayer={selectPlayer}
        />
      </Suspense>
    </>
  )
}

export default App
