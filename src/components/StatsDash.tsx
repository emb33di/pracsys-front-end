import React from 'react';
import { RingProgress, Text, Center } from '@mantine/core';

const StatsDash: React.FC = () => {
  const renderStat = (percentage: string, label: string) => (
    <div className="text-center">
      <div className="relative w-[185px] h-[215px]">
        <div
          className="absolute w-[185px] h-[185px] left-0 top-0 rounded-full"
          style={{ borderWidth: '16px', borderColor: '#b9d6bb', borderStyle: 'solid' }}
        />
        <div className="absolute w-[105px] h-[69px] left-[40px] top-[58px] text-center text-[#86b289]">
          <Text style={{ fontSize: '2.5rem', fontWeight: 700, color: '#86b289', lineHeight: '57.60px' }}>
            {percentage}
          </Text>
        </div>
        <div className="absolute w-[250px] h-[15px] left-[-25px] top-[190px] text-center text-[#86b289] text-2xl font-bold leading-normal">
          {label}
        </div>
      </div>
    </div>
  );

  const renderProgressCircle = (percentage: number, label: string) => (
    <div className="text-center">
      <div className="relative w-[185px] h-[215px]">
        <RingProgress
          size={185}
          thickness={16}
          sections={[{ value: percentage, color: '#b9d6bb' }]}
          label={
            <Center>
              <Text style={{ fontSize: '2.5rem', fontWeight: 700, color: '#86b289', lineHeight: '57.60px' }}>
                {percentage}%
              </Text>
            </Center>
          }
        />
        <div className="absolute w-[250px] h-[15px] left-[-20px] top-[190px] text-center text-[#86b289] text-2xl font-bold leading-normal">
          {label}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white p-4 shadow-md rounded-md col-span-2 flex justify-around items-center">
      {renderProgressCircle(98, 'First-pass approval')}
      {renderStat('5.4', 'Hours saved today')}
      {renderStat('8', 'Pending Prior Auths')}
    </div>
  );
};

export default StatsDash;