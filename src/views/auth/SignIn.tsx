import footerImage from "/images/footer-image.png";
import curate from "/images/curate.svg";
import { useNavigate } from "react-router-dom";
import {  useAppSelector } from "@/store/hook";
import Loading from "@/components/shared/Loading";
import { NeynarAuthButton, SIWN_variant, useNeynarContext } from "@neynar/react";


const SignIn = () => {
  const { isAuthenticated, user } = useNeynarContext();
  console.log(isAuthenticated, user)

  const { isOnboarded } = useAppSelector((state) => state.auth.onboard);
  const navigate = useNavigate();
  const loading = useAppSelector((state) => state.auth.user.loading);

  if (isAuthenticated) {
    if (isOnboarded) {
      navigate("/home");
    }

    navigate("/onboarding");
  }

  return (
    <Loading loading={loading}>
      <div className="flex w-full flex-col ">
        <div className="flex flex-col w-full p-6 sm:p-0 sm:w-2/4 md:w-2/5 mx-auto">
          <div className="flex gap-2 pt-36">
            <img src={curate} width={36} height={36} alt="curate logo" />
            <h3 className="text-xl font-bold mt-1 text-[#24292E]">
              curatecast
            </h3>
          </div>
          <h1 className="mt-8 font-semibold text-2xl text-[#24292E]">
            Personalise <br /> your Farcaster feed
          </h1>
          <div className="mt-4 lg:text-lg ">
            <p className="text-[#24292E]">
              No clutter, no noise, just engaging casts for you on your
              curatecast <b>“For you”</b> tab
            </p>
          </div>

          
          <div className="w-[280px] mt-8  rounded-md bg-[#005377] px-3 py-3 text-lg font-semibold text-white shadow-sm hover:bg-[#126e9c] ">
            <NeynarAuthButton 
            className="w-full flex flex-row  gap-2 justify-center items-center"
            label="Login"
            icon={<span role="img" aria-label="login">🔑</span>}
            variant={SIWN_variant.FARCASTER}
            modalStyle={{ backgroundColor: 'lightblue' }}
            modalButtonStyle={{ color: 'white' }}  />
          </div>
          
        </div>

        <div className="w-full fixed bottom-0 mt-24">
          <img src={footerImage} className="w-full h-auto" alt="footer image" />
        </div>
      </div>

    </Loading>
  );
};

export default SignIn;
