import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

/* **Componente principal: GifExpertApp**
- Creamos el State categories y setCategories para cambiarlo, como estado inicial fijammos 'Samurai'
- Retornamos:
  - Componente AddCategory donde como Propiedad pasamos la fx setCategories que cambia el State categories
  - Mapeamos el State categories, y por cada elemento:category creamos un componente GifGrid donde como Propiedad pasamos cada elemento:category

*/

const GifExpertApp = (props) => {
  const [categories, setCategories] = useState(["Samuari"]);
  

  /*     const handleAdd = () => {
            setCategories([...categories, 'Maya'])
        } */

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

GifExpertApp.propTypes = {};

export default GifExpertApp;
