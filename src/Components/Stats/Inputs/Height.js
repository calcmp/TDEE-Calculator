import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRulerVertical,
  faShoePrints
} from "@fortawesome/free-solid-svg-icons";

library.add(faRulerVertical, faShoePrints);

const Height = ({
  unit,
  height,
  setHeight,
  inches,
  setInches,
  feet,
  setFeet
}) => {
  return (
    <div>
      {unit === "metric" ? (
        <div className="w-full py-2 pr-2">
          <div className="flex flex-row">
            <span
              style={{ backgroundColor: "hsl(0, 0%, 97%)" }}
              className="flex items-center rounded rounded-r-none pr-1 pl-5"
            >
              <FontAwesomeIcon
                style={{ color: "hsl(122, 42%, 75%)" }}
                icon="ruler-vertical"
              />
            </span>
            <input
              style={{
                color: "hsl(0, 0%, 49%)",
                backgroundColor: "hsl(0, 0%, 97%)"
              }}
              type="number"
              placeholder="Height (cm)..."
              value={height}
              onChange={e => setHeight(e.target.value)}
              className="w-full py-3 pl-5 pr-3 font-sans rounded rounded-l-none font-bold focus:outline-none"
            />
          </div>
        </div>
      ) : (
        <div className="flex w-full py-2 pr-2">
          <input
            style={{
              color: "hsl(0, 0%, 49%)",
              backgroundColor: "hsl(0, 0%, 97%)"
            }}
            className="w-full py-3 pl-5 pr-3 mr-1 font-sans font-bold rounded focus:outline-none"
            id="height"
            type="number"
            placeholder="Feet..."
            value={feet}
            onChange={e => setFeet(e.target.value)}
          />
          <input
            style={{
              color: "hsl(0, 0%, 49%)",
              backgroundColor: "hsl(0, 0%, 97%)"
            }}
            className="w-full py-3 pl-5 pr-3 ml-1 font-sans font-bold rounded focus:outline-none"
            id="height"
            type="number"
            placeholder="Inches..."
            value={inches}
            onChange={e => setInches(e.target.value)}
          />
        </div>
      )}
    </div>
  );
};
export default Height;
