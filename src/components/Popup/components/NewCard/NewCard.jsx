export default function NewCard() {
  return (
    <form
      className="popup__form"
      name="popup-new-card-form"
      id="popup-new-card-form"
      noValidate
    >
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_card-name"
          id="popup-new-card-name"
          maxLength="30"
          minLength="1"
          name="popup-new-card-name"
          placeholder="Título"
          required
          type="text"
        />
        <span className="popup__error" id="popup-new-card-name-error"></span>
      </label>

      <label className="popup__field">
        <input
          className="popup__input popup__input_type_url"
          id="popup-new-card-link"
          name="popup-new-card-link"
          placeholder="Link da imagem"
          required
          type="url"
        />
        <span className="popup__error" id="popup-new-card-link-error"></span>
      </label>

      <button className="button popup__button" type="submit">
        Salvar
      </button>
    </form>
  );
}




