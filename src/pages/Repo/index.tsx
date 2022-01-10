import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";

import { Header, RepoInfo, Issues } from "./styles";
import Logo from "../../assets/logo.svg";

interface RepositoryParams {
  repository: string;
}

export const Repo: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={Logo} alt="Logo GitCollection" />
        <Link to="/">
          <FiChevronLeft />
          Voltar
        </Link>
      </Header>
      <RepoInfo>
        <header>
          <img
            src="https://avatars.githubusercontent.com/u/66978333?v=4"
            alt="BrHCastro"
          />
          <div>
            <strong>BrHCastro</strong>
            <p>lorem ipsum dolor sit amet, con la</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>254548</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>250</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>79</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepoInfo>
      <Issues>
        <Link to="/">
          <div>
            <strong>BrHCastro/lorem ipsum</strong>
            <p>lorem ipsum dolor sit amet, con la</p>
          </div>
          <FiChevronLeft size={20} />
        </Link>
      </Issues>
    </>
  );
};
