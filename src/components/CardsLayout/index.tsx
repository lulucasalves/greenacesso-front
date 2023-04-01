import { CardsList, CardsSquare } from "./CardsLayout.style";
import { Card, CardList, NotFound } from "~/components";

export function CardsLayout({ data, layout }: { data: any; layout: string }) {
  return (
    <>
      {layout === "square" || innerWidth < 790 ? (
        <CardsSquare>
          {data ? (
            data.results.map((value: any) => (
              <Card key={value.id} value={value} />
            ))
          ) : (
            <NotFound />
          )}
        </CardsSquare>
      ) : (
        <CardsList>
          {data ? (
            data.results.map((value: any) => (
              <CardList key={value.id} value={value} />
            ))
          ) : (
            <NotFound />
          )}
        </CardsList>
      )}
    </>
  );
}
