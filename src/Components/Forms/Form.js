import React, { useState } from "react";
import background from "./images/Gym2.png";
import "./styling.css";

import Stats from "./Stats";
import Settings from "./Settings";

const Form = () => {
  const [changeFormula, setChangeFormula] = useState(false);
  const [gender, setGender] = useState("male");
  const [unit, setUnit] = useState("metric");
  const [weightGoal, setWeightGoal] = useState("gain");

  const handleGenderChange = event => {
    setGender(event.target.value);
  };

  const handleUnitChange = event => {
    setUnit(event.target.value);
  };

  const handleWeightGoalChange = event => {
    setWeightGoal(event.target.value);
  };

  const handleFormulaChange = () => {
    setChangeFormula(!changeFormula);
  };

  return (
    <div style={styles.header}>
      <div style={styles.content}>
        <div className="container mx-auto px-6 py-32 md:px-32 lg:px-32 xl:px-32">
          <label
            style={{ color: "hsl(0, 0%, 88%)" }}
            className="font-display font-sans font-semibold text-5xl text-white mb-4"
          >
            TDEE Calculator
          </label>
          <div
            style={{
              borderTopWidth: 4,
              borderTopColor: "hsl(122, 47%, 35%)",
              backgroundColor: "hsl(0, 0%, 88%)"
            }}
            className="flex-column mt-3 shadow-md rounded-lg bg-grey opacity-100 h-full"
          >
            <div className="w-full block flex-grow px-5 pt-5 pb-2">
              <div className="flex radio-toolbar ">
                <input
                  id="mifflin"
                  type="radio"
                  value="mifflin"
                  checked={changeFormula === false}
                  onChange={() => handleFormulaChange()}
                />
                <label required htmlFor="mifflin">
                  Mifflin St. Jeor
                </label>
                <input
                  id="katch"
                  type="radio"
                  value="katch"
                  checked={changeFormula === true}
                  onChange={() => handleFormulaChange()}
                />
                <label required htmlFor="katch">
                  Katch-McArdle
                </label>
              </div>
            </div>
            <Settings
              gender={gender}
              unit={unit}
              weightGoal={weightGoal}
              handleGenderChange={event => handleGenderChange(event)}
              handleUnitChange={event => handleUnitChange(event)}
              handleWeightGoalChange={event => handleWeightGoalChange(event)}
            />
            <Stats
              formula={changeFormula}
              gender={gender}
              unit={unit}
              weightGoal={weightGoal}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  header: {
    backgroundImage: `url(${background})`,
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  },

  content: {
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  }
};

export default Form;
