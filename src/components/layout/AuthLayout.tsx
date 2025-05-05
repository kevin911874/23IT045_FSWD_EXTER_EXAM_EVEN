
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent } from '@/components/ui/card';

const AuthLayout: React.FC = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-teal-50 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Staff Hub</h1>
          <p className="text-gray-500 mt-2">Employee Management System</p>
        </div>
        <Card className="shadow-lg">
          <CardContent className="pt-6">
            <Outlet />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AuthLayout;
