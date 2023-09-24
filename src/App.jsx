import styled from "styled-components";
import GlobalStyles from "./styles/globalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
`;
const StyledApp = styled.main`
  background-color: red;
  padding: 2rem;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>The Wild Oasis</H1>
        <Button
          onClick={() => {
            alert("Check In!!");
          }}
        >
          Check in
        </Button>
        <Button
          onClick={() => {
            alert("Check Out!!");
          }}
        >
          Check Out
        </Button>
        <Input placeholder="Number of Guests" />
      </StyledApp>
    </>
  );
}

export default App;
