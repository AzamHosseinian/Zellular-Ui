import React, { useState } from "react";
import ZelAnimation from "../ZelAnimation";
import backgroundImage from "../../assets/images/HeroSection/background.png";

const Header = () => {
  const [isSocialOpen, setSocialOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div
      className="h-[100vh] w-full bg-cover bg-no-repeat bg-center relative bg-[#003A6C] overflow-hidden select-none"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="">
        <ZelAnimation />
        <div className="animate-fadeIn opacity-0 sm:animate-none sm:opacity-100">
          <div className="navigation">
            <div className="flex items-center w-full h-[140px] lg:h-[calc(4.5vw_+_4.5vh)] ml-[clamp(30px,5vw,88px)]">
              <div className="w-full lt-1024:max-w-[170px] max-w-[calc(26vh_+_12vw)]">
                <svg
                  width="61"
                  height="48"
                  viewBox="0 0 61 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M59.6225 5.47211e-10C59.8257 -6.83588e-06 60.0238 0.0640432 60.1885 0.183031C60.3531 0.30202 60.4761 0.469881 60.5397 0.662722C60.6034 0.855562 60.6045 1.06355 60.543 1.25709C60.4815 1.45062 60.3604 1.61983 60.1971 1.74063L38.108 18.0751L30.6808 23.5718V18.0751H0.965843C0.709685 18.0751 0.46402 17.9734 0.282889 17.7924C0.101758 17.6114 0 17.366 0 17.1101L0 0.964981C0 0.709053 0.101758 0.463604 0.282889 0.282636C0.46402 0.101667 0.709685 5.47208e-10 0.965843 5.47211e-10H59.6225Z"
                    fill="#92E6A7"
                  />
                  <path
                    d="M1.30398 47.1353C1.13115 47.135 0.962783 47.0804 0.822797 46.9792C0.682811 46.8779 0.578324 46.7351 0.524179 46.5711C0.470034 46.4072 0.468986 46.2303 0.521182 46.0657C0.573379 45.9011 0.676166 45.7571 0.814942 45.6542L23.2524 29.0602L30.6796 23.5635V29.0602H60.1776C60.3954 29.061 60.604 29.1478 60.7581 29.3017C60.9121 29.4556 60.999 29.664 60.9998 29.8817V46.3138C60.999 46.5314 60.9121 46.7399 60.7581 46.8938C60.604 47.0476 60.3954 47.1344 60.1776 47.1353H1.30398Z"
                    fill="#92E6A7"
                  />
                </svg>
              </div>

              <div className="bt-827:flex hidden gap-[56px] text-[#92E6A7] text-[24px] font-courierPrime font-bold leading-[26.95px]">
                <div
                  className="menu-item cursor-pointer"
                  onClick={() => scrollToSection("about")}
                >
                  <span>About</span>
                </div>
                <div
                  className="menu-item cursor-pointer"
                  onClick={() => scrollToSection("news")}
                >
                  <span>News</span>
                </div>
                <div
                  className="menu-item cursor-pointer"
                  onClick={() => scrollToSection("advantages")}
                >
                  <span>Advantages</span>
                </div>
                <div
                  className="menu-item cursor-pointer relative"
                  onClick={() => setSocialOpen(!isSocialOpen)}
                >
                  <span>Social Media</span>
                  {isSocialOpen && (
                    <div className="social-dropdown">
                      <div
                        className="cursor-pointer"
                        onClick={() =>
                          openLink("https://discord.com/invite/zellular")
                        }
                      >
                        Discord
                      </div>
                      <div
                        className="cursor-pointer"
                        onClick={() => openLink("https://medium.com/@zellular")}
                      >
                        Medium
                      </div>
                      <div
                        className="cursor-pointer"
                        onClick={() => openLink("https://x.com/zellular_xyz")}
                      >
                        X
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div
              className={`absolute right-10 ${
                isMenuOpen ? "top-3 right-7" : "top-14"
              } lt-827:block w-4  hidden h-5  z-30`}
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <div className="w-6 h-1 bg-[#92E6A7] mb-1 rounded-[2px] cursor-pointer"></div>
              <div className="w-6 h-1 bg-[#92E6A7] mb-1 rounded-[2px] cursor-pointer"></div>
              <div className="w-6 h-1 bg-[#92E6A7] mb-1 rounded-[2px] cursor-pointer"></div>
            </div>

            <div
              className={`w-full h-[100px] absolute  transition-all ${
                isMenuOpen ? "top-0" : "-top-[1000px]"
              } left-0 right-0 z-20`}
            >
              <div className="flex bg-[#003A6C] border-b border-[#92E6A7] opacity-80  text-[#92E6A7] text-[16px] font-courierPrime font-bold items-center justify-between px-5 h-full w-full">
                <div
                  className="menu-item cursor-pointer"
                  onClick={() => scrollToSection("about")}
                >
                  <span>About</span>
                </div>
                <div
                  className="menu-item cursor-pointer"
                  onClick={() => scrollToSection("news")}
                >
                  <span>News</span>
                </div>
                <div
                  className="menu-item cursor-pointer"
                  onClick={() => scrollToSection("advantages")}
                >
                  <span>Advantages</span>
                </div>
                <div
                  className="menu-item cursor-pointer relative"
                  onClick={() => setSocialOpen(!isSocialOpen)}
                >
                  <span>Social Media</span>
                  {isSocialOpen && (
                    <div className="social-dropdown">
                      <div
                        className="cursor-pointer"
                        onClick={() =>
                          openLink("https://discord.com/invite/zellular")
                        }
                      >
                        Discord
                      </div>
                      <div
                        className="cursor-pointer"
                        onClick={() => openLink("https://medium.com/@zellular")}
                      >
                        Medium
                      </div>
                      <div
                        className="cursor-pointer"
                        onClick={() => openLink("https://x.com/zellular_xyz")}
                      >
                        X
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="md:mt-[calc(28vh_-100px)] mt-[40px] relative font-courierPrime text-[clamp(1.5rem,3vw_+_1rem,5rem)]">
            <div className="h-6 w-6 bg-[#92E6A7] absolute rounded-full left-4 md:left-20 top-2 md:-top-3"></div>
            <div className="leading-[80px] text-white ml-10 md:ml-28">
              <div>Filling the Gap between </div>
            </div>
            <div className="leading-[80px] text-white justify-center ml-[40px] md:ml-[110px] lg:ml-[calc(100vw_-_75vw_-20px)] -mt-9 md:-mt-5 lg:mt-3">
              <div className="">Web2 & Web3</div>
            </div>
          </div>

          <div className="ml-[30px] md:ml-[125px] mt-[20px] md:mt-[calc(28vh_-125px)] text-[#92E6A7] text-[clamp(24px,5vw,40px)] leading-[44.98px] font-normal font-courierPrime">
            <div>Develop sub-second finality </div>
            <div className="ml-0 md:ml-[265px]">high-throughput dApps</div>

            <div className="ml-0 md:ml-[460px]">
              in{" "}
              <span className="typing-effect">any programming language.</span>
            </div>
          </div>
          <div className="absolute bottom-10 left-0 right-0 w-full flex items-center justify-center text-[#FDF5E6] text-[24px] font-courierPrime font-normal">
            <div className="relative">
              <div className="w-5 h-5 bg-[#92E6A7] rounded-full absolute -left-7 md:-left-8 top-[10px]"></div>
              <div>Secured by EigenLayer</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
