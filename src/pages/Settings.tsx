import { useState } from 'react';
import { Tabs } from '../components/ui/Tabs';
import { ProfileSettings } from '../components/settings/ProfileSettings';
import { SecuritySettings } from '../components/settings/SecuritySettings';
import { APISettings } from '../components/settings/APISettings';
import { NotificationSettingsComponent } from '../components/settings/NotificationSettingsComponent';
import { IntegrationsSettings } from '../components/settings/IntegrationsSettings';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export default function Settings() {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    {
      id: 'profile',
      label: 'Profile',
      content: <ProfileSettings />,
    },
    {
      id: 'security',
      label: 'Security',
      content: <SecuritySettings />,
    },
    {
      id: 'api',
      label: 'API Keys',
      content: <APISettings />,
    },
    {
      id: 'notifications',
      label: 'Notifications',
      content: <NotificationSettingsComponent />,
    },
    {
      id: 'integrations',
      label: 'Integrations',
      content: <IntegrationsSettings />,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold font-display text-[--text-primary]">
          Settings
        </h1>
        <p className="text-[--text-muted] mt-2">
          Manage your account settings and preferences.
        </p>
      </div>

      {/* Tabs */}
      <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Danger Zone */}
      {activeTab === 'profile' && (
        <Card className="border-[--danger]/30 bg-[--danger]/5 mt-8">
          <CardContent className="pt-6">
            <h3 className="text-lg font-semibold text-[--danger] mb-2">
              Danger Zone
            </h3>
            <p className="text-sm text-[--text-muted] mb-4">
              Permanently delete your workspace and all associated data. This action cannot be undone.
            </p>
            <Button variant="danger" size="lg">
              Delete Workspace
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
