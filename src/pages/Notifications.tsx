import { useState } from 'react';
import { NotificationPanel } from '../components/notifications/NotificationPanel';

const filterTabs = ['All', 'Unread', 'Mentions', 'System', 'Billing'];

export default function Notifications() {
  const [activeFilter, setActiveFilter] = useState('All');

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold font-display text-[--text-primary]">
          Notifications
        </h1>
        <p className="text-[--text-muted] mt-2">
          Stay updated with your activity and alerts.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 border-b border-[--border]">
        {filterTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveFilter(tab)}
            className={`px-4 py-3 text-sm font-medium transition-all border-b-2 ${
              activeFilter === tab
                ? 'border-[--primary] text-[--primary]'
                : 'border-transparent text-[--text-muted] hover:text-[--text-primary]'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Notifications */}
      <NotificationPanel />
    </div>
  );
}
