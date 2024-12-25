# nfidSign

![Screenshot 2024-12-25 172730](https://github.com/user-attachments/assets/7e746902-6ddc-482f-86e8-8a6e8c73d50d)

_Read this in other languages:_ 🇧🇷 [_Português_](./src/translations/README-ptBR.md) 🟢🟡

**nfidSign** is the third authentication project I developed this week, focused on using the NFID protocol on the Internet Computer (ICP) network. This project demonstrates how to authenticate users using NFID, a login solution that supports Google accounts and also automatically creates a wallet during the authentication process.

## Features

- Login with NFID, including support for Google accounts.
- Automatic creation of a wallet for the user during login.
- Display of messages indicating whether the user is authenticated.
- Logout option to end the user session.

## 🛠️ Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Vite**: Modern tool for frontend development.
- **DFINITY AuthClient**: Library for authentication in Internet Computer-based projects.
- **Sass**: CSS extension language used for styling.

## Learnings

- Integration with the NFID protocol for secure authentication.
- Setting up React projects with Vite for agile development.
- Using AuthClient for identity management on ICP.
- Responsive and user-friendly styling with Sass.
- Understanding how wallets work in the ICP ecosystem, automatically created by NFID.

# 🚧 How to Run Locally

1. **Make sure you're using a compatible environment**:  
   - For **Windows** users, you need to install **Windows Subsystem for Linux (WSL)** and set up a Linux distribution.

2. Install the authentication library:
```bash
npm install --save @dfinity/auth-client
```

3. Start ICP:
```bash
dfx start --background
```

4. Deploy the project:
```bash
dfx deploy
```
