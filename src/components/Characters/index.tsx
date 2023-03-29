import {
  Card,
  CardContainer,
  Cards,
  Container,
  Episodes,
  IsAlive,
  Location,
  Name,
  Status,
} from "./Characters.style";
import { FaChild, FaSkull, FaQuestion } from "react-icons/fa";
import { useCharacters } from "~/client/characters";
import { HiLocationMarker } from "react-icons/hi";
import { IRootState } from "~/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setAllFiltersCharacters } from "~/store/characters";
import { Pagination, Search } from "~/components";

export function Characters() {
  const { characters } = useSelector((auth: IRootState) => auth.characters);
  const { data, refetch, isLoading } = useCharacters(characters);
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
        {data &&
          data.results.map((value: any) => {
            return (
              <CardContainer alive={value.status} key={value.id}>
                <Card url={value.image}>
                  <Name title={value.name}>
                    {value.name.length > 20
                      ? value.name.slice(0, 20) + "..."
                      : value.name}
                  </Name>
                </Card>
                <Status>
                  <p>
                    <span>Gender:</span> {value.gender}
                  </p>
                  <p title={value.species}>
                    <span>Specie:</span>{" "}
                    {value.species.length > 5
                      ? value.species.slice(0, 5) + "..."
                      : value.species}
                  </p>
                </Status>
                <IsAlive alive={value.status}>
                  {value.status === "Alive" ? (
                    <FaChild size={14} />
                  ) : value.status === "Dead" ? (
                    <FaSkull />
                  ) : (
                    <FaQuestion />
                  )}
                  {value.status}
                </IsAlive>
                <Location title={value.location.name}>
                  <HiLocationMarker size={14} />
                  {value.location.name.length > 25
                    ? value.location.name.slice(0, 25) + "..."
                    : value.location.name}
                </Location>
                <Episodes>
                  Appeared in {value.episode.length} episode
                  {value.episode.length > 1 && "s"}
                </Episodes>
              </CardContainer>
            );
          })}
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
