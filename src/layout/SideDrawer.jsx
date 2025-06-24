import React, { useState } from 'react'
import { RiAuctionFill } from "react-icons/ri";
import { MdLeaderboard, MdDashboard } from "react-icons/md";
import { SiGooglesearchconsole } from "react-icons/si";
import { FaUserCircle, FaFacebook, FaEye } from "react-icons/fa";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircleOutline, IoIosCreate } from "react-icons/io";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from "../store/slices/userSlice.js"
import { Link, useNavigate } from 'react-router-dom';

const SideDrawer = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    setShow(false);
    navigate("/");
  };

  const handleNavClick = () => setShow(false);

  return (
    <>
      <div
        onClick={() => setShow(!show)}
        className="fixed right-5 top-5 z-[1000] bg-[#D6482B] text-white text-3xl p-2 rounded-md hover:bg-[#b8381e] lg:hidden"
      >
        <GiHamburgerMenu />
      </div>

      <div
        className={`w-[100%] sm:w-[300px] bg-[#f6f4f0] h-full fixed top-0 z-[100] ${show ? "left-0" : "left-[-100%]"
          } transition-all duration-150 p-4 flex flex-col justify-between lg:left-0 border-r-[1px] border-r-stone-500`}
      >
        <div className="relative">
          <Link to={"/"} onClick={handleNavClick}>
            <h4 className="text-2xl font-semibold mb-4">
              Prime<span className="text-[#D6482b]">Bid</span>
            </h4>
          </Link>
          <ul className="flex flex-col gap-3">
            <li>
              <Link
                to={"/auctions"}
                onClick={handleNavClick}
                className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] transition-all duration-150"
              >
                <RiAuctionFill /> Auctions
              </Link>
            </li>
            <li>
              <Link
                to={"/leaderboard"}
                onClick={handleNavClick}
                className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] transition-all duration-150"
              >
                <MdLeaderboard /> Leaderboard
              </Link>
            </li>
            {isAuthenticated && user?.role === "Auctioneer" && (
              <>
                <li>
                  <Link
                    to={"/submit-commission"}
                    onClick={handleNavClick}
                    className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] transition-all duration-150"
                  >
                    <FaFileInvoiceDollar /> Submit Commission
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/create-auction"}
                    onClick={handleNavClick}
                    className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] transition-all duration-150"
                  >
                    <IoIosCreate /> Create Auction
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/view-my-auctions"}
                    onClick={handleNavClick}
                    className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] transition-all duration-150"
                  >
                    <FaEye /> View My Auctions
                  </Link>
                </li>
              </>
            )}
            {isAuthenticated && user?.role === "Super Admin" && (
              <li>
                <Link
                  to={"/dashboard"}
                  onClick={handleNavClick}
                  className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] transition-all duration-150"
                >
                  <MdDashboard /> Dashboard
                </Link>
              </li>
            )}
          </ul>

          {!isAuthenticated ? (
            <div className="my-4 flex gap-2">
              <Link
                to={"/sign-up"}
                onClick={handleNavClick}
                className="bg-[#D6482B] font-semibold hover:bg-[#b8381e] text-xl py-1 px-4 rounded-md text-white"
              >
                Sign Up
              </Link>
              <Link
                to={"/login"}
                onClick={handleNavClick}
                className="text-[#DECCBE] bg-transparent border-[#DECCBE] border-2 hover:bg-[#fffefd] hover:text-[#fdba88] font-bold text-xl py-1 px-4 rounded-md"
              >
                Login
              </Link>
            </div>
          ) : (
            <div className="my-4 flex gap-4 w-fit">
              <button
                onClick={handleLogout}
                className="bg-[#D6482B] font-semibold hover:bg-[#b8381e] text-xl py-1 px-4 rounded-md text-white"
              >
                Logout
              </button>
            </div>
          )}

          <hr className="mb-4 border-t-[#d6482b]" />

          <ul className="flex flex-col gap-3">
            {isAuthenticated && (
              <li>
                <Link
                  to={"/me"}
                  onClick={handleNavClick}
                  className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] transition-all duration-150"
                >
                  <FaUserCircle /> Profile
                </Link>
              </li>
            )}
            <li>
              <Link
                to={"/how-it-works-info"}
                onClick={handleNavClick}
                className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] transition-all duration-150"
              >
                <SiGooglesearchconsole /> How it works
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                onClick={handleNavClick}
                className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] transition-all duration-150"
              >
                <BsFillInfoSquareFill /> About Us
              </Link>
            </li>
          </ul>

          <IoMdCloseCircleOutline
            onClick={() => setShow(false)}
            className="absolute top-0 right-4 text-[28px] sm:hidden"
          />
        </div>

        <div>
          <div className="flex gap-2 items-center mb-2">
            <Link
              to="/"
              onClick={handleNavClick}
              className="bg-white text-stone-500 p-2 text-xl rounded-sm hover:text-blue-700"
            >
              <FaFacebook />
            </Link>
            <a
              href="https://www.instagram.com/abhishek.shrivastav15/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-stone-500 p-2 text-xl rounded-sm hover:text-pink-500"
            >
              <RiInstagramFill />
            </a>
          </div>
          <Link
            to={"/contact"}
            onClick={handleNavClick}
            className="text-stone-500 font-semibold hover:text-[#d6482b] transition-all duration-150"
          >
            Contact Us
          </Link>
          <p className="text-stone-500">&copy; PrimeBid, LLC.</p>
          <p className="text-stone-500">
            Designed By{" "}
            <Link
              to={"/"}
              onClick={handleNavClick}
              className="font-semibold hover:text-[#d6482b] transition-all duration-150"
            >
              Auction House
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SideDrawer;
