import Head from "next/head";

import { Menu } from "~/components";
import { FavoritesTemplate } from "~/templates";

export default function Favorites() {
  return (
    <>
      <Head>
        <title>Rick and Morty</title>
      </Head>
      <Menu />
      <FavoritesTemplate />
    </>
  );
}
