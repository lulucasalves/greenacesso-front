import { NextPage } from "next";
import Head from "next/head";

import { Menu } from "~/components";
import { CharactersTemplate } from "~/templates";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rick and Morty</title>
      </Head>
      <Menu />
      <CharactersTemplate />
    </>
  );
};

export default Home;
