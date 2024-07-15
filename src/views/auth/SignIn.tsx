import "@farcaster/auth-kit/styles.css";
import { QRCode } from "@farcaster/auth-kit";
import footerImage from "../../../public/images/footer-image.png";
import curate from "../../../public/images/curate.svg";
import {  useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/store/hook";
import useQuery from "@/utils/hooks/useQuery";
import { REDIRECT_URL_KEY } from "@/constants/app.constant";
import { setUser } from "@/store/slices/auth";
import appConfig from "@/configs/app.config";
import { useSignIn } from '@farcaster/auth-kit';
import { MdClose } from 'react-icons/md';

interface SignInModalProps {
  setOpen: (value: boolean) => void;
  url: string;
}

export const SignInModal: React.FC<SignInModalProps> = ({ setOpen, url }) => {
  
  return (
    <div className={`relative z-10`}>
      <div
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 "
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                
                <div className="w-full mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <div className="w-full font-bold text-3xl flex justify-end">
                    <MdClose className="cursor-pointer" onClick={() => setOpen(false)} />
                  </div>
                  <h1  className="text-2xl font-semibold leading-loose text-gray-900">
                    Sign in with Farcaster
                  </h1>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                    Scan with your phone's camera to continue
                    </p>
                    <p className="text-sm text-[#005377] mt-2"><a href="https://warpcast.com/~/signup" target="_blank" rel="noopener noreferrer">Need to create an account?</a></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center px-4 py-3 mt-3 sm:px-6">
              <QRCode size={300} uri={url} />

            </div>

            <div className="w-full flex justify-center items-center mt-3 mb-6">
              <a target="_blank" href={url} className="flex text-center justify-center font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="18" fill="none"><title>Sign in With Farcaster QR Code</title><path fill="#005377" fillRule="evenodd" d="M0 3a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3Zm4-1.5v.75c0 .414.336.75.75.75h2.5A.75.75 0 0 0 8 2.25V1.5h1A1.5 1.5 0 0 1 10.5 3v12A1.5 1.5 0 0 1 9 16.5H3A1.5 1.5 0 0 1 1.5 15V3A1.5 1.5 0 0 1 3 1.5h1Z" clipRule="evenodd"></path></svg>
                  <p className="ml-3 text-[#005377]" >I'm using my phone →</p>
                </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

const SignIn = () => {

 const dispatch = useAppDispatch()
  const query = useQuery()
  const navigate = useNavigate()
  const redirectUrl = query.get(REDIRECT_URL_KEY)

  const [open, setOpen] = useState(false)

  const {
    isError,
      signIn,
     url,
     isSuccess,
     connect,
     reconnect,
     channelToken,
     data,
     validSignature
   } = useSignIn({
    onSuccess: () => {
      if (isSuccess && validSignature && data) {
        
        dispatch(setUser({isAuthenticated:true, profile:data}))

        navigate(
          redirectUrl
          ? redirectUrl
          : appConfig.authenticatedEntryPath
        )
      }
      
    },
  });
 
  const Login = useCallback(() => {
    if (isError) {
      reconnect();
    }
    signIn();

    if (url) {
      console.log(url);
    }
  }, [isError, reconnect, signIn, url]);

  useEffect(() => {
    if (!channelToken) {
      connect();
    }
  }, [channelToken, connect]);


    return (
      <>
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

              <button
                type="button"
                onClick={ () => {
                  Login()
                  setOpen(true)
                }
                }
                className="flex gap-2 w-[150px] mt-8 justify-center items-center rounded-md bg-[#005377] px-3 py-3 text-lg font-semibold text-white shadow-sm hover:bg-[#126e9c] "
              >
                <img width={20} height={20} src='/public/images/farcaster.png' />
                <span>Sign In</span>
              </button>

          </div>
          
          <div className="w-full fixed bottom-0 mt-24">
            <img src={footerImage} className="w-full h-auto" alt="footer image" />
          </div>
        </div>

        {open  && <SignInModal setOpen={setOpen} url={url} />}
        </>
    )
}

export default SignIn
