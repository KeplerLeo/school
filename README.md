# School

## Requisitos

Para rodar este projeto, você precisará:

- Git
- Docker
- Um navegador web moderno (Chrome, Firefox, Safari, etc)

## Instalação

1. Clone este repositório para a sua máquina local

    ```sh
      git clone git@github.com:KeplerLeo/school.git
    ```
  
2. Navegue até a pasta da aplicação

    ```sh
    cd school/app
    ```

3. Execute o docker compose

    ```sh
    docker compose up -d
    ```

Com isso o projeto vai estar em funcionamento.

## Como acessar

### Backend

O backend está localizado na porta 3001, e pode ser acessado em: <http://localhost:3001/>

#### Rotas

- Listagem: Pode ser acessado pelo método get em <http://localhost:3001/listagem>
- Criação: Pode ser acessado pelo método post em <http://localhost:3001/criacao> e necessita dos dados para o cadastro no corpo da requisição, exemplo:

    ```json
      {
        "bimestre": "PRIMEIRO",
        "disciplina": "Biologia",
        "nota": 5
      }
    ```

- Remoção: Pode ser acessado pelo método delete em <http://localhost:3001/remocao> e necessita dos dados para a exclusão no corpo da requisição, exemplo:

    ```json
      {
        "bimestre": "PRIMEIRO",
        "disciplina": "Biologia"
      }
    ```

### Frontend

O frontend está localizado na porta 3000, e pode ser acessado pelo navegador em: <http://localhost:3000/>

#### Funcionalidades

- Listagem: Ao acessar a página serão carregadas todas as disciplinas cadastradas na base de dados conforme o bimestre.

- Criação: Ao clicar no botão de Adicionar uma PopUp será exibida com um formulário para cadastro, após o preenchimento e a submissão do formulário a lista de disciplinas deve ser atualizada.

- Remoção: Ao clicar no botão de Remover a disciplina será excluída da base de dados resultando na remoção da lista de disciplinas.

## Contato

Se você tiver alguma dúvida ou sugestão, por favor, entre em contato comigo:

- [Email](mailto:leokepler@gmail.com)
- [LinkedIn](https://www.linkedin.com/in/keplerleo/)