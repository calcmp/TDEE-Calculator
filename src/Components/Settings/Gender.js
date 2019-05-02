import React from "react";
import Tooltip from "react-tooltip-lite";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVenusMars } from "@fortawesome/free-solid-svg-icons";

library.add(faVenusMars);

const Gender = ({ gender, handleGenderChange }) => {
  return (
    <div className="w-full py-2">
      <div className="flex flex-row mr-px">
        <span
          style={{ backgroundColor: "hsl(0, 0%, 97%)" }}
          className="flex items-center rounded rounded-r-none pr-3 pl-5"
        >
          <Tooltip
            distance={12}
            arrowSize={8}
            background="hsl(262, 48%, 46%)"
            color="hsl(0, 0%, 89%)"
            content="Gender"
          >
            <FontAwesomeIcon
              className="cursor-pointer"
              style={{ color: "hsl(122, 42%, 75%)" }}
              icon="venus-mars"
            />
          </Tooltip>
        </span>
        <div className="relative w-full">
          <select
            style={{
              color: "hsl(0, 0%, 49%)",
              backgroundColor: "hsl(0, 0%, 97%)"
            }}
            className="w-full cursor-pointer appearance-none py-3 pl-5 pr-3 font-sans rounded rounded-l-none font-medium focus:outline-none"
            id="gender"
            value={gender}
            onChange={event => handleGenderChange(event)}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
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
export default Gender;
