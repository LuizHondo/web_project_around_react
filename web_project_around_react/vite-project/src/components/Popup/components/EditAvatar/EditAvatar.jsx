export default function EditAvatar() {
  return (
    <form
      className="popup__form"
      name="popup-avatar-form"
      id="popup-avatar-form"
      noValidate
    >

      <label className="popup__field">
        <input
          className="popup__input popup__input_type_url"
          id="popup-avatar-link"
          name="popup-avatar-link"
          placeholder="URL da imagem de perfil"
          required
          type="url"
        />
        <span className="popup__error" id="popup-avatar-link-error"></span>
      </label>

      <button className="button popup__button" type="submit" aria-label="Salvar">
        Salvar
      </button>
    </form>
  );
}