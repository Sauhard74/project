import React from 'react';
import { Book, MessageCircle, Video, FileText } from 'lucide-react';

export function Help() {
  const resources = [
    {
      icon: Book,
      title: 'Documentation',
      description: 'Detailed guides and API references',
      link: '#'
    },
    {
      icon: MessageCircle,
      title: 'Community Support',
      description: 'Get help from our community',
      link: '#'
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Learn through step-by-step videos',
      link: '#'
    },
    {
      icon: FileText,
      title: 'FAQs',
      description: 'Common questions and answers',
      link: '#'
    }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Help Center</h1>

      <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
        <h2 className="text-lg font-semibold text-blue-900 mb-2">Need assistance?</h2>
        <p className="text-blue-700 mb-4">Our support team is here to help you with any questions or issues.</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Contact Support
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {resources.map((resource) => (
          <a
            key={resource.title}
            href={resource.link}
            className="bg-white rounded-lg border border-gray-200 p-6 hover:border-blue-500 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-50 rounded-lg">
                <resource.icon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold">{resource.title}</h3>
                <p className="text-gray-600">{resource.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}