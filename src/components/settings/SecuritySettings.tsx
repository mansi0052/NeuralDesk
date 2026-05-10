import { useState } from 'react';
import { Eye, EyeOff, Check } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Switch } from '../ui/Switch';
import { Toast, useToast } from '../ui/Toast';
import { Badge } from '../ui/Badge';

export function SecuritySettings() {
  const { toast, showToast } = useToast();
  const [showPasswords, setShowPasswords] = useState(false);
  const [passwordForm, setPasswordForm] = useState({
    current: '',
    new: '',
    confirm: '',
  });
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordForm(prev => ({ ...prev, [name]: value }));
  };

  const handlePasswordSubmit = () => {
    if (passwordForm.new !== passwordForm.confirm) {
      showToast('Passwords do not match', 'error');
      return;
    }
    showToast('Password updated successfully!', 'success');
    setPasswordForm({ current: '', new: '', confirm: '' });
  };

  return (
    <div className="space-y-6">
      {/* Change Password */}
      <Card>
        <CardHeader>
          <CardTitle>Change Password</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="relative">
            <Input
              label="Current Password"
              name="current"
              type={showPasswords ? 'text' : 'password'}
              value={passwordForm.current}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="relative">
            <Input
              label="New Password"
              name="new"
              type={showPasswords ? 'text' : 'password'}
              value={passwordForm.new}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="relative">
            <Input
              label="Confirm Password"
              name="confirm"
              type={showPasswords ? 'text' : 'password'}
              value={passwordForm.confirm}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="flex gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowPasswords(!showPasswords)}
            >
              {showPasswords ? <EyeOff size={16} /> : <Eye size={16} />}
              {showPasswords ? 'Hide' : 'Show'} Passwords
            </Button>
          </div>
          <Button onClick={handlePasswordSubmit}>Update Password</Button>
        </CardContent>
      </Card>

      {/* Two-Factor Authentication */}
      <Card>
        <CardHeader>
          <CardTitle>Two-Factor Authentication</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[--text-primary] font-medium mb-1">
                Authenticator App
              </p>
              <p className="text-sm text-[--text-muted]">
                Use an authenticator app for enhanced security
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="success">Configured</Badge>
              <Switch checked={twoFactorEnabled} onChange={setTwoFactorEnabled} />
            </div>
          </div>
          <Button variant="secondary" size="sm">
            Reconfigure
          </Button>
        </CardContent>
      </Card>

      {/* Active Sessions */}
      <Card>
        <CardHeader>
          <CardTitle>Active Sessions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              {
                device: 'MacBook Pro',
                location: 'San Francisco, CA',
                lastActive: '5 minutes ago',
              },
              {
                device: 'iPhone 14 Pro',
                location: 'San Francisco, CA',
                lastActive: '2 hours ago',
              },
              {
                device: 'Windows PC',
                location: 'New York, NY',
                lastActive: '1 day ago',
              },
            ].map((session, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3 bg-[--surface-secondary] rounded-lg border border-[--border]"
              >
                <div>
                  <p className="text-sm font-medium text-[--text-primary]">
                    {session.device}
                  </p>
                  <p className="text-xs text-[--text-muted] mt-1">
                    {session.location} • {session.lastActive}
                  </p>
                </div>
                <Button variant="ghost" size="sm">
                  Revoke
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {toast && <Toast message={toast.message} type={toast.type} />}
    </div>
  );
}
