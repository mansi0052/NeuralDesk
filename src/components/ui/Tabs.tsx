import { ReactNode } from 'react';

interface TabsProps {
  tabs: Array<{ id: string; label: string; content: ReactNode }>;
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export function Tabs({ tabs, activeTab, onTabChange }: TabsProps) {
  return (
    <div className="w-full">
      <div className="flex gap-1 border-b border-[--border]">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`px-4 py-3 text-sm font-medium transition-colors border-b-2 ${
              activeTab === tab.id
                ? 'border-[--primary] text-[--primary]'
                : 'border-transparent text-[--text-muted] hover:text-[--text-primary]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {tabs.find(tab => tab.id === activeTab)?.content}
      </div>
    </div>
  );
}
