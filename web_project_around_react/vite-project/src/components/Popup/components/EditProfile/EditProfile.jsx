export default function EditProfile() {
  return (
    <form
      className="popup__form"
      name="popup-edit-profile-form"
      id="popup-edit-profile-form"
      noValidate
    >
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_name"
          id="popup-edit-profile-name"
          maxLength="30"
          minLength="2"
          name="popup-edit-profile-name"
          placeholder="Nome"
          type="text"
          required
        />
        <span className="popup__error" id="popup-edit-profile-name-error"></span>
      </label>

      <label className="popup__field">
        <input
          className="popup__input popup__input_type_description"
          id="popup-edit-profile-description"
          name="popup-edit-profile-description"
          placeholder="Sobre mim"
          required
          type="text"
        />
        <span
          className="popup__error"
          id="popup-edit-profile-description-error"
        ></span>
      </label>

      <button className="button popup__button" type="submit" aria-label="Salvar">
        Salvar
      </button>
    </form>
  );
}