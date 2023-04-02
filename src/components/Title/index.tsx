import { Container } from "./Title.style";
import { useDispatch } from "react-redux";
import { clearAllFilters } from "~/store/filters";

export function Title({
  title,
  button,
  url,
}: {
  title: string;
  button: string;
  url: string;
}) {
  const dispatch = useDispatch();

  return (
    <Container>
      <p>{title}</p>
      <button
        onClick={() => {
          dispatch(clearAllFilters());
          document.location.replace(url);
        }}
      >
        {button}
      </button>
    </Container>
  );
}
