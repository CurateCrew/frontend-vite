import "@farcaster/auth-kit/styles.css";
import { providers } from "ethers";
import { AuthKitProvider, SignInButton, useProfile } from "@farcaster/auth-kit";
import footerImage from "../public/images/footer-image.png";
import curate from "../public/images/curate.svg";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./store/hook";
import { setUser } from "./store/slices/auth";

const config = {
  // For a production app, replace this with an Optimism Mainnet
  // RPC URL from a provider like Alchemy or Infura.
  relay: "https://relay.farcaster.xyz",
  rpcUrl: "https://mainnet.optimism.io",
  domain: "curatecast.vercel.com",
  siweUri: "https://curatecast.vercel.com",
  provider: new providers.JsonRpcProvider(undefined, 10)
};



function App() {
  const dispatch = useAppDispatch()
  const { isAuthenticated } =
  useAppSelector((state) => state.auth.user)
  const profile = useProfile();
  const {
    isAuthenticated : isAuth,
    profile: { fid, displayName, custody },
  } = profile;
  
  useEffect(() => {
    
    if (isAuth) {
      dispatch(setUser(profile) )
      
    }
    console.log(isAuthenticated, isAuth)
  }, [isAuth])
  return (
    
      <main className="min-h-screen w-full font-inter box-border">
        <AuthKitProvider config={config}>

          {isAuthenticated ? (
            <div>
              <p>
                Hello, {displayName}! Your FID is {fid}.
              </p>
              <p>
                Your custody address is: <pre>{custody}</pre>
              </p>
              <SignInButton />
            </div>
          ) : (
            <div className="flex w-full flex-col ">
              <div className="flex flex-col w-full p-6 sm:p-0 sm:w-2/4 md:w-2/5 mx-auto">
                <div className="flex gap-2 pt-36">
                  <img src={curate} width={36} height={36} alt="curate logo" />
                  <h3 className="text-xl font-bold mt-1">curatecast</h3>
                </div>
                <h1 className="mt-8 font-semibold text-2xl">
                  Personalise <br /> your Farcaster feed
                </h1>
                <div className="mt-4 lg:text-lg ">
                  <p>
                  No clutter, no noise, just engaging casts for you on your curatecast <b>“For you”</b> tab
                  </p>
                  
                </div>
                <div className="flex mt-8 text-white">
                  <SignInButton />
                </div>
              </div>
              
              <div className="w-full fixed bottom-0 mt-24">
                <img src={footerImage} className="w-full h-auto" alt="footer image" />
              </div>
            </div>
          )}
        </AuthKitProvider>
      </main>
  );
}



export default App;
