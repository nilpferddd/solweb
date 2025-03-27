'use client';

import React from 'react';

interface TabProps {
  id: string;
  label: string;
  active: boolean;
  onClick: (id: string) => void;
}

const Tab: React.FC<TabProps> = ({ id, label, active, onClick }) => {
  return (
    <button
      className={`px-4 py-2 font-medium rounded-t-lg ${
        active 
          ? 'bg-white text-purple-700 border-b-2 border-purple-700' 
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
      }`}
      onClick={() => onClick(id)}
    >
      {label}
    </button>
  );
};

interface TabsProps {
  tabs: { id: string; label: string }[];
  activeTab: string;
  onTabChange: (id: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="flex border-b border-gray-200 mb-6">
      {tabs.map((tab) => (
        <Tab
          key={tab.id}
          id={tab.id}
          label={tab.label}
          active={activeTab === tab.id}
          onClick={onTabChange}
        />
      ))}
    </div>
  );
};

export default Tabs;
