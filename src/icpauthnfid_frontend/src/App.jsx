import { useState, useEffect } from 'react';
import { Actor, HttpAgent } from "@dfinity/agent";
import { AuthClient } from "@dfinity/auth-client";
import { icpauthnfid_backend } from 'declarations/icpauthnfid_backend';

const canisterId = import.meta.env.CANISTER_ICPAUTHNFID_BACKEND;

function App() {
  const [authClient, setAuthClient] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [principalFront, setPrincipalFront] = useState("");
  const [principalBack, setPrincipalBack] = useState("");

  useEffect(() => {
    async function initAuthClient() {
      const client = await AuthClient.create();
      setAuthClient(client);

      if (client.isAuthenticated()) {
        await handleLoginSuccess(client);
      }
    }
    initAuthClient();
  }, []);

  async function handleLoginSuccess(client) {
    const identity = client.getIdentity();
    const principalId = identity.getPrincipal().toText();
    setPrincipalFront(`Principal_Id obtido no Frontend: ${principalId}`);

    const agent = new HttpAgent({ identity });
    const actor = Actor.createActor(icpauthnfid_backend, {
      agent,
      canisterId,
    });

    try {
      const principalBackEnd = await actor.getUserPrincipal();
      setPrincipalBack(`Principal_Id obtido no Backend: ${principalBackEnd}`);
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Erro ao obter Principal ID do Backend:", error);
    }
  }

  async function login() {
    if (!authClient) return;

    const APP_NAME = "NFID Example";
    const APP_LOGO = "https://nfid.one/icons/favicon-96x96.png";
    const identityProvider = `https://nfid.one/authenticate?applicationName=${APP_NAME}&applicationLogo=${APP_LOGO}`;

    authClient.login({
      identityProvider,
      onSuccess: () => handleLoginSuccess(authClient),
      windowOpenerFeatures: `
        left=${window.screen.width / 2 - 525 / 2},
        top=${window.screen.height / 2 - 705 / 2},
        toolbar=0,location=0,menubar=0,width=525,height=705
      `,
    });
  }

  async function logout() {
    if (authClient) {
      await authClient.logout();
      setIsLoggedIn(false);
      setPrincipalFront("");
      setPrincipalBack("");
    }
  }

  return (
    <main style={{ textAlign: "center", padding: "2rem" }}>
      <img src="/logo2.svg" alt="DFINITY logo" style={{ marginBottom: "2rem" }} />
      {isLoggedIn ? (
        <>
          <p>{principalFront}</p>
          <p>{principalBack}</p>
          <button className='logout' onClick={logout} style={{ padding: "1rem", fontSize: "1rem" }}>
            Logout
          </button>
        </>
      ) : (
        <button onClick={login} style={{ padding: "1rem", fontSize: "1rem" }}>
          Login NFID
        </button>
      )}
    </main>
  );
}

export default App;
