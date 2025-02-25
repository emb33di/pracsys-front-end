"use client";

import React from 'react';
import { FaUserCircle, FaSearch } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';
// import { auth } from '../../lib/firebase';
import ProcessingTimes from './ProcessingTimes';
import { TEST_CLAIMS, TEST_PROCESSING_TIMES } from 'utils/constants';
import Table_info from './Patient_Table';

const Dashboard = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push('/auth/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div>
      {/* Search Bar */}
      <div className="flex justify-between items-center mb-6">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search something here..."
            className="p-2 w-full border rounded-md pl-10"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
        </div>
        <div className="ml-4">
          <FaUserCircle className="text-gray-600" size={24} />
        </div>
        <button onClick={handleSignOut} className="ml-4 p-2 bg-red-500 text-white rounded-md">
          Sign Out
        </button>
      </div>

      {/* Main Dashboard Content */}
      <div className="grid grid-cols-3 gap-4">
        {/* Average Processing Times */}
        <ProcessingTimes items={TEST_PROCESSING_TIMES} />

        {/* Statistics */}
        <div className="bg-white p-4 shadow-md rounded-md col-span-2 flex justify-around items-center">
          <div className="text-center">
            <div className="relative w-[185px] h-[215px]">
              <div
                className="absolute w-[185px] h-[173px] left-0 top-0 rounded-full"
                style={{ borderWidth: '16px', borderColor: '#b9d6bb' }}
              />
              <div className="absolute w-[105px] h-[69px] left-[40px] top-[51px] text-center text-[#86b289] text-5xl font-bold leading-[57.60px]">98%</div>
              <div className="absolute w-[185px] h-[15px] left-0 top-[200px] text-center text-[#86b289] text-xl font-bold leading-normal">First-pass approval</div>
            </div>
          </div>
          <div className="text-center">
            <div className="relative w-[185px] h-[215px]">
              <div
                className="absolute w-[185px] h-[173px] left-0 top-0 rounded-full"
                style={{ borderWidth: '16px', borderColor: '#b9d6bb' }}
              />
              <div className="absolute w-[105px] h-[69px] left-[40px] top-[51px] text-center text-[#86b289] text-5xl font-bold leading-[57.60px]">5.4</div>
              <div className="absolute w-[185px] h-[15px] left-0 top-[200px] text-center text-[#86b289] text-xl font-bold leading-normal">Hours saved today</div>
            </div>
          </div>
          <div className="text-center">
            <div className="relative w-[185px] h-[215px]">
              <div
                className="absolute w-[185px] h-[173px] left-0 top-0 rounded-full"
                style={{ borderWidth: '16px', borderColor: '#b9d6bb' }}
              />
              <div className="absolute w-[105px] h-[69px] left-[40px] top-[51px] text-center text-[#86b289] text-5xl font-bold leading-[57.60px]">8</div>
              <div className="absolute w-[200px] h-[15px] left-0 top-[200px] text-center text-[#86b289] text-xl font-bold leading-normal">Pending Prior Auths</div>
            </div>
          </div>
        </div>
      </div>

      {/* Ready for Review Table */}
      <Table_info items={TEST_CLAIMS} />
    </div>
  );
};

export default Dashboard;
