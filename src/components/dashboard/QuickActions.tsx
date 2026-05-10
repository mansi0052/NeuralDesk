import {
  Plus,
  FileText,
  BarChart3,
  Lightbulb,
  Zap,
} from 'lucide-react';
import { Card } from '../ui/Card';

interface QuickActionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function QuickActionCard({ icon, title, description }: QuickActionProps) {
  return (
    <button className="card hover:border-[--primary]/50 hover:shadow-lg hover:shadow-[--primary]/10 transition-all duration-200 text-left group">
      <div className="flex items-start gap-3">
        <div className="p-2 bg-[--primary]/10 rounded-lg text-[--primary] group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <div className="flex-1">
          <h4 className="text-sm font-medium text-[--text-primary]">{title}</h4>
          <p className="text-xs text-[--text-muted] mt-1">{description}</p>
        </div>
      </div>
    </button>
  );
}

export function QuickActions() {
  const actions = [
    {
      icon: <Plus size={20} />,
      title: 'New Research',
      description: 'Start a new research query',
    },
    {
      icon: <FileText size={20} />,
      title: 'Summarize Doc',
      description: 'Summarize a document',
    },
    {
      icon: <BarChart3 size={20} />,
      title: 'Analyze Data',
      description: 'Analyze data with AI',
    },
    {
      icon: <Lightbulb size={20} />,
      title: 'Generate Report',
      description: 'Create an AI report',
    },
  ];

  return (
    <Card className="flex flex-col h-full">
      <h3 className="text-lg font-semibold font-display text-[--text-primary] mb-4">
        Quick Actions
      </h3>
      <div className="grid grid-cols-1 gap-3 flex-1">
        {actions.map((action, idx) => (
          <QuickActionCard key={idx} {...action} />
        ))}
      </div>
    </Card>
  );
}
