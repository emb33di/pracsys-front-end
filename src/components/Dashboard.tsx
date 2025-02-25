"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
// import { signOut } from 'firebase/auth';
// import { auth } from '../../lib/firebase';
import { TEST_CLAIMS } from 'utils/constants';
import Table_info from './Patient_Table';
import StatsDash from './StatsDash';

const Dashboard = () => {
  const router = useRouter();

  // const handleSignOut = async () => {
  //   try {
  //     await signOut(auth);
  //     router.push('/auth/login');
  //   } catch (error) {
  //     console.error('Error signing out:', error);
  //   }
  // };

  return (
    <div>
      {/* Main Dashboard Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Statistics */}
        <div className="lg:col-span-3">
          <StatsDash /> {/* Include the StatsDash component */}
        </div>

        {/* Ready for Review Table */}
        <div className="lg:col-span-3">
          <Table_info items={TEST_CLAIMS} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
