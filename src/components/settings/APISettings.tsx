import { useState } from 'react';
import { Copy, Trash2, Eye, EyeOff } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { Toast, useToast } from '../ui/Toast';
import { Badge } from '../ui/Badge';
import { apiKeys } from '../../data/mockData';

export function APISettings() {
  const { toast, showToast } = useToast();
  const [keyName, setKeyName] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [showKeys, setShowKeys] = useState<Record<string, boolean>>({});

  const handleCreateKey = () => {
    if (!keyName) {
      showToast('Please enter a key name', 'error');
      return;
    }
    setIsCreating(true);
    setTimeout(() => {
      setIsCreating(false);
      setKeyName('');
      showToast('API key created successfully!', 'success');
    }, 1000);
  };

  const toggleKeyVisibility = (id: string) => {
    setShowKeys(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-6">
      {/* Create New Key */}
      <Card>
        <CardHeader>
          <CardTitle>Create New API Key</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            label="Key Name"
            placeholder="e.g., Production API Key"
            value={keyName}
            onChange={(e) => setKeyName(e.target.value)}
          />
          <Select label="Permissions">
            <option>All (read, write, delete)</option>
            <option>Read only</option>
            <option>Write only</option>
          </Select>
          <Button onClick={handleCreateKey} isLoading={isCreating}>
            Generate Key
          </Button>
        </CardContent>
      </Card>

      {/* Existing Keys */}
      <Card>
        <CardHeader>
          <CardTitle>API Keys</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {apiKeys.map((key) => (
              <div
                key={key.id}
                className="p-4 bg-[--surface-secondary] rounded-lg border border-[--border]"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-sm font-medium text-[--text-primary]">
                      {key.name}
                    </p>
                    <p className="text-xs text-[--text-muted] mt-1">
                      Created {key.created} • Last used {key.lastUsed}
                    </p>
                  </div>
                  <Badge variant="muted">Active</Badge>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <code className="flex-1 px-3 py-2 bg-[--surface] text-[--text-primary] text-xs rounded font-mono overflow-x-auto">
                    {showKeys[key.id] ? key.key : key.key.slice(0, 8) + '...' + key.key.slice(-4)}
                  </code>
                  <button
                    onClick={() => toggleKeyVisibility(key.id)}
                    className="p-2 hover:bg-[--surface] rounded transition-colors"
                  >
                    {showKeys[key.id] ? (
                      <EyeOff size={16} />
                    ) : (
                      <Eye size={16} />
                    )}
                  </button>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(key.key);
                      showToast('Copied to clipboard!', 'success');
                    }}
                    className="p-2 hover:bg-[--surface] rounded transition-colors"
                  >
                    <Copy size={16} />
                  </button>
                </div>

                <div className="flex gap-2">
                  <span className="text-xs px-2 py-1 bg-[--primary]/10 text-[--primary] rounded">
                    {key.permissions.join(', ')}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="ml-auto text-[--danger]"
                  >
                    <Trash2 size={16} />
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {toast && <Toast message={toast.message} type={toast.type} />}
    </div>
  );
}
