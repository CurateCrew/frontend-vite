import Layout from "./components/layouts/Layout";

function App() {
  
  return (
    
      // <main className="min-h-screen w-full font-inter box-border">

      //     {isAuthenticated ? (
      //       <div>
      //         <p>
      //           Hello, {displayName}! Your FID is {fid}.
      //         </p>
      //         <p>
      //           Your custody address is: <pre>{custody}</pre>
      //         </p>
      //         <SignInButton />
      //       </div>
      //     ) : (
      //       <div className="flex w-full flex-col ">
      //         <div className="flex flex-col w-full p-6 sm:p-0 sm:w-2/4 md:w-2/5 mx-auto">
      //           <div className="flex gap-2 pt-36">
      //             <img src={curate} width={36} height={36} alt="curate logo" />
      //             <h3 className="text-xl font-bold mt-1">curatecast</h3>
      //           </div>
      //           <h1 className="mt-8 font-semibold text-2xl">
      //             Personalise <br /> your Farcaster feed
      //           </h1>
      //           <div className="mt-4 lg:text-lg ">
      //             <p>
      //             No clutter, no noise, just engaging casts for you on your curatecast <b>“For you”</b> tab
      //             </p>
                  
      //           </div>
      //           <div className="flex mt-8 text-white">
      //             <SignInButton />
      //           </div>

      //         </div>
              
      //         <div className="w-full fixed bottom-0 mt-24">
      //           <img src={footerImage} className="w-full h-auto" alt="footer image" />
      //         </div>
      //       </div>
      //     )}
      // </main>

      <Layout />
  );
}



export default App;
