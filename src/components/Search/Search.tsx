import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

import { STitle, SFindContainer } from "./stylesSearch";
import { searchVariants } from "./animationSearch";

interface SearchProps {
  setSearch: (value: string | null) => void;
  setPageNumber: (value: number) => void;
  //???
}

const Search: React.FC<SearchProps> = ({ setSearch, setPageNumber }) => {
  const [value, setValue] = useState("");

  const handleButtonClick = (e: any) => {
    e.preventDefault();
    if (value.trim()) {
      setSearch(value);
      setPageNumber(1);
    }
    setValue("");
  };

  return (
    <>
      <AnimatePresence>
        <STitle
          initial={"hidden"}
          animate={"visible"}
          exit={"hidden"}
          transition={{ duration: 0.5 }}
          variants={searchVariants}
          viewport={{ amount: 0, once: true }}
        >
          MyGames
        </STitle>
        <SFindContainer
          noValidate
          autoComplete="off"
          initial={"hidden"}
          animate={"visible"}
          exit={"hidden"}
          transition={{ duration: 0.5 }}
          variants={searchVariants}
          viewport={{ amount: 0, once: true }}
        >
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
      </AnimatePresence>
    </>
  );
};

export { Search };
