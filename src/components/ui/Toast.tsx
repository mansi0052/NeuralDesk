import { useState } from 'react';
import { Check, X } from 'lucide-react';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  duration?: number;
}

export function useToast() {
  const [toast, setToast] = useState<ToastProps | null>(null);

  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'success', duration = 3000) => {
    setToast({ message, type, duration });
    setTimeout(() => setToast(null), duration);
  };

  return { toast, showToast };
}

export function Toast({ message, type = 'success' }: ToastProps) {
  const icons = {
    success: <Check size={20} />,
    error: <X size={20} />,
    info: <span className="text-lg">ℹ️</span>,
  };

  const colors = {
    success: 'bg-[--success]/20 text-[--success] border-[--success]/30',
    error: 'bg-[--danger]/20 text-[--danger] border-[--danger]/30',
    info: 'bg-[--primary]/20 text-[--primary] border-[--primary]/30',
  };

  return (
    <div
      className={`fixed bottom-4 right-4 flex items-center gap-3 px-4 py-3 rounded-lg border ${colors[type]} animate-slideIn`}
    >
      {icons[type]}
      <span className="text-sm font-medium">{message}</span>
    </div>
  );
}
