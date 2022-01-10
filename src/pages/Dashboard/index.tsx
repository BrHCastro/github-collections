import React from "react";

import { Title, Form, Repos } from "./styles";
import Logo from "../../assets/logo.svg";
import { FiChevronRight } from "react-icons/fi";

export const Dashboard: React.FC = () => {
  return (
    <>
      <img src={Logo} alt="Logo" />
      <Title>Catálogo de Repositórios do GitHub</Title>
      <Form>
        <input type="text" placeholder="UserName/Repository" />
        <button type="submit">Buscar</button>
      </Form>
      <Repos>
        <a href="/repositories">
          <img
            src="https://avatars.githubusercontent.com/u/66978333?v=4"
            alt="Imagem Repositorio"
          />
          <div>
            <strong>brhcastro/repo-exemplo</strong>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
              veniam odio minus id.
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repos>
    </>
  );
};
