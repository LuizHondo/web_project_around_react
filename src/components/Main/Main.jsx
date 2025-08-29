import { useState, useEffect, useContext } from "react";
import Popup from "../Popup/Popup";
import NewCard from "../Popup/components/NewCard/NewCard";
import EditProfile from "../Popup/components/EditProfile/EditProfile";
import EditAvatar from "../Popup/components/EditAvatar/EditAvatar";
import Card from "./Card/Card";
import ImagePopup from "../Popup/components/ImagePopup/ImagePopup";
import avatarImage from "../../../images/avatar.png"
// import { cards } from "../../utils/initialCards";

import api from "../../utils/api"
import CurrentUserContext from "../../contexts/CurrentUserContext";


export default function Main({popup,onOpenPopup,onClosePopup}){

  const newCardPopup = {title:"Novo local",children:<NewCard/>}
  const editProfile = {title:"Editar perfil",children:<EditProfile/>}
  const editAvatarPopup = {title:"Alterar foto de perfil",children:<EditAvatar/>}
  const imageComponent = {children:<ImagePopup></ImagePopup>}
  const [cards, setCards] = useState([]);
  const { currentUser } = useContext(CurrentUserContext);
  useEffect(()=>{
    api.getInitialCards().then((data)=>{setCards(data)})
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
      then(setCards((state) => state.filter((c) => c._id !== card._id))).
        catch((err)=>{console.log(err)})
}

  
    return(
    <>
        <section className="profile">
          <div className="profile__info">
            <div className="profile__avatar-container">
              <img
               src="./images/edit-avatar-button.png"
               alt="Botão para alterar foto de perfil" 
               className="profile__avatar-button"
               onClick={()=>onOpenPopup(editAvatarPopup)}
               />
              <img 
                alt="Avatar"
                className="profile__avatar" 
                src={currentUser.avatar}
                />
            </div>
            <div className="profile__info-text">
              <div className="profile__name">
                <h1 className="profile__name-text">{currentUser.name}</h1>
                <button 
                  className="profile__name-edit-button" 
                  aria-label="Editar"
                  onClick={()=>onOpenPopup(editProfile)}

                >
                  <img
                    src="./images/edit-button.png"
                    alt="Botão para alterar dados de perfil"
                    className="profile__name-edit-button-image"
                  />
                 </button>
              </div>
              <p className="profile__description">{currentUser.about}</p>
            </div>
          </div>
          <button className="profile__add-button" onClick={()=>{onOpenPopup(newCardPopup)}}></button>
        </section>
        
        <section className="cards">
          <ul className="cards__list">
            {cards.map((card) => (
              <Card
                handler={onOpenPopup}
                key={card._id}
                card={card}
                imageComponent={ImagePopup}
                onCardLike={handleCardLike}
                onCardDelete={handleCardDelete}
              />
            ))}
          </ul>
          
        </section>
        {popup && (
          <Popup onClose={onClosePopup} title={popup.title}>
            {popup.children}
          </Popup>
        )}
    </>
  )
}