import React, { createContext, useEffect, useState } from "react";

export const HomeContext = createContext();

import { properties } from "../data";

const HomeContextProvider = ({ children }) => {
  const [homes, setHomes] = useState(properties);

  const isDefault = (value) => value === "default";

  const [country, setCountry] = useState("default");
  const [property, setProperty] = useState("default");
  const [price, setPrice] = useState("default");
  const [filteredHouses, setFilteredHouses] = useState([]);

  const handleSearch = () => {
    const [minPrice, maxPrice] =
      price !== "default" ? price.split("-").map(Number) : [0, Infinity];
    const newHouses = homes.filter((house) => {
      const housePrice = parseInt(house.price);
      if (
        house.country === country &&
        house.property === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ) {
        return house;
      }
      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return house;
      }

      if (!isDefault(country) && isDefault(property) && isDefault(price)) {
        return house.country === country;
      }
      if (isDefault(country) && !isDefault(property) && isDefault(price)) {
        return house.property === property;
      }
      if (isDefault(country) && isDefault(property) && !isDefault(price)) {
        return housePrice >= minPrice && housePrice <= maxPrice;
      }
      if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
        return house.country === country && house.property === property;
      }
      if (!isDefault(country) && isDefault(property) && !isDefault(price)) {
        return (
          house.country === country &&
          house.price >= minPrice &&
          house.price <= maxPrice
        );
      }
      if (isDefault(country) && !isDefault(property) && !isDefault(price)) {
        return (
          house.property === property &&
          housePrice >= minPrice &&
          housePrice <= maxPrice
        );
      }
      return false;
    });
    setFilteredHouses(newHouses);
  };

  useEffect(() => {
    if (filteredHouses.length === 0) setFilteredHouses(homes.slice(0, 0));
  });

  return (
    <HomeContext.Provider value={{ homes }}>{children}</HomeContext.Provider>
  );
};

export default HomeContextProvider;
