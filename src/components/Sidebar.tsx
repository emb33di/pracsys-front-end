import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-64 h-[95vh] bg-white shadow-md p-6 flex flex-col rounded-lg border border-gray-200 m-4">
      <h1 className="text-4xl font-bold text-black mb-6">Pracsys</h1>
      <nav>
        <ul className="space-y-4">
          <li className="cursor-pointer">
            <div className="w-[231px] h-[34px] relative">
              <div className="w-[187px] h-8 left-[44px] top-[2px] absolute text-[#4c4747] text-xl font-bold font-['Inter'] leading-normal">Dashboard</div>
              <div data-svg-wrapper className="left-0 top-0 absolute">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.6667 3.5H3.5V11.6667H11.6667V3.5Z" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M24.5 3.5H16.3333V11.6667H24.5V3.5Z" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M24.5 16.3333H16.3333V24.5H24.5V16.3333Z" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M11.6667 16.3333H3.5V24.5H11.6667V16.3333Z" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
          </li>
          <li className="cursor-pointer">
            <div className="w-[221px] h-9 relative">
              <div data-svg-wrapper className="left-0 top-0 absolute">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_156_3473)">
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_156_3473">
                      <rect width="24" height="24" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="w-[180px] h-[35px] left-[41px] top-[1px] absolute text-[#4c4747] text-xl font-bold font-['Inter'] leading-normal">PA Tracker</div>
            </div>
          </li>
          <li className="cursor-pointer">
            <div className="w-[226px] h-9 relative">
              <div data-svg-wrapper className="left-0 top-0 absolute">
                <svg width="35" height="25" viewBox="0 0 35 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_156_2663)">
                    <path d="M21.8208 5.20832C23.2045 5.40683 24.4762 5.90442 25.4731 6.63742C26.47 7.37042 27.1467 8.30547 27.4167 9.32291M21.8208 1.04166C24.6956 1.27649 27.3764 2.22309 29.423 3.72604C31.4696 5.22899 32.7603 7.19896 33.0833 9.31249M31.6667 17.625V20.75C31.6683 21.0401 31.5875 21.3273 31.4294 21.5931C31.2713 21.8589 31.0395 22.0975 30.7488 22.2936C30.458 22.4897 30.1148 22.639 29.7411 22.732C29.3673 22.8249 28.9713 22.8594 28.5783 22.8333C24.219 22.485 20.0316 21.3897 16.3525 19.6354C12.9296 18.0361 10.0276 15.9023 7.8525 13.3854C5.4583 10.6679 3.96835 7.57394 3.50334 4.35416C3.46793 4.0661 3.51449 3.77578 3.64004 3.50168C3.7656 3.22758 3.96739 2.97571 4.23259 2.7621C4.49778 2.54848 4.82056 2.37781 5.18037 2.26095C5.54019 2.14409 5.92915 2.0836 6.3225 2.08332H10.5725C11.26 2.07835 11.9265 2.25736 12.4478 2.587C12.9691 2.91664 13.3096 3.37441 13.4058 3.87499C13.5852 4.87506 13.9179 5.857 14.3975 6.80207C14.5881 7.17491 14.6294 7.58011 14.5164 7.96966C14.4034 8.3592 14.1409 8.71677 13.76 8.99999L11.9608 10.3229C13.9775 12.9308 16.9141 15.09 20.4608 16.5729L22.26 15.25C22.6452 14.9699 23.1315 14.7769 23.6613 14.6938C24.191 14.6108 24.7421 14.6411 25.2492 14.7812C26.5345 15.1339 27.8699 15.3785 29.23 15.5104C29.9182 15.5818 30.5467 15.8367 30.9959 16.2265C31.4452 16.6164 31.6839 17.1141 31.6667 17.625Z" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_156_2663">
                      <rect width="34" height="25" fill="white" transform="translate(0.5)"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="w-[182px] h-9 left-[44px] top-0 absolute text-[#4d4747] text-xl font-bold font-['Inter'] leading-normal">Contact Us</div>
            </div>
          </li>
        </ul>
      </nav>
      <div className="mt-auto space-y-4">
        <div className="cursor-pointer w-[231px] h-[34px] relative">
          <div className="w-[187px] h-8 left-[44px] top-[2px] absolute text-[#4c4747] text-xl font-bold font-['Inter'] leading-normal">Manage Plan</div>
          <div data-svg-wrapper className="left-0 top-0 absolute">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 1.5V4.5M12 19.5V22.5M4.21967 4.21967L6.21967 6.21967M17.7803 17.7803L19.7803 19.7803M1.5 12H4.5M19.5 12H22.5M4.21967 19.7803L6.21967 17.7803M17.7803 6.21967L19.7803 4.21967M9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12Z" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        <div className="cursor-pointer w-[231px] h-[34px] relative">
          <div className="w-[187px] h-8 left-[44px] top-[2px] absolute text-[#4c4747] text-xl font-bold font-['Inter'] leading-normal">Sign Out</div>
          <div data-svg-wrapper className="left-0 top-0 absolute">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H15M10 17L15 12M15 12L10 7M15 12H3" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
