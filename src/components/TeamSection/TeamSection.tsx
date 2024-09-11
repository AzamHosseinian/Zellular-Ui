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
      xLink: "https://x.com/paslar_a",
    },
    {
      id: 5,
      name: "Seraji",
      position: "Frontend Dev",
      imgSrc: "./assets/images/team/seraji.png",
      darkImg: "./assets/images/team/bw/seraji.png",
      xLink: "https://x.com/NexusEngDev",
    },
    {
      id: 6,
      name: "Teymur",
      position: "Backend Dev",
      imgSrc: "./assets/images/team/teymur.png",
      darkImg: "./assets/images/team/bw/teymur.png",
      xLink: "https://x.com/sadeghte",
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
          <p className="text-[40px] leading-[51px] ml-[80px] mt-[80px] font-spaceGrotesk">
            -Team
          </p>
          <div className="text-[24px] leading-[32px] lt-1024:leading-[30px] flex items-center justify-center font-bold font-courierPrime  w-full lt-1170:mt-[72px] ">
            <div className="max-w-[917px] text-center px-0 lt-1024:px-10">
              Zellular and its sub-projects are developed and maintained by a
              passionate and experienced global team with a variety of expertise
            </div>
          </div>
        </div>

        <div className="w-full flex items-center justify-center mb-[225px] lt-1024:hidden">
          <div className="max-w-[1540px] w-full flex items-center justify-around mt-[152px] lt-1607:px-[80px]">
            <div className="flex relative w-full ">
              <div className="w-[184px]  h-[108px] bg-[#003A6C] rounded-[50%] flex items-center justify-center -mt-[15px]">
                <svg
                  width="157"
                  height="32"
                  viewBox="0 0 157 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.4946 9.86719C20.2839 9.86719 22.0962 11.8722 22.0962 14.92C22.0962 17.6351 20.6546 19.3955 18.3893 20.2249L5.91063 24.8182C5.17512 25.1166 4.75883 25.6119 4.75883 26.322C4.75883 27.1574 5.29281 27.6646 6.40489 27.6646H21.6431V31.9253H6.1607C2.41403 31.9253 0.560547 29.9203 0.560547 26.871C0.560547 24.408 1.75501 22.4447 4.26751 21.5258L16.7888 16.9668C17.6949 16.6326 17.9421 16.006 17.9421 15.4212C17.9421 14.5858 17.4066 14.1278 16.2533 14.1278H1.34313V9.86719H16.4946Z"
                    fill="#FDF5E6"
                  />
                  <path
                    d="M40.9608 9.86719C46.1093 9.86719 48.2908 12.3734 48.2908 16.6326C48.2908 20.6844 46.2726 22.9803 40.9196 22.9803H30.5827V24.5676C30.5827 26.322 31.5301 27.6169 33.9175 27.6169H47.2199V31.9193H33.9175C28.4748 31.9193 26.3403 28.8282 26.3403 24.6511V17.1339C26.3403 12.9568 28.4821 9.86719 33.9175 9.86719H40.9608ZM30.5827 19.5148H40.796C43.1496 19.5148 44.0087 18.5123 44.0087 16.8832C44.0087 15.2124 43.0614 14.1278 40.9196 14.1278H33.9175C31.5301 14.1278 30.5827 15.4705 30.5827 17.1756V19.5148Z"
                    fill="#FDF5E6"
                  />
                  <path
                    d="M58.0103 2.5166V25.4265C58.0103 25.7172 57.9538 26.005 57.8441 26.2735C57.7343 26.542 57.5735 26.786 57.3708 26.9914C57.1681 27.1969 56.9274 27.3598 56.6626 27.4709C56.3977 27.582 56.1139 27.6391 55.8273 27.6389C55.2486 27.6389 54.6935 27.4058 54.2842 26.991C53.8748 26.5761 53.6447 26.0134 53.6443 25.4265V2.5166C53.6443 1.92945 53.8743 1.36634 54.2837 0.951161C54.6931 0.535981 55.2483 0.302735 55.8273 0.302735C56.114 0.302539 56.398 0.359668 56.6629 0.470856C56.9278 0.582043 57.1686 0.745108 57.3713 0.950723C57.5741 1.15634 57.7349 1.40047 57.8445 1.66916C57.9541 1.93784 58.0105 2.22581 58.0103 2.5166Z"
                    fill="#FDF5E6"
                  />
                  <path
                    d="M68.634 2.5166V25.4265C68.634 25.7172 68.5776 26.005 68.4678 26.2735C68.3581 26.542 68.1973 26.786 67.9946 26.9914C67.7918 27.1969 67.5512 27.3598 67.2863 27.4709C67.0215 27.582 66.7377 27.6391 66.451 27.6389C65.8723 27.6389 65.3173 27.4058 64.908 26.991C64.4986 26.5761 64.2685 26.0134 64.2681 25.4265V2.5166C64.2681 1.92945 64.4981 1.36634 64.9074 0.951161C65.3168 0.535981 65.8721 0.302735 66.451 0.302735C66.7378 0.302539 67.0217 0.359668 67.2867 0.470856C67.5516 0.582043 67.7923 0.745108 67.9951 0.950723C68.1978 1.15634 68.3586 1.40047 68.4683 1.66916C68.5779 1.93784 68.6342 2.22581 68.634 2.5166Z"
                    fill="#FDF5E6"
                  />
                  <path
                    d="M79.1762 9.86719V23.0653C79.1762 25.6536 81.0709 27.6169 84.5292 27.6169H88.0714C91.5313 27.6169 93.3848 25.6536 93.3848 23.0653V9.86719H97.6669V23.2309C97.6669 28.327 94.4542 31.9193 88.2362 31.9193H84.1997C77.9817 31.9193 74.769 28.327 74.769 23.2309V9.86719H79.1762Z"
                    fill="#FDF5E6"
                  />
                  <path
                    d="M108.171 2.5166V25.4265C108.171 25.7172 108.114 26.005 108.004 26.2735C107.895 26.542 107.734 26.786 107.531 26.9914C107.328 27.1969 107.088 27.3598 106.823 27.4709C106.558 27.582 106.274 27.6391 105.988 27.6389C105.409 27.6389 104.854 27.4058 104.445 26.9909C104.036 26.576 103.806 26.0133 103.806 25.4265V2.5166C103.806 2.22594 103.862 1.93809 103.972 1.6695C104.081 1.40091 104.242 1.15685 104.445 0.951251C104.647 0.745655 104.888 0.58256 105.152 0.471284C105.417 0.360009 105.701 0.302735 105.988 0.302735C106.274 0.302539 106.558 0.359668 106.823 0.470856C107.088 0.582043 107.329 0.745108 107.532 0.950723C107.734 1.15634 107.895 1.40047 108.005 1.66916C108.115 1.93784 108.171 2.22581 108.171 2.5166Z"
                    fill="#FDF5E6"
                  />
                  <path
                    d="M128.35 9.86719C133.785 9.86719 135.927 12.9582 135.927 17.1339V27.4916C135.927 30.6662 135.103 31.9193 131.438 31.9193H121.267C116.118 31.9193 113.977 29.3713 113.977 25.1942C113.977 21.1856 115.954 18.8465 121.307 18.8465H131.643V17.1756C131.643 15.463 130.698 14.1278 128.309 14.1278H115.295V9.86719H128.35ZM131.643 26.4891V22.3552H121.39C119.084 22.3552 118.26 23.316 118.26 24.9435C118.26 26.5711 119.125 27.6169 121.307 27.6169H130.45C131.315 27.6169 131.643 27.2827 131.643 26.4891Z"
                    fill="#FDF5E6"
                  />
                  <path
                    d="M156.888 9.86719V14.1278H149.229C147.293 14.1278 146.434 15.0453 146.434 16.9623V31.9193H142.068V16.2984C142.068 11.8722 143.676 9.86719 147.952 9.86719H156.888Z"
                    fill="#FDF5E6"
                  />
                </svg>
              </div>

              <div className="absolute w-[281px] h-[166px] border-2 border-[#003A6C] rounded-[50%] -top-11 -left-[4px]">
                <div
                  style={{ backgroundImage: `url(${teamInfo[0].darkImg})` }}
                  className={`w-[53px] border-2  border-[#92E6A7] h-[53px]  bg-cover rounded-full cursor-pointer  z-50 bg-[#92E6A7] flex items-center justify-center absolute left-[190px] -top-[15px]`}
                  onMouseOver={() => handleHover(0)}
                ></div>
                <div
                  style={{ backgroundImage: `url(${teamInfo[1].darkImg})` }}
                  className={`w-[53px] h-[53px] border-2 border-[#92E6A7] bg-cover flex items-center justify-center rounded-full cursor-pointer z-50 bg-[#92E6A7] absolute left-[215px] -bottom-1`}
                  onMouseOver={() => handleHover(1)}
                ></div>
              </div>

              <div className="absolute w-[395px] h-[232px] border-2 border-[#003A6C] rounded-[50%] -top-[77px] -left-[10px]">
                <div
                  style={{ backgroundImage: `url(${teamInfo[2].darkImg})` }}
                  className={`w-[53px] h-[53px] border-2 border-[#92E6A7] bg-cover flex items-center justify-center rounded-full cursor-pointer z-50 bg-[#92E6A7] absolute left-[360px] top-[85px]`}
                  onMouseOver={() => handleHover(2)}
                ></div>
              </div>

              <div className="absolute w-[520px] h-[306px] border-2  border-[#003A6C] rounded-[50%] -top-[112px] -left-[16px]">
                <div
                  style={{ backgroundImage: `url(${teamInfo[4].darkImg})` }}
                  className={`w-[53px] h-[53px] bg-cover rounded-full border-2 border-[#92E6A7] cursor-pointer flex items-center justify-center z-50 bg-[#92E6A7] absolute left-[380px] top-[0px]`}
                  onMouseOver={() => handleHover(4)}
                ></div>
                <div
                  style={{ backgroundImage: `url(${teamInfo[5].darkImg})` }}
                  className={`w-[53px] h-[53px] bg-cover rounded-full border-2 border-[#92E6A7] cursor-pointer flex items-center justify-center z-50 bg-[#92E6A7] absolute left-[400px] top-[235px]`}
                  onMouseOver={() => handleHover(5)}
                ></div>
              </div>

              <div className="absolute w-[657px] h-[387px] border-2  border-[#003A6C] rounded-[50%] -top-[152px] -left-[26px]">
                <div
                  style={{ backgroundImage: `url(${teamInfo[6].darkImg})` }}
                  className={`w-[53px] h-[53px] bg-cover rounded-full cursor-pointer border-2 border-[#92E6A7] flex items-center justify-center z-50 bg-[#92E6A7] absolute left-[590px] top-[75px]`}
                  onMouseOver={() => handleHover(6)}
                ></div>
                <div
                  style={{ backgroundImage: `url(${teamInfo[3].darkImg})` }}
                  className={`w-[53px] h-[53px] bg-cover  border-2 border-[#92E6A7] rounded-full cursor-pointer z-50 flex items-center justify-center bg-[#92E6A7] absolute left-[585px] bottom-[70px]`}
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
                  className="w-[226px] h-[226px]  border-8 border-[#92E6A7] rounded-full "
                />
              </div>
              <div className="mt-[37px] ml-8">
                <div className="text-[40px]">{teamInfo[0].name}</div>
                <div className="flex items-center text-[24px] font-normal gap-3">
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
                className="w-[226px] h-[226px]  border-8 border-[#92E6A7] rounded-full "
              />
              <div className="mt-[37px] ml-8">
                <div className="text-[40px]">{teamInfo[1].name}</div>
                <div className="flex items-center text-[24px] font-normal gap-3">
                  <div>{teamInfo[1].position}</div>
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

                  <a href={teamInfo[1].xLink} target="_blank">
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
                selectedMember == 2 ? "flex flex-col" : "hidden"
              } text-[#003A6C] font-courierPrime w-full max-w-[400px] lt-1170:max-w-[200px]`}
            >
              <img
                src={teamInfo[2].imgSrc}
                className="w-[226px] h-[226px]  border-8 border-[#92E6A7] rounded-full "
              />
              <div className="mt-[37px] ml-8">
                <div className="text-[40px]">{teamInfo[2].name}</div>
                <div className="flex items-center text-[24px] font-normal gap-3">
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
                className="w-[226px] h-[226px]  border-8 border-[#92E6A7] rounded-full "
              />
              <div className="mt-[37px] ml-8">
                <div className="text-[40px]">{teamInfo[3].name}</div>
                <div className="flex items-center text-[24px] font-normal gap-3">
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
                className="w-[226px] h-[226px]  border-8 border-[#92E6A7] rounded-full "
              />
              <div className="mt-[37px] ml-8">
                <div className="text-[40px]">{teamInfo[4].name}</div>
                <div className="flex items-center text-[24px] font-normal gap-3">
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
                className="w-[226px] h-[226px]  border-8 border-[#92E6A7] rounded-full "
              />
              <div className="mt-[37px] ml-8">
                <div className="text-[40px]">{teamInfo[5].name}</div>
                <div className="flex items-center text-[24px] font-normal gap-3">
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
                className="w-[226px] h-[226px]  border-8 border-[#92E6A7] rounded-full "
              />
              <div className="mt-[37px] ml-8">
                <div className="text-[40px]">{teamInfo[6].name}</div>
                <div className="flex items-center text-[24px] font-normal gap-3">
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

        <div className="hidden lt-1024:grid lt-1024:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]  w-full items-center mb-[152px]">
          {teamInfo.map((member, index) => (
            <div
              key={index}
              className={` text-[#003A6C] font-courierPrime mt-[80px] flex flex-col justify-center  items-center`}
            >
              <div
                style={{ backgroundImage: `url(${member.imgSrc})` }}
                className={`w-[226px] h-[226px] bg-cover border-8 border-[#92E6A7] bg-[#92E6A7] rounded-full flex items-center justify-center p-5`}
              ></div>
              <div className="mt-[20px] flex flex-col items-center justify-center">
                <div className="text-[40px]">{member.name}</div>
                <div className="flex items-center text-[24px] font-normal gap-3">
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
