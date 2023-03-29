import { FormEvent } from "react";
import { FaSearch } from "react-icons/fa";
import { Container } from "./Search.style";

export function Search({ search }: { search: (value: string) => void }) {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    search(e.target[0].value);
  }

  return (
    <Container onSubmit={(e) => onSubmit(e)}>
      <input />
      <button type="submit">
        <FaSearch size={16} />
      </button>
    </Container>
  );
}
