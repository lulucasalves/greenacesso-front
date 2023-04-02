import { useRouter } from "next/router";

import { Character, Title } from "~/components";

import { Container } from "./Character.style";

export function CharacterTemplate() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Container>
      <Title url="/" title="Character" button="All Characters" />
      {id && <Character id={id as string} />}
    </Container>
  );
}
