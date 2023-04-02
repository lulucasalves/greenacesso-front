import { useRouter } from "next/router";

import { Character, Title } from "~/components";

import { Container } from "./Character.style";

export function CharacterTemplate() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Container>
      <Title url="/" title="Character" button="All Characters" url2='/favorites' button2='My Favorites' />
      {id && <Character id={id as string} />}
    </Container>
  );
}
