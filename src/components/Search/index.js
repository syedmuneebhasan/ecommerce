import { IconButton, Slide } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  SearchBoxContainer,
  SearchedItem,
  SearchedItemsContainer,
  SearchField,
  SearchFieldContainer,
} from "../../styles/search";
import { useUIContext } from "../../context/ui";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { Colors } from "../../styles/theme";
import { products } from "../../data";
import { useNavigate } from "react-router-dom";

export const SearchBox = () => {
  const navigate = useNavigate();
  const { showSearchBox, setShowSearchBox } = useUIContext();
  const [searchText, setSearchText] = useState("");
  const [searchedItems, setSearchedItems] = useState([]);

  const handleSearchTextChange = (e) => {
    if (e.target.value === "") {
      setSearchedItems([]);
      return;
    }
    setSearchText(e.target.value);
    const filteredItems = products.filter((item) =>
      item.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchedItems(filteredItems);
  };

  return (
    <Slide direction="down" in={showSearchBox} timeout={500}>
      <SearchBoxContainer>
        <SearchFieldContainer>
          <SearchField
            placeholder="Search..."
            fullWidth
            variant="standard"
            sx={{ fontSize: { xs: "1rem", md: "2rem" } }}
            onChange={handleSearchTextChange}
          />
          <IconButton>
            <SearchIcon
              sx={{
                fontSize: { xs: "2rem", md: "4rem" },
                color: Colors.secondary,
              }}
            />
          </IconButton>
          <IconButton
            onClick={() => setShowSearchBox(false)}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
            }}
          >
            <CloseIcon
              sx={{
                fontSize: { xs: "2rem", md: "4rem" },
                color: Colors.secondary,
              }}
            />
          </IconButton>
        </SearchFieldContainer>
        <SearchedItemsContainer>
          {searchedItems?.map((item) => (
            <SearchedItem
              mt={1}
              onClick={() =>
                navigate(`/product/${item.id}`, {
                  state: {
                    product: item,
                  },
                })
              }
            >
              {item.name}
            </SearchedItem>
          ))}
        </SearchedItemsContainer>
      </SearchBoxContainer>
    </Slide>
  );
};
