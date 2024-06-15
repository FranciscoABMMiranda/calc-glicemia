import Form from "../../components/form/Form";
import { StyledMain, StyledTitle } from "./Home.styles";

const Home = () => {
  return (
    <StyledMain>
      <StyledTitle>
        Calcule oa quantidade de insulina que deve tomar
      </StyledTitle>
      <Form />
    </StyledMain>
  );
};

export default Home;
