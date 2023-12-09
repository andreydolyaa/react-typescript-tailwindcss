import React from "react";
import { Link } from "react-router-dom";
import { IconType } from "react-icons";

interface ItemProps {
  linkTo: string;
  iconComponent: IconType;
}

const Item: React.FC<ItemProps> = ({ linkTo, iconComponent }) => {
  const Icon = iconComponent;
  return (
    <Link to={linkTo} className=" text-gray-400">
      <div className="pl-5 h-12 flex items-center">
        <Icon className="w-[20px] h-[20px] mr-3" />
        <p className="capitalize text-[16px]">{linkTo}</p>
      </div>
    </Link>
  );
};

export default Item;
