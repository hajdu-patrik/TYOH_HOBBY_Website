import { Hrefs } from "../handheld/DropdownItem";
import React from "react";
const NavbarElement: React.FC = () => {
  return (
    <>
      <div className="hidden bg:block">
        <ul className="flex items-center space-x-[2vw] p-[1vw] text-[1.5vw] font-bold 4xl:p-[2vw]">
          {Hrefs.map((item) => {
            return (
              <React.Fragment key={item.id}>
                <a href={item.href} target="_blank">
                  <li className="  shadowmobile | navanimation p-2 transition-transform">
                    {item.name}
                  </li>
                </a>
              </React.Fragment>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default NavbarElement;