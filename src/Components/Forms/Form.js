import React, { useState } from "react";
import BackgroundImage from "./images/Gym2.png";
import "./styling.css";

import Stats from "./Stats";
import Settings from "./Settings";
import Calculate from "../Calculate/Calculate";
import Button from "../Button/Button";

const Form = () => {
  const [changeFormula, setChangeFormula] = useState(false);
  const [gender, setGender] = useState("male");
  const [unit, setUnit] = useState("metric");
  const [weightGoal, setWeightGoal] = useState("gain");

  const [weight, setWeight] = useState("");
  const [imperialWeight, setImperialWeight] = useState("");
  const [height, setHeight] = useState("");
  const [inches, setInches] = useState("");
  const [feet, setFeet] = useState("");
  const [age, setAge] = useState("");
  const [bodyFat, setBodyFat] = useState("");

  const [weightPlan, setWeightPlan] = useState(0.1);
  const [activityLevel, setActivityLevel] = useState(1.1);
  const [macro, setMacro] = useState("1");

  const [showResults, setShowResults] = useState(false);

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

  // Set defaults
  const handleClick = () => {
    setShowResults(false);
    setChangeFormula(false);
    setGender("male");
    setUnit("metric");
    setWeightGoal("gain");
    setWeight("");
    setImperialWeight("");
    setHeight("");
    setInches("");
    setFeet("");
    setAge("");
    setBodyFat("");
    setWeightPlan(0.1);
    setActivityLevel(1.1);
    setMacro("1");
  };

  return (
    <div style={divStyle}>
      <div className="container mx-auto px-6 py-32 md:px-32 lg:px-32 xl:px-32">
        {/* Header */}
        <label
          style={{ color: "hsl(0, 0%, 88%)" }}
          className="font-display font-sans font-semibold text-5xl text-white mb-4"
        >
          TDEE Calculator
        </label>

        {/* Show Form */}
        {!showResults ? (
          <div
            style={{
              borderTopWidth: 4,
              borderTopColor: "hsl(122, 47%, 35%)",
              backgroundColor: "hsl(0, 0%, 88%)"
            }}
            className="flex-column mt-3 shadow-md rounded-lg bg-grey opacity-100 h-full"
          >
            <div className="w-full block flex-grow px-5 pt-5 pb-2">
              {/* Formula Options */}
              <div className="flex radio-toolbar">
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

            {/* Show settings */}
            <Settings
              gender={gender}
              unit={unit}
              weightGoal={weightGoal}
              handleGenderChange={event => handleGenderChange(event)}
              handleUnitChange={event => handleUnitChange(event)}
              handleWeightGoalChange={event => handleWeightGoalChange(event)}
            />

            {/* Show stats */}
            <Stats
              weight={weight}
              setWeight={setWeight}
              imperialWeight={imperialWeight}
              setImperialWeight={setImperialWeight}
              height={height}
              setHeight={setHeight}
              feet={feet}
              setFeet={setFeet}
              inches={inches}
              setInches={setInches}
              age={age}
              setAge={setAge}
              bodyFat={bodyFat}
              setBodyFat={setBodyFat}
              weightPlan={weightPlan}
              setWeightPlan={setWeightPlan}
              activityLevel={activityLevel}
              setActivityLevel={setActivityLevel}
              macro={macro}
              setMacro={setMacro}
              showResults={showResults}
              setShowResults={setShowResults}
              formula={changeFormula}
              gender={gender}
              unit={unit}
              weightGoal={weightGoal}
            />
          </div>
        ) : (
          <div
            style={{
              borderTopWidth: 4,
              borderTopColor: "hsl(122, 47%, 35%)",
              backgroundColor: "hsl(0, 0%, 88%)"
            }}
            className="flex-column mt-3 shadow-md rounded-lg bg-grey opacity-100 h-full"
          >
            {/* Calculate and show results */}
            <Calculate
              formula={changeFormula}
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
            <Button
              style={{
                color: "hsl(0, 0%, 92%)",
                backgroundColor: "hsl(122, 39%, 41%)"
              }}
              className="w-full font-sans font-medium py-5 px-2 rounded-b-lg focus:outline-none"
              handleClick={() => handleClick()}
              title={"Back"}
            />
          </div>
        )}
      </div>
    </div>
  );
};

const divStyle = {
  width: "100%",
  minHeight: "100vh",
  backgroundImage: `url(${BackgroundImage})`,
  backgroundSize: "cover"
};

export default Form;
