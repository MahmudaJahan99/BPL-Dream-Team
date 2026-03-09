import { Suspense, useState, useMemo } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Players from './components/Players/Players'
import { PlayersContext } from './components/PlayersContext'

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

  function handleDeletePlayer (deletedData) {
    const filteredData = selectPlayer.filter(player => player.playerName !== deletedData.playerName)
    setSelectPlayer(filteredData)
    setBalance(prev => prev + deletedData.price)
  }

  return (
    <>
      <Navbar balance={balance} />
      <Banner />

      <PlayersContext.Provider value={{ playersPromise, handleChoosePlayer, selectPlayer, handleDeletePlayer }}>
        <Suspense fallback={<span className="loading loading-dots loading-lg"></span>}>
          <Players />
        </Suspense>
      </PlayersContext.Provider>
    </>
  )
}

export default App
