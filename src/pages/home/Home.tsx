import Form from "../../components/form/Form";
import { StyledMain, StyledTitle } from "./Home.styles";

const Home = () => {
  return (
    <StyledMain>
      <StyledTitle>Calcule o seu nível de glicémia</StyledTitle>
      <Form />
    </StyledMain>
  );
};

export default Home;
