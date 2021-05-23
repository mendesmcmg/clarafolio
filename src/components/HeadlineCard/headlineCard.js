import { Card, CardContainer, CardImage, CardSubtitle, CardTitle } from "./styles";

function HeadlineCard() {
  return (
    <Card>
      <CardImage/>
      <CardContainer>
        <CardTitle>Sobre mim</CardTitle>
        <CardSubtitle>Informações sobre quem sou eu, de onde vim, etc</CardSubtitle>
      </CardContainer>
    </Card>
  );
}

export default HeadlineCard;
