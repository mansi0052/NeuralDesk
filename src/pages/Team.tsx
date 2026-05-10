import { useState } from 'react';
import { Plus } from 'lucide-react';
import { MemberTable } from '../components/team/MemberTable';
import { InviteModal } from '../components/team/InviteModal';
import { RoleBadge } from '../components/team/RoleBadge';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

export default function Team() {
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-display text-[--text-primary]">
            Team Management
          </h1>
          <p className="text-[--text-muted] mt-2">
            Manage your team members and permissions.
          </p>
        </div>
        <Button onClick={() => setIsInviteModalOpen(true)}>
          <Plus size={20} className="mr-2" />
          Invite Member
        </Button>
      </div>

      {/* Members Table */}
      <MemberTable />

      {/* Roles & Permissions */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold font-display text-[--text-primary] mb-6">
          Roles & Permissions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <h3 className="font-medium text-[--text-primary] mb-3">Owner</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-[--success]">✓</span>
                <span className="text-[--text-muted]">Full access</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[--success]">✓</span>
                <span className="text-[--text-muted]">Billing</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[--success]">✓</span>
                <span className="text-[--text-muted]">Delete team</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-[--text-primary] mb-3">Admin</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-[--success]">✓</span>
                <span className="text-[--text-muted]">Manage members</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[--danger]">✗</span>
                <span className="text-[--text-muted]">Change plan</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[--success]">✓</span>
                <span className="text-[--text-muted]">Create projects</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-[--text-primary] mb-3">Member</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-[--success]">✓</span>
                <span className="text-[--text-muted]">Create content</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[--success]">✓</span>
                <span className="text-[--text-muted]">View reports</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[--danger]">✗</span>
                <span className="text-[--text-muted]">Edit members</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-[--text-primary] mb-3">Viewer</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-[--success]">✓</span>
                <span className="text-[--text-muted]">View content</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[--danger]">✗</span>
                <span className="text-[--text-muted]">Create content</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[--danger]">✗</span>
                <span className="text-[--text-muted]">Edit members</span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Invite Modal */}
      <InviteModal
        isOpen={isInviteModalOpen}
        onClose={() => setIsInviteModalOpen(false)}
      />
    </div>
  );
}
