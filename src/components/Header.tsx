import { Bell, Search, Menu, Calendar } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
  currentPage: string;
}

const pageTitles: Record<string, string> = {
  dashboard: 'Dashboard',
  tasks: 'Task Management',
  projects: 'Projects',
  team: 'Team Members',
  messages: 'Messages',
  settings: 'Settings',
};

const pageDescriptions: Record<string, string> = {
  dashboard: 'Overview of your workspace',
  tasks: 'Manage and track all tasks',
  projects: 'Monitor project progress',
  team: 'Manage your team members',
  messages: 'Team communication',
  settings: 'Configure your workspace',
};

export default function Header({ onMenuClick, currentPage }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-border">
      <div className="flex items-center justify-between h-16 px-4 lg:px-8">
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Menu size={20} />
          </button>
          <div>
            <h1 className="text-xl font-bold text-text-primary">{pageTitles[currentPage] || 'Dashboard'}</h1>
            <p className="text-xs text-text-muted hidden sm:block">{pageDescriptions[currentPage] || ''}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          {/* Search */}
          <div className="hidden md:flex items-center bg-gray-50 border border-border rounded-lg px-3 py-2 gap-2 w-64 focus-within:ring-2 focus-within:ring-brand-500/20 focus-within:border-brand-500 transition-all">
            <Search size={16} className="text-text-muted flex-shrink-0" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent text-sm outline-none w-full placeholder:text-text-muted"
            />
            <kbd className="hidden lg:flex items-center px-1.5 py-0.5 text-[10px] text-text-muted bg-white border border-border rounded">
              ⌘K
            </kbd>
          </div>

          {/* Calendar */}
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-text-secondary relative">
            <Calendar size={20} />
          </button>

          {/* Notifications */}
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-text-secondary relative">
            <Bell size={20} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white" />
          </button>

          {/* Avatar */}
          <div className="w-8 h-8 bg-gradient-to-br from-brand-400 to-purple-500 rounded-full flex items-center justify-center text-xs font-bold text-white ring-2 ring-white cursor-pointer">
            AR
          </div>
        </div>
      </div>
    </header>
  );
}
