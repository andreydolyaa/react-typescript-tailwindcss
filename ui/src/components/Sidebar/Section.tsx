import React from "react";

interface SectionProps {
  text: string;
}
const Section: React.FC<SectionProps> = ({ text }) => {
  return <div className="text-[14px] flex items-center text-gray-500 h-[70px] ml-5">{text}</div>;
};

export default Section;
