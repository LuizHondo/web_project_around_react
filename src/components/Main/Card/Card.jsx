import ImagePopup from "../../Popup/components/ImagePopup/ImagePopup";



export default function Card(props) {
  const { name, link, isLiked } = props.card;
  const card = props.card;
  const handlePopup = props.handler;
  // const imagePopup = props.imageComponent
  const imageComponent = {title:name,children:<ImagePopup card={props.card}/>}
  const onCardLike = props.onCardLike;
  const cardLikeButtonClassName = `card__like-button ${isLiked ? 'card__heart_active' : ''}`;
  // console.log(onCardLike)
  function handleLikeClick(){
    onCardLike(card)
  }


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
          className={cardLikeButtonClassName}
          onClick={handleLikeClick}
        />
      </div>
    </li>
  );
}