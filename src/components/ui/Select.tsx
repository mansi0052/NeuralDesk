import { ReactNode } from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  children: ReactNode;
}

export function Select({ label, error, children, className, ...props }: SelectProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-[--text-primary] mb-2">
          {label}
        </label>
      )}
      <select
        className={`input-base ${className || ''}`}
        {...props}
      >
        {children}
      </select>
      {error && <p className="text-sm text-[--danger] mt-1">{error}</p>}
    </div>
  );
}
