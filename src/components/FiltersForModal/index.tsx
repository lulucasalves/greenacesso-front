import { IoMaleFemaleSharp } from "react-icons/io5";
import { GiDeathSkull } from "react-icons/gi";
import { RiAliensFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";

import { setAllFiltersCharacters } from "~/store/filters";
import { IRootState } from "~/store";

import { Container, Select, Selects, Title } from "./FiltersForModal.style";

export function FiltersForModal() {
  const dispatch = useDispatch();
  const { characters } = useSelector((auth: IRootState) => auth.characters);

  function changeGender(gender: string) {
    dispatch(
      setAllFiltersCharacters({
        ...characters,
        page: 1,
        gender,
      })
    );
  }

  function changeStatus(status: string) {
    dispatch(
      setAllFiltersCharacters({
        ...characters,
        page: 1,
        status,
      })
    );
  }

  function changeSpecie(specie: string) {
    dispatch(
      setAllFiltersCharacters({
        ...characters,
        page: 1,
        specie,
      })
    );
  }

  return (
    <Container>
      <Title>Filters</Title>
      <Selects>
        <Select>
          <IoMaleFemaleSharp size={20} />
          <select
            value={characters.gender}
            onChange={(e) => changeGender(e.target.value)}
          >
            <option disabled value="">
              Select a gender
            </option>
            <option value="all">All</option>
            <option value="female">Female</option>
            <option value="genderless">Genderless</option>
            <option value="male">Male</option>
            <option value="unknown">Unkown</option>
          </select>
        </Select>
        <Select>
          <GiDeathSkull size={18} />
          <select
            value={characters.status}
            onChange={(e) => changeStatus(e.target.value)}
          >
            <option disabled value="">
              Select a status
            </option>
            <option value="all">All</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unkown</option>
          </select>
        </Select>
        <Select>
          <RiAliensFill size={20} />
          <select
            value={characters.specie}
            id="specie"
            onChange={(e) => changeSpecie(e.target.value)}
          >
            <option disabled value="">
              Select a specie
            </option>
            <option value="all">All</option>
            <option value="alien">Alien</option>
            <option value="animal">Animal</option>
            <option value="cronenberg">Cronenberg</option>
            <option value="disease">Disease</option>
            <option value="human">Human</option>
            <option value="humanoid">Humanoid</option>
            <option value="mythological creature">Mythological Creature</option>
            <option value="poopybutthole">Poopybutthole</option>
            <option value="robot">Robot</option>
            <option value="unknown">Unknown</option>
          </select>
        </Select>
      </Selects>
    </Container>
  );
}
