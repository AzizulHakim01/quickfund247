import { faBars, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className="w-full bg-white md:p-0 p-4">
      <div className="md:w-[1152px] w-full md:mx-auto md:h-[200px] flex items-center justify-between">
        {/* Header Logo div */}
        <div className="">
          <Link to={"/"}>
            <img src="/images/logo.png" alt="" className="md:w-36 w-20" />
          </Link>
        </div>
        {/* Menu and call to action button */}
        <div className="md:flex flex-col gap-8 text-blue-950 hidden">
          <div className="flex gap-8">
            <p className="text-xl uppercase">
              <FontAwesomeIcon icon={faPhone} className="text-[#00D1A9]" /> Get
              A Free Quote +1 (929) 462-7184
            </p>
            <p className="text-xl uppercase">
              <FontAwesomeIcon icon={faEnvelope} className="text-[#00D1A9]" />{" "}
              info@quickfund247.com
            </p>
          </div>
          <nav className="md:flex gap-8 border-t-2 border-b-2 py-2 items-center justify-between">
            <ul className="flex gap-4 uppercase">
              <li>
                <Link
                  to={"/"}
                  className={`hover:text-[#00D1A9] ${
                    location.pathname == "/" ? "text-[#00D1A9] font-bold" : ""
                  }`}
                >
                  Home
                </Link>
              </li>
              <li className="relative group">
                <p className="cursor-pointer hover:text-[#00D1A9]">
                  Business Funding
                </p>
                <div className="hidden absolute z-10 top-full left-0 w-96 p-4 mb-4 group-hover:block">
                  <Link
                    to={"/long-term"}
                    className={`hover:text-[#00D1A9] ${
                      location.pathname == "/long-term"
                        ? "text-[#00D1A9] font-bold"
                        : ""
                    }`}
                  >
                    Long Term
                  </Link>
                  <br />
                  <Link
                    to={"/sba"}
                    className={`hover:text-[#00D1A9] ${
                      location.pathname == "/sba"
                        ? "text-[#00D1A9] font-bold"
                        : ""
                    }`}
                  >
                    SBA Loans
                  </Link>
                  <br />
                  <Link
                    to={"/loc"}
                    className={`hover:text-[#00D1A9] ${
                      location.pathname == "/loc"
                        ? "text-[#00D1A9] font-bold"
                        : ""
                    }`}
                  >
                    Business Line of Credit
                  </Link>
                  <br />
                  <Link
                    to={"/equipment"}
                    className={`hover:text-[#00D1A9] ${
                      location.pathname == "/equipment"
                        ? "text-[#00D1A9] font-bold"
                        : ""
                    }`}
                  >
                    Equipment Financing
                  </Link>
                  <br />
                  <Link
                    to={"/short-term"}
                    className={`hover:text-[#00D1A9] ${
                      location.pathname == "/short-term"
                        ? "text-[#00D1A9] font-bold"
                        : ""
                    }`}
                  >
                    Short Term
                  </Link>
                  <br />
                  <Link
                    to={"/working-capital"}
                    className={`hover:text-[#00D1A9] ${
                      location.pathname == "/working-capital"
                        ? "text-[#00D1A9] font-bold"
                        : ""
                    }`}
                  >
                    Working Capital / Invoice Factoring
                  </Link>
                </div>
              </li>
              <li className="relative group">
                <p className="cursor-pointer">Resources</p>
                <div className="hidden absolute z-10 top-full left-0 w-96 p-4 space-y-2 group-hover:block">
                  <Link
                    to={"/faq"}
                    className={`hover:text-[#00D1A9] ${
                      location.pathname == "/faq"
                        ? "text-[#00D1A9] font-bold"
                        : ""
                    }`}
                  >
                    FAQ
                  </Link>
                  <br />
                  <Link
                    to={"/contact"}
                    className={`hover:text-[#00D1A9] ${
                      location.pathname == "/contact"
                        ? "text-[#00D1A9] font-bold"
                        : ""
                    }`}
                  >
                    Contact Us
                  </Link>
                </div>
              </li>
              <li>
                <Link
                  to={"/privacy"}
                  className={`hover:text-[#00D1A9] ${
                    location.pathname == "/privacy"
                      ? "text-[#00D1A9] font-bold"
                      : ""
                  }`}
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
            <Link
              to={"/contact"}
              className="hover:text-[#ffffff] bg-blue-950 text-[#00D1A9] rounded-full px-4 py-2 font-bold"
            >
              Apply Now
            </Link>
          </nav>
        </div>
        <Link
          to={"/contact"}
          className="hover:text-[#ffffff] md:hidden bg-blue-950 text-[#00D1A9] rounded-full px-4 py-2 font-bold"
        >
          Apply Now
        </Link>
        <div className="md:hidden relative">
          <FontAwesomeIcon
            icon={faBars}
            className="text-4xl cursor-pointer text-[#00D1A9]"
            onClick={() => setOpenMenu(!openMenu)}
          />
          <div className={`${openMenu ? "" : "hidden"}`}>
            {/* Mobile menu button */}
            <nav className="flex bg-white text-sm absolute -right-4 gap-5 w-[100vw] top-16 px-6">
              <ul className="flex flex-col gap-5 z-10">
                <li>
                  <Link
                    to={"/"}
                    className="uppercase hover:text-[#00D1A9] text-blue-950"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/privacy"}
                    className="uppercase hover:text-[#00D1A9] text-blue-950"
                  >
                    privacy policy
                  </Link>
                </li>
              </ul>
              <ul className="flex flex-col z-10 gap-5">
                <li>
                  <Link className="uppercase text-[#00D1A9] ">
                    Bussiness Funding
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/long-term"}
                    className="uppercase hover:text-[#00D1A9] text-blue-950"
                  >
                    Long Term
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/sba"}
                    className="uppercase hover:text-[#00D1A9] text-blue-950"
                  >
                    SBA Loans
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/loc"}
                    className="uppercase hover:text-[#00D1A9] text-blue-950"
                  >
                    Business Line of Credit
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/equipment"}
                    className="uppercase hover:text-[#00D1A9] text-blue-950"
                  >
                    Equipment Financing
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/short-term"}
                    className="uppercase hover:text-[#00D1A9] text-blue-950"
                  >
                    Short Term
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/working-capital"}
                    className="uppercase hover:text-[#00D1A9] text-blue-950"
                  >
                    Working Capital / Invoice Factoring
                  </Link>
                </li>

                <li>
                  <Link className="uppercase text-[#00D1A9]">Resources</Link>
                </li>
                <li>
                  <Link
                    to={"/faq"}
                    className="uppercase hover:text-[#00D1A9] text-blue-950"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/contact"}
                    className="uppercase hover:text-[#00D1A9] text-blue-950"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
              <ul className="flex flex-col z-10"></ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
