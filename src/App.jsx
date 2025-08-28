import { useEffect, useState } from 'react'

import Header from "./components/Header/Header.jsx"
import Main from "./components/Main/Main.jsx"
import Footer from "./components/Footer/Footer.jsx"

import api from "./utils/api"
import CurrentUserContext from './contexts/CurrentUserContext.js'

export default function App() {
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    api.getUserInfo().then((data) => {
      setCurrentUser(data)
    })
  }, [])

  return (
    <div className="page">
      <Header />

      <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
        <Main />
      </CurrentUserContext.Provider>

      <Footer />
    </div>
  )
}
