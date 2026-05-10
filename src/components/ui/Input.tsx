import { ReactNode } from 'react';
import clsx from 'clsx';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
  icon?: ReactNode;
}

export function Input({ error, label, icon, className, ...props }: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-[--text-primary] mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[--text-muted]">
            {icon}
          </div>
        )}
        <input
          className={clsx(
            'input-base',
            icon && 'pl-10',
            error && 'border-[--danger] focus:ring-[--danger]/20',
            className
          )}
          {...props}
        />
      </div>
      {error && <p className="text-sm text-[--danger] mt-1">{error}</p>}
    </div>
  );
}
