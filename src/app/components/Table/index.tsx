import { useAppContext } from "@/app/store";
import { formatDate } from "@/app/utils/helpers";
import React from "react";
import FilterModal from "../FilterModal";
import { ArrowDown, ArrowUp, Exports } from "../icons";
import EmptyState from "./empty-table";

function Table() {
  const { transactions, filterTable } = useAppContext();

  const clearFilter = () => {
    filterTable([])
  }
  console.log('transactions', transactions)
  return (
    <div className="pt-20 container px-0 flex flex-col items-center justify-center w-full mx-auto transaction_table">
      <div className=" py-5 w-full flex border-b border-gray50 justify-between">
        <div>
          <h3 className="text-2xl font-degular-bold font-bold  leading-6 text-black-300">
            {`${transactions.length || 0} Transactions`}
          </h3>
          <p className="mt-1 text-sm font-medium text-gray-400">
            Your transactions for the last 7 days
          </p>
        </div>
        <div className="flex gap-3">
          <FilterModal />
          <button
            type="button"
            className="text-base py-3 pl-7 pr-5 font-semibold	 flex gap-2 justify-center items-center  text-black-300 bg-gray50 rounded-full"
          >
            Export List <Exports />
          </button>
        </div>
      </div>
      {transactions.length == 0 && <EmptyState onClick={clearFilter} />}
      <ul className="flex pt-6 gap-6 flex-col w-full">
        {transactions.map((transaction: any, index) => (
          <li key={index + 1} className="flex flex-row">
            <div className="flex flex-1 cursor-pointer select-none ">
              <div
                className={`${
                  transaction.type == "withdrawal" ? "bg-light-red" : "bg-jade"
                } flex flex-col items-center justify-center bg-jade rounded-full  w-12 h-12 mr-4`}
              >
                <span className="relative flex items-center justify-center  object-cover h-10 w-10">
                  {transaction.type == "withdrawal" ? (
                    <ArrowUp />
                  ) : (
                    <ArrowDown />
                  )}
                </span>
              </div>
              <div className="flex-1 pl-1 mr-16">
                <p className="text-base font-medium leading-6 text-black-300">
                  {transaction.type == "withdrawal"
                    ? "Cash Withdrawal"
                    : !transaction?.metadata?.prodcut_name &&
                      transaction?.metadata?.type == "coffee"
                    ? "Buy me a coffee"
                    : transaction?.metadata?.product_name}
                </p>
                <p
                  className={`${
                    transaction.type == "withdrawal" &&
                    transaction.status == "successful"
                      ? "text-jade400"
                      : transaction.type == "withdrawal" &&
                        transaction.status == "pending"
                      ? "text-yellow400"
                      : "text-gray-400"
                  } text-sm pt-2  `}
                >
                  {transaction.type == "withdrawal"
                    ? transaction.status
                    : transaction?.metadata?.name}
                </p>
              </div>
              <div className="text-right ">
                <p className="font-degular-bold text-black-300 text-base font-bold">{`USD ${transaction?.amount}`}</p>
                <p className="text-sm pt-2 text-gray-400 ">
                  {" "}
                  {formatDate(transaction?.date)}
                  
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Table;
