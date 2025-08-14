export default function ImagePopup(props){
    // console.log(props.title)
    return(
    <>
        {console.log(props)}
        <img
            src={props.card.link}
            alt={props.name}
            className="image-popup__content"
        />
        <p className="image-popup__title">{props.name}</p>
    </>

    )
}