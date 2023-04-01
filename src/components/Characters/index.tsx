import { Cards, Container } from "./Characters.style";
import { useCharacters } from "~/client/characters";
import { IRootState } from "~/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setAllFiltersCharacters } from "~/store/characters";
import { Card, CardsLayout, NotFound, Pagination, Search } from "~/components";
import Image from "next/image";

export function Characters() {
  const { characters } = useSelector((auth: IRootState) => auth.characters);
  const { layout } = useSelector((auth: IRootState) => auth.layout);
  const { data, refetch, isLoading, isFetching } = useCharacters(characters);
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
          <CardsLayout layout={layout} data={data} />
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
      {data && (
        <Pagination
          maxPage={data.info.pages}
          paginate={paginate}
          page={characters.page}
        />
      )}
    </Container>
  );
}
