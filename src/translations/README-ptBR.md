# nfidSign

_Leia isso em outra lingua:_ 🇺🇸 [_English_](../../README.md) ⚪🔵

**nfidSign** é o terceiro projeto de autenticação que desenvolvi esta semana, focado no uso do protocolo NFID na rede Internet Computer (ICP). Este projeto demonstra como autenticar usuários utilizando o NFID, uma solução de login que suporta contas Google e também cria automaticamente uma carteira (wallet) no processo de autenticação.

## Funcionalidades

- Login com NFID, incluindo suporte a contas Google.
- Criação automática de uma wallet para o usuário durante o login.
- Exibição de mensagens indicando se o usuário está autenticado.
- Opção de logout para encerrar a sessão do usuário.

## 🛠️ Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para criação de interfaces de usuário.
- **Vite**: Ferramenta moderna para desenvolvimento frontend.
- **DFINITY AuthClient**: Biblioteca para autenticação em projetos baseados no Internet Computer.
- **Sass**: Linguagem de extensão para CSS, utilizada para estilização.

## Aprendizados

- Integração com o protocolo NFID para autenticação segura.
- Configuração de projetos React com Vite para desenvolvimento ágil.
- Uso do AuthClient para gerenciamento de identidade no ICP.
- Estilização responsiva e amigável ao usuário com Sass.
- Compreensão do funcionamento de wallets no ecossistema ICP, criadas automaticamente pelo NFID.

# 🚧 Como Executar Localmente

1. **Certifique-se de que está utilizando um ambiente compatível**:  
   - Para usuários de **Windows**, é necessário instalar o **Windows Subsystem for Linux (WSL)** e configurar uma distribuição Linux.  

2. Instale a biblioteca de autenticação: 
```bash
npm install --save @dfinity/auth-client

```

3. Iniciar o ICP
```bash
dfx start --background
```

4. Faça o deploy do projeto:
```bash
dfx deploy
```
