import { CardsList, CardsSquare } from "./CardsLayout.style";
import { Card, CardList, NotFound } from "~/components";

export function CardsLayout({ data, layout,hasButton }: { data: any; layout: string; hasButton:boolean }) {
  return (
    <>
      {layout === "square" || innerWidth < 790 ? (
        <CardsSquare>
          {data.length ? (
            data.map((value: any) => <Card key={value.id} value={value} />)
          ) : (
            <NotFound hasButton={hasButton} />
          )}
        </CardsSquare>
      ) : (
        <CardsList>
          {data.length ? (
            data.map((value: any) => <CardList key={value.id} value={value} />)
          ) : (
            <NotFound hasButton={hasButton} />
          )}
        </CardsList>
      )}
    </>
  );
}
