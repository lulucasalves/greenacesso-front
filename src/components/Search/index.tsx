import { FaSearch } from "react-icons/fa";
import { Container } from "./Search.style";

export function Search({ search }: { search: (value: string) => void }) {
  return (
    <Container
      onSubmit={(e) => {
        e.preventDefault();
        search(e.target[0].value);
      }}
    >
      <input className="effect-7" placeholder="Enter character name" />
      <button type="submit">
        <FaSearch size={16} />
      </button>
      <span className="focus-border">
        <i />
      </span>
    </Container>
  );
}
