import React, { useState } from "react";
import PropTypes from 'prop-types';


/* **Componente AddCategory**
- Creamos el State inputValue y setInputValue como la fx para cambiarlo, como State inicial fijamos cadena vacia ''.

- Como propiedad de este Componente tenemos la fx setCategories

- Definimos la fx handleInputChange que es llamada en el evento onChange del input y que reacciona a lo que escribe el usuario en el input, capturando el evento y cambiando el State inputValue con el value de ese evento utilizando la fx setInputValue.

- Definimos la fx handleSubmit que es llamada en el evento onSubmit del formulario y que reacciona al pulsar enter en el input y lanzar el formulario
  - Prevenimos que el formulario se envie al servidor, evento por defecto de un formulario.
  - Llamamos a la fx setCategories que cambia el State categories del Componente Principal GifExpertApp, metemos como parámetros categories que es el State actual de categories y que desestructuramos junto con el State inputValue pasando todos a ser el nuevo State de categories de GifExpertApp.
  - Acto seguido fijamos el State de inputValue como '' para dejarlo vacio.

  -Retornamos un formulario con un input cuyo valor es el State inputValue y que puede modificar el usuario y nosotros controlamos con las fxs handleInputChange y handleSubmit que se activan con onChange y onSubmit.

*/

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (evento) => {
    setInputValue(evento.target.value);
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories((categories) => [ inputValue, ...categories]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;
