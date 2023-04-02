import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { useCharacters } from "~/client/characters";
import { IRootState } from "~/store";
import { setAllFiltersCharacters } from "~/store/filters";
import { CardsLayout, Pagination } from "~/components";

import { Cards, Container } from "./Characters.style";

export function Characters() {
  const { characters } = useSelector((auth: IRootState) => auth.characters);
  const { layout } = useSelector((auth: IRootState) => auth.layout);
  const { data, refetch, isLoading, isFetching } = useCharacters({
    ...characters,
    ids: [],
  });
  const dispatch = useDispatch();

  function paginate(page: number) {
    if (page <= data.info.pages && page > 0) {
      dispatch(setAllFiltersCharacters({ ...characters, page }));
    }
  }

  useEffect(() => {
    refetch();
  }, [characters, refetch]);

  return (
    <Container>
      <Cards>
        {!isLoading && !isFetching ? (
          <>
            {data !== undefined && (
              <CardsLayout hasButton layout={layout} data={data.results} />
            )}
          </>
        ) : (
          [1, 2, 3, 4, 5, 6, 7, 8, 9].map((value: number) => (
            <Image
              key={value}
              src="/gifs/portal.gif"
              width={320}
              height={320}
              alt="portal"
            />
          ))
        )}
      </Cards>
      {data && data.info && (
        <Pagination
          maxPage={data.info.pages}
          paginate={paginate}
          page={characters.page}
        />
      )}
    </Container>
  );
}
