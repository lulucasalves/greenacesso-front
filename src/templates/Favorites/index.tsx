import { Favorites, Filters, HeaderFilters, Title } from "~/components";
import { Container, Divisor } from "./Favorites.style";

export function FavoritesTemplate() {
  return (
    <Container>
      <Title url="/" title="My Favorites" button="All Characters" />
      <HeaderFilters hasSearch={false} />
      <Divisor>
        <Favorites />
      </Divisor>
    </Container>
  );
}
