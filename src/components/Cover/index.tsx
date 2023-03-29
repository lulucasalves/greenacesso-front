import Image from "next/image";
import { Container } from "./Cover.style";

export function Cover() {
  return (
    <Container>
      <Image src="/gifs/gif.gif" width={500} height={250} alt={""} />
    </Container>
  );
}
