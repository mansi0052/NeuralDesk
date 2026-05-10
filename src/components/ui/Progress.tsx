interface ProgressProps {
  value: number;
  max?: number;
  label?: string;
  showLabel?: boolean;
  variant?: 'primary' | 'success' | 'warning' | 'danger';
}

export function Progress({ value, max = 100, label, showLabel = true, variant = 'primary' }: ProgressProps) {
  const percentage = (value / max) * 100;
  
  const variantColors = {
    primary: 'bg-[--primary]',
    success: 'bg-[--success]',
    warning: 'bg-[--warning]',
    danger: 'bg-[--danger]',
  };

  return (
    <div className="w-full">
      {label && showLabel && (
        <div className="flex justify-between mb-2 text-sm">
          <span className="text-[--text-primary]">{label}</span>
          <span className="text-[--text-muted]">{Math.round(percentage)}%</span>
        </div>
      )}
      <div className="w-full h-2 bg-[--surface-secondary] rounded-full overflow-hidden">
        <div
          className={`h-full transition-all duration-300 ${variantColors[variant]}`}
          style={{ width: `${Math.min(percentage, 100)}%` }}
        />
      </div>
    </div>
  );
}
