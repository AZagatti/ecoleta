import React from "react";
import { Link } from "react-router-dom";
import { FiLogIn, FiMoon, FiSun } from "react-icons/fi";

import { Container, Main } from "./styles";
import logoImg from "../../assets/logo.svg";
import logoDarkImg from "../../assets/logo-dark.svg";
import useCustomTheme from "../../hooks/useCustomTheme";

const Home: React.FC = () => {
  const { handleChangeTheme, theme } = useCustomTheme();

  return (
    <Container>
      <div className="content">
        <header>
          <img src={theme === 'light' ? logoImg : logoDarkImg} alt="Ecoleta" />

          <button onClick={() => handleChangeTheme()}>
            {theme === "light" ? <FiMoon /> : <FiSun />}
          </button>
        </header>

        <Main>
          <h1>Seu marketplace de coleta de resíduos.</h1>
          <p>
            Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente
          </p>

          <Link to="/create-point">
            <span>
              <FiLogIn />
            </span>
            <strong>Cadastre um ponto de coleta</strong>
          </Link>
        </Main>
      </div>
    </Container>
  );
};

export default Home;
