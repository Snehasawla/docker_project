import React from "react";
// import { BsFillTelephoneFill } from "react-icons/bs";
// import { AiOutlineMail, AiOutlineGlobal } from "react-icons/ai";
const TopHeader = () => {
  const items = [
    { icon: "", description: "+91 60005522592" },
    { icon: "", description: "aniketgupta218@gmail.com" },
    { icon: "", description: "Gwalior (M.P.)" },
  ];

  return (
    <div className="mx-3 py-5 text-center">
      <div className="flex gap-3 flex-wrap justify-around">
        <div className="bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent font-bold text-2xl">
          Have any question?
        </div>
        <ul className="flex flex-wrap gap-2 md:gap-8 justify-center text-center">
          {items.map(({ icon, description }, index) => (
            <li key={index} className="flex items-center gap-2">
              <span>{icon}</span>
              <span>{description}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default TopHeader;
