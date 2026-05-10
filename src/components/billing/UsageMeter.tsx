import { Progress } from '../ui/Progress';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';

interface UsageMeterProps {
  label: string;
  used: number;
  limit: number;
  variant?: 'primary' | 'success' | 'warning' | 'danger';
}

function UsageMeterItem({ label, used, limit, variant }: UsageMeterProps) {
  const percentage = (used / limit) * 100;

  let variant_type: 'primary' | 'success' | 'warning' | 'danger' = 'primary';
  if (percentage > 80) {
    variant_type = 'danger';
  } else if (percentage > 60) {
    variant_type = 'warning';
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-[--text-primary]">{label}</span>
        <span className="text-sm text-[--text-muted]">
          {used.toLocaleString()} of {limit.toLocaleString()}
        </span>
      </div>
      <Progress value={used} max={limit} showLabel={false} variant={variant_type} />
    </div>
  );
}

export function UsageMeter() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Usage Meters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <UsageMeterItem label="Tokens Used" used={2400000} limit={5000000} />
        <UsageMeterItem label="API Calls" used={6200} limit={10000} />
        <UsageMeterItem label="Team Seats" used={8} limit={10} />
        <UsageMeterItem label="Storage" used={12.5} limit={50} />
      </CardContent>
    </Card>
  );
}
