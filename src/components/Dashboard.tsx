import React from 'react';
import { Plus, ArrowRight, LayoutDashboard, Layers, Palette, Wand2 } from 'lucide-react';

export function Dashboard() {
  const recentProjects = [
    {
      title: 'E-commerce Website',
      date: '2 days ago',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80'
    },
    {
      title: 'Mobile Banking App',
      date: '5 days ago',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80'
    }
  ];

  const stats = [
    { label: 'Total Projects', value: '125', icon: Layers },
    { label: 'UI Designs', value: '84', icon: Palette },
    { label: 'Wireframes', value: '41', icon: LayoutDashboard }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-4">Welcome to UX Pilot</h1>
        <p className="text-purple-100 mb-8 max-w-2xl">Create stunning UI designs and wireframes in minutes using our AI-powered design tools. Start your next project today.</p>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-xl hover:bg-purple-50 transition-colors">
            <Wand2 className="h-5 w-5" />
            New AI Design
          </button>
          <button className="flex items-center gap-2 border border-purple-400 text-white px-6 py-3 rounded-xl hover:bg-purple-500 transition-colors">
            <Plus className="h-5 w-5" />
            New Project
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <stat.icon className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Projects */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Recent Projects</h2>
          <button className="flex items-center gap-2 text-purple-600 hover:text-purple-700">
            View All
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recentProjects.map((project) => (
            <div key={project.title} className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all">
              <div className="relative h-48">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                    <span className="text-white font-medium">{project.title}</span>
                    <button className="bg-white/90 p-2 rounded-lg hover:bg-white">
                      <ArrowRight className="h-4 w-4 text-purple-600" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-500">Last edited {project.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}