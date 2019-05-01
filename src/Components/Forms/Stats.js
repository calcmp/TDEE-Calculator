import React, { useState } from "react";

import Weight from "../Stats/Inputs/Weight";
import Height from "../Stats/Inputs/Height";
import Age from "../Stats/Inputs/Age";
import BodyFat from "../Stats/Inputs/BodyFat";
import Surplus from "../Stats/Selects/Surplus";
import Activity from "../Stats/Selects/Activity";
import Diet from "../Stats/Selects/Diet";
import Button from "../Button/Button";

import Calculate from "../Calculate/Calculate";

const Stats = ({ formula, gender, unit, weightGoal }) => {
  const [weight, setWeight] = useState("");
  const [imperialWeight, setImperialWeight] = useState(null);
  const [height, setHeight] = useState("");
  const [inches, setInches] = useState("");
  const [feet, setFeet] = useState("");
  const [age, setAge] = useState("");
  const [bodyFat, setBodyFat] = useState("");

  const [weightPlan, setWeightPlan] = useState(0.1);
  const [activityLevel, setActivityLevel] = useState(1.1);
  const [macro, setMacro] = useState("1");

  const [showResults, setShowResults] = useState(false);

  const handleActivityLevelChange = event => {
    setActivityLevel(event.target.value);
  };

  const handleWeightPlanChange = event => {
    setWeightPlan(event.target.value);
  };

  const handleMacroChange = event => {
    setMacro(event.target.value);
  };

  const handleClick = () => {
    // Convert imperial to metric
    if (unit === "imperial") {
      let tempWeight = weight * 0.45359237001;
      setImperialWeight(tempWeight);

      let tempHeight = feet * 12;
      tempHeight += +inches;
      tempHeight *= 2.54;
      setHeight(tempHeight);
    }
    console.log("clicked");
    setShowResults(true);
  };

  return (
    <div>
      <div className="flex py-2 px-5">
        {!formula ? (
          <div className="flex-col flex-1">
            {/* -----Mifflin Formula----- */}

            {/* Weight input */}
            <Weight unit={unit} weight={weight} setWeight={setWeight} />

            {/* Height input */}
            <Height
              unit={unit}
              height={height}
              setHeight={setHeight}
              inches={inches}
              setInches={setInches}
              feet={feet}
              setFeet={setFeet}
            />

            {/* Age input */}
            <Age age={age} setAge={setAge} />
          </div>
        ) : (
          <div className="flex-col flex-1">
            {/* -----Katch Formula----- */}

            {/* Weight input */}
            <Weight unit={unit} weight={weight} setWeight={setWeight} />

            {/* Body fat input */}
            <BodyFat bodyFat={bodyFat} setBodyFat={setBodyFat} />
          </div>
        )}
        <div className="flex-col flex-1">
          {/* Surplus input */}
          <Surplus
            weightGoal={weightGoal}
            weightPlan={weightPlan}
            handleWeightPlanChange={event => handleWeightPlanChange(event)}
          />

          {/* Activity input */}
          <Activity
            activityLevel={activityLevel}
            handleActivityLevelChange={event =>
              handleActivityLevelChange(event)
            }
          />

          {/* Diet input */}
          <Diet
            macro={macro}
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
      {showResults && (
        <Calculate
          formula={formula}
          gender={gender}
          weight={imperialWeight || weight}
          height={height}
          age={age}
          bodyFat={bodyFat}
          activityLevel={activityLevel}
          weightGoal={weightGoal}
          weightPlan={weightPlan}
          macro={macro}
        />
      )}
    </div>
  );
};
export default Stats;
