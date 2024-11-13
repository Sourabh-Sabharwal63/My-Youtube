import React from "react";
import { TitleBar_data } from "./utility/constant";
const TitleBar = () => {
  return (
    <div>
      <ul className="flex  overflow-x-auto">
        {TitleBar_data.map((LI, index) => {
          return (
            <li
              className="border-2 mx-2 px-2 rounded-md bg-slate-100"
              key={index}
            >
              {LI}{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TitleBar;
