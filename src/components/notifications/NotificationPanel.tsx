import { useNotifications } from '../../hooks/useNotifications';
import { NotificationItem } from './NotificationItem';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { Button } from '../ui/Button';

export function NotificationPanel() {
  const {
    notifications,
    unreadCount,
    markAsRead,
    markAllAsRead,
    removeNotification,
    clearAll,
  } = useNotifications();

  return (
    <Card>
      <CardHeader className="flex items-center justify-between">
        <CardTitle>Notifications ({unreadCount})</CardTitle>
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={markAllAsRead}
            disabled={unreadCount === 0}
          >
            Mark all read
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAll}
            disabled={notifications.length === 0}
          >
            Clear all
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 max-h-96 overflow-y-auto">
          {notifications.length > 0 ? (
            notifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                notification={notification}
                onMarkRead={() => markAsRead(notification.id)}
                onRemove={() => removeNotification(notification.id)}
              />
            ))
          ) : (
            <p className="text-center py-8 text-[--text-muted]">
              No notifications yet
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
