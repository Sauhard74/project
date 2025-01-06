import React from 'react';
import { LayoutDashboard, Layers, Users, Settings, HelpCircle, LogOut, PieChart } from 'lucide-react';

interface SidebarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function Sidebar({ onNavigate, currentPage }: SidebarProps) {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', id: 'dashboard' },
    { icon: PieChart, label: 'Overview', id: 'overview' },
    { icon: Layers, label: 'Projects', id: 'projects' },
    { icon: Users, label: 'Team', id: 'team' },
    { icon: Settings, label: 'Settings', id: 'settings' },
    { icon: HelpCircle, label: 'Help', id: 'help' },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6">
        <h1 className="text-xl font-bold">UX Pilot</h1>
      </div>
      
      <nav className="flex-1 px-4">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.label}>
              <button
                onClick={() => onNavigate(item.id)}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg w-full text-left ${
                  currentPage === item.id
                    ? 'bg-purple-100 text-purple-700'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 mt-auto border-t border-gray-200">
        <button className="flex items-center gap-3 text-gray-700 hover:text-gray-900 w-full px-3 py-2">
          <LogOut className="h-5 w-5" />
          Logout
        </button>
      </div>
    </aside>
  );
}