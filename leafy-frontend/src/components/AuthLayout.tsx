import React from 'react';
import { Leaf } from 'lucide-react';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Background overlay */}
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm"></div>
      {/* Centered modal container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
          {/* Logo/Brand */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Leaf className="h-8 w-8 text-green-600" />
              <h1 className="text-2xl font-bold text-gray-900">Leafy</h1>
            </div>
            <p className="text-gray-600">Plant companion for enthusiasts</p>
          </div>
          {/* Auth form content */}
          {children}
        </div>
      </div>
    </div>
  );
}