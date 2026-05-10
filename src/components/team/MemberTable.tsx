import { MoreVertical, Trash2 } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Avatar } from '../ui/Avatar';
import { TeamMember } from '../../types/index';
import { teamMembers } from '../../data/mockData';

const roleVariants = {
  Owner: 'primary' as const,
  Admin: 'primary' as const,
  Member: 'muted' as const,
  Viewer: 'muted' as const,
};

const statusVariants = {
  Active: 'success' as const,
  Invited: 'warning' as const,
  Inactive: 'muted' as const,
};

export function MemberTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Members</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="table-base">
            <thead>
              <tr className="border-b border-[--border]">
                <th className="table-header text-left">Member</th>
                <th className="table-header text-left">Email</th>
                <th className="table-header text-center">Role</th>
                <th className="table-header text-center">Status</th>
                <th className="table-header text-right">Joined</th>
                <th className="table-header text-right">Last Active</th>
                <th className="table-header text-center">Usage</th>
                <th className="table-header text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {teamMembers.map((member) => (
                <tr key={member.id} className="table-row">
                  <td className="table-cell">
                    <div className="flex items-center gap-2">
                      <Avatar src={member.avatar} size="sm" alt={member.name} />
                      <span className="text-[--text-primary]">{member.name}</span>
                    </div>
                  </td>
                  <td className="table-cell text-[--text-muted]">{member.email}</td>
                  <td className="table-cell text-center">
                    <Badge variant={roleVariants[member.role]}>
                      {member.role}
                    </Badge>
                  </td>
                  <td className="table-cell text-center">
                    <Badge variant={statusVariants[member.status]}>
                      {member.status}
                    </Badge>
                  </td>
                  <td className="table-cell text-right text-sm text-[--text-muted]">
                    {member.joinedDate}
                  </td>
                  <td className="table-cell text-right text-sm text-[--text-muted]">
                    {member.lastActive}
                  </td>
                  <td className="table-cell text-center">
                    <div className="flex items-center gap-1">
                      <div className="h-1 flex-1 bg-[--surface-secondary] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[--primary]"
                          style={{ width: `${member.usage}%` }}
                        />
                      </div>
                      <span className="text-xs text-[--text-muted] w-8">
                        {member.usage}%
                      </span>
                    </div>
                  </td>
                  <td className="table-cell text-center">
                    <button className="p-1 hover:bg-[--surface-secondary] rounded transition-colors">
                      <MoreVertical size={16} className="text-[--text-muted]" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
