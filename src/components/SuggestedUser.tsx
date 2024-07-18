import React from "react";
import yelePix from "/images/yele.avif";

interface IUser {
  fullname: string;
  userhandle: string;
}

const SuggestedUser: React.FC<IUser> = ({ fullname, userhandle }) => {
  return (
    <div className="flex justify-between align-middle border rounded p-2 mt-4">
      <div className="flex">
        <img src={yelePix} alt="yele" className="rounded-full" width={48} />
        <div className="mx-2">
          <p className="font-semibold">{fullname}</p>
          <p>{userhandle}</p>
        </div>
      </div>
      <button className="bg-cyan rounded px-4 text-white">Follow</button>
    </div>
  );
};

export default SuggestedUser;
