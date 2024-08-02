import React from "react";
import yelePix from "/images/yele.avif";

interface IUser {
  fullname: string;
  userhandle: string;
}

const SuggestedUser: React.FC<IUser> = ({ fullname, userhandle }) => {
  return (
    <div className="flex text-sm justify-between items-center align-middle border rounded p-2 mt-2">
      <div className="flex">
        <img src={yelePix} alt="yele" className="w-10 h-10 rounded-full object-cover" />
        <div className="mx-2">
          <p className="font-semibold">{fullname}</p>
          <p>{userhandle}</p>
        </div>
      </div>
      <div>
        <button className="bg-cyan rounded px-4 py-2 text-white">Follow</button>
      </div>
    </div>
  );
};

export default SuggestedUser;
