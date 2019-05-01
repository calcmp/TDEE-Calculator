import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWeight } from "@fortawesome/free-solid-svg-icons";

library.add(faWeight);

const Weight = ({ unit, weight, setWeight }) => {
  return (
    <div>
      {unit === "metric" ? (
        <div className="w-full py-2 pr-2">
          <div
            style={{ backgroundColor: "hsl(0, 0%, 97%)" }}
            className="flex w-full my-px text-grey-dark rounded"
          >
            <div className="flex py-3 px-4 mt-px">
              <FontAwesomeIcon
                style={{ color: "hsl(122, 42%, 75%)" }}
                icon="weight"
              />
            </div>
            <div
              style={{ backgroundColor: "hsl(0, 0%, 88%)" }}
              className="border"
            />
            <input
              style={{
                color: "hsl(0, 0%, 49%)",
                backgroundColor: "hsl(0, 0%, 97%)"
              }}
              className="appearance-none font-sans font-medium block w-full border border-grey-lighter rounded py-2 px-4 leading-tight focus:outline-none"
              id="weight"
              type="number"
              placeholder="Weight (Kg)..."
              value={weight}
              onChange={e => setWeight(e.target.value)}
            />
          </div>
        </div>
      ) : (
        <div className="w-full py-2 pr-2">
          <div
            style={{ backgroundColor: "hsl(0, 0%, 97%)" }}
            className="flex w-full text-grey-dark rounded"
          >
            <div className="flex py-3 px-4 mt-px">
              <FontAwesomeIcon
                style={{ color: "hsl(122, 42%, 75%)" }}
                icon="weight"
              />
            </div>
            <div
              style={{ backgroundColor: "hsl(0, 0%, 88%)" }}
              className="border"
            />
            <input
              style={{
                color: "hsl(0, 0%, 49%)",
                backgroundColor: "hsl(0, 0%, 97%)"
              }}
              className="appearance-none font-sans font-medium block w-full border border-grey-lighter rounded py-2 px-4 leading-tight focus:outline-none"
              id="weight"
              type="number"
              placeholder="Weight (lb)..."
              value={weight}
              onChange={e => setWeight(e.target.value)}
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default Weight;
