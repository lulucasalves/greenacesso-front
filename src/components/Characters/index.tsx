import { Cards, Container } from "./Characters.style";
import { useCharacters } from "~/client/characters";
import { IRootState } from "~/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setAllFiltersCharacters } from "~/store/characters";
import { Card, NotFound, Pagination, Search } from "~/components";
import Image from "next/image";

export function Characters() {
  const { characters } = useSelector((auth: IRootState) => auth.characters);
  const { data, refetch, isLoading, isFetching } = useCharacters(characters);
  const dispatch = useDispatch();

  function paginate(page: number) {
    if (page <= data.info.pages && page > 0) {
      dispatch(setAllFiltersCharacters({ ...characters, page }));
    }
  }

  function search(search: string) {
    dispatch(setAllFiltersCharacters({ page: 1, search }));
  }

  useEffect(() => {
    refetch();
  }, [characters, refetch]);

  return (
    <Container>
      <Search search={search} />
      <Cards>
        {!isLoading && !isFetching ? (
          data ? (
            data.results.map((value: any) => (
              <Card key={value.id} value={value} />
            ))
          ) : (
            <NotFound />
          )
        ) : (
          [1, 2, 3, 4, 5, 6].map((value: any) => (
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
