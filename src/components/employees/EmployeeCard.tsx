
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Employee } from '@/types';
import { Edit, Trash2, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface EmployeeCardProps {
  employee: Employee;
  onView: (employee: Employee) => void;
  onEdit: (employee: Employee) => void;
  onDelete: (id: string) => void;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({
  employee,
  onView,
  onEdit,
  onDelete,
}) => {
  // Map employee type to badge colors
  const typeColorMap = {
    'full-time': 'bg-blue-100 text-blue-800',
    'part-time': 'bg-green-100 text-green-800',
    'contractor': 'bg-orange-100 text-orange-800',
    'intern': 'bg-purple-100 text-purple-800',
  };

  return (
    <Card className="employee-card overflow-hidden">
      <CardContent className="p-0">
        <div className="p-6 pb-3">
          {/* Profile image */}
          <div 
            className="profile-picture-container mb-4"
            onClick={() => onView(employee)}
          >
            {employee.profileImage ? (
              <img 
                src={employee.profileImage} 
                alt={`${employee.firstName} ${employee.lastName}`}
                className="profile-picture"
              />
            ) : (
              <div className="profile-picture-placeholder">
                <User size={24} />
              </div>
            )}
          </div>
          
          {/* Employee name and position */}
          <div 
            className="text-center mb-4 cursor-pointer"
            onClick={() => onView(employee)}
          >
            <h3 className="font-medium text-lg truncate">
              {employee.firstName} {employee.lastName}
            </h3>
            <p className="text-gray-500 truncate">{employee.position}</p>
            <p className="text-gray-400 text-sm">{employee.department}</p>
          </div>
          
          {/* Employee type badge */}
          <div className="flex justify-center mb-4">
            <Badge className={`${typeColorMap[employee.type]} font-normal`}>
              {employee.type.replace('-', ' ')}
            </Badge>
          </div>
          
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1"
              onClick={() => onEdit(employee)}
            >
              <Edit className="h-4 w-4 mr-1" /> Edit
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              className="flex-1 text-destructive hover:text-destructive-foreground hover:bg-destructive"
              onClick={() => onDelete(employee.id)}
            >
              <Trash2 className="h-4 w-4 mr-1" /> Delete
            </Button>
          </div>
        </div>
        
        <div className="border-t p-3 text-sm bg-gray-50">
          <div className="grid grid-cols-1 gap-1">
            <div className="flex justify-between">
              <span className="text-gray-500">Email:</span>
              <span className="text-right font-medium truncate max-w-[180px]">
                {employee.email}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Phone:</span>
              <span className="text-right font-medium">{employee.phone}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmployeeCard;
