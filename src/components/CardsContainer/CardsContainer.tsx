import React, { useEffect, useState } from "react";

import { Card } from "../Card/Card";

import { SCardsContainer, SContainer, SP, STitle } from "./StyleCardsContainer";

import { getGames, searchGames } from "../../helpers/api";
import { ICard } from "../../interfaces/interfaces";
import { Pagination } from "@mui/material";
import { pageSize } from "../../helpers/api";

interface CardsContainerProps {
  title: string;
  ordering: string;
  search?: string;
  pageNumber?: number;
  setPageNumber?: any; //!!!!!
  // setPageNumber?: (value: number) => void;
  // setPageNumber?: React.Dispatch<React.SetStateAction<number>>;
}

const CardsContainer: React.FC<CardsContainerProps> = ({ title, ordering, search, pageNumber, setPageNumber }) => {
  const [games, setGames] = useState<ICard[]>([]);
  const [loading, setLoading] = useState(false);
  const [qtyOfAllSearchedGames, setQtyOfAllSearchedGames] = useState<number>(0);
  const [pagesQty, setPagesQty] = useState<number>(0);

  useEffect(() => {
    if (!search) {
      getGames(ordering).then((res) => {
        setGames(res.data.results);
        setLoading(true);
      });
    }
  }, [ordering]);

  useEffect(() => {
    if (search && typeof pageNumber === "number") {
      searchGames(search, pageNumber).then((res) => {
        setGames(res.data.results);
        setQtyOfAllSearchedGames(res.data.count);
        setPagesQty(Math.ceil(qtyOfAllSearchedGames / pageSize));
        setLoading(true);
      });
    }
  }, [search, qtyOfAllSearchedGames, pageNumber]);

  return (
    <>
      {loading ? (
        <SContainer>
          <STitle>{title}</STitle>
          <SCardsContainer>
            {games.map((game) => {
              return (
                <Card
                  id={game.id}
                  key={game.id}
                  name={game.name}
                  released={game.released}
                  rating={game.rating}
                  background_image={game.background_image}
                />
              );
            })}
          </SCardsContainer>
          {search && pagesQty > 1 && (
            <Pagination
              variant="outlined"
              shape="rounded"
              color="primary"
              siblingCount={1}
              count={pagesQty}
              page={pageNumber}
              onChange={(_, num) => {
                if (typeof pageNumber === "number") {
                  setPageNumber(num);
                }
              }}
              showFirstButton
              showLastButton
            />
          )}
          {search && qtyOfAllSearchedGames === 0 && <SP>not found</SP>}
        </SContainer>
      ) : (
        <SContainer>Loading...</SContainer>
      )}
    </>
  );
};

export { CardsContainer };
