import { createContext, useState, useCallback } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  const addFavorite = useCallback((mealId) => {
    setFavoriteMealIds((currentFavIds) => [...currentFavIds, mealId]);
  }, []);

  const removeFavorite = useCallback((mealId) => {
    setFavoriteMealIds((currentFavIds) =>
      currentFavIds.filter((item) => item !== mealId)
    );
  }, []);

  return (
    <FavoritesContext.Provider
      value={{
        ids: favoriteMealIds,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
