import { Cards, Container } from "./Favorites.style";
import { useCharacters } from "~/client/characters";
import { IRootState } from "~/store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { CardsLayout } from "~/components";
import Image from "next/image";

export function Favorites() {
  const { layout } = useSelector((auth: IRootState) => auth.layout);
  const { favorites } = useSelector((auth: IRootState) => auth.favorites);

  const { data, refetch, isLoading, isFetching } = useCharacters({
    ids: favorites,
    page: 1,
  });

  useEffect(() => {
    const local = localStorage.getItem("favorites");

    if (local && data !== undefined) refetch();
  }, [refetch, favorites, data]);

  return (
    <Container>
      <Cards>
        {!isLoading && !isFetching ? (
          <CardsLayout
            hasButton={false}
            layout={layout}
            data={favorites.length ? data : data.results}
          />
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
    </Container>
  );
}
