import { Card, CardContainer, CardImage, CardSubtitle, CardTitle } from "./styles";

function HeadlineCard() {
  return (
    <Card>
      <CardImage/>
      <CardContainer>
        <CardTitle>About Me</CardTitle>
        <CardSubtitle>Find out a little about who <br/> I am and my history. <br/> (And also some things that I like).</CardSubtitle>
      </CardContainer>
    </Card>
  );
}

export default HeadlineCard;
