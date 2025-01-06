import React from 'react';
import { Clock, Users, MessageSquare, DollarSign, Grid, Headphones, MessageCircle, Share2, Facebook, Instagram, Globe } from 'lucide-react';

// Circular Loader Component
const CircularLoader = () => (
  <div className="w-12 h-12 border-4 border-gray-200 rounded-full animate-spin"></div>
);

export function Overview() {
  const voiceAgents = [
    { id: '3941221938', name: 'Voice Agent One', status: 'Occupied', meetings: '$874.00', cost: '$316.00' },
    { id: '3941221938', name: 'Voice Agent One', status: 'Non Occupied', meetings: '$874.00', cost: '$316.00' },
    { id: '3941221938', name: 'Voice Agent One', status: 'Non Occupied', meetings: '$874.00', cost: '$316.00' },
    { id: '3941221938', name: 'Voice Agent One', status: 'Non Occupied', meetings: '$874.00', cost: '$316.00' },
  ];

  return (
    <div className="space-y-8">
      {/* Total Performance */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Total Performance</h2>
        <div className="flex gap-4 mb-6">
          <button className="bg-purple-100 text-purple-700 px-4 py-2 rounded-lg">All</button>
          <button className="text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg flex items-center gap-2">
            <Headphones className="h-4 w-4" />
            Voice Agents
          </button>
          <button className="text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg flex items-center gap-2">
            <MessageCircle className="h-4 w-4" />
            Chat Bots
          </button>
          <button className="text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg flex items-center gap-2">
            <Share2 className="h-4 w-4" />
            Outreach Bots
          </button>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Grid className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-gray-600">Meetings Booked</p>
                <h3 className="text-2xl font-bold">10</h3>
              </div>
            </div>
            <div className="flex items-center text-sm text-green-600">
              <span>Since last month</span>
              <span className="ml-2">+8.1%</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-gray-600">Interested in Booking</p>
                <h3 className="text-2xl font-bold">15</h3>
              </div>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <span>Since last month</span>
            </div>
          </div>
        </div>
      </section>

      {/* Agent Overview */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Agent Overview</h2>
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Name</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Status</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Meetings Booked</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Cost</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {voiceAgents.map((agent, index) => (
                <tr key={index}>
                  <td className="px-6 py-4">
                    <div>
                      <div className="font-medium">{agent.name}</div>
                      <div className="text-sm text-gray-500">ID {agent.id}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      agent.status === 'Occupied' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {agent.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">{agent.meetings}</td>
                  <td className="px-6 py-4">{agent.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Chatbot Data */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Chatbot Data</h2>
        <div className="flex gap-4 mb-6">
          <button className="bg-purple-100 text-purple-700 px-4 py-2 rounded-lg">All</button>
          <button className="text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg flex items-center gap-2">
            <Facebook className="h-4 w-4" />
            Facebook
          </button>
          <button className="text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg flex items-center gap-2">
            <Instagram className="h-4 w-4" />
            Instagram
          </button>
          <button className="text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg flex items-center gap-2">
            <Globe className="h-4 w-4" />
            Website
          </button>
          <button className="text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg flex items-center gap-2">
            <Globe className="h-4 w-4" />
            Website
          </button>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-gray-600">Total Clients</p>
                <h3 className="text-2xl font-bold">100</h3>
              </div>
              <CircularLoader />
            </div>
            <div className="flex items-center text-sm text-green-600">
              <span>Since last month</span>
              <span className="ml-2">+8.1%</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <MessageSquare className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-gray-600">Total Dialogues</p>
                <h3 className="text-2xl font-bold">500</h3>
              </div>
              <CircularLoader />
            </div>
            <div className="flex items-center text-sm text-red-600">
              <span>Since last month</span>
              <span className="ml-2">+3.2%</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <DollarSign className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-gray-600">Total Costs</p>
                <h3 className="text-2xl font-bold">$20</h3>
              </div>
              <CircularLoader />
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <span>Since last month</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}