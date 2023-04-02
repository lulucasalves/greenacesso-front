import { useDispatch, useSelector } from "react-redux";
import { FaGripHorizontal, FaListUl } from "react-icons/fa";

import { IRootState } from "~/store";
import { setAllFiltersCharacters } from "~/store/filters";
import { Search, FiltersForModal } from "~/components";
import { setLayouts } from "~/store/layout";

import { Container, Options, Card } from "./HeaderFilters.style";

export function HeaderFilters({ hasSearch = true }: { hasSearch?: boolean }) {
  const dispatch = useDispatch();
  const { characters } = useSelector((auth: IRootState) => auth.characters);
  const { layout } = useSelector((auth: IRootState) => auth.layout);

  function search(search: string) {
    dispatch(
      setAllFiltersCharacters({
        ...characters,
        page: 1,
        search,
      })
    );
  }

  function changeLayout(layout: "square" | "list") {
    dispatch(setLayouts(layout));
  }

  return (
    <Container>
      {hasSearch ? (
        <>
          <FiltersForModal />
          <Search search={search} />
        </>
      ) : (
        <div style={{ width: "100%" }} />
      )}
      <Options>
        <Card
          onClick={() => changeLayout("square")}
          layout={layout === "square"}
        >
          <FaGripHorizontal size={24} />
        </Card>
        <Card onClick={() => changeLayout("list")} layout={layout === "list"}>
          <FaListUl size={20} />
        </Card>
      </Options>
    </Container>
  );
}
