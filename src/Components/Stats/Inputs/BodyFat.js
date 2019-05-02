import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";

library.add(faDumbbell);

const BodyFat = ({ bodyFat, setBodyFat }) => {
  return (
    <div className="w-full py-2 pr-2">
      <div className="flex flex-row">
        <span
          style={{ backgroundColor: "hsl(0, 0%, 97%)" }}
          className="flex items-center rounded rounded-r-none pl-4"
        >
          <FontAwesomeIcon
            style={{ color: "hsl(122, 42%, 75%)" }}
            icon="dumbbell"
          />
        </span>
        <input
          style={{
            color: "hsl(0, 0%, 49%)",
            backgroundColor: "hsl(0, 0%, 97%)"
          }}
          type="number"
          placeholder="Body Fat %..."
          value={bodyFat}
          onChange={e => setBodyFat(e.target.value)}
          className="w-full py-3 pl-4 pr-3 font-sans rounded rounded-l-none font-bold focus:outline-none"
        />
      </div>
    </div>
  );
};
export default BodyFat;
