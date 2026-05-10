import {
  LayoutDashboard,
  Zap,
  Clock,
  Users,
} from 'lucide-react';

import { StatsCard } from '../components/dashboard/StatsCard';
import { RecentActivity } from '../components/dashboard/RecentActivity';
import { QuickActions } from '../components/dashboard/QuickActions';

import { UsageChart } from '../components/charts/UsageChart';
import { CostChart } from '../components/charts/CostChart';

import { Card } from '../components/ui/Card';

import { chartData } from '../data/mockData';
/* IMPORT THIS */
import CommandMenu from '../components/command/CommandMenu';

export default function Dashboard() {
  return (
    <div className="space-y-8">

      {/* ADD THIS HERE */}
      <CommandMenu />

      {/* Page Title */}
      <div>
        <h1 className="text-3xl font-bold font-display text-[--text-primary]">
          Dashboard
        </h1>

        <p className="text-[--text-muted] mt-2">
          Welcome back! Here's your AI research activity overview.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          title="Total Queries"
          value="48,291"
          change={12.4}
          icon={<LayoutDashboard size={24} />}
          trend="up"
        />

        <StatsCard
          title="Tokens Used"
          value="2.4M / 5M"
          change={8.1}
          icon={<Zap size={24} />}
          trend="up"
        />

        <StatsCard
          title="Avg Response Time"
          value="1.2s"
          change={-25}
          icon={<Clock size={24} />}
          trend="down"
        />

        <StatsCard
          title="Team Members"
          value="8 / 10"
          change={12}
          icon={<Users size={24} />}
          trend="up"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Usage Chart */}
        <div className="lg:col-span-2">
          <Card className="p-6">
            <h2 className="text-lg font-semibold font-display text-[--text-primary] mb-4">
              AI Usage Over Time
            </h2>

            <UsageChart data={chartData} />
          </Card>
        </div>

        {/* Cost Breakdown */}
        <Card className="p-6">
          <h2 className="text-lg font-semibold font-display text-[--text-primary] mb-4">
            Cost Breakdown
          </h2>

          <CostChart />
        </Card>
      </div>

      {/* Activity and Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentActivity />
        </div>

        <QuickActions />
      </div>
    </div>
  );
}