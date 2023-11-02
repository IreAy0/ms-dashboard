import { Menu, Transition } from "@headlessui/react";
import { Fragment, JSX, SVGProps, useEffect, useRef, useState } from "react";
import { useAppContext } from "../store";
import { Apps, Burger, Caret, Invocing, Link, Media, Scroll, Settings, SignOut, Store, SwitchAccount, Bug, Earn } from "./icons";

export default function ProfileDropdown() {
  const {
    users: { first_name, last_name, email },
  } = useAppContext();

  return (
    <div className=" text-right">
      <Menu as="div" className="relative inline-block text-left">
        {({ open }) => (
          <>
            <div>
              <Menu.Button
                as="div"
                className={`
                   flex items-center flex-nowrap rounded-full `}
              >
                <button className="inline-flex gap-2 items-center bg-gray50 border-0 rounded-full py-1 pl-1.5 pr-3 text-base mt-4 md:mt-0">
          <span className="w-8 h-8 text-white flex items-center justify-center rounded-full bg-gradient-to-b from-[#5C6670] from-[2.33%] to-black-300 to-[96%]" >
            OJ
          </span>
          <Burger />
          
        </button>
                
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute space-y-5 right-0 mt-6 w-[400px]	p-5 origin-top-right rounded-3xl bg-white shadow-md ">
                <Menu.Item>
                  {({ active }) => (
                    <div
                      className={` group flex w-full gap-3 items-center rounded-md px-2 py-2 text-sm transition-all duration-700 ease-in-out`}
                    >
                      <span className="w-12 h-12 text-base text-white flex items-center justify-center rounded-full bg-gradient-to-b from-[#5C6670] from-[2.33%] to-black-300 to-[96%]">
                        OJ
                      </span>

                      <div className="flex flex-col text-left">
                        <span className="text-black-300  text-xl">
                          {first_name} {last_name}
                        </span>
                        <span className="text-gray-400">{email}</span>
                      </div>
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`group flex w-full gap-3 items-center rounded-md px-2 py-2 text-sm transition-all duration-700 ease-in-out`}
                    >
                      <span className="  inline-flex items-center justify-center">
                        {" "}
                        <Settings />{" "}
                      </span>
                      <div className="flex flex-col text-left">
                        <span className="text-black-300 font-bold font-degular">
                          Settings
                        </span>
                      </div>
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`group flex w-full gap-3 items-center rounded-md px-2 py-2 text-sm transition-all duration-700 ease-in-out`}
                    >
                      <span className="  inline-flex items-center justify-center">
                        {" "}
                        <Scroll />{" "}
                      </span>
                      <div className="flex flex-col text-left">
                        <span className="text-black-300 font-bold font-degular">
                          Purchase History
                        </span>
                      </div>
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`group flex w-full gap-3 items-center rounded-md px-2 py-2 text-sm transition-all duration-700 ease-in-out`}
                    >
                      <span className=" inline-flex items-center justify-center">
                        {" "}
                        <Earn />{" "}
                      </span>
                      <div className="flex flex-col text-left">
                        <span className="text-black-300 font-bold font-degular">
                          Refer and earn
                        </span>
                      </div>
                    </button>
                  )}
                </Menu.Item>

                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`group flex w-full gap-3 items-center rounded-md px-2 py-2 text-sm transition-all duration-700 ease-in-out`}
                    >
                      <span className=" inline-flex items-center justify-center">
                        {" "}
                        <Apps />{" "}
                      </span>
                      <div className="flex flex-col text-left">
                        <span className="text-black-300 font-bold font-degular">
                          Integrations
                        </span>
                      </div>
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`group flex w-full gap-3 items-center rounded-md px-2 py-2 text-sm transition-all duration-700 ease-in-out`}
                    >
                      <span className="  inline-flex items-center justify-center">
                        {" "}
                        <Bug />{" "}
                      </span>
                      <div className="flex flex-col text-left">
                        <span className="text-black-300 font-bold font-degular">
                          Report bug
                        </span>
                      </div>
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`group flex w-full gap-3 items-center rounded-md px-2 py-2 text-sm transition-all duration-700 ease-in-out`}
                    >
                      <span className=" rounded-xl  border border-gray50 inline-flex items-center justify-center">
                        {" "}
                        <SwitchAccount />{" "}
                      </span>
                      <div className="flex flex-col text-left">
                        <span className="text-black-300 font-bold font-degular">
                          Switch Account
                        </span>
                      </div>
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`group flex w-full gap-3 items-center rounded-md px-2 py-2 text-sm transition-all duration-700 ease-in-out`}
                    >
                      <span className=" rounded-xl  border border-gray50 inline-flex items-center justify-center">
                        {" "}
                        <SignOut />{" "}
                      </span>
                      <div className="flex flex-col text-left">
                        <span className="text-black font-bold font-degular">
                          Logout
                        </span>
                      </div>
                    </button>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
}
