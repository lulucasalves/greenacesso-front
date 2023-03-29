import {
  Card,
  CardContainer,
  Cards,
  Container,
  Episodes,
  IsAlive,
  Name,
  Status,
} from "./Characters.style";
import { FaChild, FaSkull, FaQuestion } from "react-icons/fa";

export function Characters() {
  return (
    <Container>
      <Cards>
        <CardContainer>
          <Card>
            <Name>Rick Sanchez</Name>
          </Card>
          <Status>
            <p>
              <span>Gender:</span> Male
            </p>
            <p>
              <span>Specie:</span> Human
            </p>
          </Status>
          <IsAlive alive="alive">
            <FaChild size={14} />
            Alive
          </IsAlive>
          <Episodes>Appeared in 20 episodes</Episodes>
        </CardContainer>
        <CardContainer>
          <Card />
        </CardContainer>
        <CardContainer>
          <Card />
        </CardContainer>
        <CardContainer>
          <Card />
        </CardContainer>
        <CardContainer>
          <Card />
        </CardContainer>
        <CardContainer>
          <Card />
        </CardContainer>
      </Cards>
    </Container>
  );
}
