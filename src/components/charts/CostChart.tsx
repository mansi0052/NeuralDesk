import { useState, useEffect } from 'react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from 'recharts';
import { ChartSkeleton } from '../ui/Skeletons';

interface CostChartProps {
  data?: Array<{ name: string; value: number }>;
}

export function CostChart({ data }: CostChartProps) {
  const [isLoading, setIsLoading] = useState(true);

  const defaultData = [
    { name: 'Research', value: 45 },
    { name: 'Summarization', value: 30 },
    { name: 'Analysis', value: 25 },
  ];

  const chartData = data || defaultData;

  const COLORS = [
    'rgb(99, 102, 241)',
    'rgb(139, 92, 246)',
    'rgb(16, 185, 129)',
  ];

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
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={2}
            dataKey="value"
            label={({ name, value }) => `${name} ${value}%`}
            labelLine={false}
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(17, 17, 24, 0.95)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
            }}
            labelStyle={{ color: 'rgb(241, 245, 249)' }}
            formatter={(value) => `${value}%`}
          />
          <Legend
            wrapperStyle={{ color: 'rgb(100, 116, 139)' }}
            formatter={(value) => <span style={{ fontSize: '12px' }}>{value}</span>}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
