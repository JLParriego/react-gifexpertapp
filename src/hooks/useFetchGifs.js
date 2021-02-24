import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


/* **useFetchGifs custom hook**

- useFetchGifs tiene como Prop category que viene del Componente GifGrid que a su vez viene del Componente principal GifExpertApp, siendo category el resultado de mapear el State categories y crear un Componente GifGrid por cada category.

- Definimos es State state y su modificador setState siendo su State inicial un objeto que incluye el array data y el boolean loading.

- useEffect es un hook que indica a React qué tiene que hacer después de renderizarse, después de actualizar el DOM. En este caso solo se va a disparar si la categoría cambia como indicamos en el array, segundo argumento de useEffect
   - En este caso llamar al helper - fx getGifs.
   - El helper - fx getGifs devuelve una promesa con un objeto con {id, title, url} de cada imagen y then cambiamos el State state con setState:
      - Como state le pasamos el objeto que viene con la promesa a data
      - loading lo pasamos a false

*/
export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {

    getGifs(category)
    .then(imgs => {
        setState({
            data: imgs,
            loading: false
        })
    })

  }, [category]);

  return state; //devuelve el objeto {data:[], loading:true}
};
