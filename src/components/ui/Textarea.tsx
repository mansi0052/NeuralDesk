import { ReactNode } from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export function Textarea({ label, error, className, ...props }: TextareaProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-[--text-primary] mb-2">
          {label}
        </label>
      )}
      <textarea
        className={`input-base resize-none ${className || ''}`}
        {...props}
      />
      {error && <p className="text-sm text-[--danger] mt-1">{error}</p>}
    </div>
  );
}
