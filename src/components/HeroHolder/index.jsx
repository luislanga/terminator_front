import { Container } from "./styles";
import t800 from "../../assets/t800.jpg";
import kindergartencop from "../../assets/kindergartencop.jpg";
import arrow from "../../assets/arrow.svg";
import smiley from "../../assets/smiley.png";

export function HeroHolder() {
  return (
    <Container>
      <img className="t800" src={t800} alt="" />
      <img className="cop" src={kindergartencop} alt="" />
      <img className="arrow" src={arrow} alt="" />
      <img className="smiley" src={smiley} alt="" />
    </Container>
  );
}
