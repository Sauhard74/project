import React from 'react';
import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function Layout({ children, onNavigate, currentPage }: LayoutProps) {
  return (
    <div className="flex h-screen bg-[#FAFAFA]">
      <Sidebar onNavigate={onNavigate} currentPage={currentPage} />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}