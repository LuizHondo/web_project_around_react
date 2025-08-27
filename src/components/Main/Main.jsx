import { useState, useEffect } from "react";
import Popup from "../Popup/Popup";
import NewCard from "../Popup/components/NewCard/NewCard";
import EditProfile from "../Popup/components/EditProfile/EditProfile";
import EditAvatar from "../Popup/components/EditAvatar/EditAvatar";
import Card from "./Card/Card";
import ImagePopup from "../Popup/components/ImagePopup/ImagePopup";
import avatarImage from "../../../images/avatar.png"
// import { cards } from "../../utils/initialCards";

import api from "../../utils/api"


export default function Main(){
  const [popup, setPopup] = useState(null);
  const newCardPopup = {title:"Novo local",children:<NewCard/>}
  const editProfile = {title:"Editar perfil",children:<EditProfile/>}
  const editAvatarPopup = {title:"Alterar foto de perfil",children:<EditAvatar/>}
  const imageComponent = {children:<ImagePopup></ImagePopup>}
  const [cards, setCards] = useState();
  
  
  useEffect(()=>{
    api.getInitialCards().then((data)=>{setCards(data)})
  },[])
  



















  function handleOpenPopup(popup){
    setPopup(popup)
  }
  function handleClosePopup(){
    setPopup(null)
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
               onClick={()=>handleOpenPopup(editAvatarPopup)}
               />
              <img 
                alt="Avatar"
                className="profile__avatar" 
                src={avatarImage}
                />
            </div>
            <div className="profile__info-text">
              <div className="profile__name">
                <h1 className="profile__name-text">Nome</h1>
                <button 
                  className="profile__name-edit-button" 
                  aria-label="Editar"
                  onClick={()=>handleOpenPopup(editProfile)}

                >
                  <img
                    src="./images/edit-button.png"
                    alt="Botão para alterar dados de perfil"
                    className="profile__name-edit-button-image"
                  />
                 </button>
              </div>
              <p className="profile__description">Description</p>
            </div>
          </div>
          <button className="profile__add-button" onClick={()=>{handleOpenPopup(newCardPopup)}}></button>
        </section>
        
        <section className="cards">
          <ul className="cards__list">
            {cards.map((card) => (
              <Card
                handler={handleOpenPopup}
                key={card._id}
                card={card}
                imageComponent={ImagePopup}
              />
            ))}
          </ul>
          
        </section>
        {popup && (
          <Popup onClose={handleClosePopup} title={popup.title}>
            {popup.children}
          </Popup>
        )}
    </>
  )
}