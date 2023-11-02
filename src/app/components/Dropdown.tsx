import { Menu, Transition } from '@headlessui/react'
import { Fragment, JSX, SVGProps, useEffect, useRef, useState } from 'react'
import { Apps, Caret, CaretRight, Invocing, Link, Media, Store } from './icons'

export default function Dropdown() {
  return (
    <div className=" text-right">
      <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <>
         <div>
    

<Menu.Button as='div' className={`${open ? 'divide-x divide-gray-400 bg-black-300 text-white  ' : 'nav_link'} flex items-center flex-nowrap rounded-full `}>
    <button 
    type="button" 
    className={`${!open ? 'hover:bg-gray50' : ''} flex gap-1 items-center w-full  py-2 px-3  text-base font-medium rounded-full bg-transparent  transition-all duration-700 cursor-pointer `}>
        <Apps />
        Apps
    </button>
    {open ? <button type="button" className="w-full whitespace-nowrap	flex items-center text-base font-medium p-3 text-white bg-transparent  ">
        Link in Bio
        <Caret />
    </button> : ''}
    
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
          <Menu.Items className="absolute space-y-5 left-0 mt-6 w-[435px]	p-5 origin-top-right rounded-3xl bg-white shadow-md ">
           
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'shadow border border-opacity-0 border-gray50 rounded-2xl hover:border-opacity-100' : 'text-gray-900'
                    } group flex w-full gap-3 items-center rounded-md px-2 py-2 text-sm transition-all duration-700 ease-in-out`}
                  >
                    <span className='w-12 h-12 rounded-xl  border border-gray50 inline-flex items-center justify-center'> <Link /> </span>
                    <div className='flex flex-col text-left'>
                    <span className='text-black-300 font-degular-bold'>Link in bio</span>
                    <span className='text-gray-400'>Manage your link in bio</span>
                    </div>
                    <span className='ml-auto opacity-0 group-hover:opacity-100 text-black-300'>
                    <CaretRight />
                    </span>
                    
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                 <button
                 className={`${
                   active ? 'shadow border border-opacity-0 border-gray50 rounded-2xl hover:border-opacity-100' : 'text-gray-900'
                 } group flex w-full gap-3 items-center rounded-md px-2 py-2 text-sm transition-all duration-700 ease-in-out`}
               >
                 <span className='w-12 h-12 rounded-xl  border border-gray50 inline-flex items-center justify-center'> <Store /> </span>
                 <div className='flex flex-col text-left'>
                 <span className='text-black-300 font-degular-bold'>Store</span>
                 <span className='text-gray-400'>Manage your store activities</span>
                 </div>
                 <span className='ml-auto opacity-0 group-hover:opacity-100 text-black-300'>
                 <CaretRight />
                 </span>
                 
               </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                  className={`${
                    active ? 'shadow border border-opacity-0 border-gray50 rounded-2xl hover:border-opacity-100' : 'text-gray-900'
                  } group flex w-full gap-3 items-center rounded-md px-2 py-2 text-sm transition-all duration-700 ease-in-out`}
                >
                  <span className='w-12 h-12 rounded-xl  border border-gray50 inline-flex items-center justify-center'> <Media /> </span>
                  <div className='flex flex-col text-left'>
                  <span className='text-black-300 font-degular-bold'>Media Kit</span>
                  <span className='text-gray-400'>Manage your media kit</span>
                  </div>
                  <span className='ml-auto opacity-0 group-hover:opacity-100 text-black-300'>
                  <CaretRight />
                  </span>
                  
                </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                  className={`${
                    active ? 'shadow border border-opacity-0 border-gray50 rounded-2xl hover:border-opacity-100' : 'text-gray-900'
                  } group flex w-full gap-3 items-center rounded-md px-2 py-2 text-sm transition-all duration-700 ease-in-out`}
                >
                  <span className='w-12 h-12 rounded-xl  border border-gray50 inline-flex items-center justify-center'> <Invocing /> </span>
                  <div className='flex flex-col text-left'>
                  <span className='text-black-300 font-degular-bold'>Invoicing</span>
                  <span className='text-gray-400'>Manage your invoices</span>
                  </div>
                  <span className='ml-auto opacity-0 group-hover:opacity-100 text-black-300'>
                  <CaretRight />
                  </span>
                  
                </button>
                )}
              </Menu.Item>
            
           
              <Menu.Item>
                {({ active }) => (
                 <button
                 className={`${
                   active ? 'shadow border border-opacity-0 border-gray50 rounded-2xl hover:border-opacity-100' : 'text-gray-900'
                 } group flex w-full gap-3 items-center rounded-md px-2 py-2 text-sm transition-all duration-700 ease-in-out`}
               >
                 <span className='w-12 h-12 rounded-xl  border border-gray50 inline-flex items-center justify-center'> <Link /> </span>
                 <div className='flex flex-col text-left'>
                 <span className='text-black-300 font-degular-bold'>Bookings</span>
                 <span className='text-gray-400'>Manage your bookings</span>
                 </div>
                 <span className='ml-auto opacity-0 group-hover:opacity-100 text-black-300'>
                 <CaretRight />
                 </span>
                 
               </button>
                )}
              </Menu.Item>
            
          </Menu.Items>
        </Transition>
        </>
      )}
       
      </Menu>
    </div>
  )
}
