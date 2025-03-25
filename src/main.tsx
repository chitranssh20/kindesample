import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { KindeProvider } from "@kinde-oss/kinde-auth-react";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <KindeProvider
      clientId={"305f55883e134a31b4d5d34ed7d2f6a5"}
      domain={"https://buzzbar-development.au.kinde.com"}
      redirectUri={window.location.origin}
      logoutUri={window.location.origin}
    >
    <App />
    </KindeProvider>
  </StrictMode>,
)
