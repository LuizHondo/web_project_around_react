import ImagePopup from "../../Popup/components/ImagePopup/ImagePopup";



export default function Card(props) {
  const { name, link, isLiked } = props.card;
  const handlePopup = props.handler;
  // const imagePopup = props.imageComponent
  const imageComponent = {title:name,children:<ImagePopup card={props.card}/>}
  
  return (
    <li className="card">
      <img className="card__image"
        src={link}
        alt="Imagem do Cartão"
        onClick={()=>{handlePopup(imageComponent)}}
      />
      <button
        aria-label="Delete card"
        className="card__delete-button"
        type="button"
      />
      <div className="card__description">
        <h2 className="card__title">{name}</h2>
        <button
          aria-label="Like card"
          type="button"
          className="card__like-button"
        />
      </div>
    </li>
  );
}