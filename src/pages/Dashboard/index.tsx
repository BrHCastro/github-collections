import React from "react";
import { Link } from "react-router-dom";

import { api } from "../../services/api";
import { Title, Form, Repos, Error } from "./styles";
import Logo from "../../assets/logo.svg";
import { FiChevronRight } from "react-icons/fi";

interface GithubRepository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [repos, setRepos] = React.useState<GithubRepository[]>(() => {
    const storageRepos = localStorage.getItem("@GitCollection:repositories");

    if (storageRepos) {
      return JSON.parse(storageRepos);
    }

    return [];
  });
  const [newRepo, setNewRepo] = React.useState("");
  const [inputError, setInputError] = React.useState("");
  const formEl = React.useRef<HTMLFormElement | null>(null);

  React.useEffect(() => {
    localStorage.setItem("@GitCollection:repositories", JSON.stringify(repos));
  }, [repos]);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setNewRepo(event.target.value);
  }

  async function handleAddRepo(
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();

    if (!newRepo) {
      setInputError("Digite o usuário/nome do repositório");
      return;
    }

    try {
      const response = await api.get<GithubRepository>(`repos/${newRepo}`);
      const repository = response.data;

      setRepos([...repos, repository]);
      formEl.current?.reset();
      setNewRepo("");
      setInputError("");
    } catch (err) {
      setInputError(`Repositório não encontrado`);
    }
  }

  return (
    <>
      <img src={Logo} alt="Logo" />
      <Title>Catálogo de Repositórios do GitHub</Title>
      <Form
        ref={formEl}
        onSubmit={handleAddRepo}
        hasError={Boolean(inputError)}
      >
        <input
          type="text"
          placeholder="UserName/Repository"
          onChange={handleInputChange}
        />
        <button type="submit">Buscar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repos>
        {repos.map((repository, index) => (
          <Link
            to={`repositories/${repository.full_name}`}
            key={repository.full_name + index}
          >
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repos>
    </>
  );
};

export default Dashboard;
