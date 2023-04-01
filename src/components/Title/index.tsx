import { Container } from "./Title.style";

export function Title({
  title,
  button,
}: {
  title: string;
  button: string;
  url: string;
}) {
  return (
    <Container>
      <p>{title}</p>
      <button>{button}</button>
    </Container>
  );
}
