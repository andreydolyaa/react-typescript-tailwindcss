import React from "react";
import { NavLink, useMatch } from "react-router-dom";
import { IconType } from "react-icons";

interface ItemProps {
  linkName: string;
  iconComponent: IconType;
}

const Item: React.FC<ItemProps> = ({ linkName, iconComponent }) => {
  const match = useMatch(linkName);
  const IconComponent = iconComponent;
  console.log(match);

  return (
    <NavLink to={linkName} className="sidebar-item text-gray-400 relative block group lg:animate-appear">
      <div
        className={`lg:pl-7 h-[60px] lg:h-12 flex items-center justify-center lg:justify-normal transition duration-100 hover:bg-opacity-10 hover:text-white ${
          match ? "" : "hover:bg-white"
        }`}
      >
        <IconComponent className="lg:w-[18px] lg:h-[18px] w-[20px] h-[20px] lg:mr-3" />
        <p className="hidden lg:block capitalize text-[14px]">{linkName}</p>
      </div>
      {match && (
        <div className="bg-fuchsia-500 h-full absolute right-0 top-0 w-2 rounded-sm"></div>
      )}
    </NavLink>
  );
};

export default Item;
