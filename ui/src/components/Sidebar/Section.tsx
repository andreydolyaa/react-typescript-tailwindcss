import React from "react";

interface SectionProps {
  text: string;
}
const Section: React.FC<SectionProps> = ({ text }) => {
  const isFirst = text === "General";

  return (
    <>
      <div className="lg:flex text-[14px] hidden items-center text-gray-500 h-[70px] pl-7 lg:animate-appear">
        {text}
      </div>
      {!isFirst && <div className="block lg:hidden border-b border-gray-700 w-full"></div>}
    </>
  );
};

export default Section;
