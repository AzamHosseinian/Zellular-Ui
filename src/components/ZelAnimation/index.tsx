import React from "react";
const ZelAnimation = () => {
  return (
    <div className="absolute  left-0 lg:left-auto right-4 lg:max-w-[432px] bt-1440:right-[10px] flex lt-1024:hidden lg:flex items-center justify-center h-[100svh] lg:animate-none ">
      <div className="relative h-[100svh] flex flex-col justify-between">
        {/* each row */}
        <div className="mt-2 top-2">
          <FullCircleRow />
          <div className="hidden lg:block displayBySize">
            <div className="lt-1280:hidden bt-1440:hidden">
              <FullCircleRow />
              {/* <FullCircleRow /> */}
              {/* <FullCircleRow /> */}
              {/* <FullCircleRow /> */}
              {/* <FullCircleRow /> */}
              {/* <FullCircleRow />
              <FullCircleRow />
              <FullCircleRow /> */}
            </div>
            <FullCircleRow />
            <FullCircleRow />
            <FullCircleRow />
            <NineCircleRow />
            <TenCircleRowPluse />
          </div>
          <Twelve />
        </div>

        <div className=" w-full flex-1 flex items-center justify-center ">
          <ZAnimationCircle />
        </div>

        <div className="">
          <ThirteenCircleRowPluse />
          <ThirteenCircleRow />
          <div className="hidden lg:block displayBySize">
            <ThirteenCircleRow />
            <TwentyCircleRow />
            <SevenCircleRow />
            <FullCirclePluseRow />
            <FullCircleRow />
            <FullCircleRow />
            <FullCircleRow />
            <div className="lt-1280:hidden bt-1440:hidden">
              <FullCircleRow />
              {/* <FullCircleRow /> */}
              {/* <FullCircleRow /> */}
              {/* <FullCircleRow /> */}
              {/* <FullCircleRow /> */}
              {/* <FullCircleRow />
              <FullCircleRow />
              <FullCircleRow /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FullCircleRow = () => {
  return (
    <div className="flex w-full mb-[5px]">
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] lt-1550:ml-[] rounded-full"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] lt-1550:ml-[] rounded-full ml-[15px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] lt-1550:ml-[] rounded-full ml-[5px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] lt-1550:ml-[] rounded-full ml-[5px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] lt-1550:ml-[] rounded-full ml-[12px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] lt-1550:ml-[] rounded-full ml-[5px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] lt-1550:ml-[] rounded-full ml-[10px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] lt-1550:ml-[] rounded-full ml-[12px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] lt-1550:ml-[] rounded-full ml-[5px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] lt-1550:ml-[] rounded-full ml-[2px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] lt-1550:ml-[] rounded-full ml-[20px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] lt-1550:ml-[] rounded-full ml-[5px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] lt-1550:ml-[] rounded-full ml-[8px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] lt-1550:ml-[] rounded-full ml-[5px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] lt-1550:ml-[] rounded-full ml-[3px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] lt-1550:ml-[] rounded-full ml-[2px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] lt-1550:ml-[] rounded-full ml-[11px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] lt-1550:ml-[] rounded-full ml-[5px] "></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] lt-1550:ml-[] rounded-full ml-[5px] "></div>
    </div>
  );
};

const FullCirclePluseRow = () => {
  return (
    <div className="flex w-full mb-[5px]">
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[15px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[5px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[5px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[12px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[5px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[30px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[16px] bt-1440:ml-[9px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[19px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[5px] bt-1440:ml-[3px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[8px] bt-1440:ml-[3px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[5px] bt-1440:ml-[10px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[14px] bt-1440:ml-[10px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[10px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[18px]"></div>
      {/* <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-2"></div> */}
      {/* <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[4px]"></div> */}
      {/* <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[15px]"></div> */}
      {/* <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[7px] "></div> */}
      {/* <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[9px] "></div> */}
    </div>
  );
};

