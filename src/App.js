import React, { useState } from "react";
import "./App.css";
import PictureFrame from "./components/pictureFrame";

function App() {
  const [albumPhotos, setAlbumPhotos] = useState([]);
  const [albumId, setAlbumId] = useState([]);

  const getPhotos = async () => {
    await fetch(
      `https://jsonplaceholder.typicode.com/albums/${albumId.trim()}/photos`
    )
      .then((response) => response.json())
      .then((json) => setAlbumPhotos(json));
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="search">
          <input
            type="text"
            placeholder ="Enter an album id number"
            value={albumId}
            onChange={(e) => {
              setAlbumId(e.target.value);
            }}
          />
          <button onClick={() => getPhotos()}>Get Album Photos</button>
        </div>
        <div className="frames-container">
          {albumPhotos.length > 0 &&
            albumPhotos.map((photo, index) => {
              return (
                <PictureFrame
                  img={photo.url}
                  title={photo.title}
                  id={photo.id}
                  key = {photo.id}
                />
              );
            })}
        </div>
      </header>
    </div>
  );
}

export default App;
