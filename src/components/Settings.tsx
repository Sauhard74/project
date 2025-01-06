import React from 'react';
import { User, Bell, Lock, Palette, CreditCard } from 'lucide-react';

export function Settings() {
  const sections = [
    {
      icon: User,
      title: 'Profile',
      description: 'Manage your personal information'
    },
    {
      icon: Bell,
      title: 'Notifications',
      description: 'Configure how you receive notifications'
    },
    {
      icon: Lock,
      title: 'Security',
      description: 'Manage your password and security settings'
    },
    {
      icon: Palette,
      title: 'Appearance',
      description: 'Customize the look and feel of the application'
    },
    {
      icon: CreditCard,
      title: 'Billing',
      description: 'Manage your subscription and billing information'
    }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Settings</h1>
      
      <div className="grid gap-4">
        {sections.map((section) => (
          <div
            key={section.title}
            className="bg-white rounded-lg border border-gray-200 p-6 hover:border-blue-500 cursor-pointer transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-50 rounded-lg">
                <section.icon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold">{section.title}</h3>
                <p className="text-gray-600">{section.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}