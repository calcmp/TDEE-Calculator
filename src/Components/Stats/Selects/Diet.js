import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleAlt } from "@fortawesome/free-solid-svg-icons";

library.add(faAppleAlt);

const Diet = ({ macro, handleMacroChange }) => {
  return (
    <div className="w-full py-2 pl-2">
      <div
        style={{ backgroundColor: "hsl(0, 0%, 97%)" }}
        className="flex w-full text-grey-dark rounded"
      >
        <div className="flex py-3 px-4 -mr-px">
          <FontAwesomeIcon
            style={{ color: "hsl(122, 42%, 75%)" }}
            icon="apple-alt"
          />
        </div>
        <div
          style={{ backgroundColor: "hsl(0, 0%, 88%)" }}
          className="border"
        />
        <div className="relative w-full">
          <select
            style={{
              color: "hsl(0, 0%, 49%)",
              backgroundColor: "hsl(0, 0%, 97%)"
            }}
            className="block font-sans font-medium appearance-none w-full py-3 px-4 pr-8 border-r border-y border-grey-lighter rounded focus:outline-none"
            id="diet"
            value={macro}
            onChange={event => handleMacroChange(event)}
          >
            <option value="1">Ketogenic</option>
            <option value="2">Low Carb</option>
            <option value="3">Low Fat</option>
            <option value="4">Balanced</option>
            <option value="5">High Protein</option>
            <option value="6">High Carb</option>
          </select>
          <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Diet;
