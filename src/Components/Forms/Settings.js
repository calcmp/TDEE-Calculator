import React from "react";

import Gender from "../Settings/Gender";
import Unit from "../Settings/Unit";
import WeightGoal from "../Settings/WeightGoal";

const Settings = props => {
  return (
    <div className="flex flex-wrap px-5 py-2">
      {/* Gender input */}
      <Gender
        gender={props.gender}
        handleGenderChange={event => props.handleGenderChange(event)}
      />

      {/* Unit measurement type */}
      <Unit
        unit={props.unit}
        handleUnitChange={event => props.handleUnitChange(event)}
      />

      {/* Weight goal input */}
      <WeightGoal
        weightGoal={props.weightGoal}
        handleWeightGoalChange={event => props.handleWeightGoalChange(event)}
      />
    </div>
  );
};
export default Settings;
