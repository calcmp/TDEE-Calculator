import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake } from "@fortawesome/free-solid-svg-icons";

library.add(faBirthdayCake);

const Age = ({ age, setAge }) => {
  return (
    <div className="w-full py-2 pr-2">
      <div
        style={{ backgroundColor: "hsl(0, 0%, 97%)" }}
        className="flex py-px w-full text-grey-dark rounded"
      >
        <div className="flex py-3 px-4 mx-px">
          <FontAwesomeIcon
            style={{ color: "hsl(122, 42%, 75%)" }}
            icon="birthday-cake"
          />
        </div>
        <div
          style={{ backgroundColor: "hsl(0, 0%, 88%)" }}
          className="border -my-px"
        />
        <input
          style={{
            color: "hsl(0, 0%, 49%)",
            backgroundColor: "hsl(0, 0%, 97%)"
          }}
          className="appearance-none font-sans font-medium block w-full border border-grey-lighter rounded py-2 px-4 leading-tight focus:outline-none"
          id="age"
          type="number"
          placeholder="Age..."
          value={age}
          onChange={e => setAge(e.target.value)}
        />
      </div>
    </div>
  );
};
export default Age;
