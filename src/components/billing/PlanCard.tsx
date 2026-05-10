import { Check, X } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

interface PlanCardProps {
  name: string;
  price: number;
  billing: 'mo' | 'yr';
  features: string[];
  isCurrent?: boolean;
  buttonLabel?: string;
  onButtonClick?: () => void;
}

export function PlanCard({
  name,
  price,
  billing,
  features,
  isCurrent,
  buttonLabel = 'Upgrade',
  onButtonClick,
}: PlanCardProps) {
  return (
    <Card
      hover={!isCurrent}
      className={`flex flex-col relative ${
        isCurrent ? 'ring-2 ring-[--primary] shadow-lg shadow-[--primary]/10' : ''
      }`}
    >
      {isCurrent && (
        <div className="absolute top-4 right-4">
          <Badge variant="primary">Current Plan</Badge>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-xl font-semibold font-display text-[--text-primary]">
          {name}
        </h3>
        <div className="flex items-baseline gap-2 mt-2">
          <span className="text-3xl font-bold text-[--text-primary]">
            ${price}
          </span>
          <span className="text-[--text-muted]">/{billing}</span>
        </div>
      </div>

      <div className="flex-1 space-y-3 mb-6">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-2">
            <Check size={18} className="text-[--success] flex-shrink-0 mt-0.5" />
            <span className="text-sm text-[--text-primary]">{feature}</span>
          </div>
        ))}
      </div>

      <Button
        variant={isCurrent ? 'secondary' : 'primary'}
        onClick={onButtonClick}
        disabled={isCurrent}
      >
        {buttonLabel}
      </Button>
    </Card>
  );
}
