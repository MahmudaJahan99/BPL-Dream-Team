import { Suspense, useState, useMemo } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Players from './components/Players/Players'
import { PlayersContext } from './components/PlayersContext'
import Loader from './components/ui/Loader'
import { toast, Bounce, ToastContainer } from 'react-toastify'

const fetchPlayers = async () => {
  const res = await fetch("/players.json")
  return res.json()
}

function App() {
  const playersPromise = useMemo(() => fetchPlayers(), [])

  const [freeCoins, setFreeCoins] = useState(false)
  const [balance, setBalance] = useState(1000000)
  const [selectPlayer, setSelectPlayer] = useState([])

  function handleFreeCoins() {
    if (!freeCoins) {
      setBalance(prev => prev + 100000)
      setFreeCoins(true)
      toast.success('🎉 Free coins claimed!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        theme: "colored",
        transition: Bounce,
      })
    }
  }

  function handleChoosePlayer(selectedData) {
    if (selectPlayer.length === 13 || balance < selectedData.price) {
      toast.error('Cannot buy player', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      return
    }

    setSelectPlayer(prev => [...prev, selectedData])
    setBalance(prev => prev - selectedData.price)
    toast.success('Player Selected', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      theme: "colored",
      transition: Bounce,
    })
  }

  function handleDeletePlayer(deletedData) {
    const filteredData = selectPlayer.filter(player => player.playerName !== deletedData.playerName)
    setSelectPlayer(filteredData)
    setBalance(prev => prev + deletedData.price)
    toast.success('Player Removed', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      theme: "colored",
      transition: Bounce,
    })
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
      <ToastContainer />
    </>
  )
}

export default App
