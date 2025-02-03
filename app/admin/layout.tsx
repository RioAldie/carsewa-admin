import React, { ReactNode } from 'react';

import { redirect } from 'next/navigation';

import '@/styles/admin.css';
import Sidebar from '@/components/admin/Sidebar';
import Header from '@/components/admin/Header';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex min-h-screen w-full flex-row">
      <Sidebar />

      <div className="admin-container">
        <Header />
        {children}
      </div>
    </main>
  );
};
export default Layout;
