import "@farcaster/auth-kit/styles.css";
import { SignInButton, useProfile } from "@farcaster/auth-kit";
import footerImage from "../../../public/images/footer-image.png";
import curate from "../../../public/images/curate.svg";
import {  useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/store/hook";
import useQuery from "@/utils/hooks/useQuery";
import { REDIRECT_URL_KEY } from "@/constants/app.constant";
import { setUser } from "@/store/slices/auth";
import appConfig from "@/configs/app.config";

const SignIn = () => {

 const dispatch = useAppDispatch()
  const query = useQuery()
  const navigate = useNavigate()
  const redirectUrl = query.get(REDIRECT_URL_KEY)



  const profile = useProfile();
  const {
    isAuthenticated
  } = profile;


  useEffect(() => {
    const init = async () =>{
      if (isAuthenticated) {
        dispatch(setUser(profile))
        navigate(
          redirectUrl
          ? redirectUrl
          : appConfig.authenticatedEntryPath
        )
      }
  
      console.log(isAuthenticated, redirectUrl
        ? redirectUrl
        : appConfig.authenticatedEntryPath)
    }
    
    init()

  }, [isAuthenticated])

    return (
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
    )
}

export default SignIn
