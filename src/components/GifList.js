import React from "react";

function GifList({ handleGifs }) {
  return (
    <ul>
      {handleGifs.map((gif, id) => (
        <li key={id}>
          <img src={gif.url} alt={gif.title} />
        </li>
      ))}
    </ul>
  );
}
export default GifList