import { TrendingUp, TrendingDown } from 'lucide-react';
import { Card } from '../ui/Card';

interface StatsCardProps {
  title: string;
  value: string | number;
  change: number;
  icon: React.ReactNode;
  trend: 'up' | 'down';
}

export function StatsCard({ title, value, change, icon, trend }: StatsCardProps) {
  return (
    <Card hover className="flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm font-medium text-[--text-muted]">{title}</p>
        <div className="p-2 bg-[--primary]/10 rounded-lg text-[--primary]">
          {icon}
        </div>
      </div>
      <div className="flex-1">
        <p className="text-2xl font-bold font-display text-[--text-primary]">
          {value}
        </p>
        <div className="flex items-center gap-1 mt-2 text-sm">
          {trend === 'up' ? (
            <>
              <TrendingUp size={16} className="text-[--success]" />
              <span className="text-[--success]">+{Math.abs(change)}%</span>
            </>
          ) : (
            <>
              <TrendingDown size={16} className="text-[--danger]" />
              <span className="text-[--danger]">{change}%</span>
            </>
          )}
          <span className="text-[--text-muted]">vs last month</span>
        </div>
      </div>
    </Card>
  );
}
