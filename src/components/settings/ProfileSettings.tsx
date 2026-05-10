import { useState } from 'react';
import { Upload, Check } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { Toast, useToast } from '../ui/Toast';
import { Avatar } from '../ui/Avatar';

export function ProfileSettings() {
  const { toast, showToast } = useToast();
  const [formData, setFormData] = useState({
    firstName: 'Alex',
    lastName: 'Johnson',
    email: 'alex@neuraldesk.ai',
    company: 'Tech Innovations Inc.',
    jobTitle: 'AI Research Lead',
    timezone: 'UTC-5',
    language: 'English',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    showToast('Profile updated successfully!', 'success');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Avatar */}
        <div className="flex items-center gap-4">
          <Avatar
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
            size="lg"
          />
          <Button variant="secondary" size="sm">
            <Upload size={16} className="mr-2" />
            Change Photo
          </Button>
        </div>

        {/* Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <Input
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          <div className="md:col-span-2">
            <Input
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              disabled
            />
            <p className="text-xs text-[--success] mt-1 flex items-center gap-1">
              <Check size={14} /> Verified
            </p>
          </div>
          <Input
            label="Company"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
          <Input
            label="Job Title"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
          />
          <Select
            label="Timezone"
            name="timezone"
            value={formData.timezone}
            onChange={handleChange}
          >
            <option>UTC-5</option>
            <option>UTC-6</option>
            <option>UTC-8</option>
            <option>UTC</option>
            <option>UTC+1</option>
            <option>UTC+8</option>
          </Select>
          <Select
            label="Language"
            name="language"
            value={formData.language}
            onChange={handleChange}
          >
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
            <option>German</option>
            <option>Chinese</option>
            <option>Japanese</option>
          </Select>
        </div>

        <Button onClick={handleSubmit}>Save Changes</Button>
        {toast && <Toast message={toast.message} type={toast.type} />}
      </CardContent>
    </Card>
  );
}
