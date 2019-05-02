import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake } from "@fortawesome/free-solid-svg-icons";

library.add(faBirthdayCake);

const Age = ({ age, setAge }) => {
  return (
    <div className="w-full py-2 pr-2">
      <div className="flex flex-row">
        <span
          style={{ backgroundColor: "hsl(0, 0%, 97%)" }}
          className="flex items-center rounded rounded-r-none pr-3 pl-5"
        >
          <FontAwesomeIcon
            style={{ color: "hsl(122, 42%, 75%)" }}
            icon="birthday-cake"
          />
        </span>
        <input
          style={{
            color: "hsl(0, 0%, 49%)",
            backgroundColor: "hsl(0, 0%, 97%)"
          }}
          placeholder="Age..."
          type="number"
          value={age}
          onChange={e => setAge(e.target.value)}
          className="w-full py-3 pl-5 pr-3 font-sans rounded rounded-l-none font-bold focus:outline-none"
        />
      </div>
    </div>
  );
};
export default Age;
