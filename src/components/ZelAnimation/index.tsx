import React from "react";
const ZelAnimation = () => {
  return (
    <div className="absolute right-0 left-0 lg:left-auto lg:right-8 lg:max-w-[432px]  flex md:hidden lt-1596:hidden lg:flex items-center justify-center h-[100svh] animate-fadeOut lg:animate-none ">
      <div className="relative h-[100svh] flex flex-col justify-between">
        {/* each row */}
        <div className="mt-2 top-2">
          <FullCircleRow />
          <div className="hidden lg:block displayBySize">
            {/* <FullCircleRow />
            <FullCircleRow />
            <FullCircleRow /> */}
            {/* <FullCircleRow /> */}
            {/* <FullCircleRow /> */}
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
            {/* <FullCircleRow />
            <FullCircleRow />
            <FullCircleRow />
            <FullCircleRow /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

const FullCircleRow = () => {
  return (
    <div className="flex w-full mb-[5px]">
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[20px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-2"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-2"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[14px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-2"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[22px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[18px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-2"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[4px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[28px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-2"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[13px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[9px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-2"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[4px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[15px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[7px] "></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[9px] "></div>
    </div>
  );
};

const FullCirclePluseRow = () => {
  return (
    <div className="flex w-full mb-[5px]">
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[20px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-2"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-2"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[14px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-2"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[22px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[18px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-2"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[4px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[12px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[4px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-2"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[13px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[9px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-2"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[4px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[15px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[7px] "></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[9px] "></div>
    </div>
  );
};

const NineCircleRow = () => {
  return (
    <div className="flex w-full mb-[5px]">
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[20px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-2"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-2"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[68px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[54px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[28px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[8px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[70px]"></div>
    </div>
  );
};

const SevenCircleRow = () => {
  return (
    <div className="flex w-full mb-[5px]">
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[106px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[22px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[54px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[48px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[13px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[45px]"></div>
    </div>
  );
};

const TwentyCircleRow = () => {
  return (
    <div className="flex w-full mb-[5px]">
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[4px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[3px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[8px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[9px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[14px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[8px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[22px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[37px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[5px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[11px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[5px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[8px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[13px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[10px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[6px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[5px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[14px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[8px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[9px]"></div>
    </div>
  );
};

const ThirteenCircleRow = () => {
  return (
    <div className="flex w-full mb-[5px]">
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[19px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[8px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[9px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[14px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[8px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[23px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[36px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[5px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[28px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[8px] "></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[13px] "></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[45px]"></div>
    </div>
  );
};

const ThirteenCircleRowPluse = () => {
  return (
    <div className="flex w-full mb-[5px]">
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[19px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[8px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[9px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[14px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[8px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[6px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[5px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[36px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[5px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[28px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[8px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[13px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[45px] animate-moveTop20"></div>
    </div>
  );
};

const TenCircleRowPluse = () => {
  return (
    <div className="flex w-full mb-[5px]">
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[32px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[8px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[8px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[35px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[21px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[5px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[37px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[28px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[8px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[70px]"></div>
    </div>
  );
};

const Twelve = () => {
  return (
    <div className="flex w-full mb-[5px]">
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[40px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[34px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[9px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[21px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[54px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[28px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[8px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[70px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[16px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[8px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full ml-[9px]"></div>
    </div>
  );
};

const ZAnimationCircle = () => {
  return (
    <div className="relative h-full  w-full ">
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-10 left-[59px] animate-move1 top-2"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-10 left-[59px] animate-move2 top-8"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-10 left-[79px] animate-move3 top-3"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-10 left-[79px] animate-move4 top-8"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-10 left-28 top-10 animate-move5"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-10 left-28 top-14 animate-move6"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-10 left-[129px] top-10 animate-move8"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-10 left-[129px] top-16 animate-move7"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-10 left-36 top-3 animate-move9"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-10 left-36 top-8 animate-move10"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-10 left-40 top-14 animate-move11"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-10 left-40 top-20 animate-move12"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-10 left-48 top-12 animate-move13"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-10 left-48 top-36 animate-move14"></div>
      {/* fixed icons*/}
      <div className="w-3 h-3 animate-moveDown30 bg-[#92E6A7] rounded-full absolute left-[50px] top-24 "></div>
      <div className="w-3 h-3 animate-moveDown30 bg-[#92E6A7] rounded-full absolute left-24 top-20 "></div>
      <div className="w-3 h-3 animate-moveDown30 bg-[#92E6A7] rounded-full absolute left-8 top-14 "></div>
      <div className="w-3 h-3 animate-moveDown30 bg-[#92E6A7] rounded-full absolute left-[214px] top-10 "></div>
      <div className="w-3 h-3 animate-moveDown30 bg-[#92E6A7] rounded-full absolute left-[323px] top-1 "></div>
      <div className="w-3 h-3 animate-moveDown30 bg-[#92E6A7] rounded-full absolute left-[303px] top-4 "></div>
      <div className="w-3 h-3 animate-moveDown30 bg-[#92E6A7] rounded-full absolute right-0 top-4 "></div>
      <div className="w-3 h-3 animate-moveDown30 bg-[#92E6A7] rounded-full absolute right-0 top-9 "></div>
      <div className="w-3 h-3 animate-moveDown30 bg-[#92E6A7] rounded-full absolute right-0 top-14 "></div>
      <div className="w-3 h-3 animate-moveDown30 bg-[#92E6A7] rounded-full absolute right-0 top-20 "></div>
      <div className="w-3 h-3 animate-moveDown30 bg-[#92E6A7] rounded-full absolute right-5 top-4 "></div>
      <div className="w-3 h-3 animate-moveDown30 bg-[#92E6A7] rounded-full absolute right-10 top-9 "></div>
      <div className="w-3 h-3 animate-moveDown30 bg-[#92E6A7] rounded-full absolute right-10 top-16 "></div>
      <div className="w-3 h-3 animate-moveDown30 bg-[#92E6A7] rounded-full absolute right-[68px] top-12 "></div>
      <div className="w-3 h-3 animate-moveDown30 bg-[#92E6A7] rounded-full absolute right-16 top-[188px] "></div>
      <div className="w-3 h-3 animate-moveDown30 bg-[#92E6A7] rounded-full absolute right-4 top-44 "></div>
      <div className="w-3 h-3 animate-moveDown30 bg-[#92E6A7] rounded-full absolute right-28 top-36 "></div>
      <div className="w-3 h-3 animate-moveDown30 bg-[#92E6A7] rounded-full absolute right-[67px] top-24 "></div>
      <div className="w-3 h-3 animate-moveDown30 bg-[#92E6A7] rounded-full absolute right-[151px] top-46 "></div>
      <div className="w-3 h-3 animate-moveDown30 bg-[#92E6A7] rounded-full absolute right-[171px] top-42 "></div>
      <div className="w-3 h-3 animate-moveDown30 bg-[#92E6A7] rounded-full absolute right-24 top-24 "></div>
      <div className="w-3 h-3 animate-moveDown30 bg-[#92E6A7] rounded-full absolute right-9 top-40 "></div>
      <div className="w-3 h-3 animate-moveDown30 bg-[#92E6A7] rounded-full absolute right-24 top-40 "></div>

      <div className="w-3 h-3  bg-[#92E6A7] rounded-full absolute right-6 bottom-20 "></div>
      <div className="w-3 h-3 animate-moveTop50 bg-[#92E6A7] rounded-full absolute right-[68px] bottom-16 "></div>
      <div className="w-3 h-3 animate-moveTop50 bg-[#92E6A7] rounded-full absolute right-[45px] bottom-16 "></div>
      <div className="w-3 h-3 animate-moveTop50 bg-[#92E6A7] rounded-full absolute right-[3px] bottom-20 "></div>

      <div className="w-3 h-3  bg-[#92E6A7] animate-moveTop50 rounded-full absolute left-0 bottom-24"></div>
      <div className="w-3 h-3  bg-[#92E6A7] animate-moveTop50 rounded-full absolute left-[31px] bottom-24"></div>
      <div className="w-3 h-3  bg-[#92E6A7] animate-moveTop50 rounded-full absolute left-0 bottom-32"></div>

      {/* fixed icons */}
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-10 left-56 top-[105px] animate-move15"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-10 left-60 top-[52px] animate-move17"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-10 left-56  top-[80px] animate-move16"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-10 left-60 top-[75px] animate-move18"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-10 left-64 top-[68px] animate-move19"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-10 left-48 top-[190px] animate-move21"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-10 left-64 top-[83px] animate-move20"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-10 left-60 top-[100px] animate-move22"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-10 left-[129px] top-[85px] animate-move23"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-10 left-56 top-[120px] animate-move24"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-10 left-[58px] top-[95px] animate-move25"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-10 left-40 top-[110px] animate-move26"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-10 left-[58px] top-[195px] animate-move27"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-10 left-[78px] top-[180px] animate-move28"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-10 left-28 top-[195px] animate-move29"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-10 left-32 top-[185px] animate-move30"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-10 left-36 top-[200px] animate-move31"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-10 left-40 top-[180px] animate-move32"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-10 left-48 top-[170px] animate-move33"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-10 left-[274px] top-[52px] animate-move17"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-10 left-48 bottom-4 animate-move34"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-10 left-56 bottom-8 animate-move34"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-10 left-60 bottom-2 animate-move34"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-10 left-60 bottom-12 animate-move37"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-10 left-60 bottom-16 animate-move38"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-10 left-64 bottom-4 animate-move36"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-10 left-[274px] bottom-8 animate-move36"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-10 left-[274px] bottom-14 animate-move37"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-10 left-48 bottom-16 animate-move37"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-10 left-48 bottom-[125px] animate-move39"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-10 left-48 bottom-10 animate-move35"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-10 left-16 bottom-2 animate-move35"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-10 left-20 bottom-10 animate-move35"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-10 left-28 bottom-14 animate-move35"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-10 left-32 bottom-12 animate-move35"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-10 left-36 bottom-10 animate-move35"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-10 left-40 bottom-14 animate-move35"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-10 left-56 bottom-16 animate-move35"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-10 left-60 bottom-7 animate-move35"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-10 left-64 bottom-20 animate-move35"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-10 left-[274px] bottom-24 animate-move39"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-10 left-[274px] bottom-3 animate-move35"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-10 left-20 bottom-16 animate-move47"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-10 left-28 bottom-[40px] animate-move46"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-10 left-36 bottom-0 animate-move45"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-10 left-28 bottom-[160px] animate-move43"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-10 left-32 bottom-[120px] animate-move44"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-10 left-32 bottom-20 animate-move37"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-10 left-36 bottom-[188px] animate-move36"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-10 left-40 bottom-[80px] animate-move42"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-10 left-40 bottom-1 animate-move41"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-10 left-44 bottom-[100px] animate-move40"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute left-0 bottom-1"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute  left-[118px] bottom-1"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-2 left-[129px] bottom-[100px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute  left-0 bottom-5"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute  left-8 bottom-5 animate-moveTop20"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute  left-[118px] bottom-5"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute  left-[135px] bottom-5"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute  left-[153px] bottom-5"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute ml-6 left-[172px] bottom-5"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute left-[214px] bottom-5"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute  left-0 bottom-9"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute  left-0 bottom-[52px]"></div>
      <div className="w-3 h-3 bg-[#92E6A7] rounded-full absolute  left-0 bottom-[68px]"></div>
    </div>
  );
};

export default ZelAnimation;
