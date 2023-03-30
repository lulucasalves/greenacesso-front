import { FormEvent } from "react";
import { FaSearch } from "react-icons/fa";
import { Container } from "./TopFilter.style";

export function TopFilter({ search }: { search: (value: string) => void }) {
  return (
    <Container>
      <input />
      <button type="submit">
        <FaSearch size={16} />
      </button>
    </Container>
  );
}
