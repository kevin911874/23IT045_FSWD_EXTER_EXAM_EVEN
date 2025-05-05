
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";

// Layouts
import AuthLayout from "@/components/layout/AuthLayout";
import AppLayout from "@/components/layout/AppLayout";

// Auth Pages
import Login from "@/pages/Login";
import Register from "@/pages/Register";

// App Pages
import Dashboard from "@/pages/Dashboard";
import EmployeeList from "@/pages/EmployeeList";
import EmployeeCreate from "@/pages/EmployeeCreate";
import EmployeeEdit from "@/pages/EmployeeEdit";
import Search from "@/pages/Search";
import NotFoundPage from "@/pages/NotFoundPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Default route redirects to login */}
            <Route path="/" element={<Navigate to="/login" replace />} />
            
            {/* Auth routes */}
            <Route element={<AuthLayout />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>
            
            {/* App routes (protected) */}
            <Route element={<AppLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/employees" element={<EmployeeList />} />
              <Route path="/employees/new" element={<EmployeeCreate />} />
              <Route path="/employees/edit/:id" element={<EmployeeEdit />} />
              <Route path="/search" element={<Search />} />
            </Route>
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
