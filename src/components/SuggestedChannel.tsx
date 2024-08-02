import React from "react";
import yelePix from "/images/yele.avif";

interface IChannel {
  channelName: string;
  channelHandle: string;
}

const SuggestedChannel: React.FC<IChannel> = ({
  channelName,
  channelHandle,
}) => {
  return (
    <div className="flex justify-between align-middle border rounded p-2 mt-2">
      <div className="flex">
        <img src={yelePix} alt="yele" className="w-10 h-10 rounded-full object-cover" />
        <div className="mx-2">
          <p className="font-semibold">{channelHandle}</p>
          <p>{channelName}</p>
        </div>
      </div>
      <button className="bg-cyan rounded px-4 text-white">Follow</button>
    </div>
  );
};

export default SuggestedChannel;
