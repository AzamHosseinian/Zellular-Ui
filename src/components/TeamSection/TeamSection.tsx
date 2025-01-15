import React, { useState } from "react";
import backgroundImage from "/assets/images/team/bg-team.svg";

const TeamSection = () => {
  const teamInfo = [
    {
      id: 1,
      name: "Bob",
      position: "CEO",
      imgSrc: "./assets/images/team/bob.png",
      darkImg: "./assets/images/team/bw/bob.png",
      xLink: "https://x.com/0xbobx",
    },
    {
      id: 2,
      name: "Mahdi",
      position: "CTO",
      imgSrc: "./assets/images/team/mahdi.png",
      darkImg: "./assets/images/team/bw/mahdi.png",
      xLink: "https://x.com/0xmahdi_",
    },
    {
      id: 3,
      name: "Robert",
      position: "COO",
      imgSrc: "./assets/images/team/robert.png",
      darkImg: "./assets/images/team/bw/robert.png",
      xLink: "https://x.com/robwal2001",
    },
    {
      id: 4,
      name: "Paslar",
      position: "R&D",
      imgSrc: "./assets/images/team/paslar.png",
      darkImg: "./assets/images/team/bw/paslar.png",
      xLink: "https://x.com/zellular_xyz",
    },
    {
      id: 5,
      name: "Seraji",
      position: "Frontend Dev",
      imgSrc: "./assets/images/team/seraji.png",
      darkImg: "./assets/images/team/bw/seraji.png",
      xLink: "https://x.com/zellular_xyz",
    },
    {
      id: 6,
      name: "Teymur",
      position: "Backend Dev",
      imgSrc: "./assets/images/team/teymur.png",
      darkImg: "./assets/images/team/bw/teymur.png",
      xLink: "https://x.com/zellular_xyz",
    },
    {
      id: 7,
      name: "Lafa",
      position: "Senior Advisor",
      imgSrc: "./assets/images/team/lafa.png",
      darkImg: "./assets/images/team/bw/lafa.png",
      xLink: "https://x.com/lafachief",
    },
  ];
  const [selectedMember, setSelectedMember] = useState(0);

  const handleHover = (index: number) => {
    setSelectedMember(index);
  };

  return (
    <div
      className=" border-y-2 border-[#92E6a7] h-[842px] lt-1024:h-full bg-cover"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div>
        <div className="text-[#003a6c]">
          <div className="lt-1024:mb-[34px] lt-1550:mb-10 lt-1024:mt-[64px] w-full flex items-center justify-center sm:justify-start ml-0 sm:ml-[80px] mt-[80px]">
            <div className="flex lg:gap-4 gap-2 font-courierPrime text-base lt-1550:text-[20px] lg:text-[24px] items-center font-thin leading-[27px] text-[#003A6C] ">
              <div className="lt-1550:w-[16px] lt-1550:h-[16px] w-[20px] h-[20px] sm:w-4 sm:h-4 lg:w-5 lg:h-5 rounded-full bg-[#003A6C] -mt-1"></div>
              TEAM
            </div>
          </div>
          <div className="text-[20px] lt-1550:text-[18px] lt-940:text-[14px] lt-940:font-bold leading-[32px] lt-1024:leading-[25px] flex items-center justify-center font-bold font-courierPrime  w-full  lt-940:mt-[90px]">
            <div className="max-w-[1017px] lt-940:max-w-[480px] text-center px-0 lt-1024:px-10 ">
              Zellular and its sub-projects are developed and maintained by a
              passionate and experienced global team with a variety of
              expertise.
            </div>
          </div>
        </div>

        <div className="w-full flex items-center justify-center mb-[225px] lt-616:hidden">
          <div className="max-w-[1540px] w-full flex items-center justify-around mt-[152px] lt-1607:pl-[80px] lt-1170:pr-10">
            <div className="flex relative w-full ">
              <div className="w-[184px] h-[108px] lt-940:w-[100px] lt-940:h-[58px] bg-[#003A6C] rounded-[50%] flex items-center justify-center -mt-[15px]">
                <img
                  src="/assets/images/team/zel.svg"
                  alt=""
                  className="w-[157px] h-[32px] lt-940:w-[84px] lt-940:h-[16px]"
                />
              </div>

              <div className="absolute w-[281px] lt-940:w-[152px] lt-940:h-[90px]  h-[166px] border-2 border-[#003A6C] rounded-[50%] -top-11 -left-[4px] lt-940:-top-[31px]">
                <div
                  style={{ backgroundImage: `url(${teamInfo[0].darkImg})` }}
                  className={`w-[53px] h-[53px] lt-940:w-[32px] lt-940:h-[32px] border-2  border-[#92E6A7]  bg-cover rounded-full cursor-pointer  z-50 bg-[#92E6A7] flex items-center justify-center absolute lt-940:left-[90px] lt-940:-top-[12px] left-[190px] -top-[15px]`}
                  onMouseOver={() => handleHover(0)}
                ></div>
                <div
                  style={{ backgroundImage: `url(${teamInfo[1].darkImg})` }}
                  className={`w-[53px] h-[53px] lt-940:w-[32px] lt-940:h-[32px] border-2 border-[#92E6A7] bg-cover flex items-center justify-center rounded-full cursor-pointer z-50 bg-[#92E6A7] absolute lt-940:left-[90px] lt-940:-bottom-3 left-[215px] -bottom-1`}
                  onMouseOver={() => handleHover(1)}
                ></div>
              </div>

              <div className="absolute w-[395px] h-[232px] lt-940:w-[214px] lt-940:h-[124px] border-2 border-[#003A6C] rounded-[50%] -top-[77px] lt-940:-top-[48px] -left-[10px]">
                <div
                  style={{ backgroundImage: `url(${teamInfo[2].darkImg})` }}
                  className={`w-[53px] h-[53px] lt-940:w-[32px] lt-940:h-[32px] border-2 border-[#92E6A7] bg-cover flex items-center justify-center rounded-full cursor-pointer z-50 bg-[#92E6A7] absolute lt-940:left-[192px] lt-940:top-[45px]  left-[360px] top-[85px]`}
                  onMouseOver={() => handleHover(2)}
                ></div>
              </div>

              <div className="absolute w-[520px] h-[306px] lt-940:w-[281px] lt-940:h-[163px] border-2  border-[#003A6C] rounded-[50%] -top-[112px] lt-940:-top-[68px] -left-[16px]">
                <div
                  style={{ backgroundImage: `url(${teamInfo[4].darkImg})` }}
                  className={`w-[53px] h-[53px] lt-940:w-[32px] lt-940:h-[32px] bg-cover rounded-full border-2 border-[#92E6A7] cursor-pointer flex items-center justify-center z-50 bg-[#92E6A7] absolute lt-940:left-[210px] lt-940:top-[0px] left-[380px] top-[0px]`}
                  onMouseOver={() => handleHover(4)}
                ></div>
                <div
                  style={{ backgroundImage: `url(${teamInfo[5].darkImg})` }}
                  className={`w-[53px] h-[53px] lt-940:w-[32px] lt-940:h-[32px] bg-cover rounded-full border-2 border-[#92E6A7] cursor-pointer flex items-center justify-center z-50 bg-[#92E6A7] absolute lt-940:left-[215px] lt-940:top-[122px] left-[400px] top-[235px]`}
                  onMouseOver={() => handleHover(5)}
                ></div>
              </div>

              <div className="absolute w-[657px] h-[387px] lt-940:w-[356px] lt-940:h-[207px] border-2  border-[#003A6C] rounded-[50%] -top-[152px] -left-[26px] lt-940:-top-[90px]">
                <div
                  style={{ backgroundImage: `url(${teamInfo[6].darkImg})` }}
                  className={`w-[53px] h-[53px] lt-940:w-[32px] lt-940:h-[32px] bg-cover rounded-full cursor-pointer border-2 border-[#92E6A7] flex items-center justify-center z-50 bg-[#92E6A7] absolute left-[590px] top-[75px] lt-940:left-[320px] lt-940:top-[40px]`}
                  onMouseOver={() => handleHover(6)}
                ></div>
                <div
                  style={{ backgroundImage: `url(${teamInfo[3].darkImg})` }}
                  className={`w-[53px] h-[53px] lt-940:w-[32px] lt-940:h-[32px] bg-cover  border-2 border-[#92E6A7] rounded-full cursor-pointer z-50 flex items-center justify-center bg-[#92E6A7] absolute left-[585px] bottom-[70px] lt-940:left-[325px] lt-940:bottom-[50px]`}
                  onMouseOver={() => handleHover(3)}
                ></div>
              </div>
            </div>

            <div
              className={`${
                selectedMember == 0 ? "flex flex-col" : "hidden"
              } text-[#003A6C] font-courierPrime w-full max-w-[400px] lt-1170:max-w-[200px]`}
            >
              <div>
                <img
                  src={teamInfo[0].imgSrc}
                  className="w-[240px] h-[240px] lt-1550:w-[180px] lt-1550:h-[180px] lt-940:w-[120px] lt-940:h-[120px]   border-4 border-[#92E6A7] rounded-full "
                />
              </div>
              <div className="mt-[35px] ml-8 lt-940:ml-0">
                <div className="text-[40px] lt-940:text-[20px]">
                  {teamInfo[0].name}
                </div>
                <div className="flex items-center text-[24px] lt-940:text-[20px] font-normal lt-940:gap-1 gap-3">
                  <div>{teamInfo[0].position}</div>
                  <svg
                    width="110"
                    height="6"
                    viewBox="0 0 110 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.466878 3C0.466878 4.47276 1.66079 5.66667 3.13354 5.66667C4.6063 5.66667 5.80021 4.47276 5.80021 3C5.80021 1.52724 4.6063 0.333333 3.13354 0.333333C1.66079 0.333333 0.466878 1.52724 0.466878 3ZM104.467 3C104.467 4.47276 105.661 5.66667 107.134 5.66667C108.606 5.66667 109.8 4.47276 109.8 3C109.8 1.52724 108.606 0.333333 107.134 0.333333C105.661 0.333333 104.467 1.52724 104.467 3ZM3.13354 3.5H107.134V2.5H3.13354V3.5Z"
                      fill="#003A6C"
                    />
                  </svg>

                  <a href={teamInfo[0].xLink} target="_blank">
                    <svg
                      width="26"
                      height="24"
                      viewBox="0 0 26 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.28169 0C1.99073 0 0.133545 1.79086 0.133545 4V20C0.133545 22.2091 1.99073 24 4.28169 24H20.8743C23.1652 24 25.0224 22.2091 25.0224 20V4C25.0224 1.79086 23.1652 0 20.8743 0H4.28169ZM5.5178 5.14286H10.2215L13.5618 9.71987L17.615 5.14286H19.0965L14.2308 10.6362L20.2308 18.8571H15.5282L11.6521 13.5469L6.94836 18.8571H5.46688L10.9831 12.6306L5.5178 5.14286ZM7.78632 6.28571L16.1463 17.7143H17.9622L9.60229 6.28571H7.78632Z"
                        fill="#003A6C"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div
              className={`${
                selectedMember == 1 ? "flex flex-col" : "hidden"
              } text-[#003A6C] font-courierPrime w-full max-w-[400px] lt-1170:max-w-[200px]`}
            >
              <img
                src={teamInfo[1].imgSrc}
                className="w-[240px] h-[240px] lt-1550:w-[180px] lt-1550:h-[180px] lt-940:w-[120px] lt-940:h-[120px]   border-4 border-[#92E6A7] rounded-full "
              />
              <div className="mt-[35px] ml-8 lt-940:ml-0">
                <div className="text-[40px] lt-940:text-[20px]">
                  {teamInfo[1].name}
                </div>
                <div className="flex items-center text-[24px] lt-940:text-[20px] font-normal lt-940:gap-1 gap-3">
                  <div>{teamInfo[1].position}</div>
                  <svg
                    className="w-[110px] lt-940:w-[48px]"
                    // width="110"
                    // height="6"
                    viewBox="0 0 110 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.466878 3C0.466878 4.47276 1.66079 5.66667 3.13354 5.66667C4.6063 5.66667 5.80021 4.47276 5.80021 3C5.80021 1.52724 4.6063 0.333333 3.13354 0.333333C1.66079 0.333333 0.466878 1.52724 0.466878 3ZM104.467 3C104.467 4.47276 105.661 5.66667 107.134 5.66667C108.606 5.66667 109.8 4.47276 109.8 3C109.8 1.52724 108.606 0.333333 107.134 0.333333C105.661 0.333333 104.467 1.52724 104.467 3ZM3.13354 3.5H107.134V2.5H3.13354V3.5Z"
                      fill="#003A6C"
                    />
                  </svg>

                  <a href={teamInfo[1].xLink} target="_blank">
                    <svg
                      className="w-[26px] h-[24px] lt-940:w-[16px] lt-940:h-[16px]"
                      // width="26"
                      // height="24"
                      viewBox="0 0 26 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.28169 0C1.99073 0 0.133545 1.79086 0.133545 4V20C0.133545 22.2091 1.99073 24 4.28169 24H20.8743C23.1652 24 25.0224 22.2091 25.0224 20V4C25.0224 1.79086 23.1652 0 20.8743 0H4.28169ZM5.5178 5.14286H10.2215L13.5618 9.71987L17.615 5.14286H19.0965L14.2308 10.6362L20.2308 18.8571H15.5282L11.6521 13.5469L6.94836 18.8571H5.46688L10.9831 12.6306L5.5178 5.14286ZM7.78632 6.28571L16.1463 17.7143H17.9622L9.60229 6.28571H7.78632Z"
                        fill="#003A6C"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div
              className={`${
                selectedMember == 2 ? "flex flex-col" : "hidden"
              } text-[#003A6C] font-courierPrime w-full max-w-[400px] lt-1170:max-w-[200px]`}
            >
              <img
                src={teamInfo[2].imgSrc}
                className="w-[240px] h-[240px] lt-1550:w-[180px] lt-1550:h-[180px] lt-940:w-[120px] lt-940:h-[120px]   border-4 border-[#92E6A7] rounded-full "
              />
              <div className="mt-[35px] ml-8 lt-940:ml-0">
                <div className="text-[40px] lt-940:text-[20px]">
                  {teamInfo[2].name}
                </div>
                <div className="flex items-center text-[24px] lt-940:text-[20px] font-normal lt-940:gap-1 gap-3">
                  <div>{teamInfo[2].position}</div>
                  <svg
                    width="110"
                    height="6"
                    viewBox="0 0 110 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.466878 3C0.466878 4.47276 1.66079 5.66667 3.13354 5.66667C4.6063 5.66667 5.80021 4.47276 5.80021 3C5.80021 1.52724 4.6063 0.333333 3.13354 0.333333C1.66079 0.333333 0.466878 1.52724 0.466878 3ZM104.467 3C104.467 4.47276 105.661 5.66667 107.134 5.66667C108.606 5.66667 109.8 4.47276 109.8 3C109.8 1.52724 108.606 0.333333 107.134 0.333333C105.661 0.333333 104.467 1.52724 104.467 3ZM3.13354 3.5H107.134V2.5H3.13354V3.5Z"
                      fill="#003A6C"
                    />
                  </svg>

                  <a href={teamInfo[2].xLink} target="_blank">
                    <svg
                      width="26"
                      height="24"
                      viewBox="0 0 26 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.28169 0C1.99073 0 0.133545 1.79086 0.133545 4V20C0.133545 22.2091 1.99073 24 4.28169 24H20.8743C23.1652 24 25.0224 22.2091 25.0224 20V4C25.0224 1.79086 23.1652 0 20.8743 0H4.28169ZM5.5178 5.14286H10.2215L13.5618 9.71987L17.615 5.14286H19.0965L14.2308 10.6362L20.2308 18.8571H15.5282L11.6521 13.5469L6.94836 18.8571H5.46688L10.9831 12.6306L5.5178 5.14286ZM7.78632 6.28571L16.1463 17.7143H17.9622L9.60229 6.28571H7.78632Z"
                        fill="#003A6C"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div
              className={`${
                selectedMember == 3 ? "flex flex-col" : "hidden"
              } text-[#003A6C] font-courierPrime w-full max-w-[400px] lt-1170:max-w-[200px]`}
            >
              <img
                src={teamInfo[3].imgSrc}
                className="w-[240px] h-[240px] lt-1550:w-[180px] lt-1550:h-[180px] lt-940:w-[120px] lt-940:h-[120px]   border-4 border-[#92E6A7] rounded-full "
              />
              <div className="mt-[35px] ml-8 lt-940:ml-0">
                <div className="text-[40px] lt-940:text-[20px]">
                  {teamInfo[3].name}
                </div>
                <div className="flex items-center text-[24px] lt-940:text-[20px] font-normal lt-940:gap-1 gap-3">
                  <div>{teamInfo[3].position}</div>
                  <svg
                    width="110"
                    height="6"
                    viewBox="0 0 110 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.466878 3C0.466878 4.47276 1.66079 5.66667 3.13354 5.66667C4.6063 5.66667 5.80021 4.47276 5.80021 3C5.80021 1.52724 4.6063 0.333333 3.13354 0.333333C1.66079 0.333333 0.466878 1.52724 0.466878 3ZM104.467 3C104.467 4.47276 105.661 5.66667 107.134 5.66667C108.606 5.66667 109.8 4.47276 109.8 3C109.8 1.52724 108.606 0.333333 107.134 0.333333C105.661 0.333333 104.467 1.52724 104.467 3ZM3.13354 3.5H107.134V2.5H3.13354V3.5Z"
                      fill="#003A6C"
                    />
                  </svg>

                  <a href={teamInfo[3].xLink} target="_blank">
                    <svg
                      width="26"
                      height="24"
                      viewBox="0 0 26 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.28169 0C1.99073 0 0.133545 1.79086 0.133545 4V20C0.133545 22.2091 1.99073 24 4.28169 24H20.8743C23.1652 24 25.0224 22.2091 25.0224 20V4C25.0224 1.79086 23.1652 0 20.8743 0H4.28169ZM5.5178 5.14286H10.2215L13.5618 9.71987L17.615 5.14286H19.0965L14.2308 10.6362L20.2308 18.8571H15.5282L11.6521 13.5469L6.94836 18.8571H5.46688L10.9831 12.6306L5.5178 5.14286ZM7.78632 6.28571L16.1463 17.7143H17.9622L9.60229 6.28571H7.78632Z"
                        fill="#003A6C"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div
              className={`${
                selectedMember == 4 ? "flex flex-col" : "hidden"
              } text-[#003A6C] font-courierPrime w-full max-w-[400px] lt-1170:max-w-[200px]`}
            >
              <img
                src={teamInfo[4].imgSrc}
                className="w-[240px] h-[240px] lt-1550:w-[180px] lt-1550:h-[180px] lt-940:w-[120px] lt-940:h-[120px]   border-4 border-[#92E6A7] rounded-full "
              />
              <div className="mt-[35px] ml-8 lt-940:ml-0">
                <div className="text-[40px] lt-940:text-[20px]">
                  {teamInfo[4].name}
                </div>
                <div className="flex items-center text-[24px] lt-940:text-[20px] font-normal lt-940:gap-1 gap-3">
                  <div>{teamInfo[4].position}</div>
                  <svg
                    width="110"
                    height="6"
                    viewBox="0 0 110 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.466878 3C0.466878 4.47276 1.66079 5.66667 3.13354 5.66667C4.6063 5.66667 5.80021 4.47276 5.80021 3C5.80021 1.52724 4.6063 0.333333 3.13354 0.333333C1.66079 0.333333 0.466878 1.52724 0.466878 3ZM104.467 3C104.467 4.47276 105.661 5.66667 107.134 5.66667C108.606 5.66667 109.8 4.47276 109.8 3C109.8 1.52724 108.606 0.333333 107.134 0.333333C105.661 0.333333 104.467 1.52724 104.467 3ZM3.13354 3.5H107.134V2.5H3.13354V3.5Z"
                      fill="#003A6C"
                    />
                  </svg>

                  <a href={teamInfo[4].xLink} target="_blank">
                    <svg
                      width="26"
                      height="24"
                      viewBox="0 0 26 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.28169 0C1.99073 0 0.133545 1.79086 0.133545 4V20C0.133545 22.2091 1.99073 24 4.28169 24H20.8743C23.1652 24 25.0224 22.2091 25.0224 20V4C25.0224 1.79086 23.1652 0 20.8743 0H4.28169ZM5.5178 5.14286H10.2215L13.5618 9.71987L17.615 5.14286H19.0965L14.2308 10.6362L20.2308 18.8571H15.5282L11.6521 13.5469L6.94836 18.8571H5.46688L10.9831 12.6306L5.5178 5.14286ZM7.78632 6.28571L16.1463 17.7143H17.9622L9.60229 6.28571H7.78632Z"
                        fill="#003A6C"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div
              className={`${
                selectedMember == 5 ? "flex flex-col" : "hidden"
              } text-[#003A6C] font-courierPrime w-full max-w-[400px] lt-1170:max-w-[200px]`}
            >
              <img
                src={teamInfo[5].imgSrc}
                className="w-[240px] h-[240px] lt-1550:w-[180px] lt-1550:h-[180px] lt-940:w-[120px] lt-940:h-[120px]   border-4 border-[#92E6A7] rounded-full "
              />
              <div className="mt-[35px] ml-8 lt-940:ml-0">
                <div className="text-[40px] lt-940:text-[20px]">
                  {teamInfo[5].name}
                </div>
                <div className="flex items-center text-[24px] lt-940:text-[20px] font-normal lt-940:gap-1 gap-3">
                  <div>{teamInfo[5].position}</div>
                  <svg
                    width="110"
                    height="6"
                    viewBox="0 0 110 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.466878 3C0.466878 4.47276 1.66079 5.66667 3.13354 5.66667C4.6063 5.66667 5.80021 4.47276 5.80021 3C5.80021 1.52724 4.6063 0.333333 3.13354 0.333333C1.66079 0.333333 0.466878 1.52724 0.466878 3ZM104.467 3C104.467 4.47276 105.661 5.66667 107.134 5.66667C108.606 5.66667 109.8 4.47276 109.8 3C109.8 1.52724 108.606 0.333333 107.134 0.333333C105.661 0.333333 104.467 1.52724 104.467 3ZM3.13354 3.5H107.134V2.5H3.13354V3.5Z"
                      fill="#003A6C"
                    />
                  </svg>

                  <a href={teamInfo[5].xLink} target="_blank">
                    <svg
                      width="26"
                      height="24"
                      viewBox="0 0 26 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.28169 0C1.99073 0 0.133545 1.79086 0.133545 4V20C0.133545 22.2091 1.99073 24 4.28169 24H20.8743C23.1652 24 25.0224 22.2091 25.0224 20V4C25.0224 1.79086 23.1652 0 20.8743 0H4.28169ZM5.5178 5.14286H10.2215L13.5618 9.71987L17.615 5.14286H19.0965L14.2308 10.6362L20.2308 18.8571H15.5282L11.6521 13.5469L6.94836 18.8571H5.46688L10.9831 12.6306L5.5178 5.14286ZM7.78632 6.28571L16.1463 17.7143H17.9622L9.60229 6.28571H7.78632Z"
                        fill="#003A6C"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div
              className={`${
                selectedMember == 6 ? "flex flex-col" : "hidden"
              } text-[#003A6C] font-courierPrime w-full max-w-[400px] lt-1170:max-w-[200px]`}
            >
              <img
                src={teamInfo[6].imgSrc}
                className="w-[240px] h-[240px] lt-1550:w-[180px] lt-1550:h-[180px] lt-940:w-[120px] lt-940:h-[120px]   border-4 border-[#92E6A7] rounded-full "
              />
              <div className="mt-[35px] ml-8 lt-940:ml-0">
                <div className="text-[40px] lt-940:text-[20px]">
                  {teamInfo[6].name}
                </div>
                <div className="flex items-center text-[24px] lt-940:text-[20px] font-normal lt-940:gap-1 gap-3">
                  <div>{teamInfo[6].position}</div>
                  <svg
                    width="110"
                    height="6"
                    viewBox="0 0 110 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.466878 3C0.466878 4.47276 1.66079 5.66667 3.13354 5.66667C4.6063 5.66667 5.80021 4.47276 5.80021 3C5.80021 1.52724 4.6063 0.333333 3.13354 0.333333C1.66079 0.333333 0.466878 1.52724 0.466878 3ZM104.467 3C104.467 4.47276 105.661 5.66667 107.134 5.66667C108.606 5.66667 109.8 4.47276 109.8 3C109.8 1.52724 108.606 0.333333 107.134 0.333333C105.661 0.333333 104.467 1.52724 104.467 3ZM3.13354 3.5H107.134V2.5H3.13354V3.5Z"
                      fill="#003A6C"
                    />
                  </svg>

                  <a href={teamInfo[6].xLink} target="_blank">
                    <svg
                      width="26"
                      height="24"
                      viewBox="0 0 26 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.28169 0C1.99073 0 0.133545 1.79086 0.133545 4V20C0.133545 22.2091 1.99073 24 4.28169 24H20.8743C23.1652 24 25.0224 22.2091 25.0224 20V4C25.0224 1.79086 23.1652 0 20.8743 0H4.28169ZM5.5178 5.14286H10.2215L13.5618 9.71987L17.615 5.14286H19.0965L14.2308 10.6362L20.2308 18.8571H15.5282L11.6521 13.5469L6.94836 18.8571H5.46688L10.9831 12.6306L5.5178 5.14286ZM7.78632 6.28571L16.1463 17.7143H17.9622L9.60229 6.28571H7.78632Z"
                        fill="#003A6C"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lt-616:grid lt-1024:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]  w-full items-center mb-[152px]">
          {teamInfo.map((member, index) => (
            <div
              key={index}
              className={` text-[#003A6C] font-courierPrime mt-[80px] flex flex-col justify-center  items-center`}
            >
              <div
                style={{ backgroundImage: `url(${member.imgSrc})` }}
                className={`w-[240px] h-[240px] lt-1550:w-[180px] lt-1550:h-[180px] lt-940:w-[120px] lt-940:h-[120px]  bg-cover border-4 border-[#92E6A7] bg-[#92E6A7] rounded-full flex items-center justify-center p-5`}
              ></div>
              <div className="mt-[20px] flex flex-col items-center justify-center">
                <div className="text-[20px]">{member.name}</div>
                <div className="flex items-center lt-940:text-[20px] gap-3">
                  <div>{member.position}</div>
                  <svg
                    width="110"
                    height="6"
                    viewBox="0 0 110 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.466878 3C0.466878 4.47276 1.66079 5.66667 3.13354 5.66667C4.6063 5.66667 5.80021 4.47276 5.80021 3C5.80021 1.52724 4.6063 0.333333 3.13354 0.333333C1.66079 0.333333 0.466878 1.52724 0.466878 3ZM104.467 3C104.467 4.47276 105.661 5.66667 107.134 5.66667C108.606 5.66667 109.8 4.47276 109.8 3C109.8 1.52724 108.606 0.333333 107.134 0.333333C105.661 0.333333 104.467 1.52724 104.467 3ZM3.13354 3.5H107.134V2.5H3.13354V3.5Z"
                      fill="#003A6C"
                    />
                  </svg>

                  <a href={member.xLink} target="_blank">
                    <svg
                      className="w-[26px] h-[24px] lt-940:w-[16px] lt-940:h-[16px]"
                      viewBox="0 0 26 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.28169 0C1.99073 0 0.133545 1.79086 0.133545 4V20C0.133545 22.2091 1.99073 24 4.28169 24H20.8743C23.1652 24 25.0224 22.2091 25.0224 20V4C25.0224 1.79086 23.1652 0 20.8743 0H4.28169ZM5.5178 5.14286H10.2215L13.5618 9.71987L17.615 5.14286H19.0965L14.2308 10.6362L20.2308 18.8571H15.5282L11.6521 13.5469L6.94836 18.8571H5.46688L10.9831 12.6306L5.5178 5.14286ZM7.78632 6.28571L16.1463 17.7143H17.9622L9.60229 6.28571H7.78632Z"
                        fill="#003A6C"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
