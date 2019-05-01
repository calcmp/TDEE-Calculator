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
          <div
            style={{ backgroundColor: "hsl(0, 0%, 97%)" }}
            className="flex w-full text-grey-dark rounded"
          >
            <div className="flex py-3 px-4 mx-1 mt-px">
              <FontAwesomeIcon
                style={{ color: "hsl(122, 42%, 75%)" }}
                icon="ruler-vertical"
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
              id="height"
              type="number"
              placeholder="Height (cm)..."
              value={height}
              onChange={e => setHeight(e.target.value)}
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
            className="appearance-none font-sans font-medium mr-1 block w-full border border-grey-lighter rounded py-2 px-4 leading-tight focus:outline-none"
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
            className="appearance-none font-sans font-medium ml-1 block w-full border border-grey-lighter rounded py-2 px-4 leading-tight focus:outline-none"
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
