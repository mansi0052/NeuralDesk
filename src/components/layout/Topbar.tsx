import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  Search,
  Moon,
  Sun,
  Bell,
  Command,
  ChevronDown,
  LogOut,
} from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { useNotifications } from '../../hooks/useNotifications';
import { Avatar } from '../ui/Avatar';
import { Modal } from '../ui/Modal';

interface TopbarProps {
  onMenuClick: () => void;
}

export function Topbar({ onMenuClick }: TopbarProps) {
  const location = useLocation();
  const [theme, setTheme] = useTheme();
  const { unreadCount } = useNotifications();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showCommandPalette, setShowCommandPalette] = useState(false);
  const [commandSearch, setCommandSearch] = useState('');

  const getPageTitle = () => {
    const titles: Record<string, string> = {
      '/dashboard': 'Dashboard',
      '/research': 'Research Assistant',
      '/billing': 'Billing & Plans',
      '/team': 'Team Members',
      '/notifications': 'Notifications',
      '/settings': 'Settings',
    };

    for (const [path, title] of Object.entries(titles)) {
      if (location.pathname.startsWith(path)) {
        return title;
      }
    }
    return 'NeuralDesk';
  };

  const commands = [
    { name: 'Dashboard', path: '/dashboard', category: 'Navigate' },
    { name: 'Research', path: '/research', category: 'Navigate' },
    { name: 'Team', path: '/team', category: 'Navigate' },
    { name: 'Billing', path: '/billing', category: 'Navigate' },
    { name: 'Settings', path: '/settings', category: 'Navigate' },
    { name: 'Toggle Theme', action: () => setTheme(theme === 'dark' ? 'light' : 'dark'), category: 'Tools' },
  ];

  const filteredCommands = commands.filter(cmd =>
    cmd.name.toLowerCase().includes(commandSearch.toLowerCase())
  );

  return (
    <>
      <div className="fixed top-0 right-0 left-0 h-16 md:left-64 lg:left-60 bg-[--surface] border-b border-[--border] z-30 px-6 flex items-center justify-between">
        {/* Left: Title + Breadcrumb */}
        <div className="flex items-center gap-4">
          <h1 className="text-lg font-semibold font-display text-[--text-primary]">
            {getPageTitle()}
          </h1>
        </div>

        {/* Center: Search */}
        <div className="flex-1 max-w-sm mx-4">
          <div
            onClick={() => setShowCommandPalette(true)}
            className="flex items-center gap-2 px-4 py-2 bg-[--surface-secondary] border border-[--border] rounded-lg cursor-pointer hover:border-[--primary]/50 transition-colors"
          >
            <Search size={16} className="text-[--text-muted]" />
            <span className="text-sm text-[--text-muted] flex-1">Search...</span>
            <div className="flex gap-1">
              <kbd className="px-2 py-1 text-xs bg-[--border] text-[--text-muted] rounded">
                ⌘
              </kbd>
              <kbd className="px-2 py-1 text-xs bg-[--border] text-[--text-muted] rounded">
                K
              </kbd>
            </div>
          </div>
        </div>

        {/* Right: Theme, Notifications, Avatar */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 hover:bg-[--surface-secondary] rounded-lg transition-colors"
          >
            {theme === 'dark' ? (
              <Sun size={20} />
            ) : (
              <Moon size={20} />
            )}
          </button>

          {/* Notifications */}
          <Link
            to="/notifications"
            className="relative p-2 hover:bg-[--surface-secondary] rounded-lg transition-colors"
          >
            <Bell size={20} />
            {unreadCount > 0 && (
              <span className="absolute top-1 right-1 h-5 w-5 flex items-center justify-center bg-[--danger] text-white text-xs font-bold rounded-full">
                {unreadCount}
              </span>
            )}
          </Link>

          {/* User Menu */}
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center gap-2 p-2 hover:bg-[--surface-secondary] rounded-lg transition-colors"
            >
              <Avatar
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
                size="sm"
              />
              <ChevronDown size={16} />
            </button>

            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-[--surface-secondary] border border-[--border] rounded-lg shadow-lg">
                <button className="w-full px-4 py-2 text-left text-sm text-[--text-primary] hover:bg-[--surface] transition-colors">
                  Profile
                </button>
                <button className="w-full px-4 py-2 text-left text-sm text-[--text-primary] hover:bg-[--surface] transition-colors">
                  Settings
                </button>
                <button className="w-full px-4 py-2 text-left text-sm text-[--text-primary] hover:bg-[--surface] transition-colors">
                  Billing
                </button>
                <button className="w-full px-4 py-2 text-left text-sm text-[--danger] hover:bg-[--surface] transition-colors border-t border-[--border]">
                  <LogOut size={16} className="inline mr-2" />
                  Sign out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Command Palette Modal */}
      <Modal
        isOpen={showCommandPalette}
        onClose={() => {
          setShowCommandPalette(false);
          setCommandSearch('');
        }}
        title="Command Palette"
      >
        <div className="space-y-3">
          <div className="flex items-center gap-2 px-3 py-2 bg-[--surface-secondary] border border-[--border] rounded-lg">
            <Command size={16} className="text-[--text-muted]" />
            <input
              autoFocus
              type="text"
              placeholder="Search commands..."
              value={commandSearch}
              onChange={e => setCommandSearch(e.target.value)}
              className="flex-1 bg-transparent outline-none text-[--text-primary] placeholder-[--text-muted]"
            />
          </div>

          <div className="max-h-64 overflow-y-auto space-y-1">
            {filteredCommands.length > 0 ? (
              filteredCommands.map((cmd, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    if ('path' in cmd && cmd.path) {
                      window.location.href = cmd.path;
                    } else if ('action' in cmd && cmd.action) {
                      cmd.action();
                    }
                    setShowCommandPalette(false);
                    setCommandSearch('');
                  }}
                  className="w-full flex items-center justify-between px-3 py-2 text-left text-sm hover:bg-[--surface] rounded-lg transition-colors"
                >
                  <span className="text-[--text-primary]">{cmd.name}</span>
                  <span className="text-xs text-[--text-muted]">
                    {cmd.category}
                  </span>
                </button>
              ))
            ) : (
              <p className="text-center py-4 text-[--text-muted] text-sm">
                No commands found
              </p>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
}
