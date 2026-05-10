import { useState } from 'react';
import { X } from 'lucide-react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { Textarea } from '../ui/Textarea';

interface InviteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function InviteModal({ isOpen, onClose }: InviteModalProps) {
  const [emails, setEmails] = useState<string[]>(['']);
  const [role, setRole] = useState('Member');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAddEmail = () => {
    setEmails([...emails, '']);
  };

  const handleEmailChange = (index: number, value: string) => {
    const newEmails = [...emails];
    newEmails[index] = value;
    setEmails(newEmails);
  };

  const handleRemoveEmail = (index: number) => {
    setEmails(emails.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setEmails(['']);
      setRole('Member');
      setMessage('');
      onClose();
    }, 1000);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Invite Team Members"
      footer={
        <>
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} isLoading={isLoading}>
            Send Invites
          </Button>
        </>
      }
    >
      <div className="space-y-4">
        {/* Emails */}
        <div className="space-y-2">
          {emails.map((email, idx) => (
            <div key={idx} className="flex gap-2">
              <Input
                type="email"
                placeholder="user@example.com"
                value={email}
                onChange={(e) => handleEmailChange(idx, e.target.value)}
                className="flex-1"
              />
              {emails.length > 1 && (
                <button
                  onClick={() => handleRemoveEmail(idx)}
                  className="p-2 hover:bg-[--surface-secondary] rounded-lg transition-colors"
                >
                  <X size={20} />
                </button>
              )}
            </div>
          ))}
        </div>

        <Button
          variant="ghost"
          onClick={handleAddEmail}
          className="w-full justify-center"
        >
          + Add another email
        </Button>

        {/* Role */}
        <Select label="Role" value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="Viewer">Viewer</option>
          <option value="Member">Member</option>
          <option value="Admin">Admin</option>
        </Select>

        {/* Message */}
        <Textarea
          label="Personal Message (optional)"
          placeholder="Add a personal message to the invite..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={3}
        />
      </div>
    </Modal>
  );
}
