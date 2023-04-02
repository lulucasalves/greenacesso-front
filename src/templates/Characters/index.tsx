import { Characters, Filters, HeaderFilters, Title } from "~/components";

import { Container, Divisor } from "./Characters.style";

export function CharactersTemplate() {
  return (
    <Container data-testid="charactersTemplate">
      <Title url="/favorites" title="All Characters" button="My Favorites" />
      <HeaderFilters />
      <Divisor>
        <Filters />
        <Characters />
      </Divisor>
    </Container>
  );
}
