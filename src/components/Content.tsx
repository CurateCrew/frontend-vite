import React, { useState } from 'react';
import ForYou from './ForYou';

const Content: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ['For you'];
  const content = [
    <ForYou/>,
  ];

  return (
    <div className="flex flex-col p-4 mt-16">
      <div className="">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 focus:outline-none ${
              activeTab === index
                ? 'border-b-4 border-green-600'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="">
        {content[activeTab]}
      </div>
    </div>
  );
};

export default Content;
