import { createContext, useContext, useState } from "react";

export const UIContext = createContext();
export const useUIContext = () => useContext(UIContext);

export const UIProvider = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [cartLength, setCartLength] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [wishlistedItems, setWishlistedItems] = useState([]);
  const value = {
    drawerOpen,
    setDrawerOpen,
    showSearchBox,
    setShowSearchBox,
    cartLength,
    setCartLength,
    cartItems,
    setCartItems,
    wishlistedItems,
    setWishlistedItems,
  };
  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};
