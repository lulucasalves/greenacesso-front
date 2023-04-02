import Image from "next/image";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setFavorites } from "~/store/favorites";

import { Container } from "./Menu.style";

export function Menu() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getStorageFavorites = localStorage.getItem("favorites");

    if (getStorageFavorites)
      dispatch(setFavorites(JSON.parse(getStorageFavorites)));
  }, [dispatch]);

  return (
    <Container>
      <Image src="/icons/rickandmorty.svg" width={400} height={200} alt={""} />
    </Container>
  );
}
