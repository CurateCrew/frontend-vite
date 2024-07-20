import "@farcaster/auth-kit/styles.css";
import { QRCode } from "@farcaster/auth-kit";
import footerImage from "/images/footer-image.png";
import curate from "/images/curate.svg";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { getUserPreferences, setLoading, setUser } from "@/store/slices/auth";
import { useSignIn } from "@farcaster/auth-kit";
import { MdClose } from "react-icons/md";
import Loading from "@/components/shared/Loading";

interface SignInModalProps {
  setOpen: (value: boolean) => void;
  url: string;
}

export const SignInModal: React.FC<SignInModalProps> = ({ setOpen, url }) => {
  return (
    <div className={`relative z-10`}>
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in" />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 ">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="w-full mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <div className="w-full font-bold text-3xl flex justify-end">
                    <MdClose
                      className="cursor-pointer"
                      onClick={() => setOpen(false)}
                    />
                  </div>
                  <h1 className="text-2xl font-semibold leading-loose text-gray-900">
                    Sign in with Farcaster
                  </h1>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Scan with your phone's camera to continue
                    </p>
                    <p className="text-sm text-[#005377] mt-2">
                      <a
                        href="https://warpcast.com/~/signup"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Need to create an account?
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center px-4 py-3 mt-3 sm:px-6">
              <QRCode size={300} uri={url} />
            </div>

            <div className="w-full flex justify-center items-center mt-3 mb-6">
              <a
                target="_blank"
                href={url}
                className="flex text-center justify-center font-medium"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="18"
                  fill="none"
                >
                  <title>Sign in With Farcaster QR Code</title>
                  <path
                    fill="#005377"
                    fillRule="evenodd"
                    d="M0 3a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3Zm4-1.5v.75c0 .414.336.75.75.75h2.5A.75.75 0 0 0 8 2.25V1.5h1A1.5 1.5 0 0 1 10.5 3v12A1.5 1.5 0 0 1 9 16.5H3A1.5 1.5 0 0 1 1.5 15V3A1.5 1.5 0 0 1 3 1.5h1Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <p className="ml-3 text-[#005377]">I'm using my phone →</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SignIn = () => {
  const { isAuthenticated } = useAppSelector((state) => state.auth.user);
  const { isOnboarded } = useAppSelector((state) => state.auth.onboard);
  const navigate = useNavigate();
  const loading = useAppSelector((state) => state.auth.user.loading);
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);

  if (isAuthenticated) {
    if (isOnboarded) {
      navigate("/home");
    }

    navigate("/onboarding");
  }

  const {
    isError,
    signIn,
    url,
    isSuccess,
    connect,
    reconnect,
    channelToken,
    data,
    validSignature,
  } = useSignIn({
    onSuccess: () => {
      if (isSuccess && validSignature && data) {
        dispatch(setLoading(true));

        dispatch(
          setUser({ loading: false, isAuthenticated: true, profile: data })
        );
        dispatch(getUserPreferences(`${data.fid}`));
        navigate("/user");
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

          <button
            type="button"
            onClick={() => {
              Login();
              setOpen(true);
            }}
            className="flex gap-2 w-[150px] mt-8 justify-center items-center rounded-md bg-[#005377] px-3 py-3 text-lg font-semibold text-white shadow-sm hover:bg-[#126e9c] "
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.74556 0.608887H13.0651V15.3781H11.5503V8.61286H11.5354C11.368 6.7431 9.80669 5.27787 7.90533 5.27787C6.00396 5.27787 4.44263 6.7431 4.27521 8.61286H4.26035V15.3781H2.74556V0.608887Z"
                fill="white"
              />
              <path
                d="M0 2.70516L0.615385 4.80144H1.13609V13.2818C0.874658 13.2818 0.662722 13.4951 0.662722 13.7583V14.33H0.568047C0.306611 14.33 0.0946746 14.5433 0.0946746 14.8064V15.3781H5.39645V14.8064C5.39645 14.5433 5.18451 14.33 4.92308 14.33H4.8284V13.7583C4.8284 13.4951 4.61647 13.2818 4.35503 13.2818H3.78698V2.70516H0Z"
                fill="white"
              />
              <path
                d="M11.645 13.2818C11.3835 13.2818 11.1716 13.4951 11.1716 13.7583V14.33H11.0769C10.8155 14.33 10.6035 14.5433 10.6035 14.8064V15.3781H15.9053V14.8064C15.9053 14.5433 15.6934 14.33 15.432 14.33H15.3373V13.7583C15.3373 13.4951 15.1253 13.2818 14.8639 13.2818V4.80144H15.3846L16 2.70516H12.213V13.2818H11.645Z"
                fill="white"
              />
            </svg>

            <span>Sign In</span>
          </button>
        </div>

        <div className="w-full fixed bottom-0 mt-24">
          <img src={footerImage} className="w-full h-auto" alt="footer image" />
        </div>
      </div>

      {open && url && <SignInModal setOpen={setOpen} url={url} />}
    </Loading>
  );
};

export default SignIn;
