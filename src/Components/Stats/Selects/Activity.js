import React from "react";
import Tooltip from "react-tooltip-lite";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHiking } from "@fortawesome/free-solid-svg-icons";

library.add(faHiking);

const Activity = ({ activityLevel, handleActivityLevelChange }) => {
  return (
    <div className="w-full py-2 pl-2">
      <div className="flex flex-row">
        <span
          style={{ backgroundColor: "hsl(0, 0%, 97%)" }}
          className="flex items-center rounded rounded-r-none pl-5"
        >
          <Tooltip
            distance={12}
            arrowSize={8}
            background="hsl(262, 48%, 46%)"
            color="hsl(0, 0%, 89%)"
            content={
              <div>
                <p style={{ fontWeight: 600 }}>Activity Level</p>
                <br />
                <li style={{ listStyleType: "none" }}>
                  <span style={{ fontWeight: 600 }}>Sedentary:</span> Little or
                  no exercise, desk job
                </li>
                <li style={{ listStyleType: "none" }}>
                  <span style={{ fontWeight: 600 }}>Light Activity:</span> Light
                  exercise / sports 1-3 days/week
                </li>
                <li style={{ listStyleType: "none" }}>
                  <span style={{ fontWeight: 600 }}>Moderate Activity:</span>{" "}
                  Moderate exercise / sports 6-7 days/week
                </li>
                <li style={{ listStyleType: "none" }}>
                  <span style={{ fontWeight: 600 }}>Very Active:</span> Hard
                  exercise 6-7 days/week
                </li>
                <li style={{ listStyleType: "none" }}>
                  <span style={{ fontWeight: 600 }}>Extremely Active:</span>{" "}
                  Hard exercise 2x or more per day / training for marathon,
                  triathlon, etc.
                </li>
              </div>
            }
          >
            <FontAwesomeIcon
              className="cursor-pointer"
              style={{ color: "hsl(122, 42%, 75%)" }}
              icon="hiking"
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
            id="activityLevel"
            value={activityLevel}
            onChange={event => handleActivityLevelChange(event)}
          >
            <option value="1.1">Sedentary</option>
            <option value="1.2">Light Activity</option>
            <option value="1.35">Moderate Activity</option>
            <option value="1.45">Very Active</option>
            <option value="1.6">Extremely Active</option>
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
export default Activity;
