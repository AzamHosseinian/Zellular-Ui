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
      position: "IT",
      imgSrc: "./assets/images/team/seraji.png",
      darkImg: "./assets/images/team/bw/seraji.png",
      xLink: "https://x.com/NexusEngDev",
    },
    {
      id: 6,
      name: "Lafa",
      position: "Advisor",
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
              <div className="w-[132px]  h-[78px] bg-[#003A6C] rounded-[50%] flex items-center justify-center">
                <svg
                  width="112"
                  height="24"
                  viewBox="0 0 112 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5042 7.52832C14.2069 7.52832 15.4995 8.95836 15.4995 11.1321C15.4995 13.0687 14.4713 14.3242 12.8555 14.9158L3.95538 18.1919C3.43079 18.4047 3.13387 18.7579 3.13387 19.2644C3.13387 19.8603 3.51473 20.222 4.3079 20.222H15.1763V23.2609H4.13374C1.46149 23.2609 0.139526 21.8308 0.139526 19.656C0.139526 17.8993 0.991458 16.499 2.78345 15.8436L11.714 12.592C12.3603 12.3536 12.5366 11.9067 12.5366 11.4897C12.5366 10.8938 12.1547 10.5671 11.3321 10.5671H0.697689V7.52832H11.5042Z"
                    fill="#FDF5E6"
                  />
                  <path
                    d="M28.9543 7.52832C32.6264 7.52832 34.1823 9.31587 34.1823 12.3536C34.1823 15.2435 32.7428 16.881 28.9249 16.881H21.5523V18.0131C21.5523 19.2644 22.228 20.188 23.9308 20.188H33.4185V23.2566H23.9308C20.0488 23.2566 18.5265 21.052 18.5265 18.0727V12.7111C18.5265 9.7319 20.0541 7.52832 23.9308 7.52832H28.9543ZM21.5523 14.4093H28.8367C30.5154 14.4093 31.1281 13.6943 31.1281 12.5324C31.1281 11.3407 30.4525 10.5671 28.9249 10.5671H23.9308C22.228 10.5671 21.5523 11.5248 21.5523 12.7409V14.4093Z"
                    fill="#FDF5E6"
                  />
                  <path
                    d="M41.1144 2.28505V18.6251C41.1144 18.8324 41.0742 19.0377 40.9959 19.2292C40.9176 19.4208 40.8029 19.5947 40.6584 19.7413C40.5138 19.8878 40.3421 20.004 40.1532 20.0833C39.9643 20.1625 39.7619 20.2032 39.5575 20.2031C39.1447 20.2031 38.7488 20.0369 38.4569 19.741C38.1649 19.4451 38.0008 19.0437 38.0005 18.6251V2.28505C38.0005 1.86628 38.1645 1.46465 38.4565 1.16853C38.7485 0.872413 39.1445 0.706055 39.5575 0.706055C39.762 0.705915 39.9645 0.746662 40.1535 0.825964C40.3424 0.905267 40.5141 1.02157 40.6587 1.16822C40.8033 1.31487 40.918 1.489 40.9962 1.68063C41.0744 1.87227 41.1146 2.07766 41.1144 2.28505Z"
                    fill="#FDF5E6"
                  />
                  <path
                    d="M48.6918 2.28505V18.6251C48.6918 18.8324 48.6516 19.0377 48.5733 19.2292C48.495 19.4208 48.3803 19.5947 48.2357 19.7413C48.0911 19.8878 47.9195 20.004 47.7306 20.0833C47.5417 20.1625 47.3393 20.2032 47.1349 20.2031C46.7221 20.2031 46.3262 20.0369 46.0343 19.741C45.7423 19.4451 45.5782 19.0437 45.5779 18.6251V2.28505C45.5779 1.86628 45.7419 1.46465 46.0339 1.16853C46.3259 0.872413 46.7219 0.706055 47.1349 0.706055C47.3394 0.705915 47.5419 0.746662 47.7308 0.825964C47.9198 0.905267 48.0915 1.02157 48.2361 1.16822C48.3807 1.31487 48.4954 1.489 48.5736 1.68063C48.6518 1.87227 48.692 2.07766 48.6918 2.28505Z"
                    fill="#FDF5E6"
                  />
                  <path
                    d="M56.2108 7.52832V16.9417C56.2108 18.7877 57.5622 20.188 60.0288 20.188H62.5552C65.0229 20.188 66.3448 18.7877 66.3448 16.9417V7.52832H69.399V17.0598C69.399 20.6944 67.1076 23.2566 62.6727 23.2566H59.7938C55.3589 23.2566 53.0675 20.6944 53.0675 17.0598V7.52832H56.2108Z"
                    fill="#FDF5E6"
                  />
                  <path
                    d="M76.8905 2.28505V18.6251C76.8905 18.8324 76.8502 19.0377 76.772 19.2292C76.6937 19.4208 76.579 19.5947 76.4344 19.7413C76.2898 19.8878 76.1182 20.004 75.9293 20.0833C75.7404 20.1625 75.5379 20.2032 75.3335 20.2031C74.9209 20.2031 74.5251 20.0368 74.2333 19.7409C73.9415 19.445 73.7776 19.0436 73.7776 18.6251V2.28505C73.7775 2.07775 73.8176 1.87244 73.8957 1.68088C73.9739 1.48931 74.0884 1.31524 74.2329 1.1686C74.3774 1.02196 74.549 0.905635 74.7378 0.82627C74.9267 0.746905 75.1291 0.706055 75.3335 0.706055C75.538 0.705915 75.7405 0.746662 75.9295 0.825964C76.1185 0.905267 76.2902 1.02157 76.4348 1.16822C76.5794 1.31487 76.6941 1.489 76.7722 1.68063C76.8504 1.87227 76.8906 2.07766 76.8905 2.28505Z"
                    fill="#FDF5E6"
                  />
                  <path
                    d="M91.283 7.52832C95.1597 7.52832 96.6873 9.73296 96.6873 12.7111V20.0986C96.6873 22.3628 96.0998 23.2566 93.4852 23.2566H86.2312C82.5591 23.2566 81.0315 21.4393 81.0315 18.46C81.0315 15.601 82.4416 13.9326 86.2595 13.9326H93.6321V12.7409C93.6321 11.5194 92.9575 10.5671 91.2536 10.5671H81.9716V7.52832H91.283ZM93.6321 19.3836V16.4352H86.3193C84.6742 16.4352 84.0867 17.1204 84.0867 18.2813C84.0867 19.4421 84.7036 20.188 86.2595 20.188H92.7812C93.3981 20.188 93.6321 19.9496 93.6321 19.3836Z"
                    fill="#FDF5E6"
                  />
                  <path
                    d="M111.638 7.52832V10.5671H106.175C104.794 10.5671 104.181 11.2215 104.181 12.5888V23.2566H101.067V12.1153C101.067 8.95836 102.214 7.52832 105.264 7.52832H111.638Z"
                    fill="#FDF5E6"
                  />
                </svg>
              </div>

              <div className="absolute w-[197px] h-[116px] border-2 border-[#003A6C] rounded-[50%] -top-5 -left-[2px]">
                <div
                  style={{ backgroundImage: `url(${teamInfo[0].darkImg})` }}
                  className={`w-[47px] border-2  border-[#92E6A7] h-[47px]  bg-cover rounded-full cursor-pointer  z-50 bg-[#92E6A7] flex items-center justify-center absolute left-[130px] -top-[10px]`}
                  onMouseOver={() => handleHover(0)}
                ></div>
              </div>

              <div className="absolute w-[257px] h-[151px] border-2 border-[#003A6C] rounded-[50%] -top-[38px] -left-[4px]">
                <div
                  style={{ backgroundImage: `url(${teamInfo[1].darkImg})` }}
                  className={`w-[47px] h-[47px] border-2 border-[#92E6A7] bg-cover flex items-center justify-center rounded-full cursor-pointer z-50 bg-[#92E6A7] absolute left-[160px] -bottom-4`}
                  onMouseOver={() => handleHover(1)}
                ></div>
              </div>

              <div className="absolute w-[342px] h-[200px] border-2  border-[#003A6C] rounded-[50%] -top-[63px] -left-[8px]">
                <div
                  style={{ backgroundImage: `url(${teamInfo[2].darkImg})` }}
                  className={`w-[47px] h-[47px] border-2 border-[#92E6A7] bg-cover flex items-center justify-center rounded-full cursor-pointer z-50 bg-[#92E6A7] absolute left-[293px] top-[25px]`}
                  onMouseOver={() => handleHover(2)}
                ></div>
              </div>

              <div className="absolute w-[430px] h-[253px] border-2  border-[#003A6C] rounded-[50%] -top-[90px] -left-4">
                <div
                  style={{ backgroundImage: `url(${teamInfo[3].darkImg})` }}
                  className={`w-[47px] h-[47px] bg-cover  border-2 border-[#92E6A7] rounded-full cursor-pointer z-50 flex items-center justify-center bg-[#92E6A7] absolute left-[330px] bottom-2`}
                  onMouseOver={() => handleHover(3)}
                ></div>
              </div>

              <div className="absolute w-[542px] h-[320px] border-2 border-[#003A6C] rounded-[50%] -top-[124px] -left-6">
                <div
                  style={{ backgroundImage: `url(${teamInfo[4].darkImg})` }}
                  className={`w-[47px] h-[47px] bg-cover rounded-full border-2 border-[#92E6A7] cursor-pointer flex items-center justify-center z-50 bg-[#92E6A7] absolute left-[420px] top-[10px]`}
                  onMouseOver={() => handleHover(4)}
                ></div>
              </div>

              <div className="absolute w-[641px] h-[378px] border-2 border-[#003A6C] rounded-[50%] -top-[154px] -left-8">
                <div
                  style={{ backgroundImage: `url(${teamInfo[5].darkImg})` }}
                  className={`w-[47px] h-[47px] bg-cover rounded-full cursor-pointer border-2 border-[#92E6A7] flex items-center justify-center z-50 bg-[#92E6A7] absolute left-[535px] bottom-[42px]`}
                  onMouseOver={() => handleHover(5)}
                ></div>
              </div>
            </div>

            <div
              className={`${
                selectedMember == 0 ? "flex flex-col" : "hidden"
              } text-[#003A6C] font-courierPrime w-full max-w-[400px] lt-1170:max-w-[200px]`}
            >
              <div
                style={{ backgroundImage: `url(${teamInfo[0].imgSrc})` }}
                className={`w-[226px] h-[226px] bg-cover border-8 border-[#92E6A7] bg-[#92E6A7] rounded-full flex items-center justify-center p-5`}
              ></div>
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
              <div
                style={{ backgroundImage: `url(${teamInfo[1].imgSrc})` }}
                className={`w-[226px] h-[226px] bg-cover border-8 border-[#92E6A7] bg-[#92E6A7] rounded-full flex items-center justify-center p-5`}
              ></div>
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
              <div
                style={{ backgroundImage: `url(${teamInfo[2].imgSrc})` }}
                className={`w-[226px] h-[226px] bg-cover border-8 border-[#92E6A7] bg-[#92E6A7] rounded-full flex items-center justify-center p-5`}
              ></div>
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
              <div
                style={{ backgroundImage: `url(${teamInfo[3].imgSrc})` }}
                className={`w-[226px] h-[226px] bg-cover border-8 border-[#92E6A7] bg-[#92E6A7] rounded-full flex items-center justify-center p-5`}
              ></div>
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
              <div
                style={{ backgroundImage: `url(${teamInfo[4].imgSrc})` }}
                className={`w-[226px] h-[226px] bg-cover border-8 border-[#92E6A7] bg-[#92E6A7] rounded-full flex items-center justify-center p-5`}
              ></div>
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
              <div
                style={{ backgroundImage: `url(${teamInfo[5].imgSrc})` }}
                className={`w-[226px] h-[226px] bg-cover border-8 border-[#92E6A7] bg-[#92E6A7] rounded-full flex items-center justify-center p-5`}
              ></div>
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
