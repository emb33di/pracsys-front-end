import React from 'react';
import { FaUserCircle, FaSearch } from "react-icons/fa";
import ProcessingTimes from './ProcessingTimes';
import { TEST_PROCESSING_TIMES } from 'utils/constants';

const Dashboard = () => {
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
<div className="w-full h-auto bg-[#f9f9f9] flex-col justify-start items-start inline-flex mt-10 mx-auto rounded-[15px]">
  <div className="self-stretch bg-white rounded border border-[#86b289] flex-col justify-start items-start flex overflow-hidden">
    <div className="self-stretch bg-white/0 justify-start items-start inline-flex overflow-hidden">
      <div className="grow shrink basis-0 self-stretch bg-black/5 border-l border-t border-[#86b289] flex-col justify-center items-start inline-flex">
        <div className="self-stretch px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
          <div className="grow shrink basis-0 text-black text-lg font-semibold font-['Inter'] leading-none">Name of Patient</div>
        </div>
      </div>
      <div className="grow shrink basis-0 self-stretch bg-black/5 border-l border-t border-[#86b289] flex-col justify-center items-start inline-flex">
        <div className="self-stretch px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
          <div className="grow shrink basis-0 text-black text-lg font-semibold font-['Inter'] leading-none">Test Ordered</div>
        </div>
      </div>
      <div className="grow shrink basis-0 self-stretch bg-black/5 border-l border-t border-[#86b289] flex-col justify-center items-start inline-flex">
        <div className="self-stretch px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
          <div className="grow shrink basis-0 text-black text-lg font-semibold font-['Inter'] leading-none">Test Order Date</div>
        </div>
      </div>
      <div className="grow shrink basis-0 self-stretch bg-black/5 border-l border-t border-[#86b289] flex-col justify-center items-start inline-flex">
        <div className="self-stretch px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
          <div className="grow shrink basis-0 text-black text-lg font-semibold font-['Inter'] leading-none">Auth Status</div>
        </div>
      </div>
    </div>
    <div className="self-stretch bg-white/0 justify-start items-start inline-flex overflow-hidden">
      <div className="grow shrink basis-0 self-stretch bg-white/0 border-l border-t border-[#86b289] flex-col justify-center items-start inline-flex">
        <div className="self-stretch px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
          <div className="grow shrink basis-0 text-black text-base font-normal font-['Inter'] leading-none">Adam Smith</div>
        </div>
      </div>
      <div className="grow shrink basis-0 self-stretch bg-white/0 border-l border-t border-[#86b289] flex-col justify-center items-start inline-flex">
        <div className="self-stretch px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
          <div className="grow shrink basis-0 text-black text-base font-normal font-['Inter'] leading-none">Chest CT w/ Contrast</div>
        </div>
      </div>
      <div className="grow shrink basis-0 self-stretch bg-white/0 border-l border-t border-[#86b289] flex-col justify-center items-start inline-flex">
        <div className="self-stretch px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
          <div className="grow shrink basis-0 text-black text-base font-normal font-['Inter'] leading-none">02/09/2025</div>
        </div>
      </div>
      <div className="grow shrink basis-0 self-stretch bg-white/0 border-l border-t border-[#86b289] flex-col justify-center items-start inline-flex">
        <div className="self-stretch px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
          <div className="grow shrink basis-0 text-black text-base font-normal font-['Inter'] leading-none">Pending</div>
        </div>
      </div>
    </div>
    <div className="self-stretch bg-white/0 justify-start items-start inline-flex overflow-hidden">
      <div className="grow shrink basis-0 self-stretch bg-white/0 border-l border-t border-[#86b289] flex-col justify-center items-start inline-flex">
        <div className="self-stretch px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
          <div className="grow shrink basis-0 text-black text-base font-normal font-['Inter'] leading-none">Floyd Miles</div>
        </div>
      </div>
      <div className="grow shrink basis-0 self-stretch bg-white/0 border-l border-t border-[#86b289] flex-col justify-center items-start inline-flex">
        <div className="self-stretch px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
          <div className="grow shrink basis-0 text-black text-base font-normal font-['Inter'] leading-none">Echocardiogram</div>
        </div>
      </div>
      <div className="grow shrink basis-0 self-stretch bg-white/0 border-l border-t border-[#86b289] flex-col justify-center items-start inline-flex">
        <div className="self-stretch px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
          <div className="grow shrink basis-0 text-black text-base font-normal font-['Inter'] leading-none">02/10/2025</div>
        </div>
      </div>
      <div className="grow shrink basis-0 self-stretch bg-white/0 border-l border-t border-[#86b289] flex-col justify-center items-start inline-flex">
        <div className="self-stretch px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
          <div className="grow shrink basis-0 text-black text-base font-normal font-['Inter'] leading-none">Pending</div>
        </div>
      </div>
    </div>
    <div className="self-stretch bg-white/0 justify-start items-start inline-flex overflow-hidden">
      <div className="grow shrink basis-0 self-stretch bg-white/0 border-l border-t border-[#86b289] flex-col justify-center items-start inline-flex">
        <div className="self-stretch px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
          <div className="grow shrink basis-0 text-black text-base font-normal font-['Inter'] leading-none">Ronald Richards</div>
        </div>
      </div>
      <div className="grow shrink basis-0 self-stretch bg-white/0 border-l border-t border-[#86b289] flex-col justify-center items-start inline-flex">
        <div className="self-stretch px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
          <div className="grow shrink basis-0 text-black text-base font-normal font-['Inter'] leading-none">Holter Monitor</div>
        </div>
      </div>
      <div className="grow shrink basis-0 self-stretch bg-white/0 border-l border-t border-[#86b289] flex-col justify-center items-start inline-flex">
        <div className="self-stretch px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
          <div className="grow shrink basis-0 text-black text-base font-normal font-['Inter'] leading-none">02/10/2025</div>
        </div>
      </div>
      <div className="grow shrink basis-0 self-stretch bg-white/0 border-l border-t border-[#86b289] flex-col justify-center items-start inline-flex">
        <div className="self-stretch px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
          <div className="grow shrink basis-0 text-black text-base font-normal font-['Inter'] leading-none">Pending</div>
        </div>
      </div>
    </div>
    <div className="self-stretch bg-white/0 justify-start items-start inline-flex overflow-hidden">
      <div className="grow shrink basis-0 self-stretch bg-white/0 border-l border-t border-[#86b289] flex-col justify-center items-start inline-flex">
        <div className="self-stretch px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
          <div className="grow shrink basis-0 text-black text-base font-normal font-['Inter'] leading-none">Marvin McKinney</div>
        </div>
      </div>
      <div className="grow shrink basis-0 self-stretch bg-white/0 border-l border-t border-[#86b289] flex-col justify-center items-start inline-flex">
        <div className="self-stretch px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
          <div className="grow shrink basis-0 text-black text-base font-normal font-['Inter'] leading-none">Cardiac Catheterization</div>
        </div>
      </div>
      <div className="grow shrink basis-0 self-stretch bg-white/0 border-l border-t border-[#86b289] flex-col justify-center items-start inline-flex">
        <div className="self-stretch px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
          <div className="grow shrink basis-0 text-black text-base font-normal font-['Inter'] leading-none">02/10/2025</div>
        </div>
      </div>
      <div className="grow shrink basis-0 self-stretch bg-white/0 border-l border-t border-[#86b289] flex-col justify-center items-start inline-flex">
        <div className="self-stretch px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
          <div className="grow shrink basis-0 text-black text-base font-normal font-['Inter'] leading-none">Pending</div>
        </div>
      </div>
    </div>
    <div className="self-stretch bg-white/0 justify-start items-start inline-flex overflow-hidden">
      <div className="grow shrink basis-0 self-stretch bg-white/0 border-l border-t border-[#86b289] flex-col justify-center items-start inline-flex">
        <div className="self-stretch px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
          <div className="grow shrink basis-0 text-black text-base font-normal font-['Inter'] leading-none">Jerome Bell</div>
        </div>
      </div>
      <div className="grow shrink basis-0 self-stretch bg-white/0 border-l border-t border-[#86b289] flex-col justify-center items-start inline-flex">
        <div className="self-stretch px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
          <div className="grow shrink basis-0 text-black text-base font-normal font-['Inter'] leading-none">Echocardiogram</div>
        </div>
      </div>
      <div className="grow shrink basis-0 self-stretch bg-white/0 border-l border-t border-[#86b289] flex-col justify-center items-start inline-flex">
        <div className="self-stretch px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
          <div className="grow shrink basis-0 text-black text-base font-normal font-['Inter'] leading-none">02/10/2025</div>
        </div>
      </div>
      <div className="grow shrink basis-0 self-stretch bg-white/0 border-l border-t border-[#86b289] flex-col justify-center items-start inline-flex">
        <div className="self-stretch px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
          <div className="grow shrink basis-0 text-black text-base font-normal font-['Inter'] leading-none">Pending</div>
        </div>
      </div>
    </div>
    <div className="self-stretch bg-white/0 justify-start items-start inline-flex overflow-hidden">
      <div className="grow shrink basis-0 self-stretch bg-white/0 border-l border-t border-[#86b289] flex-col justify-center items-start inline-flex">
        <div className="self-stretch px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
          <div className="grow shrink basis-0 text-black text-base font-normal font-['Inter'] leading-none">Kathryn Murphy</div>
        </div>
      </div>
      <div className="grow shrink basis-0 self-stretch bg-white/0 border-l border-t border-[#86b289] flex-col justify-center items-start inline-flex">
        <div className="self-stretch px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
          <div className="grow shrink basis-0 text-black text-base font-normal font-['Inter'] leading-none">Echocardiogram</div>
        </div>
      </div>
      <div className="grow shrink basis-0 self-stretch bg-white/0 border-l border-t border-[#86b289] flex-col justify-center items-start inline-flex">
        <div className="self-stretch px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
          <div className="grow shrink basis-0 text-black text-base font-normal font-['Inter'] leading-none">02/10/2025</div>
        </div>
      </div>
      <div className="grow shrink basis-0 self-stretch bg-white/0 border-l border-t border-[#86b289] flex-col justify-center items-start inline-flex">
        <div className="self-stretch px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
          <div className="grow shrink basis-0 text-black text-base font-normal font-['Inter'] leading-none">Pending</div>
        </div>
      </div>
    </div>
    <div className="self-stretch bg-white/0 justify-start items-start inline-flex overflow-hidden">
      <div className="grow shrink basis-0 self-stretch bg-white/0 border-l border-t border-[#86b289] flex-col justify-center items-start inline-flex">
        <div className="self-stretch px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
          <div className="grow shrink basis-0 text-black text-base font-normal font-['Inter'] leading-none">Jacob Jones</div>
        </div>
      </div>
      <div className="grow shrink basis-0 self-stretch bg-white/0 border-l border-t border-[#86b289] flex-col justify-center items-start inline-flex">
        <div className="self-stretch px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
          <div className="grow shrink basis-0 text-black text-base font-normal font-['Inter'] leading-none">Pacemaker Implantation</div>
        </div>
      </div>
      <div className="grow shrink basis-0 self-stretch bg-white/0 border-l border-t border-[#86b289] flex-col justify-center items-start inline-flex">
        <div className="self-stretch px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
          <div className="grow shrink basis-0 text-black text-base font-normal font-['Inter'] leading-none">02/10/2025</div>
        </div>
      </div>
      <div className="grow shrink basis-0 self-stretch bg-white/0 border-l border-t border-[#86b289] flex-col justify-center items-start inline-flex">
        <div className="self-stretch px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
          <div className="grow shrink basis-0 text-black text-base font-normal font-['Inter'] leading-none">Pending</div>
        </div>
      </div>
    </div>
  </div>
</div>
      </div>
  );
};

export default Dashboard;
