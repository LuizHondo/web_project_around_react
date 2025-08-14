import { useState } from "react";
import Popup from "../Popup/Popup";
import NewCard from "../Popup/components/NewCard/NewCard";
import EditProfile from "../Popup/components/EditProfile/EditProfile";
import EditAvatar from "../Popup/components/EditAvatar/EditAvatar";
import Card from "../Popup/components/Card/Card";
import ImagePopup from "../Popup/components/ImagePopup/ImagePopup";
import avatarImage from "/Users/luizpaulohondo/Documents/Sprint13ProjectMac/vite-project/images/avatar.png"

const cards = [
  {
    isLiked: false,
    _id: '5d1f0611d321eb4bdcd707dd',
    name: 'Yosemite Valley',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:10:57.741Z',
  },
  {
    isLiked: false,
    _id: '5d1f064ed321eb4bdcd707de',
    name: 'Lake Louise',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:11:58.324Z',
  },
  {
    isLiked: false,
    _id: '5d1f064ed321eb4bdcd3707de',
    name: 'Lake Louise',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:11:58.324Z',
  },
  {
    isLiked: false,
    _id: '5d1f064ed321eb4bd34cd707de',
    name: 'Lake Louise',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:11:58.324Z',
  },
    {
    isLiked: false,
    _id: '5d1f064ed321eb4bd345cd707de',
    name: 'Lake Louise',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:11:58.324Z',
  },
    {
    isLiked: false,
    _id: '5d1f064ed321eb4bdfsdcd707de',
    name: 'Lake Louise',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:11:58.324Z',
  },
];






export default function Main(){
  const [popup, setPopup] = useState(null);
  const newCardPopup = {title:"Novo local",children:<NewCard/>}
  const editProfile = {title:"Editar perfil",children:<EditProfile/>}
  const editAvatarPopup = {title:"Alterar foto de perfil",children:<EditAvatar/>}
  const imageComponent = {children:<ImagePopup></ImagePopup>}


  const handleOpenPopup = (popup)=>{
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
                handle={handleOpenPopup}
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