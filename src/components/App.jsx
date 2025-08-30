import { useEffect, useState } from 'react'

import Footer from "./Footer/Footer.jsx"
import Header from "./Header/Header.jsx"
import Main from "./Main/Main.jsx"
import api from "../utils/api.js"
import CurrentUserContext from '../contexts/CurrentUserContext.js'

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


  const [cards, setCards] = useState([]);

  useEffect(()=>{
    api.getInitialCards().then((data)=>{setCards(data)}).catch((err)=>{console.error(err)})
  },[])

  
  async function handleCardLike(card) {
    // Verificar mais uma vez se esse cartão já foi curtido
    const isLiked = card.isLiked;
    
    // Enviar uma solicitação para a API e obter os dados do cartão atualizados
    await api.toggleLike(card._id, isLiked).then((newCard) => {
        setCards((state) => state.map((currentCard) => currentCard._id === card._id ? newCard : currentCard));
    }).catch((error) => console.error(error));
  }
  async function handleCardDelete(card) {
  
    await api.deleteCard(card._id).
      then(setCards((state) => state.filter((c) => c._id !== card._id))).catch((err)=>{console.error(err)})
  } 
  const handleAddPlaceSubmit = (data) => {
    (async () => {
      await api.addCard(data).then((newCard) => {
        setCards([newCard,...cards])
        handleClosePopup()
      }).catch((err)=>{console.error(err)})
    })();
  };



  return (
    <div className="page">
      <CurrentUserContext.Provider value={{ currentUser, handleUpdateUser, handleUpdateAvatar, handleAddPlaceSubmit}}>
        <Header />
        <Main
          onOpenPopup={handleOpenPopup}
          onClosePopup={handleClosePopup}
          popup={popup}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          cards={cards}
          onCardAddSubmit={handleAddPlaceSubmit}
         />
        <Footer />
      </CurrentUserContext.Provider>
    </div>
  )
  
}
