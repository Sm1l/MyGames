import React, { useState } from "react";

import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

import { STitle, SFindContainer } from "./stylesSearch";

interface IProps {
  setSearch: any;
  setPageNumber: any;
  //???
}

const Search: React.FC<IProps> = ({ setSearch, setPageNumber }) => {
  const [value, setValue] = useState("");

  const handleButtonClick = (e: any) => {
    e.preventDefault();
    if (value.trim()) {
      setSearch(value);
      setPageNumber(1);
    }
    setValue("");
  };
  // const handleFormChange = (e: any) => {
  //   // e.preventDefault();
  //   setValue(e.target.value);
  // };

  return (
    <>
      <STitle>MyGames</STitle>
      <SFindContainer noValidate autoComplete="off">
        <TextField
          label="Game"
          maxRows={1}
          placeholder="search the game"
          fullWidth
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button variant="outlined" color="primary" sx={{}} onClick={handleButtonClick} type="submit">
          Search
        </Button>
      </SFindContainer>
    </>
  );
};

export { Search };
