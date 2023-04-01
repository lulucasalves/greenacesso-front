import {
  CardImage,
  CardContainer,
  Episodes,
  IsAlive,
  Location,
  Name,
  Status,
} from "./Card.style";
import { FaChild, FaSkull, FaQuestion } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { IRootState } from "~/store";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "~/store/favorites";

export function Card({ value }: { value: any }) {
  const { favorites } = useSelector((auth: IRootState) => auth.favorites);
  const dispatch = useDispatch();

  return (
    <CardContainer alive={value.status} key={value.id}>
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
      <CardImage className="cardImage" url={value.image}>
        <Name title={value.name}>
          {value.name.length > 20
            ? value.name.slice(0, 20) + "..."
            : value.name}
        </Name>
      </CardImage>
      <Status>
        <p>
          <span>Gender:</span>{" "}
          {value.gender.length > 5
            ? value.gender.slice(0, 5) + "..."
            : value.gender}
        </p>
        <p title={value.species}>
          <span>Specie:</span>{" "}
          {value.species.length > 5
            ? value.species.slice(0, 5) + "..."
            : value.species}
        </p>
      </Status>
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
        {value.location.name.length > 25
          ? value.location.name.slice(0, 25) + "..."
          : value.location.name}
      </Location>
      <Episodes>
        Appeared in {value.episode.length} episode
        {value.episode.length > 1 && "s"}
      </Episodes>
    </CardContainer>
  );
}
