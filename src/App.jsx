import { Suspense, useState, useMemo } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Players from './components/Players/Players'
import { PlayersContext } from './components/PlayersContext'
import Loader from './components/ui/Loader'

const fetchPlayers = async () => {
  const res = await fetch("/players.json")
  return res.json()
}

function App() {
  const playersPromise = useMemo(() => fetchPlayers(), [])

  const [freeCoins, setFreeCoins] = useState(false)
  const [balance, setBalance] = useState(6000000)
  const [selectPlayer, setSelectPlayer] = useState([])

  function handleFreeCoins() {
    setFreeCoins(prev => !prev)
    setBalance(prev => prev + 10000)
  }

  function handleChoosePlayer(selectedData) {
    setSelectPlayer(prev => [...prev, selectedData])
    setBalance(prev => prev - selectedData.price)
  }

  function handleDeletePlayer(deletedData) {
    const filteredData = selectPlayer.filter(player => player.playerName !== deletedData.playerName)
    setSelectPlayer(filteredData)
    setBalance(prev => prev + deletedData.price)
  }

  return (
    <>
      <Navbar balance={balance} />
      <Banner freeCoins={freeCoins} handleFreeCoins={handleFreeCoins} />

      <PlayersContext.Provider value={{ playersPromise, handleChoosePlayer, selectPlayer, handleDeletePlayer }}>
        <main>
          <Suspense fallback={<Loader />}>
            <Players />
          </Suspense>
        </main>

      </PlayersContext.Provider>
    </>
  )
}

export default App
