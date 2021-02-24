/* ** fx getGifs**
- fx que es llamada en GifGrid 
- fx async getGifs llama al API de giphy que previamente hemos probado con Postman.
- Mediante un map guardamos en gifs un objeto de objetos o gifs con los datos que necesitamos, id, title y url


*/



export const getGifs = async (category) => {
    const url =
      `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=5&api_key=wUQ9WWV00jaXOZIHn2Yymald9fUCCoUi`;

    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
      };
    });
    return(gifs);
  };