import React, { useState, useEffect } from 'react'
import GifList from './GifList';
import GifSearch from './GifSearch';

function GifListContainer() {

        const [gifs, setGifs] = useState([]);
        const [query, setQuery] = useState("");

        useEffect(()=>{
            fetch ("https://api.giphy.com/v1/gifs/search?q=${query}&api_key=7hrwpk0dZpyzGWneTRka4Nuj1YCzDgNm")
            .then(resp => resp.json())
            .then(({ data }) => {
                const gifs = data.map((gif) => ({ url: gif.images.original.url }));
                setGifs(gifs);
              });
        },[query])
        console.log(gifs)

        function handleSearch(e) {
            setQuery(e.target.value);
          }
        
  return (
    <div>
        <GifSearch handleSearch={handleSearch}/> 
        <GifList handleGifs={gifs}/>
    </div>
  )
}

export default GifListContainer