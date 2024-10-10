import React from 'react';
import { Home, Search, PlusSquare, Heart, User } from 'lucide-react';

interface NavbarProps {
  setCurrentPage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setCurrentPage }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t">
      <div className="max-w-3xl mx-auto flex justify-between items-center p-3">
        <Home className="w-6 h-6 cursor-pointer" onClick={() => setCurrentPage('home')} />
        <Search className="w-6 h-6 cursor-pointer" onClick={() => setCurrentPage('search')} />
        <PlusSquare className="w-6 h-6 cursor-pointer" onClick={() => setCurrentPage('create')} />
        <Heart className="w-6 h-6 cursor-pointer" onClick={() => setCurrentPage('activity')} />
        <User className="w-6 h-6 cursor-pointer" onClick={() => setCurrentPage('profile')} />
      </div>
    </nav>
  );
};

export default Navbar;