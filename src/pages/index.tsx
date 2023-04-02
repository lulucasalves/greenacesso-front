import Head from "next/head";

import { Menu } from "~/components";
import { CharactersTemplate } from "~/templates";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rick and Morty</title>
      </Head>
      <Menu />
      <CharactersTemplate />
    </>
  );
}
