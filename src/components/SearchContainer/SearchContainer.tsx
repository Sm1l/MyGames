import React, { useState } from "react";
import { Search } from "../Search/Search";
import { CardsContainer } from "../CardsContainer";

const SearchContainer: React.FC = () => {
  const [search, setSearch] = useState<string | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);

  return (
    <>
      <Search setSearch={setSearch} setPageNumber={setPageNumber} />
      {search && (
        <CardsContainer
          title={`Searched games: ${search}`}
          ordering="-popularity"
          search={search}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      )}
    </>
  );
};

export { SearchContainer };
