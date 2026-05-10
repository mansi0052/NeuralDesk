import { Badge } from '../ui/Badge';

interface RoleBadgeProps {
  role: 'Owner' | 'Admin' | 'Member' | 'Viewer';
}

const roleDescriptions = {
  Owner: 'Full access, account owner',
  Admin: 'Manage team and settings',
  Member: 'Create and view content',
  Viewer: 'View-only access',
};

export function RoleBadge({ role }: RoleBadgeProps) {
  const variants = {
    Owner: 'primary' as const,
    Admin: 'primary' as const,
    Member: 'muted' as const,
    Viewer: 'muted' as const,
  };

  return (
    <div className="flex flex-col gap-1">
      <Badge variant={variants[role]}>{role}</Badge>
      <p className="text-xs text-[--text-muted]">{roleDescriptions[role]}</p>
    </div>
  );
}
