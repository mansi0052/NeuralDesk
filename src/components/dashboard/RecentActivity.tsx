import { MoreVertical, Eye } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { Badge } from '../ui/Badge';

interface ActivityItem {
  id: string;
  type: 'research' | 'analysis' | 'summarization';
  query: string;
  status: 'completed' | 'processing' | 'failed';
  tokens: number;
  time: string;
}

const mockActivity: ActivityItem[] = [
  {
    id: '1',
    type: 'research',
    query: 'Latest developments in quantum computing',
    status: 'completed',
    tokens: 4200,
    time: '2 minutes ago',
  },
  {
    id: '2',
    type: 'analysis',
    query: 'Market trends for AI companies Q1 2024',
    status: 'completed',
    tokens: 3800,
    time: '1 hour ago',
  },
  {
    id: '3',
    type: 'summarization',
    query: 'Summary of research paper on LLMs',
    status: 'completed',
    tokens: 2100,
    time: '3 hours ago',
  },
  {
    id: '4',
    type: 'research',
    query: 'Enterprise AI adoption trends',
    status: 'completed',
    tokens: 5600,
    time: '5 hours ago',
  },
  {
    id: '5',
    type: 'analysis',
    query: 'Competitive analysis of AI tools',
    status: 'completed',
    tokens: 4100,
    time: '1 day ago',
  },
  {
    id: '6',
    type: 'research',
    query: 'Future of multimodal models',
    status: 'completed',
    tokens: 3900,
    time: '2 days ago',
  },
  {
    id: '7',
    type: 'summarization',
    query: 'Tech news digest - March 2024',
    status: 'completed',
    tokens: 2800,
    time: '3 days ago',
  },
  {
    id: '8',
    type: 'analysis',
    query: 'Industry benchmarks for ML models',
    status: 'completed',
    tokens: 4700,
    time: '1 week ago',
  },
];

const statusVariants = {
  completed: 'success' as const,
  processing: 'warning' as const,
  failed: 'danger' as const,
};

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="table-base">
            <thead>
              <tr className="border-b border-[--border]">
                <th className="table-header text-left">Type</th>
                <th className="table-header text-left">Query</th>
                <th className="table-header text-center">Status</th>
                <th className="table-header text-right">Tokens</th>
                <th className="table-header text-right">Time</th>
                <th className="table-header text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {mockActivity.map((item) => (
                <tr key={item.id} className="table-row">
                  <td className="table-cell">
                    <Badge variant="primary">
                      {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                    </Badge>
                  </td>
                  <td className="table-cell text-[--text-primary]">
                    <span className="truncate block max-w-xs">{item.query}</span>
                  </td>
                  <td className="table-cell text-center">
                    <Badge variant={statusVariants[item.status]}>
                      {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                    </Badge>
                  </td>
                  <td className="table-cell text-right text-[--text-primary]">
                    {item.tokens.toLocaleString()}
                  </td>
                  <td className="table-cell text-right text-[--text-muted] text-sm">
                    {item.time}
                  </td>
                  <td className="table-cell text-center">
                    <button className="p-1 hover:bg-[--surface-secondary] rounded transition-colors">
                      <MoreVertical size={16} className="text-[--text-muted]" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
