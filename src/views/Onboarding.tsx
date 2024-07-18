import { MdArrowBack, MdHourglassTop } from "react-icons/md";
import curate from "/images/curate.svg";
import {
  Account,
  Channel,
  Interest,
  fetchSuggestedAccounts,
  fetchSuggestedChannels,
  saveUserPreferences,
  signOutSuccess,
  useAppDispatch,
  useAppSelector,
} from "@/store";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "@/components/shared/Loading";
import Tabs from "@/components/ui/Tabs";

export default function Onboarding() {
  const profile = useAppSelector((state) => state.auth.user.profile);
  const { loading, preferences, suggestedAccounts, suggestedChannels } =
    useAppSelector((state) => state.auth.onboard);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [userData, setUserData] = useState(true);
  const [prefrences, setPrefrences] = useState(false);
  const [suggestions, setSuggestions] = useState(false);
  const [preferencesSaved, setPreferencesSaved] = useState(false);

  const { TabNav, TabList, TabContent } = Tabs;

  const interests = [
    "nft",
    "ethereum",
    "base",
    "optimism",
    "design",
    "wallets",
    "dev",
    "engineering",
    "frontend",
    "backend",
    "music",
    "sports",
    "fashion",
    "beauty",
    "food",
    "game",
    "technology",
    "business",
    "finance",
    "arts",
    "culture",
    "travel",
    "fitness",
    "career",
    "animation",
    "comics",
    "science",
    "hackathon",
    "events",
    "defi",
    "build",
    "dao",
    "solidity",
  ];

  const [selectedInterests, setSelectedInterests] = useState<Interest[]>([]);

  const toggleInterest = (interest: Interest) => {
    setSelectedInterests((prevSelectedInterests) =>
      prevSelectedInterests.includes(interest)
        ? prevSelectedInterests.filter((i) => i !== interest)
        : [...prevSelectedInterests, interest]
    );
  };

  const [selectedChannels, setSelectedChannels] = useState<Channel[]>([]);
  console.log(selectedChannels);

  const toggleChannel = (channel: Channel) => {
    setSelectedChannels((prevSelectedChannels) =>
      prevSelectedChannels.includes(channel)
        ? prevSelectedChannels.filter((i) => i !== channel)
        : [...prevSelectedChannels, channel]
    );
  };

  const [selectedAccounts, setSelectedAccounts] = useState<Account[]>([]);
  console.log(selectedAccounts);

  const toggleAccount = (account: Account) => {
    setSelectedAccounts((prevSelectedAccounts) =>
      prevSelectedAccounts.includes(account)
        ? prevSelectedAccounts.filter((i) => i !== account)
        : [...prevSelectedAccounts, account]
    );
  };

  function sliceString(str: string) {
    if (str.length <= 50) {
      return str;
    }
    return str.slice(0, 50) + "...";
  }

  const savePreferences = () => {
    dispatch(
      saveUserPreferences({
        fid: `${profile.fid}`,
        preferences: selectedInterests,
      })
    );

    setPreferencesSaved(true);
  };

  const followSelected = () => {
    navigate("/ready");
  };

  useEffect(() => {
    const fetchSuggestions = () => {
      if (profile.fid && preferences.length > 0) {
        dispatch(fetchSuggestedAccounts(`${profile.fid}`));
        dispatch(fetchSuggestedChannels(`${profile.fid}`));
      }
    };

    if (preferencesSaved && !loading) {
      fetchSuggestions();
    }
  }, [preferencesSaved, profile.fid, preferences, dispatch, loading]);

  useEffect(() => {
    if (
      preferencesSaved &&
      !loading &&
      suggestedAccounts.users.length > 0 &&
      suggestedChannels.length > 0
    ) {
      setPreferencesSaved(false);
      // Set preferences view to false and suggestions view to true
      setPrefrences(false);
      setSuggestions(true);
    }
  }, [loading, suggestedAccounts, suggestedChannels, preferencesSaved]);

  const signOut = () => {
    dispatch(signOutSuccess());
    navigate("/");
  };

  return (
    <>
      <Loading loading={loading}>
        <div className="flex w-full flex-col  text-[#63676B]">
          <div className="flex gap-2 px-6 py-4 sm:px-12 sm:py-6 md:px-16 md:py-8">
            <img src={curate} width={36} height={36} alt="curate logo" />
            <h3 className="text-xl font-bold mt-1 text-[#24292E]">
              curatecast
            </h3>
          </div>

          {userData && (
            <div className="flex flex-col w-full p-6 mt-10 sm:mt-20 sm:p-0 sm:w-3/4 lg:w-2/5 mx-auto">
              <div className="pb-6 font-bold">
                <MdArrowBack
                  onClick={() => {
                    signOut();
                  }}
                  className="text-2xl cursor-pointer"
                />
              </div>

              <div className="flex rounded-2xl w-full flex-col border border-[#EFF0F0] text-sm">
                <div className="w-full flex gap-4 py-3 px-4">
                  <div className="flex gap-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.74556 0.615387H13.0651V15.3846H11.5503V8.61936H11.5354C11.368 6.7496 9.80669 5.28437 7.90533 5.28437C6.00396 5.28437 4.44263 6.7496 4.27521 8.61936H4.26035V15.3846H2.74556V0.615387Z"
                        fill="#63676B"
                      />
                      <path
                        d="M0 2.71166L0.615385 4.80794H1.13609V13.2883C0.874658 13.2883 0.662722 13.5016 0.662722 13.7648V14.3365H0.568047C0.306611 14.3365 0.0946746 14.5498 0.0946746 14.8129V15.3846H5.39645V14.8129C5.39645 14.5498 5.18451 14.3365 4.92308 14.3365H4.8284V13.7648C4.8284 13.5016 4.61647 13.2883 4.35503 13.2883H3.78698V2.71166H0Z"
                        fill="#63676B"
                      />
                      <path
                        d="M11.645 13.2883C11.3835 13.2883 11.1716 13.5016 11.1716 13.7648V14.3365H11.0769C10.8155 14.3365 10.6035 14.5498 10.6035 14.8129V15.3846H15.9053V14.8129C15.9053 14.5498 15.6934 14.3365 15.432 14.3365H15.3373V13.7648C15.3373 13.5016 15.1253 13.2883 14.8639 13.2883V4.80794H15.3846L16 2.71166H12.213V13.2883H11.645Z"
                        fill="#63676B"
                      />
                    </svg>
                    <p>Farcaster account connected</p>
                  </div>

                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="#06A77D"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="w-full rounded-2xl p-2 sm:p-6 border border-[#EFF0F0] bg-cover bg-[url('images/profile-bg.png')]">
                  <div className="flex gap-4 w-full rounded-2xl p-2 sm:p-6 border border-[#EFF0F0] bg-white">
                    <div
                      className=" items-center "
                      style={{
                        width: "60px",
                        height: "60px",
                        minWidth: "60px",
                        lineHeight: "60px",
                      }}
                    >
                      <img
                        width={80}
                        height={80}
                        src={`${profile.pfpUrl}`}
                        alt=""
                        className="block w-full h-full object-cover rounded-full"
                      />
                    </div>

                    <div className="flex flex-col">
                      <h3 className="text-xl font-bold text-[#24292E]">
                        {profile.displayName}
                      </h3>
                      <p>@{profile.username}</p>
                      <p className="pt-2">
                        {sliceString(profile.bio ? profile.bio : "")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  className="flex gap-2 mt-4 justify-center items-center rounded-md bg-[#005377] p-3  font-medium text-white shadow-sm hover:bg-[#126e9c] sm:w-[200px]"
                  onClick={() => {
                    setUserData(false);
                    setPrefrences(true);
                  }}
                >
                  <span>Curate My feed</span>
                  <svg
                    width="18"
                    height="14"
                    viewBox="0 0 18 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 7H17M17 7L11 1M17 7L11 13"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {prefrences && (
            <div className="flex flex-col w-full p-6 mt-10 sm:mt-20 sm:p-0 sm:w-3/4 lg:w-2/5 mx-auto">
              <div className="pb-6 font-bold">
                <MdArrowBack
                  onClick={() => {
                    setUserData(true);
                    setPrefrences(false);
                  }}
                  className="text-2xl cursor-pointer"
                />
              </div>

              <div className="flex rounded-xl w-full flex-col text-sm">
                <div className="w-full flex gap-2 py-3 items-center">
                  <p>Curate my feed</p>
                  <div className="flex gap-1 items-center p-1 px-2 border-2 border-[#EFF0F0] rounded-full text-[#005377]">
                    <MdHourglassTop className="h-4 w-4" />
                    <p>Step 1</p>
                  </div>
                </div>

                <div className="w-full rounded-xl sm:py-6 ">
                  <h3 className="text-xl font-bold text-[#24292E] leading-loose">
                    Set feed preferences and interests
                  </h3>
                  <p>
                    Select atleast 5 casts categories you are interested in
                    seeing on your <b>“For you”</b> tab
                  </p>
                </div>

                <div className="my-4 pt-2 flex flex-wrap gap-2">
                  {interests.map((interest) => (
                    <span
                      key={interest}
                      onClick={() => toggleInterest(interest)}
                      className={` text-base flex gap-1 items-center tag border-2 py-1 px-2 rounded-full ${
                        selectedInterests.includes(interest)
                          ? " text-[#06A77D] border-[#06A77D3D]"
                          : "border-[#EFF0F0]"
                      } cursor-pointer`}
                    >
                      <span>{interest}</span>
                      {selectedInterests.includes(interest) && (
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="16"
                            height="16"
                            rx="8"
                            fill="#06A77D"
                            fillOpacity="0.1"
                          />
                          <path
                            d="M12.3333 5L5.91664 11.4166L3 8.49997"
                            stroke="#06A77D"
                            strokeWidth="1.31249"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <button
                  type="button"
                  className={`flex gap-2 my-4 justify-center items-center rounded-md px-3 py-2  font-medium text-white shadow-sm  ${
                    selectedInterests.length >= 5
                      ? "bg-[#005377] hover:bg-[#126e9c] "
                      : "bg-gray-400 cursor-not-allowed"
                  }`}
                  onClick={() => {
                    if (selectedInterests.length >= 5) {
                      savePreferences();
                    }
                  }}
                >
                  <span>continue</span>
                  <svg
                    width="18"
                    height="14"
                    viewBox="0 0 18 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 7H17M17 7L11 1M17 7L11 13"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {suggestions && (
            <div className="flex flex-col w-full p-6 pt-0 sm-pt-6 mt-2 sm:mt-4 sm:p-0 sm:w-3/4 lg:w-2/5 mx-auto">
              <div className=" pb-0 sm-pb-6 font-bold">
                <MdArrowBack
                  onClick={() => {
                    setPrefrences(true);
                    setSuggestions(false);
                  }}
                  className="text-2xl cursor-pointer"
                />
              </div>

              <div className="flex rounded-xl w-full flex-col text-sm">
                <div className="w-full flex gap-2 pt-3 items-center">
                  <p>Curate my feed</p>
                  <div className="flex gap-1 items-center p-1 px-2 border-2 border-[#EFF0F0] rounded-full text-[#005377]">
                    <MdHourglassTop className="h-4 w-4" />
                    <p>Step 2</p>
                  </div>
                </div>

                <div className="w-full rounded-xl  ">
                  <h3 className="text-xl font-bold text-[#24292E] leading-loose">
                    Top engaging profiles and channels
                  </h3>
                  <div className="flex gap-1 text-[#63676B] text-xs">
                    <svg
                      width="14"
                      height="18"
                      viewBox="0 0 14 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_12_449)">
                        <path
                          d="M6.99984 6.66667V9M6.99984 11.3333H7.00567M12.8332 9C12.8332 12.2217 10.2215 14.8333 6.99984 14.8333C3.77818 14.8333 1.1665 12.2217 1.1665 9C1.1665 5.77834 3.77818 3.16667 6.99984 3.16667C10.2215 3.16667 12.8332 5.77834 12.8332 9Z"
                          stroke="#63676B"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_12_449">
                          <rect
                            width="14"
                            height="14"
                            fill="white"
                            transform="translate(0 2)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <p>
                      Recommendations are based on your set preferences from the
                      previous step. You can always edit them in your “for you’
                      feed
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex rounded-3xl w-full flex-col border border-[#EFF0F0] text-sm ">
                  <div className="w-full flex gap-6 py-3 px-4">
                    <div className="flex gap-3 w-full flex-row-reverse text-[#005377]">
                      <p className="font-semibold">Follow All</p>
                      <p
                        className={`font-semibold ${
                          selectedChannels.length + selectedAccounts.length >= 5
                            ? "text-[#005377] cursor-pointer"
                            : "text-gray-400 cursor-not-allowed"
                        }`}
                        onClick={() => {
                          if (
                            selectedChannels.length + selectedAccounts.length >=
                            5
                          ) {
                            followSelected();
                          }
                        }}
                      >
                        Follow Selected
                      </p>
                    </div>
                  </div>

                  <Tabs
                    defaultValue="tab1"
                    className="relative w-full"
                    variant="pill"
                  >
                    <div className="w-full rounded-2xl p-2 sm:p-6  bg-cover bg-[url('images/suggestions-bg.png')] h-96 overflow-y-scroll border-t border-[#EFF0F0] ">
                      <TabList
                        style={{ backgroundColor: "rgba(243, 244, 246, 0.85)" }}
                        className="flex rounded-full mb-6 absolute top-18 left-2 right-2 sm:left-6 sm:right-6"
                      >
                        <TabNav
                          className="w-1/2 p-3 rounded-full text-center font-semibold cursor-pointer"
                          value="tab1"
                        >
                          Profiles
                        </TabNav>
                        <TabNav
                          className="w-1/2 p-3 rounded-full text-center font-semibold cursor-pointer"
                          value="tab2"
                        >
                          Channels
                        </TabNav>
                      </TabList>

                      <TabContent
                        className="flex flex-col gap-2 mt-16"
                        value="tab1"
                      >
                        {suggestedAccounts.users.map((suggestedAccount) => (
                          <div
                            key={suggestedAccount.fid}
                            className={`flex gap-4 w-full rounded-2xl p-2 sm:p-6 border bg-white 
                          ${
                            selectedAccounts.includes(suggestedAccount)
                              ? "border-2  border-[#06A77D]"
                              : " border-[#EFF0F0]"
                          }`}
                            onClick={() => toggleAccount(suggestedAccount)}
                          >
                            <div
                              className=" items-center "
                              style={{
                                width: "60px",
                                height: "60px",
                                minWidth: "60px",
                                lineHeight: "60px",
                              }}
                            >
                              <img
                                width={80}
                                height={80}
                                src={`${suggestedAccount.pfp_url}`}
                                alt=""
                                className="block w-full h-full object-cover rounded-full"
                              />
                            </div>

                            <div className="flex justify-between gap-4 flex-grow">
                              <div className="flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-[#24292E]">
                                  {suggestedAccount.display_name}
                                </h3>
                                <p>@{suggestedAccount.username}</p>
                                <p className="pt-2">
                                  {suggestedAccount.profile.bio.text}
                                </p>
                              </div>

                              {selectedAccounts.includes(suggestedAccount) && (
                                <div className="w-6 h-6">
                                  <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <rect
                                      width="18"
                                      height="18"
                                      rx="6"
                                      fill="#06A77D"
                                    />
                                    <path
                                      d="M13.6663 5.5L7.24967 11.9167L4.33301 9"
                                      stroke="white"
                                      stroke-width="1.5"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                  </svg>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </TabContent>

                      <TabContent className="flex flex-col gap-2" value="tab2">
                        {suggestedChannels.map((suggestedChannel) => (
                          <div
                            key={suggestedChannel.id}
                            className={`flex gap-4 w-full border rounded-2xl p-2 sm:p-6 bg-white 
                          ${
                            selectedChannels.includes(suggestedChannel)
                              ? "border-2  border-[#06A77D]"
                              : " border-[#EFF0F0]"
                          } rounded-2xl`}
                            onClick={() => toggleChannel(suggestedChannel)}
                          >
                            <div
                              className=" items-center "
                              style={{
                                width: "60px",
                                height: "60px",
                                minWidth: "60px",
                                lineHeight: "60px",
                              }}
                            >
                              <img
                                width={80}
                                height={80}
                                src={`${suggestedChannel.imageUrl}`}
                                alt=""
                                className="block w-full h-full object-cover rounded-full"
                              />
                            </div>

                            <div className="flex justify-between gap-4 flex-grow">
                              <div className="flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-[#24292E]">
                                  {suggestedChannel.name}
                                </h3>
                                <p>/{suggestedChannel.id}</p>
                                <p className="pt-2">
                                  {suggestedChannel.description}
                                </p>
                              </div>

                              {selectedChannels.includes(suggestedChannel) && (
                                <div className="w-6 h-6">
                                  <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <rect
                                      width="18"
                                      height="18"
                                      rx="6"
                                      fill="#06A77D"
                                    />
                                    <path
                                      d="M13.6663 5.5L7.24967 11.9167L4.33301 9"
                                      stroke="white"
                                      stroke-width="1.5"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                  </svg>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </TabContent>
                    </div>
                  </Tabs>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center gap-2">
                  <div className="flex flex-col">
                    {selectedAccounts.length >= 0 && (
                      <p className="text-xs mt-4">
                        {selectedAccounts.length} profile(s) selected out of{" "}
                        {suggestedAccounts.users.length} profiles
                      </p>
                    )}
                    {selectedChannels.length >= 0 && (
                      <p className="text-xs mt-2">
                        {selectedChannels.length} channel(s) selected out of{" "}
                        {suggestedChannels.length} channels
                      </p>
                    )}
                  </div>
                  <div
                    className="sm:hidden pr-2 flex text-xs sm:text-base gap-1 sm:gap-2  text-[#24292E] items-center cursor-pointer"
                    onClick={() => {
                      setSelectedChannels([]);
                      setSelectedAccounts([]);
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5"
                        stroke="#24292E"
                        stroke-width="1.3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span>clear</span>
                  </div>

                  <div
                    className="hidden sm:flex text-sm sm:text-base gap-1 sm:gap-2  text-[#24292E] items-center cursor-pointer"
                    onClick={() => {
                      setSelectedChannels([]);
                      setSelectedAccounts([]);
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5"
                        stroke="#24292E"
                        stroke-width="1.3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span>clear selection</span>
                  </div>
                </div>
                <button
                  type="button"
                  className={`flex gap-2 mt-6 mb-8 justify-center items-center rounded-md px-3 py-2  font-medium text-white shadow-sm  ${
                    selectedChannels.length + selectedAccounts.length >= 5
                      ? "bg-[#005377] hover:bg-[#126e9c] "
                      : "bg-gray-400 cursor-not-allowed"
                  }`}
                  onClick={() => {
                    if (
                      selectedChannels.length + selectedAccounts.length >=
                      5
                    ) {
                      followSelected();
                    }
                  }}
                >
                  <span>
                    Curate my <b>“For you”</b> feed
                  </span>
                </button>
              </div>
            </div>
          )}
        </div>
      </Loading>
    </>
  );
}
