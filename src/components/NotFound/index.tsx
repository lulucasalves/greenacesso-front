import Image from "next/image";
import { useDispatch } from "react-redux";

import { clearAllFilters } from "~/store/filters";

import { Container } from "./NotFound.style";

export function NotFound({ hasButton = true }: { hasButton?: boolean }) {
  const dispatch = useDispatch();

  return (
    <Container>
      <Image src="/icons/morty.svg" width={300} height={300} alt="not found" />
      <p>No character was found!</p>
      {hasButton && (
        <button onClick={() => dispatch(clearAllFilters())}>
          Clear all filters
        </button>
      )}
    </Container>
  );
}
