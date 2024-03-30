import React from 'react';

// Import Components
import Sidebar from "@/components/containers/Sidebar";
import Home from '@/components/containers/Home';

function page() {
  return (
    <div className="flex p-3 bg-potrello-white-200">
      <Sidebar />
        <Home />
    </div>
  );
}

export default page;
