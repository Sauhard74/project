import React from 'react';
import { FolderGit2, Plus, Search } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'E-commerce Dashboard',
      description: 'Modern dashboard for an e-commerce platform',
      status: 'In Progress',
      team: ['https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'],
      lastUpdated: '2 days ago',
      progress: 75
    },
    {
      title: 'Social Media App',
      description: 'Mobile-first social networking platform',
      status: 'Completed',
      team: ['https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'],
      lastUpdated: '5 days ago',
      progress: 100
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Projects</h1>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <Plus className="h-5 w-5" />
          New Project
        </button>
      </div>

      <div className="flex items-center gap-4 bg-white p-4 rounded-lg border border-gray-200">
        <Search className="h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search projects..."
          className="flex-1 border-none focus:outline-none"
        />
      </div>

      <div className="grid gap-6">
        {projects.map((project) => (
          <div key={project.title} className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${
                project.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
              }`}>
                {project.status}
              </span>
            </div>
            
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {project.team.map((avatar, i) => (
                    <img
                      key={i}
                      src={avatar}
                      alt="Team member"
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500">Updated {project.lastUpdated}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-32 h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-full bg-blue-600 rounded-full"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
                <span className="text-sm text-gray-600">{project.progress}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}