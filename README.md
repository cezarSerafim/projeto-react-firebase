##Projeto Prático: Desenvolvimento Web com React.js e Firebase

Este repositório contém o código desenvolvido para a disciplina de Tecnologias para Desenvolvimento Web, como parte do curso de Análise e Desenvolvimento de Sistemas. O objetivo da atividade foi desenvolver aplicações web modernas utilizando React.js, com integração a serviços de autenticação e banco de dados em nuvem, além de deploy em ambiente de produção acessível publicamente.


##🛠️ Ambiente e Tecnologias

A infraestrutura do projeto foi montada com as seguintes ferramentas:


React.js: Biblioteca JavaScript para construção de interfaces de usuário baseadas em componentes reutilizáveis, utilizando hooks como useState e useEffect para gerenciamento de estado.
React Router Dom: Biblioteca para gerenciamento de rotas e navegação entre páginas, com arquivo de rotas centralizado e separado (AppRoutes.js).
Firebase Authentication: Serviço do Google utilizado para cadastro e autenticação de usuários via e-mail e senha, gerando um UID único por usuário.
Firebase Firestore Database: Banco de dados NoSQL em nuvem utilizado para armazenamento dos dados dos usuários, vinculando as informações ao UID gerado na autenticação.
Firebase Hosting: Plataforma de hospedagem utilizada para o build e deploy da aplicação, tornando-a acessível publicamente na internet.
Node.js e npm: Ambiente de execução JavaScript e gerenciador de pacotes utilizado para instalação de dependências e execução local do projeto.
Visual Studio Code: Editor de código utilizado para o desenvolvimento de toda a aplicação.
Git e GitHub: Ferramenta de versionamento e plataforma de hospedagem do código fonte.



##🚀 Funcionalidades e Fluxo da Aplicação

O projeto é composto por duas aplicações distintas:

##Parte 1 — Login App

Aplicação simples de autenticação desenvolvida com React.js:


Tela de Login: Interface com campos de e-mail e senha.
Validação de Credenciais: Verificação dos dados inseridos com lógica condicional utilizando useState.
Feedback ao Usuário: Exibição dinâmica de mensagem de sucesso ou erro conforme as credenciais informadas.


##Parte 2 — Firebase App

Aplicação completa com três páginas distintas e integração com os serviços do Firebase:


Página de Cadastro: Formulário com cinco campos — e-mail, senha, nome, sobrenome e data de nascimento. Realiza o cadastro do usuário no Firebase Authentication e armazena os dados complementares no Firestore Database, associando o UID gerado ao registro do usuário.
Página de Login: Autenticação via Firebase Authentication com e-mail e senha. Em caso de sucesso, redireciona o usuário para a Página Principal. Em caso de credenciais inválidas, exibe mensagem informando que o usuário não está cadastrado.
Página Principal: Recupera e exibe os dados do usuário autenticado — nome, sobrenome e data de nascimento — buscando as informações diretamente no Firestore Database através do UID do usuário logado.
