import React from 'react';

function PopupWithForm({props}) {

  return (
    <section className={`popup popup_type_${props.name}`}>
      <form className="form" name={props.name} noValidate>
        <button type="button" className="popup__close-button" aria-label="Закрыть попап"></button>
        <h2 className="form__title">{props.title}</h2>
        <props.children />
      </form>
    </section>
  )
}

export default PopupWithForm;

