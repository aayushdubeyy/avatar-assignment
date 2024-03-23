import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/icons/Logo.png";
import downwhite from "../assets/icons/down white.svg";
import downBlue from "../assets/icons/down blue.svg";
import { More, Navlinks } from "../constants";
import search from "../assets/icons/search.svg";
import tick from "../assets/icons/check.svg";
const Navbar = () => {
  const node = useRef();
  const [boxVisible, setBoxVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [imgSrc, setImgSrc] = useState(downwhite);
  const [navLinks, setNavLinks] = useState(Navlinks);
  const [more, setMore] = useState(More);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (windowWidth > 1220) {
      setNavLinks(Navlinks);
      setMore(More);
    } else if (windowWidth < 1220 && windowWidth > 1024) {
      setNavLinks(Navlinks.slice(0, 5));
      setMore([...More, ...Navlinks.slice(5)]);
    } else if (windowWidth < 1024 && windowWidth > 930) {
      setNavLinks(Navlinks.slice(0, 4));
      setMore([...More, ...Navlinks.slice(4)]);
    } else if (windowWidth < 930 && windowWidth > 830) {
      setNavLinks(Navlinks.slice(0, 3));
      setMore([...More, ...Navlinks.slice(3)]);
    } else if (windowWidth < 830 && windowWidth > 740) {
      setNavLinks(Navlinks.slice(0, 2));
      setMore([...More, ...Navlinks.slice(2)]);
    } else if (windowWidth < 740 && windowWidth > 620) {
      setNavLinks(Navlinks.slice(0, 1));
      setMore([...More, ...Navlinks.slice(1)]);
    } else {
      setNavLinks([]);
      setMore([...More, ...Navlinks]);
    }
  }, [windowWidth]);
  const handleClickOutside = (e) => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setBoxVisible(false);
  };

  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClickOutside);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="bg-navcolor text-white min-h-[10vh] flex-center">
      <nav
        className={`flex items-center w-h-100 ${
          windowWidth > 620 ? "justify-evenly gap-3" : ""
        }`}
      >
        <img src={logo} alt="company logo" width={150} height={150} />
        <div className="flex gap-9 h-full md:gap-0">
          {navLinks.map((link) => (
            <div className="hover:text-[#83CEF9] cursor-pointer">
              {link.title}
            </div>
          ))}
          <div
            className="flex flex-col relative hover:text-[#83CEF9] cursor-pointer"
            onMouseEnter={() => setImgSrc(downBlue)}
            onMouseLeave={() => setImgSrc(downwhite)}
          >
            {/* more */}

            <div
              className={`flex ${
                windowWidth < 620 ? "px-5" : ""
              } on-hover h-full`}
              onClick={() => setBoxVisible(!boxVisible)}
              ref={node}
            >
              <p className={`${windowWidth < 620 ? "pr-2" : ""}`}>
                {windowWidth > 620 ? "MORE" : "Bestsellers"}
              </p>
              <img
                src={imgSrc}
                width={20}
                height={20}
                alt="down logo"
                className={`${
                  boxVisible
                    ? "rotate-180 transition-all duration-150"
                    : "rotate-0 transition-all duration-150"
                }`}
              />
              {boxVisible && (
                <div className="hover-div absolute top-[3.2rem] bg-navcolor text-white rounded-lg resultant z-[100000]">
                  {more.map((link) => (
                    <div className="hover:bg-white min-w-max hover:text-navcolor p-2 px-3 flex justify-between gap-1 group h-full w-full">
                      <p className="group-hover:font-semibold h-full w-full">
                        {link.title}
                      </p>
                      <img
                        src={tick}
                        alt="tick"
                        width={15}
                        height={15}
                        className="hidden-img invisible group-hover:visible"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* search */}

        <div className="flex gap-2 border-b-[1px] border-white p-1 max-w-80 w-full">
          <img src={search} alt="search icon" />
          <input
            type="text"
            placeholder={windowWidth > 430 ? "Search something" : "Search"}
            className="bg-transparent text-white placeholder:text-white placeholder:font-light focus:outline-none"
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
