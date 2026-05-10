import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { Switch } from '../ui/Switch';
import { Select } from '../ui/Select';

export function NotificationSettingsComponent() {
  const [notifications, setNotifications] = useState({
    emailDigests: true,
    researchComplete: true,
    teamActivity: true,
    billingAlerts: true,
    productUpdates: false,
    securityAlerts: true,
  });

  const [frequency, setFrequency] = useState('immediately');

  const handleToggle = (key: keyof typeof notifications) => {
    setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-6">
      {/* Notification Preferences */}
      <Card>
        <CardHeader>
          <CardTitle>Notification Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {Object.entries(notifications).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <span className="text-sm text-[--text-primary] capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </span>
              <Switch
                checked={value}
                onChange={() => handleToggle(key as keyof typeof notifications)}
              />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Email Frequency */}
      <Card>
        <CardHeader>
          <CardTitle>Email Frequency</CardTitle>
        </CardHeader>
        <CardContent>
          <Select value={frequency} onChange={(e) => setFrequency(e.target.value)}>
            <option value="immediately">Immediately</option>
            <option value="daily">Daily Digest</option>
            <option value="weekly">Weekly</option>
            <option value="never">Never</option>
          </Select>
        </CardContent>
      </Card>
    </div>
  );
}
