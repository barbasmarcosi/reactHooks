import { useState, useEffect, useReducer, useMemo, useRef } from "react";
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
  const [search, setSearch] = useState("");
  const searchInput = useRef(null);
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  const handleClick = (favorite) => {
    if (!favorites.favorites.includes(favorite)) {
      dispatch({ type: "ADD_TO_FAVORITES", payload: favorite });
    }
  };

  const filteredUsers = useMemo(
    () =>
      characters.filter((character) =>
        character.name.toLowerCase().includes(search.toLowerCase())
      ),
    [characters, search]
  );

  return (
    <div className="Characters">
      <div className="Utils">
        <button
          className="ShowFavorites"
          onClick={() => setShowFavorites(!showFavorites)}
        >
          Favorites
        </button>
        <input
          ref={searchInput}
          placeholder="Search character"
          type="text"
          className="Searcher"
          value={search}
          onChange={() => setSearch(searchInput.current.value)}
        />
      </div>
      <ul className={showFavorites ? "Favorites" : "Favorites--none"}>
        {showFavorites &&
          favorites.favorites.map((favorite) => (
            <li key={favorite.id} className="Favorite">
              {favorite.name}
            </li>
          ))}
      </ul>
      {filteredUsers.map((character) => (
        <div key={character.id} className="Character">
          <h2>{character.name}</h2>
          <img src={character.image} alt={character.name} />
          <button
            className="AddFavorite"
            onClick={() => handleClick(character)}
          >
            Add to favorite
          </button>
        </div>
      ))}
    </div>
  );
};

export default Characters;
