import React from "react";

import Gender from "../Settings/Gender";
import Unit from "../Settings/Unit";
import WeightGoal from "../Settings/WeightGoal";

const Settings = ({
  handleGenderChange,
  handleUnitChange,
  handleWeightGoalChange,
  gender,
  unit,
  weightGoal
}) => {
  return (
    <div className="flex flex-wrap px-5 py-2">
      {/* Gender input */}
      <Gender
        gender={gender}
        handleGenderChange={event => handleGenderChange(event)}
      />

      {/* Unit measurement type */}
      <Unit unit={unit} handleUnitChange={event => handleUnitChange(event)} />

      {/* Weight goal input */}
      <WeightGoal
        weightGoal={weightGoal}
        handleWeightGoalChange={event => handleWeightGoalChange(event)}
      />
    </div>
  );
};
export default Settings;
