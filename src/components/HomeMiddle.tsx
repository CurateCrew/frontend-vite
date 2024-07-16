import React, { useState } from 'react';
import ForYou from './ForYou';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ['For you', 'Tab 2', 'Tab 3'];
  const content = [
    <ForYou/>,
    'Content for Tab 2',
    'Content for Tab 3'
  ];

  return (
    <div className="flex flex-col p-4">
      <div className="">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 focus:outline-none ${
              activeTab === index
                ? 'text-blue-500 border-b-2 border-blue-500'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="p-4 mt-4">
        {content[activeTab]}
      </div>
    </div>
  );
};

export default Tabs;
