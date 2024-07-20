import React, { useCallback, useEffect, useState } from "react";
import Recommendations from "../Recommendations";
import { tags } from "../TagItems";
import { suggestedUsers } from "../SuggestedUsers";
import profileImage from "/images/yele.avif";
import { IoIosCloseCircle } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";

interface IModal {
  isOpen: boolean;
  onClose: () => void;
}

const EditPreference: React.FC<IModal> = ({ isOpen, onClose }) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [selectedList, setSelectedList] = useState<string[]>([]);

  const handleSelection = useCallback(() => {
    setSelectedList(tags);
  }, []);

  useEffect(() => {
    handleSelection();
  }, [handleSelection]);

  const toggleSelection = (item: string) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(item)
        ? prevSelected.filter((i) => i !== item)
        : [...prevSelected, item]
    );
  };

  const handleClose = () => {
    setSelectedItems([]); 
    onClose();
  };

  console.log(selectedItems);

  return (
    <>
      {isOpen && (
        <div
          className={`absolute inset-0 z-50 flex justify-center items-center p-4 ${selectedList.length !==0 ? "lg:mt-2" : "lg:mt-16" }  overflow-y-auto w-full`}
          aria-labelledby="modal-title"
          aria-modal="true"
          role="dialog"
        >
          <div className="relative w-full mt-8 max-w-md h-full md:h-auto p-4">
            <div className="relative border bg-white rounded-lg shadow-lg">
              <div
                className="lg:mt-24 mt-0 flex justify-end p-4 hover:cursor-pointer"
                onClick={handleClose}
              >
                <IoMdClose color="black" className="absolute mt-16" />
              </div>
              <Recommendations
                titleStyle="mt-4 mx-4 text-2xl"
                title={["Edit feed preferences and interests"]}
                description={
                  "Feed recommendations on your “For you” tab are based on your set preferences and interests"
                }
              />
              <p className="p-4 mx-4">
                Select the cast categories you are interested in seeing on your
                “For you” tab
              </p>
              <div className="grid lg:grid-cols-3 grid-cols-2 px-4">
                {selectedList.map((item, index) => (
                  <div key={index}>
                    <div
                      className={`border flex justify-between m-1 rounded-full p-1 ${selectedItems.includes(item) ? 'border-green-300' : 'border-gray-300'}`}
                    >
                      <button
                        className={`text-left p-1 font-semibold text-sm ${selectedItems.includes(item) ? 'text-fullGreen' : 'text-textLight'}`}
                        onClick={() => toggleSelection(item)}
                      >
                        {item}
                      </button>
                      {selectedItems.includes(item) && 
                      <div className="p-2">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="16" height="16" rx="8" fill="#06A77D" fill-opacity="0.1"/>
                        <path d="M12.3333 5L5.91664 11.4166L3 8.49997" stroke="#06A77D" stroke-width="1.31249" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </div>
                      }
                    </div>
                  </div>
                ))}
              </div>
              <p className="p-4 mt-4">Don’t show casts from these 👇 handles</p>
              <div className="grid lg:grid-cols-2 grid-cols-1 px-2">
                {suggestedUsers.map((item, index) => (
                  <div
                    className="flex justify-between p-2 border rounded-full m-1 hover:cursor-pointer"
                    key={index}
                    onClick={() => {}}
                  >
                    <div className="flex">
                      <img
                        className="rounded-full"
                        src={profileImage}
                        alt="profile image"
                        width={16}
                      />
                      <p className="ml-2 text-sm">{item}</p>
                    </div>
                    <IoIosCloseCircle
                      className="mt-1 mx-2"
                      size={16}
                      color="grey"
                    />
                  </div>
                ))}
              </div>
              <div className="m-4 pb-8 flex">
                <button className="bg-cyan p-2 rounded-lg text-white">
                  Save changes
                </button>
                <p className="text-cyan mt-2 ml-4 hover:cursor-pointer">
                  Clear interests
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditPreference;
