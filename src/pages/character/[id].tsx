import Head from "next/head";

import { Menu } from "~/components";
import { CharacterTemplate } from "~/templates";

export default function Character() {
  return (
    <>
      <Head>
        <title>Rick and Morty</title>
      </Head>
      <Menu />
      <CharacterTemplate />
    </>
  );
}
