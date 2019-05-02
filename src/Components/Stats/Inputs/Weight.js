import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWeight } from "@fortawesome/free-solid-svg-icons";

library.add(faWeight);

const Weight = ({ unit, weight, setWeight }) => {
  return (
    <div className="w-full py-2 pr-2">
      <div className="flex flex-row">
        <span
          style={{ backgroundColor: "hsl(0, 0%, 97%)" }}
          className="flex items-center rounded rounded-r-none pl-4"
        >
          <FontAwesomeIcon
            style={{ color: "hsl(122, 42%, 75%)" }}
            icon="weight"
          />
        </span>
        {unit === "metric" ? (
          <input
            style={{
              color: "hsl(0, 0%, 49%)",
              backgroundColor: "hsl(0, 0%, 97%)"
            }}
            type="number"
            placeholder="Weight (Kg)..."
            value={weight}
            onChange={e => setWeight(e.target.value)}
            className="w-full py-3 pl-5 pr-3 font-sans rounded rounded-l-none font-bold focus:outline-none"
          />
        ) : (
          <input
            style={{
              color: "hsl(0, 0%, 49%)",
              backgroundColor: "hsl(0, 0%, 97%)"
            }}
            type="number"
            placeholder="Weight (lb)..."
            value={weight}
            onChange={e => setWeight(e.target.value)}
            className="w-full py-3 pl-5 pr-3 font-sans rounded rounded-l-none font-bold focus:outline-none"
          />
        )}
      </div>
    </div>
  );
};
export default Weight;
