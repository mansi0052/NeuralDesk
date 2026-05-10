import { useState, useEffect } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { ChartSkeleton } from '../ui/Skeletons';

interface ActivityData {
  week: string;
  queries: number;
  cost: number;
}

interface TeamActivityChartProps {
  data?: ActivityData[];
}

export function TeamActivityChart({ data }: TeamActivityChartProps) {
  const [isLoading, setIsLoading] = useState(true);

  const defaultData: ActivityData[] = [
    { week: 'Week 1', queries: 2400, cost: 1200 },
    { week: 'Week 2', queries: 1398, cost: 1100 },
    { week: 'Week 3', queries: 9800, cost: 2200 },
    { week: 'Week 4', queries: 3908, cost: 2000 },
  ];

  const chartData = data || defaultData;

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <ChartSkeleton />;
  }

  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis
            dataKey="week"
            stroke="rgba(255,255,255,0.5)"
            style={{ fontSize: '12px' }}
          />
          <YAxis stroke="rgba(255,255,255,0.5)" style={{ fontSize: '12px' }} />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(17, 17, 24, 0.95)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
            }}
            labelStyle={{ color: 'rgb(241, 245, 249)' }}
          />
          <Legend
            wrapperStyle={{ color: 'rgb(100, 116, 139)' }}
            formatter={(value) => <span style={{ fontSize: '12px' }}>{value}</span>}
          />
          <Bar dataKey="queries" fill="rgb(99, 102, 241)" radius={[8, 8, 0, 0]} />
          <Bar dataKey="cost" fill="rgb(139, 92, 246)" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
