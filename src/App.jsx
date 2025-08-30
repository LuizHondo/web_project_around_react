import { useEffect, useState } from 'react'

import Footer from "./components/Footer/Footer.jsx"
import Header from "./components/Header/Header.jsx"
import Main from "./components/Main/Main.jsx"
import api from "./utils/api.js"
import CurrentUserContext from './contexts/CurrentUserContext.js'

export default function App() {
  const [currentUser, setCurrentUser] = useState({})
  const [popup, setPopup] = useState(null);

  function handleOpenPopup(popup){
    setPopup(popup)
  }
  function handleClosePopup(){
    setPopup(null)
  }


  useEffect(() => {
    (async () => {
      await api.getUserInfo().then((data) => {
        setCurrentUser(data);
      });
    })();
  }, []);

  const handleUpdateUser = (data) => {
    (async () => {
      await api.updateProfile(data).then((newData) => {
        setCurrentUser(newData)
        handleClosePopup()
      });
    })();
  };
  const handleUpdateAvatar = (data) => {
    (async () => {
      await api.updateAvatar(data.avatar).then((newData) => {
        setCurrentUser(newData)
        handleClosePopup()
      });
    })();
  };



  return (
    <div className="page">
      <CurrentUserContext.Provider value={{ currentUser, handleUpdateUser, handleUpdateAvatar}}>
        <Header />
        <Main
          onOpenPopup={handleOpenPopup}
          onClosePopup={handleClosePopup}
          popup={popup}
         />
        <Footer />
      </CurrentUserContext.Provider>
    </div>
  )
  
}
