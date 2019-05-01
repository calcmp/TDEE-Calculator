import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";

library.add(faDumbbell);

const BodyFat = ({ bodyFat, setBodyFat }) => {
  return (
    <div className="w-full py-2 pr-2">
      <div
        style={{ backgroundColor: "hsl(0, 0%, 97%)" }}
        className="flex w-full text-grey-dark rounded"
      >
        <div className="flex py-3 pl-4 pr-3">
          <FontAwesomeIcon
            style={{ color: "hsl(122, 42%, 75%)" }}
            icon="dumbbell"
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
          className="appearance-none py-2 px-4 font-sans font-medium block w-full border border-grey-lighter rounded leading-tight focus:outline-none"
          id="bodyFat"
          type="number"
          placeholder="Body Fat %..."
          value={bodyFat}
          onChange={e => setBodyFat(e.target.value)}
        />
      </div>
    </div>
  );
};
export default BodyFat;
