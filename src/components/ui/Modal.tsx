import { ReactNode, useRef, useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { Button } from './Button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  footer?: ReactNode;
}

export function Modal({ isOpen, onClose, title, children, footer }: ModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(isOpen);
  }, [isOpen]);

  if (!isOpen && !mounted) return null;

  return (
    <>
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-200 ${
          isOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      <div
        className={`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-[--surface] border border-[--border] rounded-xl shadow-2xl transition-all duration-200 ${
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        {title && (
          <div className="flex items-center justify-between p-6 border-b border-[--border]">
            <h2 className="text-lg font-semibold text-[--text-primary]">{title}</h2>
            <button
              onClick={onClose}
              className="p-1 hover:bg-[--surface-secondary] rounded-lg transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        )}
        <div className="p-6">{children}</div>
        {footer && (
          <div className="flex gap-3 p-6 border-t border-[--border] justify-end">
            {footer}
          </div>
        )}
      </div>
    </>
  );
}
