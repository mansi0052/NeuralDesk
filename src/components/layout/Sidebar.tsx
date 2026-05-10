import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  FlaskConical,
  Users,
  CreditCard,
  Bell,
  Settings,
  HelpCircle,
  LogOut,
  Menu,
  X,
  ChevronDown,
  MessageSquare,
} from 'lucide-react';
import { useNotifications } from '../../hooks/useNotifications';
import { Avatar } from '../ui/Avatar';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const location = useLocation();
  const { unreadCount } = useNotifications();
  const [showUserMenu, setShowUserMenu] = useState(false);

  const isActive = (path: string) => location.pathname.startsWith(path);

  const navItems = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    path: '/dashboard',
  },

  {
    label: 'Research',
    icon: FlaskConical,
    path: '/research',
  },

  {
    label: 'AI Chat',
    icon: MessageSquare,
    path: '/chat',
  },
];

  const workspaceItems = [
    { label: 'Team', icon: Users, path: '/team' },
    { label: 'Billing', icon: CreditCard, path: '/billing' },
    {
      label: 'Notifications',
      icon: Bell,
      path: '/notifications',
      badge: unreadCount,
    },
  ];

  const accountItems = [
    { label: 'Settings', icon: Settings, path: '/settings' },
    { label: 'Help', icon: HelpCircle, path: '#' },
  ];

  const NavItem = ({
    label,
    icon: Icon,
    path,
    badge,
  }: {
    label: string;
    icon: any;
    path: string;
    badge?: number;
  }) => (
    <Link
      to={path}
      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
        isActive(path)
          ? 'bg-[--primary] text-white'
          : 'text-[--text-muted] hover:text-[--text-primary] hover:bg-[--surface-secondary]'
      }`}
    >
      <Icon size={20} />
      {isOpen && (
        <>
          <span className="flex-1 text-sm font-medium">{label}</span>
          {badge ? (
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[--danger] text-xs font-bold text-white">
              {badge}
            </span>
          ) : null}
        </>
      )}
    </Link>
  );

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-screen bg-[--surface-secondary] border-r border-[--border] transition-all duration-300 z-40 ${
          isOpen ? 'w-60' : 'w-16'
        }`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between p-4 border-b border-[--border]">
          {isOpen && (
            <span className="text-lg font-bold font-display text-gradient">
              ⬡ NeuralDesk
            </span>
          )}
          <button
            onClick={onToggle}
            className="p-1 hover:bg-[--surface] rounded-lg transition-colors"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Navigation */}
        <div className="flex flex-col h-[calc(100%-128px)] overflow-y-auto p-3 space-y-8">
          {/* Main */}
          <div className="space-y-2">
            {isOpen && (
              <p className="px-3 text-xs font-semibold text-[--text-muted] uppercase">
                Main
              </p>
            )}
            <div className="space-y-1">
              {navItems.map(item => (
                <NavItem key={item.path} {...item} />
              ))}
            </div>
          </div>

          {/* Workspace */}
          <div className="space-y-2">
            {isOpen && (
              <p className="px-3 text-xs font-semibold text-[--text-muted] uppercase">
                Workspace
              </p>
            )}
            <div className="space-y-1">
              {workspaceItems.map(item => (
                <NavItem key={item.path} {...item} />
              ))}
            </div>
          </div>

          {/* Account */}
          <div className="space-y-2">
            {isOpen && (
              <p className="px-3 text-xs font-semibold text-[--text-muted] uppercase">
                Account
              </p>
            )}
            <div className="space-y-1">
              {accountItems.map(item => (
                <NavItem key={item.path} {...item} />
              ))}
            </div>
          </div>
        </div>

        {/* User Section */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-[--border] p-3 bg-[--surface]">
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center gap-3 w-full p-2 hover:bg-[--surface-secondary] rounded-lg transition-colors"
            >
              <Avatar
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
                size="md"
              />
              {isOpen && (
                <>
                  <div className="flex-1 text-left">
                    <p className="text-sm font-medium text-[--text-primary]">
                      Alex Johnson
                    </p>
                    <p className="text-xs text-[--text-muted]">Pro</p>
                  </div>
                  <ChevronDown size={16} />
                </>
              )}
            </button>

            {showUserMenu && isOpen && (
              <div className="absolute bottom-full left-0 right-0 mb-2 bg-[--surface] border border-[--border] rounded-lg shadow-lg">
                <button className="w-full px-4 py-2 text-left text-sm text-[--text-primary] hover:bg-[--surface-secondary] transition-colors">
                  Profile
                </button>
                <button className="w-full px-4 py-2 text-left text-sm text-[--text-primary] hover:bg-[--surface-secondary] transition-colors">
                  Settings
                </button>
                <button className="w-full px-4 py-2 text-left text-sm text-[--danger] hover:bg-[--surface-secondary] transition-colors border-t border-[--border]">
                  <LogOut size={16} className="inline mr-2" />
                  Sign out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden z-30"
          onClick={onToggle}
        />
      )}
    </>
  );
}
