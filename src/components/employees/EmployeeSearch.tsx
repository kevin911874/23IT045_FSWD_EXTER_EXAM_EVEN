
import React from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface EmployeeSearchProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const EmployeeSearch: React.FC<EmployeeSearchProps> = ({
  searchTerm,
  onSearchChange,
}) => {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
      <Input
        type="search"
        placeholder="Search employees..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="pl-9 w-full max-w-xs"
      />
    </div>
  );
};

export default EmployeeSearch;
