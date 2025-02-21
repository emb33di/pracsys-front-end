import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-6 bg-gradient-to-r from-green-50 to-pink-50 min-h-screen">
      {/* Search Bar */}
      <div className="flex justify-between items-center mb-6">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search something here..."
            className="p-2 w-full border rounded-md pl-10"
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600">🔍</span>
        </div>
        <div className="ml-4">
          <span className="text-gray-600">👤</span>
        </div>
      </div>

      {/* Main Dashboard Content */}
      <div className="grid grid-cols-3 gap-4">
        {/* Average Processing Times */}
        <div className="bg-white p-4 shadow-md rounded-md col-span-1">
          <h2 className="text-lg font-semibold text-[#86b289]">Average processing times</h2>
          <ul className="mt-2 text-[#86b289] text-sm">
            <li>1. Cigna: 7 minutes</li>
            <li>2. Arkansas BCBS: 10 minutes</li>
            <li>3. Aetna: 30 minutes</li>
            <li>4. UHC: 3 hours</li>
            <li>5. Humana: 7 minutes</li>
          </ul>
        </div>

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
<div className="w-[800px] h-auto bg-[#86b289] flex-col justify-start items-start inline-flex mt-10 mx-auto rounded-lg">
  <div className="self-stretch bg-white rounded border border-[#86b289] flex-col justify-start items-start flex overflow-hidden">
    <div className="self-stretch bg-white/0 justify-start items-start inline-flex overflow-hidden">
      <div className="grow shrink basis-0 self-stretch bg-black/5 border-l border-t border-[#86b289] flex-col justify-center items-start inline-flex">
        <div className="self-stretch px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
          <div className="grow shrink basis-0 text-black text-xs font-semibold font-['Inter'] leading-none">Name of Patient</div>
        </div>
      </div>
      <div className="grow shrink basis-0 self-stretch bg-black/5 border-l border-t border-[#86b289] flex-col justify-center items-start inline-flex">
        <div className="self-stretch px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
          <div className="grow shrink basis-0 text-black text-xs font-semibold font-['Inter'] leading-none">Test Ordered</div>
        </div>
      </div>
      <div className="grow shrink basis-0 self-stretch bg-black/5 border-l border-t border-[#86b289] flex-col justify-center items-start inline-flex">
        <div className="self-stretch px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
          <div className="grow shrink basis-0 text-black text-xs font-semibold font-['Inter'] leading-none">Test Order Date</div>
        </div>
      </div>
      <div className="grow shrink basis-0 self-stretch bg-black/5 border-l border-t border-[#86b289] flex-col justify-center items-start inline-flex">
        <div className="self-stretch px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
          <div className="grow shrink basis-0 text-black text-xs font-semibold font-['Inter'] leading-none">Auth Status</div>
        </div>
      </div>
    </div>
    <div className="self-stretch bg-white/0 justify-start items-start inline-flex overflow-hidden">
      <div className="grow shrink basis-0 self-stretch bg-white/0 border-l border-t border-[#86b289] flex-col justify-center items-start inline-flex">
        <div className="self-stretch px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
          <div className="grow shrink basis-0 text-black text-xs font-normal font-['Inter'] leading-none">Adam Smith</div>
        </div>
      </div>
      <div className="grow shrink basis-0 self-stretch bg-white/0 border-l border-t border-[#86b289] flex-col justify-center items-start inline-flex">
        <div className="self-stretch px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
          <div className="grow shrink basis-0 text-black text-xs font-normal font-['Inter'] leading-none">Chest CT w/ Contrast</div>
        </div>
      </div>
      <div className="grow shrink basis-0 self-stretch bg-white/0 border-l border-t border-[#86b289] flex-col justify-center items-start inline-flex">
        <div className="self-stretch px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
          <div className="grow shrink basis-0 text-black text-xs font-normal font-['Inter'] leading-none">02/09/2025</div>
        </div>
      </div>
      <div className="grow shrink basis-0 self-stretch bg-white/0 border-l border-t border-[#86b289] flex-col justify-center items-start inline-flex">
        <div className="self-stretch px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
          <div className="grow shrink basis-0 text-black text-xs font-normal font-['Inter'] leading-none">Pending</div>
        </div>
      </div>
    </div>
    <div className="self-stretch bg-white/0 justify-start items-start inline-flex overflow-hidden">
      <div className="grow shrink basis-0 self-stretch bg-white/0 border-l border-t border-[#86b289] flex-col justify-center items-start inline-flex">
        <div className="self-stretch px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
          <div className="grow shrink basis-0 text-black text-xs font-normal font-['Inter'] leading-none">Floyd Miles</div>
        </div>
      </div>
      <div className="grow shrink basis-0 self-stretch bg-white/0 border-l border-t border-[#86b289] flex-col justify-center items-start inline-flex">
        <div className="self-stretch px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
          <div className="grow shrink basis-0 text-black text-xs font-normal font-['Inter'] leading-none">Echocardiogram</div>
        </div>
      </div>
      <div className="grow shrink basis-0 self-stretch bg-white/0 border-l border-t border-[#86b289] flex-col justify-center items-start inline-flex">
        <div className="self-stretch px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
          <div className="grow shrink basis-0 text-black text-xs font-normal font-['Inter'] leading-none">02/10/2025</div>
        </div>
      </div>
      <div className="grow shrink basis-0 self-stretch bg-white/0 border-l border-t border-[#86b289] flex-col justify-center items-start inline-flex">
        <div className="self-stretch px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
          <div className="grow shrink basis-0 text-black text-xs font-normal font-['Inter'] leading-none">Pending</div>
        </div>
      </div>
    </div>
    <div className="self-stretch bg-white/0 justify-start items-start inline-flex overflow-hidden">
      <div className="grow shrink basis-0 self-stretch bg-white/0 border-l border-t border-[#86b289] flex-col justify-center items-start inline-flex">
        <div className="self-stretch px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
          <div className="grow shrink basis-0 text-black text-xs font-normal font-['Inter'] leading-none">Ronald Richards</div>
        </div>
      </div>
      <div className="grow shrink basis-0 self-stretch bg-white/0 border-l border-t border-[#86b289] flex-col justify-center items-start inline-flex">
        <div className="self-stretch px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
          <div className="grow shrink basis-0 text-black text-xs font-normal font-['Inter'] leading-none">Holter Monitor</div>
        </div>
      </div>
      <div className="grow shrink basis-0 self-stretch bg-white/0 border-l border-t border-[#86b289] flex-col justify-center items-start inline-flex">
        <div className="self-stretch px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
          <div className="grow shrink basis-0 text-black text-xs font-normal font-['Inter'] leading-none">02/10/2025</div>
        </div>
      </div>
      <div className="grow shrink basis-0 self-stretch bg-white/0 border-l border-t border-[#86b289] flex-col justify-center items-start inline-flex">
        <div className="self-stretch px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
          <div className="grow shrink basis-0 text-black text-xs font-normal font-['Inter'] leading-none">Pending</div>
        </div>
      </div>
    </div>
    <div className="self-stretch bg-white/0 justify-start items-start inline-flex overflow-hidden">
      <div className="grow shrink basis-0 self-stretch bg-white/0 border-l border-t border-[#86b289] flex-col justify-center items-start inline-flex">
        <div className="self-stretch px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
          <div className="grow shrink basis-0 text-black text-xs font-normal font-['Inter'] leading-none">Marvin McKinney</div>
        </div>
      </div>
      <div className="grow shrink basis-0 self-stretch bg-white/0 border-l border-t border-[#86b289] flex-col justify-center items-start inline-flex">
        <div className="self-stretch px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
          <div className="grow shrink basis-0 text-black text-xs font-normal font-['Inter'] leading-none">Cardiac Catheterization</div>
        </div>
      </div>
      <div className="grow shrink basis-0 self-stretch bg-white/0 border-l border-t border-[#86b289] flex-col justify-center items-start inline-flex">
        <div className="self-stretch px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
          <div className="grow shrink basis-0 text-black text-xs font-normal font-['Inter'] leading-none">02/10/2025</div>
        </div>
      </div>
      <div className="grow shrink basis-0 self-stretch bg-white/0 border-l border-t border-[#86b289] flex-col justify-center items-start inline-flex">
        <div className="self-stretch px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
          <div className="grow shrink basis-0 text-black text-xs font-normal font-['Inter'] leading-none">Pending</div>
        </div>
      </div>
    </div>
    <div className="self-stretch bg-white/0 justify-start items-start inline-flex overflow-hidden">
      <div className="grow shrink basis-0 self-stretch bg-white/0 border-l border-t border-[#86b289] flex-col justify-center items-start inline-flex">
        <div className="self-stretch px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
          <div className="grow shrink basis-0 text-black text-xs font-normal font-['Inter'] leading-none">Jerome Bell</div>
        </div>
      </div>
      <div className="grow shrink basis-0 self-stretch bg-white/0 border-l border-t border-[#86b289] flex-col justify-center items-start inline-flex">
        <div className="self-stretch px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
          <div className="grow shrink basis-0 text-black text-xs font-normal font-['Inter'] leading-none">Echocardiogram</div>
        </div>
      </div>
      <div className="grow shrink basis-0 self-stretch bg-white/0 border-l border-t border-[#86b289] flex-col justify-center items-start inline-flex">
        <div className="self-stretch px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
          <div className="grow shrink basis-0 text-black text-xs font-normal font-['Inter'] leading-none">02/10/2025</div>
        </div>
      </div>
      <div className="grow shrink basis-0 self-stretch bg-white/0 border-l border-t border-[#86b289] flex-col justify-center items-start inline-flex">
        <div className="self-stretch px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
          <div className="grow shrink basis-0 text-black text-xs font-normal font-['Inter'] leading-none">Pending</div>
        </div>
      </div>
    </div>
    <div className="self-stretch bg-white/0 justify-start items-start inline-flex overflow-hidden">
      <div className="grow shrink basis-0 self-stretch bg-white/0 border-l border-t border-[#86b289] flex-col justify-center items-start inline-flex">
        <div className="self-stretch px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
          <div className="grow shrink basis-0 text-black text-xs font-normal font-['Inter'] leading-none">Kathryn Murphy</div>
        </div>
      </div>
      <div className="grow shrink basis-0 self-stretch bg-white/0 border-l border-t border-[#86b289] flex-col justify-center items-start inline-flex">
        <div className="self-stretch px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
          <div className="grow shrink basis-0 text-black text-xs font-normal font-['Inter'] leading-none">Echocardiogram</div>
        </div>
      </div>
      <div className="grow shrink basis-0 self-stretch bg-white/0 border-l border-t border-[#86b289] flex-col justify-center items-start inline-flex">
        <div className="self-stretch px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
          <div className="grow shrink basis-0 text-black text-xs font-normal font-['Inter'] leading-none">02/10/2025</div>
        </div>
      </div>
      <div className="grow shrink basis-0 self-stretch bg-white/0 border-l border-t border-[#86b289] flex-col justify-center items-start inline-flex">
        <div className="self-stretch px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
          <div className="grow shrink basis-0 text-black text-xs font-normal font-['Inter'] leading-none">Pending</div>
        </div>
      </div>
    </div>
    <div className="self-stretch bg-white/0 justify-start items-start inline-flex overflow-hidden">
      <div className="grow shrink basis-0 self-stretch bg-white/0 border-l border-t border-[#86b289] flex-col justify-center items-start inline-flex">
        <div className="self-stretch px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
          <div className="grow shrink basis-0 text-black text-xs font-normal font-['Inter'] leading-none">Jacob Jones</div>
        </div>
      </div>
      <div className="grow shrink basis-0 self-stretch bg-white/0 border-l border-t border-[#86b289] flex-col justify-center items-start inline-flex">
        <div className="self-stretch px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
          <div className="grow shrink basis-0 text-black text-xs font-normal font-['Inter'] leading-none">Pacemaker Implantation</div>
        </div>
      </div>
      <div className="grow shrink basis-0 self-stretch bg-white/0 border-l border-t border-[#86b289] flex-col justify-center items-start inline-flex">
        <div className="self-stretch px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
          <div className="grow shrink basis-0 text-black text-xs font-normal font-['Inter'] leading-none">02/10/2025</div>
        </div>
      </div>
      <div className="grow shrink basis-0 self-stretch bg-white/0 border-l border-t border-[#86b289] flex-col justify-center items-start inline-flex">
        <div className="self-stretch px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
          <div className="grow shrink basis-0 text-black text-xs font-normal font-['Inter'] leading-none">Pending</div>
        </div>
      </div>
    </div>
  </div>
</div>
      </div>
  );
};

export default Dashboard;
