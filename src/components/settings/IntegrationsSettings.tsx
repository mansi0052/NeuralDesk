import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

interface IntegrationCard {
  name: string;
  icon: string;
  description: string;
  isConnected: boolean;
}

const integrations: IntegrationCard[] = [
  {
    name: 'Slack',
    icon: '💬',
    description: 'Get notifications in Slack',
    isConnected: true,
  },
  {
    name: 'Notion',
    icon: '📄',
    description: 'Save research to Notion',
    isConnected: false,
  },
  {
    name: 'GitHub',
    icon: '🐙',
    description: 'Share findings on GitHub',
    isConnected: true,
  },
  {
    name: 'Google Drive',
    icon: '☁️',
    description: 'Store files in Google Drive',
    isConnected: false,
  },
  {
    name: 'Zapier',
    icon: '⚡',
    description: 'Automate workflows',
    isConnected: false,
  },
  {
    name: 'Linear',
    icon: '📋',
    description: 'Create issues in Linear',
    isConnected: false,
  },
];

export function IntegrationsSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Integrations</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="p-4 border border-[--border] rounded-lg bg-[--surface-secondary]/50"
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="text-2xl">{integration.icon}</span>
                <div className="flex-1">
                  <p className="font-medium text-[--text-primary]">
                    {integration.name}
                  </p>
                  <p className="text-xs text-[--text-muted] mt-1">
                    {integration.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between mt-4">
                {integration.isConnected ? (
                  <Badge variant="success">Connected ✓</Badge>
                ) : (
                  <Badge variant="muted">Not connected</Badge>
                )}
                <Button
                  variant={integration.isConnected ? 'secondary' : 'primary'}
                  size="sm"
                >
                  {integration.isConnected ? 'Disconnect' : 'Connect'}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
