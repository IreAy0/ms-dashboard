import Image from "next/image";
import { MdReceiptLong } from "react-icons/md";
import { ScrollLarge } from "../icons";

type EmptyStateProps = {
  onClick: () => void;
};

const EmptyState = ({ onClick }: EmptyStateProps) => {
  return (
    <div className="max-w-sm pt-6">
      <div className="h-10 w-10 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#DBDEE5] from-[1.89%] to-[#F6F7F9] to-[96%]">
        <ScrollLarge />
      </div>
      <h3 className="text-black-300 mt-5 leading-10  font-degular-bold text-2xl">No matching transaction found for the selected filter</h3>
      <p className="text-gray-400 mt-3 text-base">Change your filters to see more results, or add a new product.</p>
      
      <button className="bg-gray50 px-4 mt-8 py-3 bg-grad rounded-full" onClick={onClick}>Clear Filter</button>
    </div>
  );
};

export default EmptyState;
