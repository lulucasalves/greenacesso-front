import { Characters, Filters, HeaderFilters } from "~/components";
import { Container, Divisor } from "./Characters.style";
import { useState } from "react";

export function CharactersTemplate() {
  const [cardsStyle, setCardsStyle] = useState("square");

  return (
    <Container>
      <HeaderFilters />
      <Divisor>
        <Filters />
        <Characters />
      </Divisor>
    </Container>
  );
}
