import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBalanceScale } from "@fortawesome/free-solid-svg-icons";

library.add(faBalanceScale);

const Unit = ({ unit, handleUnitChange }) => {
  return (
    <div className="w-full py-2">
      <div
        style={{ backgroundColor: "hsl(0, 0%, 97%)" }}
        className="flex w-full text-grey-dark rounded"
      >
        <div className="flex py-3 px-4 mt-px">
          <FontAwesomeIcon
            style={{ color: "hsl(122, 42%, 75%)" }}
            icon="balance-scale"
          />
        </div>
        <div
          style={{ backgroundColor: "hsl(0, 0%, 88%)" }}
          className="border ml-px"
        />
        <div className="relative w-full">
          <select
            style={{
              color: "hsl(0, 0%, 49%)",
              backgroundColor: "hsl(0, 0%, 97%)"
            }}
            className="block font-sans font-medium appearance-none w-full py-3 px-4 pr-8 border-r border-y border-grey-lighter rounded focus:outline-none"
            id="unit"
            placeholder="test"
            value={unit}
            onChange={event => handleUnitChange(event)}
          >
            <option value="metric">Metric</option>
            <option value="imperial">Imperial</option>
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
export default Unit;
