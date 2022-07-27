import { useState, useEffect, useReducer } from "react";
import "../index.css";

const initialState = {
  favorites: [],
};

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  const handleClick = (favorite) => {
    dispatch({ type: "ADD_TO_FAVORITES", payload: favorite });
  };

  return (
    <div className="Characters">
        <button className="ShowFavorites" onClick={() => setShowFavorites(!showFavorites)}>Favorites</button>
        <ul className={showFavorites ? 'Favorites' : 'Favorites--none'}>
        {showFavorites && favorites.favorites.map((favorite) => (
            <li className="Favorite">{favorite.name}</li>
        ))}
        </ul>
      {characters.map((character) => (
        <div className="Character">
          <h2 key={character.id}>{character.name}</h2>
          <img src={character.image} alt={character.name} />
          <button className="AddFavorite" onClick={() => handleClick(character)}>
            Add to favorite
          </button>
        </div>
      ))}
    </div>
  );
};

export default Characters;
