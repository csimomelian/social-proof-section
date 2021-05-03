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
        <footer>
          <p class="attribution">
            Challenge by <a rel="noreferrer" href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
            Coded by <a rel="noreferrer" href="https://github.com/csimomelian/social-proof-section">omisc</a>.
          </p>
      </footer>
    </>
  );
}

export default App;