import { useState } from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import bgImage from "/assets/images/advantages/ad-bg.svg";
import icon1 from "/assets/images/advantages/icon1.svg";
import icon1Hover from "/assets/images/advantages/icon1-1.svg";
import icon2 from "/assets/images/advantages/icon2.svg";
import icon2Hover from "/assets/images/advantages/icon2-1.svg";
import icon3 from "/assets/images/advantages/icon3.svg";
import icon3Hover from "/assets/images/advantages/icon3-1.svg";
import icon4 from "/assets/images/advantages/icon4.svg";
import icon4Hover from "/assets/images/advantages/icon4-1.svg";

const advantages = [
  {
    id: 1,
    title: "Flexibility in Development",
    description:
      "Enables developing decentralized apps using high-level programming languages.",
    icon: icon1,
    hoverIcon: icon1Hover,
  },
  {
    id: 2,
    title: "Rapid Finality",
    description: "Achieves state finalization in under a second.",
    icon: icon2,
    hoverIcon: icon2Hover,
  },
  {
    id: 3,
    title: "High Throughput",
    description:
      "Supports 500k transactions per second per zApp, and unlimited throughput across the system.",
    icon: icon3,
    hoverIcon: icon3Hover,
  },
  {
    id: 4,
    title: "Dynamic Security",
    description:
      "Enables zApps to hire required level of security from EigenLayer by specifying the amount of restaked ETH that is required for their nodes.",
    icon: icon4,
    hoverIcon: icon4Hover,
  },
];

const Advantage = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  return (
    <Box
      id="advantages"
      sx={{
        backgroundImage: `url(${bgImage})`,
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        minHeight: "100svh",
        borderTop: "4px solid #003A6C",
        borderBottom: "4px solid #003A6C",
        width: "100vw",
      }}
    >
      <div
        id="advantages"
        className="mb-[130px] lt-1024:mb-[64px] lt-1024:mt-[64px] w-full flex items-center justify-center sm:justify-start ml-0 sm:ml-[80px] mt-[80px]"
      >
        <div className="flex sm:gap-4 gap-2 font-courierPrime text-base sm:text-[20px] md:text-[24px] items-center font-thin leading-[27px] text-[#003A6C] ">
          <div className="w-[12px] h-[12px] sm:w-4 sm:h-4 lg:w-5 lg:h-5 rounded-full bg-[#003A6C] -mt-1"></div>
          ADVANTAGES
        </div>
      </div>

      <div className="w-full flex justify-center rounded-[2px] lt-1024:mb-[140px]">
        <div className="flex gap-[40px] justify-center flex-wrap w-full">
          {advantages.map((adv, index) => (
            <div className="flex items-stretch justify-center" key={index}>
              <div className=" bg-[#FDF5E6] text-[#003A6C] border-2 border-[#003A6C] items-center  w-[340px] lt-1550:w-[255px]  lt-414:w-[240px]">
                <div className="font-spaceGrotesk p-0 text-left text-[56px] lt-1550:text-[48px] lt-1550:font-semibold font-medium mt-2 ml-[24px]">
                  0{adv.id}
                </div>
                <div className="flex justify-center mt-[20px]">
                  <img
                    src={adv.icon}
                    alt={adv.title}
                    className="w-[150px] h-[200px] lt-1024:h-[80px] lt-1024:w-[100px] lt-1550:h-[180px] lt-1550:w-[120px]"
                    loading="lazy"
                  />
                </div>
                <div className="flex w-full mb-[60px] mt-[50px] justify-center text-center">
                  <div className="text-[26px]  p-0 font-chakraPetch font-bold  leading-[33px] max-w-[170px]">
                    {adv.title}
                  </div>
                </div>

                <div className="text-center text-[20px] mb-2 lt-375:leading-5 md:leading-[24px] mx-2  lt-1550:text-[16px] lt-1024:text-[14px] font-courierPrime  font-normal text-[#003A6C]">
                  {adv.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Box>
  );
};

export default Advantage;
