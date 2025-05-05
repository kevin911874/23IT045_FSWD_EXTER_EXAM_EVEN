
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Employee } from '@/types';
import { User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface EmployeeDetailsProps {
  employee: Employee | null;
  open: boolean;
  onClose: () => void;
}

const EmployeeDetails: React.FC<EmployeeDetailsProps> = ({
  employee,
  open,
  onClose,
}) => {
  // Map employee type to badge colors
  const typeColorMap = {
    'full-time': 'bg-blue-100 text-blue-800',
    'part-time': 'bg-green-100 text-green-800',
    'contractor': 'bg-orange-100 text-orange-800',
    'intern': 'bg-purple-100 text-purple-800',
  };
  
  if (!employee) return null;
  
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Employee Details</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 rounded-full overflow-hidden mb-4 bg-gray-100 flex items-center justify-center">
            {employee.profileImage ? (
              <img
                src={employee.profileImage}
                alt={`${employee.firstName} ${employee.lastName}`}
                className="w-full h-full object-cover"
              />
            ) : (
              <User size={40} className="text-gray-400" />
            )}
          </div>
          
          <h2 className="text-xl font-semibold">{employee.firstName} {employee.lastName}</h2>
          <p className="text-gray-500">{employee.position}</p>
          
          <Badge className={`${typeColorMap[employee.type]} mt-2 font-normal`}>
            {employee.type.replace('-', ' ')}
          </Badge>
          
          <div className="w-full mt-6 space-y-3">
            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-500">Department</span>
              <span>{employee.department}</span>
            </div>
            
            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-500">Email</span>
              <span>{employee.email}</span>
            </div>
            
            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-500">Phone</span>
              <span>{employee.phone}</span>
            </div>
            
            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-500">Hire Date</span>
              <span>{new Date(employee.hireDate).toLocaleDateString()}</span>
            </div>
            
            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-500">Status</span>
              <span className={employee.status === 'active' ? 'text-green-600' : 'text-red-600'}>
                {employee.status.charAt(0).toUpperCase() + employee.status.slice(1)}
              </span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EmployeeDetails;
