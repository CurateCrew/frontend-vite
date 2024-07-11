import "@farcaster/auth-kit/styles.css";
import { providers } from "ethers";
import { AuthKitProvider, SignInButton, useProfile } from "@farcaster/auth-kit";
import footerImage from "../public/images/footer-image.png";
import curate from "../public/images/curate.svg";
import farcasterGreen from "../public/images/farcaster-green.png";
import { GrCircleInformation } from "react-icons/gr";

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

  const profile = useProfile();
  const {
    isAuthenticated,
    profile: { fid, displayName, custody },
  } = profile;
  return (
    
      <main className="min-h-screen">
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
        <>
          <div className="flex justify-center pt-36">
            <img src={curate} width={36} height={36} alt="curate logo" />
            <h3 className="ml-2 text-lg mt-1">curatecast</h3>
          </div>
          <h1 className="text-center mt-8 text-2xl">
            Personalise <br /> your farcaster feed
          </h1>
          <div className="text-center mt-4 lg:text-lg md:text-sm">
            <p>
              Curate engaging casts for yourself tailored to <br /> your interests
              and account or post preferences.
            </p>
            <p className="mt-4">
              No clutter, no noise, just quality casts for you on <br /> your
              curatecast “For you” tab
            </p>
          </div>
          <div className="flex justify-center mt-8 text-white">
            <SignInButton />
            
            <div className="cursor-pointer mt-3">
              <img
                className="mx-2 inline"
                src={farcasterGreen}
                width={18}
                height={14}
                alt="farcaster green logo"
              />
              <p className="mt-2 inline text-greenButton text-lg">Sign in</p>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <GrCircleInformation className="mt-6 hidden md:block" />
            <p className="m-2 text-center lg:text-left">
              Curatecast is powered by farcaster to personalize your <br /> farcaster
              feed to your preferences. Learn more
            </p>
          </div>
          <div className="w-full mt-24">
            <img src={footerImage} className="w-full h-auto" alt="footer image" />
          </div>
        </>
      )}
        </AuthKitProvider>
      </main>
  );
}



export default App;
