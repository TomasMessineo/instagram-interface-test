import React, { useState } from 'react';
import Navbar from './components/Navbar';
import PostList from './components/PostList';
import Search from './components/Search';
import CreatePost from './components/CreatePost';
import Activity from './components/Activity';
import Profile from './components/Profile';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <PostList />;
      case 'search':
        return <Search />;
      case 'create':
        return <CreatePost />;
      case 'activity':
        return <Activity />;
      case 'profile':
        return <Profile />;
      default:
        return <PostList />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-3xl mx-auto bg-white min-h-screen">
        <header className="border-b p-4">
          <h1 className="text-2xl font-bold">Instagram Clone</h1>
        </header>
        <main className="p-4 pb-20">
          {renderPage()}
        </main>
        <Navbar setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
}

export default App;