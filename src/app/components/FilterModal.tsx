import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Caret, CaretBlack } from "./icons";
import Date from "./Inputs/Date";
import Select from "./Inputs/Select";

const types = [
  { id: 1, name: "Store Transactions" },
  { id: 2, name: "Get Tipped" },
  { id: 3, name: "Withdrawals" },
  { id: 4, name: "Chargebacks" },
  { id: 5, name: "Cashbacks" },
  { id: 6, name: "Refer and Earn" },
];

const status = [
  { id: 1, name: "Successful" },
  { id: 2, name: "Pending" },
  { id: 3, name: "Failed" },
];
export default function FilterModal() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className=" flex items-center justify-center">
      <button onClick={openModal} type="button" className="text-base py-3 pl-7 pr-5 font-semibold	 flex gap-2 justify-center items-center  text-black-300 bg-gray50 rounded-full">
        Filter <CaretBlack />
      </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="transition ease-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25 z-50" />
          </Transition.Child>

          <div className="fixed inset-y-0 right-0 overflow-y-auto z-50">
            <div className="flex h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="transition ease-out duration-500"
                enterFrom="transform  translate-x-20"
                enterTo="transform translate-x-0 opacity-100 "
                leave="transition ease-in duration-300"
                leaveFrom="transform  translate-x-0"
                leaveTo="transform  translate-x-20"
              >
                <Dialog.Panel className="h-full w-full flex flex-col  max-w-[456px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-xl  font-degular-bold p-5 leading-6 flex justify-between text-black-300"
                  >
                    Filter
                    <button type="button" onClick={closeModal}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </Dialog.Title>
                  <div className="flex flex-col">
                    <div>
                      <div className="flex justify-between space-x-3 items-center mt-2">
                        <span className="px-[14px] py-[10px] text-sm whitespace-nowrap  rounded-full text-black-300 border border-gray50 undefined ">
                          Today
                        </span>

                        <span className="px-[14px] py-[10px] whitespace-nowrap text-sm  rounded-full text-black-300 border border-gray50 undefined ">
                          Last 7 days
                        </span>

                        <span className="px-[14px] py-[10px] text-sm whitespace-nowrap  rounded-full text-black-300 border border-gray50 undefined ">
                          This month
                        </span>

                        <span className="px-[14px] py-[10px] text-sm whitespace-nowrap rounded-full text-black-300 border border-gray50 undefined ">
                          Last 3 months
                        </span>
                      </div>
                      <div className="mt-6">
                        <p className="font-semibold text-black-300 -tracking-[0.4px] mb-3">
                          Date Range
                        </p>
                        <div className="flex justify-between gap-[6px]">
                          <Date />
                          <Date />
                        </div>
                      </div>
                      <div className="mt-6">
                        <p className="text-black-300 font-bold text-base">
                          Transaction Type
                        </p>
                        <Select options={types} />
                      </div>

                      <div className="mt-6">
                        <p className="text-black-300 font-bold text-base">
                          Transaction Status
                        </p>
                        <Select options={status} />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between py-5 px-[2px] mt-auto">
                    <button className="border border-gray50 rounded-full w-[198px] px-6 py-3">
                      Clear
                    </button>
                    <button className="bg-primary text-white border bg-gray50 border-gray50 rounded-full w-[198px] px-6 py-3">
                      Apply
                    </button>
                  </div>
                  
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
