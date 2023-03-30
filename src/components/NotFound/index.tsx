import Image from "next/image";
import { Container } from "./NotFound.style";

export function NotFound() {
  return (
    <Container>
      <Image src="/icons/morty.svg" width={300} height={300} alt="not found" />
      <p>Nada foi encontrado!</p>
    </Container>
  );
}
