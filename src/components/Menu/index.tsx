import Image from "next/image";
import { Container } from "./Menu.style";

export function Menu() {
  return (
    <Container>
      <Image src="/icons/rickandmorty.svg" width={400} height={200} alt={""} />
    </Container>
  );
}
