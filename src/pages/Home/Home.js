import HeadlineCard from "../../components/HeadlineCard/headlineCard";
import { HeadlinesContainer, TinyWrapper, Wrapper } from "./styles";
import "./styles.css";

function Home() {
  return (
    <Wrapper>
      <h1>Clarafolio</h1>
      <hr
        style={{
          height: 0.5,
          borderWidth: '0.05rem',
          width: '25rem',
          backgroundColor: 'red',
          color: 'red',
          borderColor: 'red',
          marginTop: 0,
          marginBottom: '4rem'
        }}
      />
      <TinyWrapper>
        <p>Hello, welcome to my humble portfolio. </p>
        <p>I hope you enjoy it!</p>
      </TinyWrapper>

      <HeadlinesContainer>
        <HeadlineCard />
        <HeadlineCard />
        {/* <HeadlineCard /> */}
      </HeadlinesContainer>
    </Wrapper>
  );
}

export default Home;
