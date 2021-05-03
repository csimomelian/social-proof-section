import Cards from "./components/cards";
import { Header } from "./components/header";
import GlobalStyle from "./globalStyles";
import { Wrapper, Inner } from "./styled/wrappers";

function App() {
  return (
    <>
        <GlobalStyle />
        <Wrapper>
            <Inner>
                <Header>
                    header
                </Header>
                <Cards />
            </Inner>
        </Wrapper>
    </>
  );
}

export default App;