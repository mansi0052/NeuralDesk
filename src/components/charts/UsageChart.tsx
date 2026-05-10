import { useState, useEffect } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { ChartDataPoint } from '../../types/index';
import { ChartSkeleton } from '../ui/Skeletons';

interface UsageChartProps {
  data: ChartDataPoint[];
}

export function UsageChart({ data }: UsageChartProps) {
  const [isLoading, setIsLoading] = useState(true);

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
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorQueries" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="rgb(99, 102, 241)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="rgb(99, 102, 241)" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorTokens" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="rgb(139, 92, 246)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="rgb(139, 92, 246)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis
            dataKey="date"
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
          <Area
            type="monotone"
            dataKey="queries"
            stroke="rgb(99, 102, 241)"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorQueries)"
            name="Queries"
          />
          <Area
            type="monotone"
            dataKey="tokens"
            stroke="rgb(139, 92, 246)"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorTokens)"
            name="Tokens (thousands)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
