import clsx from 'clsx';

interface BadgeProps {
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'muted';
  children: React.ReactNode;
  className?: string;
}

export function Badge({ variant = 'primary', children, className }: BadgeProps) {
  const variants = {
    primary: 'badge-primary',
    success: 'badge-success',
    warning: 'badge-warning',
    danger: 'badge-danger',
    muted: 'badge bg-[--surface-secondary] text-[--text-muted]',
  };

  return (
    <span className={clsx(variants[variant], className)}>
      {children}
    </span>
  );
}
