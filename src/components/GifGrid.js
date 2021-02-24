import React, { useState, useEffect } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";


/* **Component GigGrid**

-useEffect vela para que solo haya un renderizado del componente a medida que vaya habiendo actualizaciones del estado del componente

-Llamamos a la fx getGifs con category como argumento, category es el resultado de mapear el State categories de GiExpertApp en elementos category y llamar al componente GifGrid con cadacategory:
  - fx async getGifs llama al API de giphy que previamente hemos probado con Postman.
  - La fx mediante un map guarda en gifs un objeto de objetos o gifs con los datos que necesitamos, id, title y url
  - La fx devueleve una promesa (imgs) y then cambiamos el State images con dicha promesa usando setImages.
- Devolvemos el Componente GifGridItem por cada elemento de nuestro State images, es decir cada elemento de gifs.
- Pasamos al Componenete GifGridItem una key y los valores de cada elemento del State images desectructurados usando spread {...img}

- useFetchGifs devuelve el objeto {data:[], loading:true}.
- llamamos el custom hook useFetchGifs con el argumento category
- Desectructuramos las consts data y loading para almacenar el resultado de useFetchGifs por separado pero solo nos quedamos con la const loading que es la que necesitamos ahora:
  - const loading = useFetchGifs.loading
  - const data = useFetchGifs.data


*/

export const GifGrid = ({ category }) => {
const {data: images, loading} = useFetchGifs(category)

  return (
    <>
      <h3 className='animate__animated animate__bounce animate__delay-2s'>{category}</h3>
      {loading ? <p>Loading</p> : null}
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
