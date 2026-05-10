import { ReactNode } from 'react';
import { Check } from 'lucide-react';

interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
}

export function Switch({ checked, onChange, label, disabled }: SwitchProps) {
  return (
    <label className="flex items-center gap-3 cursor-pointer">
      <div
        className={`relative h-6 w-11 rounded-full transition-colors ${
          checked ? 'bg-[--primary]' : 'bg-[--surface-secondary]'
        } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={() => !disabled && onChange(!checked)}
      >
        <div
          className={`absolute top-1 left-1 h-4 w-4 bg-white rounded-full transition-transform ${
            checked ? 'translate-x-5' : ''
          }`}
        />
      </div>
      {label && <span className="text-sm text-[--text-primary]">{label}</span>}
    </label>
  );
}
