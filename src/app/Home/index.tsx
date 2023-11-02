import Image from "next/image";
import { useState } from "react";
import LineGraph from "../components/Graph";
import { Info } from "../components/icons";
import SideNav from "../components/navs/SideNav";
import TopNav from "../components/navs/TopNav";
import Table from "../components/Table";
import { useAppContext } from "../store";


export default function Home() {
  const {
    wallet: { ledger_balance, pending_payout, total_payout, total_revenue, balance },
  } = useAppContext();

 
  return (
    <main className=" min-h-screen relative  p-4 flex flex-col">
      <TopNav />

      
      <div className="flex flex-1 gap-4 relative">
      <div className="w-12 fixed top-1/3 left-4 ">
        <SideNav />
      </div>
     
       <div className="pt-20  mx-auto  w-10/12 ">
       
       <div className="flex flex-1 gap-4">
         <div className="flex-1 flex flex-col justify-between">
           <div className="flex items-center gap-16">
             <div>
               <p className="text-sm text-gray-400 pb-2 ">
                 Available Balance
               </p>
               <h1 className="text-4xl font-degular-bold text-black-300 font-bold leading-[48px] mb-4">
                {`USD ${balance || 0}`}
               </h1>
             </div>
             <div>
               <button
                 type="button"
                 className="py-4 px-14  bg-black-300   text-white w-full transition ease-in duration-200 text-center text-base font-semibold rounded-full"
               >
                 Withdraw
               </button>
             </div>
           </div>

           <div>
             <LineGraph  />
           </div>
         </div>
         <div className="w-72 ">
           <div className="flex flex-col gap-8">
             <div className="flex flex-col gap-2">
               <p className="wallet_title flex justify-between">
                 <span>Ledger Balance</span>
                 <span>
                   <Info />
                 </span>
               </p>

               <h3 className="wallet_amount">{`USD ${ledger_balance || 0}`}</h3>
             </div>
             <div className="flex flex-col gap-2">
               <p className="wallet_title flex  justify-between">
                 <span>Total Payout</span>
                 <span>
                   <Info />
                 </span>
               </p>
               <h3 className="wallet_amount ">{`USD ${total_payout || 0}`}</h3>
             </div>
             <div className="flex flex-col gap-2">
               <p className="wallet_title flex justify-between">
                 <span>Total Revenue</span>
                 <span>
                   <Info />
                 </span>
               </p>
               <h3 className="wallet_amount ">{`USD ${total_revenue || 0}`}</h3>
             </div>
             <div className="flex flex-col gap-2">
               <p className="wallet_title flex justify-between">
                 <span>Pending Payout</span>
                 <span>
                   <Info />
                 </span>
               </p>
               <h3 className="wallet_amount ">{`USD ${pending_payout || 0}`}</h3>
             </div>
           </div>
         </div>
       </div>
       <Table />
     </div>
       
      
       
      </div>
    </main>
  );
}
