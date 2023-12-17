import React from "react";
import { IconType } from "react-icons";

interface BadgeProps {
  title: string;
  subtitle: string;
  color: string;
  iconComponent?: IconType | null;
}

const Badge: React.FC<BadgeProps> = ({ title, subtitle, color, iconComponent }) => {
  const IconComponent = iconComponent;
  return (
    <div className="flex">
      {IconComponent && (
        <div
          className="w-12 h-12 flex items-center justify-center rounded-full"
          style={{ backgroundColor: `${color}40` }}
        >
          <IconComponent className="h-6 w-6" style={{ color }} />
        </div>
      )}
      <div className="ml-4 flex flex-col justify-between capitalize">
        <p className="text-[16px] text-gray-600 font-medium">{title}</p>
        <p className="text-[12px] text-gray-400">{subtitle}</p>
      </div>
    </div>
  );
};

export default Badge;
