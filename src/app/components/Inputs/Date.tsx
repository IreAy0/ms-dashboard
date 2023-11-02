import Image from "next/image";
import { Datepicker } from 'flowbite-react';
import { useRef } from "react";


const Date = () => {
  const datePickerRef = useRef(null)

  return (
    <div className="relative grow">
      <Datepicker showClearButton={false} showTodayButton={false} icon={undefined} className="bg-gray50 border-0"/>
       </div>
  );
}

export default Date;