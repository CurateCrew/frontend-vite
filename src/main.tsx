import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { Provider } from 'react-redux';
import { AuthKitProvider } from "@farcaster/auth-kit";
import { providers } from "ethers";
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from './store';


const config = {
  // For a production app, replace this with an Optimism Mainnet
  // RPC URL from a provider like Alchemy or Infura.
  relay: "https://relay.farcaster.xyz",
  rpcUrl: "https://mainnet.optimism.io",
  domain: "curatecast.vercel.app",
  siweUri: "https://curatecast.vercel.app",
  provider: new providers.JsonRpcProvider(undefined, 10),
  // redirectUrl:'/home'
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthKitProvider config={config}>
      <PersistGate loading={null} persistor={persistor}>
          <App />
      </PersistGate>
      </AuthKitProvider>
    </Provider>
  </React.StrictMode>,
)
