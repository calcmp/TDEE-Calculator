import React from "react";

import Weight from "../Stats/Inputs/Weight";
import Height from "../Stats/Inputs/Height";
import Age from "../Stats/Inputs/Age";
import BodyFat from "../Stats/Inputs/BodyFat";
import Surplus from "../Stats/Selects/Surplus";
import Activity from "../Stats/Selects/Activity";
import Diet from "../Stats/Selects/Diet";
import Button from "../Button/Button";

const Stats = props => {
  const handleActivityLevelChange = event => {
    props.setActivityLevel(event.target.value);
  };

  const handleWeightPlanChange = event => {
    props.setWeightPlan(event.target.value);
  };

  const handleMacroChange = event => {
    props.setMacro(event.target.value);
  };

  const handleClick = () => {
    // Convert imperial to metric
    if (props.unit === "imperial") {
      let tempWeight = props.weight * 0.45359237001;
      props.setImperialWeight(tempWeight);

      let tempHeight = props.feet * 12;
      tempHeight += +props.inches;
      tempHeight *= 2.54;
      props.setHeight(tempHeight);

      // Check if stats have been entered
      if (
        props.formula === false &&
        props.weight !== "" &&
        props.feet !== "" &&
        props.inches !== "" &&
        props.age !== ""
      ) {
        props.setShowResults(true);
      } else if (
        props.formula === true &&
        props.weight !== "" &&
        props.bodyFat !== ""
      ) {
        props.setShowResults(true);
      } else
        alert(
          "Please enter your weight, height and age or your weight and body fat %."
        );
    }
    // Check if stats have been entered
    if (props.unit === "metric") {
      if (
        props.formula === false &&
        props.weight !== "" &&
        props.height !== "" &&
        props.age !== ""
      ) {
        props.setShowResults(true);
      } else if (
        props.formula === true &&
        props.weight !== "" &&
        props.bodyFat !== ""
      ) {
        props.setShowResults(true);
      } else
        alert(
          "Please enter your weight, height and age or your weight and body fat %."
        );
    }
  };

  return (
    <div>
      <div className="flex py-2 px-5">
        {!props.formula ? (
          <div className="flex-col flex-1">
            {/* -----Mifflin Formula----- */}

            {/* Weight input */}
            <Weight
              unit={props.unit}
              weight={props.weight}
              setWeight={props.setWeight}
            />

            {/* Height input */}
            <Height
              unit={props.unit}
              height={props.height}
              setHeight={props.setHeight}
              inches={props.inches}
              setInches={props.setInches}
              feet={props.feet}
              setFeet={props.setFeet}
            />

            {/* Age input */}
            <Age age={props.age} setAge={props.setAge} />
          </div>
        ) : (
          <div className="flex-col flex-1">
            {/* -----Katch Formula----- */}

            {/* Weight input */}
            <Weight
              unit={props.unit}
              weight={props.weight}
              setWeight={props.setWeight}
            />

            {/* Body fat input */}
            <BodyFat bodyFat={props.bodyFat} setBodyFat={props.setBodyFat} />
          </div>
        )}
        <div className="flex-col flex-1">
          {/* Surplus input */}
          <Surplus
            weightGoal={props.weightGoal}
            weightPlan={props.weightPlan}
            handleWeightPlanChange={event => handleWeightPlanChange(event)}
          />

          {/* Activity input */}
          <Activity
            activityLevel={props.activityLevel}
            handleActivityLevelChange={event =>
              handleActivityLevelChange(event)
            }
          />

          {/* Diet input */}
          <Diet
            macro={props.macro}
            handleMacroChange={event => handleMacroChange(event)}
          />
        </div>
      </div>

      {/* Calculate TDEE button */}
      <Button
        style={{
          color: "hsl(0, 0%, 92%)",
          backgroundColor: "hsl(122, 39%, 41%)"
        }}
        className="w-full font-sans font-medium py-5 px-2 rounded-b-lg focus:outline-none"
        handleClick={() => handleClick()}
        title={"Calculate TDEE"}
      />
    </div>
  );
};
export default Stats;
