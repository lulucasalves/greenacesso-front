import { Characters, Filters, Search } from "~/components";
import { setAllFiltersCharacters } from "~/store/characters";
import { Container, Divisor } from "./Characters.style";
import { useDispatch } from "react-redux";

export function CharactersTemplate() {
  const dispatch = useDispatch();

  function search(search: string) {
    dispatch(setAllFiltersCharacters({ page: 1, search }));
  }

  return (
    <Container>
      <Search search={search} />
      <Divisor>
        <Filters />
        <Characters />
      </Divisor>
    </Container>
  );
}
