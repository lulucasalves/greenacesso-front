import Image from "next/image";

import { Container } from "./NotFoundCharacter.style";

export function NotFoundCharacter() {
  return (
    <Container>
      <Image src="/icons/morty.svg" width={300} height={300} alt="not found" />
      <p>This character not exist!</p>
    </Container>
  );
}
