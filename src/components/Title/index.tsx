import { useDispatch } from "react-redux";

import { clearAllFilters } from "~/store/filters";

import { Container } from "./Title.style";

export function Title({
  title,
  button,
  url,
  button2,
  url2,
}: {
  title: string;
  button: string;
  url: string;
  button2?: string;
  url2?: string;
}) {
  const dispatch = useDispatch();

  return (
    <Container>
      <p>{title}</p>
      <div>
        <button
          onClick={() => {
            dispatch(clearAllFilters());
            document.location.replace(url);
          }}
        >
          {button}
        </button>
        {button2 && url2 && (
          <button
            className="button2"
            onClick={() => {
              dispatch(clearAllFilters());
              document.location.replace(url2);
            }}
          >
            {button2}
          </button>
        )}
      </div>
    </Container>
  );
}
