import { IconButton, Slide } from "@mui/material";
import React from "react";
import { SearchBoxContainer, SearchField } from "../../styles/search";
import { useUIContext } from "../../context/ui";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { Colors } from "../../styles/theme";

export const SearchBox = () => {
  const { showSearchBox, setShowSearchBox } = useUIContext();
  return (
    <Slide direction="down" in={showSearchBox} timeout={500}>
      <SearchBoxContainer>
        <SearchField
          placeholder="Search..."
          fullWidth
          variant="standard"
          sx={{ fontSize: { xs: "1rem", md: "2rem" } }}
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
      </SearchBoxContainer>
    </Slide>
  );
};
