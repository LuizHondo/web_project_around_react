import { use, useState } from 'react'

import Header from "./components/Header/Header.jsx"
import Main from "./components/Main/Main.jsx"
import Footer from "./components/Footer/Footer.jsx"
import Popup from "./components/Popup/Popup.jsx"
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'


export default function App() {

  return (

    <div className="page">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>

  )
}


