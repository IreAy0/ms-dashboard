import React from "react";
import { Invocing, Link, Media, Store } from "../icons";
import { Button, Tooltip } from "flowbite-react";

export default function SideNav() {
  return (
    <div className=" mx-auto flex flex-wrap flex-col items-center rounded-[100px] bg-white  appbar_shadow">
      <nav className="py-1 flex flex-col items-center justify-between text-base  min-h-[196px]">
        <Tooltip
          content="Link in Bio"
          placement="right"
          className="whitespace-nowrap text-base"
          animation="duration-150"
        >
          <button className="p-2 mix-blend-luminosity	hover:mix-blend-normal hover:bg-[#EFF1F6] hover:rounded-full">
            <Link />
          </button>
        </Tooltip>
        <Tooltip
          content="Store"
          placement="right"
          className="whitespace-nowrap text-base"
          animation="duration-150"
        >
          <button className="p-2 mix-blend-luminosity	 hover:mix-blend-normal hover:bg-[#EFF1F6] hover:rounded-full">
            <Store />
          </button>
        </Tooltip>
        <Tooltip
          content="Media Kit"
          placement="right"
          className="whitespace-nowrap text-base"
          animation="duration-150"
        >
          <button className="p-2 mix-blend-luminosity	 hover:mix-blend-normal hover:bg-[#EFF1F6] hover:rounded-full">
            <Media />
          </button>
        </Tooltip>

        <Tooltip
          content="Invoicing"
          placement="right"
          className="whitespace-nowrap text-base"
          animation="duration-150"
        >
          <button className="p-2 mix-blend-luminosity	 hover:mix-blend-normal hover:bg-[#EFF1F6] hover:rounded-full">
            <Invocing />
          </button>
        </Tooltip>
      </nav>
    </div>
  );
}
