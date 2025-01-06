import React from 'react';
import { UserPlus, Mail, Phone } from 'lucide-react';

export function Team() {
  const team = [
    {
      name: 'John Doe',
      role: 'UI Designer',
      email: 'john@example.com',
      phone: '+1 234 567 890',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      status: 'Active'
    },
    {
      name: 'Jane Smith',
      role: 'Product Manager',
      email: 'jane@example.com',
      phone: '+1 234 567 891',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      status: 'In a meeting'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Team Members</h1>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <UserPlus className="h-5 w-5" />
          Add Member
        </button>
      </div>

      <div className="grid gap-4">
        {team.map((member) => (
          <div key={member.email} className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center gap-4">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-12 h-12 rounded-full"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{member.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    member.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {member.status}
                  </span>
                </div>
                <p className="text-gray-600">{member.role}</p>
                <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Mail className="h-4 w-4" />
                    {member.email}
                  </div>
                  <div className="flex items-center gap-1">
                    <Phone className="h-4 w-4" />
                    {member.phone}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}