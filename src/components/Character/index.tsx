import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaChild, FaQuestion, FaSkull } from "react-icons/fa";
import { useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

import { NotFoundCharacter } from "~/components";
import { useCharacter } from "~/client/characters";
import { IRootState } from "~/store";
import { addFavorite, removeFavorite } from "~/store/favorites";

import {
  Container,
  CharacterContainer,
  CardImage,
  Title,
  InfoContainer,
  Location,
  IsAlive,
  Favorites,
} from "./Character.style";

export function Character({ id }: { id: string }) {
  const { data, isLoading, isFetching, refetch } = useCharacter(id as string);
  const { favorites } = useSelector((auth: IRootState) => auth.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data === undefined) refetch();
  }, [id, refetch, data]);

  function formatEpisode(text: string) {
    if (text.includes("episode/")) {
      const [, episode] = text.split("episode/");

      return episode;
    }

    return "";
  }

  return (
    <Container>
      {isLoading || isFetching ? (
        <Image src="/gifs/portal.gif" width={500} height={500} alt="portal" />
      ) : data !== undefined ? (
        <>
          <Favorites>
            {favorites.includes(parseInt(id as string)) ? (
              <div
                onClick={() => {
                  dispatch(removeFavorite(data.id));
                }}
              >
                Remove from favorites <AiFillStar size={20} />
              </div>
            ) : (
              <div
                onClick={() => {
                  dispatch(addFavorite(data.id));
                }}
                className="add"
              >
                Add to favorites <AiOutlineStar size={20} />
              </div>
            )}
          </Favorites>
          <CharacterContainer>
            <CardImage className="cardImage" url={data.image} />
            <Title>{data.name}</Title>
          </CharacterContainer>
          <InfoContainer>
            <IsAlive alive={data.status}>
              <span>Status: </span>
              {data.status === "Alive" ? (
                <FaChild size={14} />
              ) : data.status === "Dead" ? (
                <FaSkull />
              ) : (
                <FaQuestion />
              )}
              {data.status}
            </IsAlive>
            <p>
              <span>Specie: </span>
              {data.species}
            </p>
            <p>
              <span>Gender: </span>
              {data.gender}
            </p>
            <p>
              <span>Origin: </span>
              {data.origin.name}
            </p>
            <p>
              <span>Last Location: </span>
              {data.location.name}
            </p>
          </InfoContainer>
          <Location>
            <span>Appeared in: </span>
            {data.episode.map((episode: string) => (
              <p key={episode}>Episode {formatEpisode(episode)}</p>
            ))}
          </Location>
        </>
      ) : (
        <NotFoundCharacter />
      )}
    </Container>
  );
}