const NineCircleRow = () => {
  return (
    <div className="flex w-full mb-[5px]">
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[15px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[5px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[5px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[63px] bt-1440:ml-[75px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[56px] bt-1440:ml-[52px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[32px]  bt-1440:ml-[42px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[2px]"></div>
      {/* <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[37px]"></div> */}
    </div>
  );
};

const SevenCircleRow = () => {
  return (
    <div className="flex w-full mb-[5px]">
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[112px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[16px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[61px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[32px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[5px]"></div>
      {/* <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[45px]"></div> */}
    </div>
  );
};

const TwentyCircleRow = () => {
  return (
    <div className="flex w-full mb-[5px]">
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[2px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[5px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[5px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[5px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[12px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[5px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[10px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[37px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[5px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[18px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[5px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[8px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[13px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[10px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[6px]"></div>
      {/* <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[5px]"></div> */}
      {/* <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[14px]"></div> */}
      {/* <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[8px]"></div> */}
      {/* <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[9px]"></div> */}
    </div>
  );
};

const ThirteenCircleRow = () => {
  return (
    <div className="flex w-full mb-[5px]">
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[15px] bt-1440:ml-[18px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[5px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[5px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[12px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[5px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[30px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[30px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[5px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[34px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[13px] "></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[10px] "></div>
      {/* <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[45px]"></div> */}
    </div>
  );
};

const ThirteenCircleRowPluse = () => {
  return (
    <div className="flex w-full mb-[5px]">
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[15px] bt-1440:ml-[18px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[5px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[5px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[12px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[5px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[10px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[12px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[30px] bt-1440:ml-[25px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[5px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[34px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[13px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[10px]"></div>
      {/* <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full ml-[45px] animate-moveTop20"></div> */}
    </div>
  );
};

const TenCircleRowPluse = () => {
  return (
    <div className="flex w-full mb-[5px]">
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full lt-1550:ml-[23px] ml-[32px] bt-1440:ml-[27px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full lt-1550:ml-[5px] ml-[8px] bt-1440:ml-[5px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full lt-1550:ml-[5px] ml-[8px] bt-1440:ml-[5px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full lt-1550:ml-[26px] ml-[35px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full lt-1550:ml-[9px] ml-[21px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full lt-1550:ml-[12px] ml-[5px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full lt-1550:ml-[43px] ml-[37px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full lt-1550:ml-[21px] ml-[28px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full lt-1550:ml-[5px] ml-[8px]"></div>
      {/* <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full lt-1550:ml-[58px] ml-[70px]"></div> */}
    </div>
  );
};

const Twelve = () => {
  return (
    <div className="flex w-full mb-[5px]">
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] lt-1550:ml-[41px] rounded-full ml-[40px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] lt-1550:ml-[26px] rounded-full ml-[34px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] lt-1550:ml-[] rounded-full ml-[9px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] lt-1550:ml-[12px] rounded-full ml-[21px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] lt-1550:ml-[43px] rounded-full ml-[54px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] lt-1550:ml-[21px] rounded-full ml-[28px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] lt-1550:ml-[5px] rounded-full ml-[8px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] lt-1550:ml-[14px] rounded-full ml-[70px] bt-1440:hidden"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] lt-1550:ml-[11px] rounded-full ml-[16px]  bt-1440:hidden"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] lt-1550:ml-[5px] rounded-full ml-[8px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] lt-1550:ml-[4px] rounded-full ml-[9px]"></div>
    </div>
  );
};

const ZAnimationCircle = () => {
  return (
    <div className="relative h-full  w-full -ml-[115px]">
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-10 left-[59px] animate-move1 top-2"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-10 left-[59px] animate-move2 top-8"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-10 left-[79px] lt-1550:left-[74px] animate-move3 top-3"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-10 left-[79px] lt-1550:left-[74px] animate-move4 top-8"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-10 left-28  lt-1550:left-[107px] top-10 animate-move5"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-10 left-28  lt-1550:left-[107px]  top-14 animate-move6"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-10 left-[129px] lt-1550:left-[124px] top-10 animate-move8"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-10 left-[129px] lt-1550:left-[124px] top-16 animate-move7"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-10 left-36 lt-1550:left-[139px] top-3 animate-move9"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-10 left-36 lt-1550:left-[139px] top-8 animate-move10"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-10 left-40 lt-1550:left-[155px] top-14 animate-move11"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-10 left-40 lt-1550:left-[155px] top-20 animate-move12"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-10 left-48 lt-1550:left-[187px] top-12 animate-move13"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-10 left-48 lt-1550:left-[187px] top-36 animate-move14"></div>
      {/* fixed icons*/}
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 animate-moveDown30 bg-[#92E6A7] rounded-full absolute left-[60px] top-24 "></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 animate-moveDown30 bg-[#92E6A7] rounded-full absolute left-24 top-20 "></div>
      {/* <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 animate-moveDown30 bg-[#92E6A7] rounded-full absolute left-8 top-14 "></div> */}
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 animate-moveDown30 bg-[#92E6A7] rounded-full absolute left-[214px] top-8 "></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 animate-moveDown30 bg-[#92E6A7] rounded-full absolute left-[323px] top-1 "></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 animate-moveDown30 bg-[#92E6A7] rounded-full absolute left-[303px] top-4 "></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 animate-moveDown30 bg-[#92E6A7] rounded-full absolute right-0 top-4 "></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 animate-moveDown30 bg-[#92E6A7] rounded-full absolute right-0 top-9 "></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 animate-moveDown30 bg-[#92E6A7] rounded-full absolute right-4 top-14 "></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 animate-moveDown30 bg-[#92E6A7] rounded-full absolute right-0 top-21 "></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 animate-moveDown30 bg-[#92E6A7] rounded-full absolute right-5 top-4 "></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 animate-moveDown30 bg-[#92E6A7] rounded-full absolute right-10 top-9 "></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 animate-moveDown30 bg-[#92E6A7] rounded-full absolute right-10 top-[68px] bt-144"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 animate-moveDown30 bg-[#92E6A7] rounded-full absolute right-[68px] top-12 bt-1440:top-8 "></div>
      {/* <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 animate-moveDown30 bg-[#92E6A7] rounded-full absolute right-16 top-[188px] "></div> */}
      {/* <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 animate-moveDown30 bg-[#92E6A7] rounded-full absolute right-4 top-44 "></div> */}
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 animate-moveDown30 bg-[#92E6A7] rounded-full absolute right-28 bt-1440:right-24 top-[136px] "></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 animate-moveDown30 bg-[#92E6A7] rounded-full absolute right-[67px] top-24 "></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 animate-moveDown30 bg-[#92E6A7] rounded-full absolute right-[151px] top-46 "></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 animate-moveDown30 bg-[#92E6A7] rounded-full absolute right-[171px] top-42 "></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 animate-moveDown30 bg-[#92E6A7] rounded-full absolute right-24 top-24 "></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 animate-moveDown30 bg-[#92E6A7] rounded-full absolute right-9 top-24 "></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 animate-moveDown30 bg-[#92E6A7] rounded-full absolute right-24 top-11 "></div>

      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2  bg-[#92E6A7] rounded-full absolute right-6 bottom-20 "></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 animate-moveTop50 bg-[#92E6A7] rounded-full absolute right-[68px] bottom-10 "></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 animate-moveTop50 bg-[#92E6A7] rounded-full absolute right-[45px] bottom-12 "></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 animate-moveTop50 bg-[#92E6A7] rounded-full absolute right-[3px] bottom-12 "></div>

      {/* <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2  bg-[#92E6A7] animate-moveTop50 rounded-full absolute left-0 bottom-24"></div> */}
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2  bg-[#92E6A7] animate-moveTop50 rounded-full absolute left-[55px] bottom-14"></div>
      {/* <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2  bg-[#92E6A7] animate-moveTop50 rounded-full absolute left-0 bottom-32"></div> */}

      {/* fixed icons */}
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-10 left-56 lt-1550:left-[219px] top-[105px] animate-move15"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-10 left-60  lt-1550:left-[235px] top-[52px] animate-move17"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-10 left-56  lt-1550:left-[219px] top-[80px] animate-move16"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-10 left-60  lt-1550:left-[235px] top-[75px] animate-move18"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-10 left-64 lt-1550:left-[251px] top-[68px] animate-move19"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-10 left-48 lt-1550:left-[187px] top-[190px] animate-move21"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-10 left-64 lt-1550:left-[251px] top-[83px] animate-move20"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-10 left-60 lt-1550:left-[235px] top-[100px] bt-1440:top-[110px] animate-move22"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-10 left-[129px] lt-1550:left-[124px] top-[85px] animate-move23"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-10 left-56 lt-1550:left-[219px] top-[120px] animate-move24"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-10 left-[58px] lt-1550:left-[60px] top-[95px] animate-move25"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-10 left-40 lt-1550:left-[155px] top-[110px] animate-move26"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-10 left-[58px] lt-1550:left-[60px] top-[195px] animate-move27"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-10 left-[74px] top-[180px] animate-move28"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-10 left-28 lt-1550:left-[107px] top-[195px] animate-move29"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-10 left-32 lt-1550:left-[125px] top-[185px] animate-move30"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-10 left-36 lt-1550:left-[139px] top-[200px] animate-move31"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-10 left-40 lt-1550:left-[155px] top-[180px] animate-move32"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-10 left-48 lt-1550:left-[187px] top-[170px] animate-move33"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-10 left-[274px] lt-1550:left-[269px] top-[52px] animate-move17"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-10 left-48 lt-1550:left-[187px] bottom-4 animate-move34"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-10 left-56 lt-1550:left-[219px] bottom-8 animate-move34"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-10 left-60 lt-1550:left-[235px] bottom-2 animate-move34"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-10 left-60 lt-1550:left-[235px] bottom-12 animate-move37"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-10 left-60 lt-1550:left-[235px] bottom-16 animate-move38"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-10 left-64 lt-1550:left-[251px] bottom-4 animate-move36"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-10 left-[274px] lt-1550:left-[269px] bottom-8 animate-move36"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-10 left-[275px] lt-1550:left-[269px] bottom-14 animate-move37"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-10 left-48 lt-1550:left-[187px] bottom-16 animate-move37"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-10 left-48 lt-1550:left-[187px] bottom-[125px] animate-move39"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-10 left-48 lt-1550:left-[187px] bottom-10 animate-move35"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-10 left-16 lt-1550:left-[60px]  bottom-2 animate-move35"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-10 left-20 lt-1550:left-[75px] bottom-10 animate-move35"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-10 left-28 lt-1550:left-[107px] bottom-14 animate-move35"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-10 left-32 lt-1550:left-[125px] bottom-12 animate-move35"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-10 left-36 lt-1550:left-[139px] bottom-10 animate-move35"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-10 left-40 lt-1550:left-[155px] bottom-14 animate-move35"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-10 left-56 lt-1550:left-[219px] bottom-16 animate-move35"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-10 left-60 lt-1550:left-[235px] bottom-7 animate-move35"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-10 left-64 lt-1550:left-[251px] bottom-20 animate-move35"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-10 left-[274px] lt-1550:left-[269px] bottom-24 animate-move39"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-10 left-[274px] lt-1550:left-[269px] bottom-3 animate-move35"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-10 left-20 lt-1550:left-[75px] bottom-16 animate-move47"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-10 left-28 lt-1550:left-[107px] bottom-[40px] animate-move46"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-10 left-36 lt-1550:left-[139px] bottom-1 animate-move45"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-10 left-28 lt-1550:left-[107px] bottom-[160px] animate-move43"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-10 left-32 lt-1550:left-[125px] bottom-[120px] animate-move44"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-10 left-32 lt-1550:left-[125px] bottom-20 animate-move37"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-10 left-36 lt-1550:left-[139px] bottom-[188px] animate-move36"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-10 left-40 lt-1550:left-[155px] bottom-[80px] animate-move42"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-10 left-40 lt-1550:left-[155px] bottom-1 animate-move41"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-10 left-44 lt-1550:left-[171px] bottom-[100px] animate-move40"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute  left-[118px] lt-1550:left-[117px] bottom-1"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-2 left-[129px] lt-1550:left-[124px] bottom-[100px]"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute  left-[118px] lt-1550:left-[116px] bottom-5"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute  left-[135px] lt-1550:left-[138px] bottom-5"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute  left-[153px] lt-1550:left-[180px] bottom-5"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute ml-6 left-[172px] bottom-5"></div>
      <div className="w-3 h-3 lt-1550:w-2 lt-1550:h-2 bg-[#92E6A7] rounded-full absolute left-[214px] bottom-5"></div>
    </div>
  );
};

export default ZelAnimation;
