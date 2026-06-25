import { useState } from 'react';
import {
  LayoutDashboard,
  FolderKanban,
  Briefcase,
  Users,
  MessageSquare,
  Settings,
  ChevronDown,
  LogOut,
  X,
} from 'lucide-react';

interface SidebarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  collapsed: boolean;
  setCollapsed: (c: boolean) => void;
  mobileOpen: boolean;
  setMobileOpen: (o: boolean) => void;
}

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'tasks', label: 'Tasks', icon: FolderKanban },
  { id: 'projects', label: 'Projects', icon: Briefcase },
  { id: 'team', label: 'Team', icon: Users },
  { id: 'messages', label: 'Messages', icon: MessageSquare },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export default function Sidebar({ currentPage, setCurrentPage, collapsed, setCollapsed, mobileOpen, setMobileOpen }: SidebarProps) {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <>
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
      <aside
        className={`fixed top-0 left-0 z-50 h-full bg-sidebar text-white transition-all duration-300 flex flex-col
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          ${collapsed ? 'lg:w-[72px]' : 'lg:w-[260px]'} w-[260px]`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between px-4 h-16 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0">
              PM
            </div>
            {!collapsed && (
              <span className="font-semibold text-lg tracking-tight">ProjectHub</span>
            )}
          </div>
          <button
            onClick={() => setMobileOpen(false)}
            className="lg:hidden p-1 hover:bg-white/10 rounded"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4 px-2 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => { setCurrentPage(item.id); setMobileOpen(false); }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-150 group
                  ${active
                    ? 'bg-sidebar-active text-white shadow-lg shadow-brand-500/20'
                    : 'text-gray-400 hover:text-white hover:bg-sidebar-hover'
                  }`}
              >
                <Icon size={20} className="flex-shrink-0" />
                {!collapsed && <span className="text-sm font-medium">{item.label}</span>}
                {!collapsed && item.id === 'messages' && (
                  <span className="ml-auto bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    3
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Collapse button (desktop only) */}
        <div className="hidden lg:block border-t border-white/10 py-2 px-2">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-sidebar-hover transition-all"
          >
            <ChevronDown
              size={20}
              className={`flex-shrink-0 transition-transform ${collapsed ? '-rotate-90' : 'rotate-90'}`}
            />
            {!collapsed && <span className="text-sm font-medium">Collapse</span>}
          </button>
        </div>

        {/* User Profile */}
        <div className="border-t border-white/10 p-3 relative">
          <button
            onClick={() => !collapsed && setShowProfile(!showProfile)}
            className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-sidebar-hover transition-all"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-brand-400 to-purple-500 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
              AR
            </div>
            {!collapsed && (
              <div className="text-left overflow-hidden">
                <p className="text-sm font-medium truncate">Andry Rakoto</p>
                <p className="text-xs text-gray-400 truncate">Project Manager</p>
              </div>
            )}
          </button>
          {!collapsed && showProfile && (
            <div className="absolute bottom-full left-2 right-2 mb-2 bg-white text-gray-800 rounded-xl shadow-xl border border-gray-100 animate-fadeIn overflow-hidden">
              <button className="w-full px-4 py-2.5 text-left text-sm hover:bg-gray-50 flex items-center gap-2 text-red-500">
                <LogOut size={16} /> Sign out
              </button>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
