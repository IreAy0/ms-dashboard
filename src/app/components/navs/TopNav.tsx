import React from "react";
import MenuDropDown from "../Dropdown";
import { Analytics, Apps, Burger, CRM, Home, Logo, Messages, Notification, Revenue } from "../icons";
import ProfileDropdown from "../ProfileDropdown";

function TopNav() {
  return (
    <header className="sticky top-4 z-10 body-font w-full border-2 border-white rounded-[100px] bg-white topnav_shadow">
      <div className=" mx-auto flex flex-wrap px-5 py-3 justify-content-between flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Logo />
        </a>
        
        <nav className="md:ml-auto md:mr-auto text-gray-400 gap-5 text-base font-semibold flex flex-wrap items-center justify-center">
          <a className="nav_link hover:bg-gray50 transition-all duration-700 cursor-pointer"><Home /> Home</a>
          <a className=" nav_link hover:bg-gray50 transition-all duration-700 cursor-pointer"><Analytics /> Analytics</a>
          <a className=" nav_link active"> <Revenue /> Revenue</a>
          <a className="nav_link hover:bg-gray50 transition-all duration-700 cursor-pointer"><CRM/> CRM</a>
          <div className=" "> <MenuDropDown /> </div>
        </nav>
        <div className="flex">
        <a className="nav_link"><Notification /> </a>
        <a className="nav_link"><Messages />  </a>
        
        </div>
        <ProfileDropdown />
       
      </div>
    </header>
  );
}

export default TopNav;
