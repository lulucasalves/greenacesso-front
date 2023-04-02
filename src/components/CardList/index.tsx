import { useDispatch, useSelector } from "react-redux";
import { FaChild, FaSkull, FaQuestion } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

import { addFavorite, removeFavorite } from "~/store/favorites";
import { IRootState } from "~/store";
import { IGetCharacter } from "~/types";

import {
  CardImage,
  CardContainer,
  Episodes,
  IsAlive,
  Location,
  Name,
  Status,
  Data,
  NameContainer,
  AliveContainer,
  Content,
} from "./CardList.style";

export function CardList({ value }: { value: IGetCharacter }) {
  const { favorites } = useSelector((auth: IRootState) => auth.favorites);
  const dispatch = useDispatch();

  return (
    <CardContainer alive={value.status}>
      {favorites.includes(value.id) ? (
        <AiFillStar
          onClick={() => {
            dispatch(removeFavorite(value.id));
          }}
          className="star"
          size={24}
        />
      ) : (
        <AiOutlineStar
          className="star"
          size={24}
          onClick={() => {
            dispatch(addFavorite(value.id));
          }}
        />
      )}
      <Content
        className="content"
        onClick={() => {
          document.location.replace(`/character/${value.id}`);
        }}
      >
        <CardImage className="cardImage" url={value.image} />
        <Data>
          <NameContainer>
            <Name title={value.name}>{value.name}</Name>
            <Episodes>
              Appeared in {value.episode.length} episode
              {value.episode.length > 1 && "s"}
            </Episodes>
          </NameContainer>

          <Status>
            <p>
              <span>Gender:</span> {value.gender}
            </p>
            <p title={value.species}>
              <span>Specie:</span> {value.species}
            </p>
          </Status>
          <AliveContainer>
            <IsAlive alive={value.status}>
              {value.status === "Alive" ? (
                <FaChild size={14} />
              ) : value.status === "Dead" ? (
                <FaSkull />
              ) : (
                <FaQuestion />
              )}
              {value.status}
            </IsAlive>
            <Location title={value.location.name}>
              <HiLocationMarker size={16} />
              {value.location.name}
            </Location>
          </AliveContainer>
        </Data>
      </Content>
    </CardContainer>
  );
}
