import React, { useContext } from "react";
import AppContext from "../../context/AppContext";

const FavoriteCity = ({
  city,
  isFavorite,
  latitude,
  longitude,
  timezone,
  className,
  setIsMenuOpen,
  mainLocation,
}) => {
  const {
    getForecastBySearchValue,
    existingFavorites,
    setExistingFavorites,
    setLocation,
    setIsLoading,
    tempUnit,
    location,
  } = useContext(AppContext);

  const handleDelete = async () => {
    const noMainLocation = existingFavorites.filter(
      (favorite) => favorite.city !== city
    );
    if (location.city === city)
      setLocation((prev) => ({ ...prev, isFavorite: false }));

    localStorage.setItem("Favorite", JSON.stringify(noMainLocation));
    setExistingFavorites(noMainLocation);
  };

  const handleUnpin = async () => {
    const noMainLocation = existingFavorites.map((favorite) => ({
      ...favorite,
      mainLocation: false,
    }));

    localStorage.setItem("Favorite", JSON.stringify(noMainLocation));
    setExistingFavorites(noMainLocation);
  };

  const handlePin = async () => {
    const selectMainLocation = existingFavorites.map((favorite) => {
      return {
        ...favorite,
        mainLocation: favorite.city === city ? true : false,
      };
    });

    localStorage.setItem("Favorite", JSON.stringify(selectMainLocation));
    setExistingFavorites(selectMainLocation);
  };

  const handleChangeCurrentCity = async () => {
    setIsMenuOpen((prev) => !prev);
    getForecastBySearchValue({
      city,
      isFavorite,
      mainLocation,
      latitude,
      longitude,
      timezone,
      tempUnit,
    });
    setIsLoading(true);
  };
  return (
    <div className={className}>
      {mainLocation ? (
        <button onClick={handleUnpin} className="MenuPinButton">
          <img
            src="./icons/unpin.svg"
            alt="unpin favorite location"
            className="MenuIcon"
          />
        </button>
      ) : (
        <button onClick={handlePin} className="MenuPinButton">
          <img
            src="./icons/pin.svg"
            alt="pin favorite location"
            className="MenuIcon"
          />
        </button>
      )}
      <span onClick={handleChangeCurrentCity} className="MenuFavoriteCity">
        {city}
      </span>
      <button onClick={handleDelete} className="MenuDeleteButton">
        <img
          src="./icons/delete.svg"
          alt="delete favorite location"
          className="MenuIcon"
        />
      </button>
    </div>
  );
};

export default FavoriteCity;
