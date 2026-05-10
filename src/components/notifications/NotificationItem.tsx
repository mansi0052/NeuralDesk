import { X, CheckCircle2, AlertCircle, Users, Bell, Zap } from 'lucide-react';
import { Notification } from '../../types/index';

interface NotificationItemProps {
  notification: Notification;
  onMarkRead?: () => void;
  onRemove?: () => void;
}

const typeIcons = {
  research: <CheckCircle2 size={20} className="text-[--primary]" />,
  billing: <Zap size={20} className="text-[--warning]" />,
  team: <Users size={20} className="text-[--primary]" />,
  alert: <AlertCircle size={20} className="text-[--warning]" />,
  system: <Bell size={20} className="text-[--text-muted]" />,
  error: <AlertCircle size={20} className="text-[--danger]" />,
};

export function NotificationItem({
  notification,
  onMarkRead,
  onRemove,
}: NotificationItemProps) {
  return (
    <div
      className={`flex gap-3 p-3 rounded-lg border transition-all ${
        notification.read
          ? 'border-transparent bg-transparent'
          : 'border-[--primary]/30 bg-[--primary]/5'
      } hover:bg-[--surface-secondary]`}
    >
      {notification.read && (
        <div className="h-2 w-2 rounded-full bg-[--primary] mt-2 flex-shrink-0" />
      )}
      <div className="flex items-start gap-3 flex-1">
        <div className="mt-0.5">{typeIcons[notification.type]}</div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-[--text-primary]">
            {notification.title}
          </p>
          <p className="text-xs text-[--text-muted] mt-1">
            {notification.description}
          </p>
          <p className="text-xs text-[--text-muted] mt-2">{notification.timestamp}</p>
        </div>
        <div className="flex items-center gap-1 flex-shrink-0">
          {!notification.read && (
            <button
              onClick={onMarkRead}
              className="p-1 hover:bg-[--surface] rounded transition-colors"
              title="Mark as read"
            >
              <CheckCircle2 size={16} className="text-[--primary]" />
            </button>
          )}
          <button
            onClick={onRemove}
            className="p-1 hover:bg-[--surface] rounded transition-colors"
            title="Dismiss"
          >
            <X size={16} className="text-[--text-muted]" />
          </button>
        </div>
      </div>
    </div>
  );
}
