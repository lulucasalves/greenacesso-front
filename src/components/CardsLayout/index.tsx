import { Card, CardList, NotFound } from "~/components";
import { IGetCharacter } from "~/types";

import { CardsList, CardsSquare } from "./CardsLayout.style";

export function CardsLayout({
  data,
  layout,
  hasButton,
}: {
  data: IGetCharacter[];
  layout: string;
  hasButton: boolean;
}) {
  return (
    <>
      {layout === "square" || innerWidth < 790 ? (
        <CardsSquare>
          {data.length ? (
            data.map((value: IGetCharacter) => (
              <Card key={value.id} value={value} />
            ))
          ) : (
            <NotFound hasButton={hasButton} />
          )}
        </CardsSquare>
      ) : (
        <CardsList>
          {data.length ? (
            data.map((value: IGetCharacter) => (
              <CardList key={value.id} value={value} />
            ))
          ) : (
            <NotFound hasButton={hasButton} />
          )}
        </CardsList>
      )}
    </>
  );
}
