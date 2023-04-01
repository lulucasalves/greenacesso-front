import Image from "next/image";
import { Container } from "./NotFound.style";
import { useDispatch } from "react-redux";
import { clearAllFilters } from "~/store/filters";

export function NotFound() {
  const dispatch = useDispatch();

  return (
    <Container>
      <Image src="/icons/morty.svg" width={300} height={300} alt="not found" />
      <p>No character was found!</p>
      <button onClick={() => dispatch(clearAllFilters())}>
        Clear all filters
      </button>
    </Container>
  );
}
