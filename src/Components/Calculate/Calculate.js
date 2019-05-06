import React, { useState, useEffect } from "react";

const Calculate = props => {
  const [TDEE, setTDEE] = useState(null);
  const [calories, setCalories] = useState(null);
  const [carbs, setCarbs] = useState(null);
  const [protein, setProtein] = useState(null);
  const [fat, setFat] = useState(null);

  useEffect(() => {
    if (props.formula === false) calculateBMR();
    else calculateLBM();
  });

  const calculateLBM = () => {
    // Lean Body Mass
    let LBM = (props.weight * (100 - props.bodyFat)) / 100;
    // Basal Metabolic Rate
    let BMR = 370 + 21.6 * LBM;

    calculateTDEE(BMR);
  };

  const calculateBMR = () => {
    let BMR;
    if (props.gender === "male")
      BMR = 9.99 * props.weight + 6.25 * props.height - 4.92 * props.age + 5;
    else
      BMR = 9.99 * props.weight + 6.25 * props.height - 4.92 * props.age - 161;

    calculateTDEE(BMR);
  };

  const calculateTDEE = BMR => {
    let tempTDEE = BMR * props.activityLevel;
    setTDEE(tempTDEE);

    calculateSurplus(tempTDEE);
  };

  const calculateSurplus = tempTDEE => {
    let surplusAmount;
    let totalCalories;
    if (props.weightGoal === "gain") {
      surplusAmount = tempTDEE * props.weightPlan;
      totalCalories = surplusAmount + tempTDEE;
    } else if (props.weightGoal === "lose") {
      surplusAmount = tempTDEE * props.weightPlan;
      totalCalories = tempTDEE - surplusAmount;
    } else totalCalories = tempTDEE;
    setCalories(totalCalories);

    calculateMacro(totalCalories);
  };

  const calculateMacro = totalCalories => {
    let tempCarbs;
    let tempProtein;
    let tempFat;

    switch (props.macro) {
      // Keto
      case "1":
        tempCarbs = totalCalories * 0.05;
        tempProtein = totalCalories * 0.3;
        tempFat = totalCalories * 0.65;
        break;
      // Low Carb
      case "2":
        tempCarbs = totalCalories * 0.2;
        tempProtein = totalCalories * 0.35;
        tempFat = totalCalories * 0.45;
        break;
      // Low Fat
      case "3":
        tempCarbs = totalCalories * 0.5;
        tempProtein = totalCalories * 0.35;
        tempFat = totalCalories * 0.15;
        break;
      // Balanced
      case "4":
        tempCarbs = totalCalories * 0.35;
        tempProtein = totalCalories * 0.3;
        tempFat = totalCalories * 0.35;
        break;
      // High Protein
      case "5":
        tempCarbs = totalCalories * 0.3;
        tempProtein = totalCalories * 0.45;
        tempFat = totalCalories * 0.25;
        break;
      // High Carb
      case "6":
        tempCarbs = totalCalories * 0.5;
        tempProtein = totalCalories * 0.3;
        tempFat = totalCalories * 0.2;
        break;
      default:
        break;
    }
    setCarbs(tempCarbs / 4);
    setProtein(tempProtein / 4);
    setFat(tempFat / 9);
  };

  return (
    <div className="w-full block flex-grow">
      <div className="px-12 py-5">
        <div className="flex">
          <div
            style={{ color: "hsl(0, 0%, 38%)" }}
            className="flex-1 py-5 font-sans font-bold text-3xl"
          >
            TDEE
          </div>
          <div
            style={{ color: "hsl(122, 39%, 41%)" }}
            className="flex-1 py-1 pl-6 font-sans font-bold text-5xl"
          >
            {Math.round(TDEE)}
          </div>
        </div>
        <div className="flex">
          <div
            style={{ color: "hsl(0, 0%, 38%)" }}
            className="flex-1 py-5 font-sans font-bold text-3xl"
          >
            Calories
          </div>
          <div
            style={{ color: "hsl(122, 39%, 41%)" }}
            className="flex-1 py-1 pl-6 font-sans font-bold text-5xl"
          >
            {Math.round(calories)}
          </div>
        </div>
        <div className="flex">
          <div
            style={{ color: "hsl(0, 0%, 49%)" }}
            className="flex-1 py-5 font-sans font-bold text-3xl"
          >
            Carbs
          </div>
          <div
            style={{ color: "hsl(123, 35%, 51%)" }}
            className="flex-1 py-1 pl-6 font-sans font-bold text-5xl"
          >
            {Math.round(carbs)}g
          </div>
        </div>
        <div className="flex">
          <div
            style={{ color: "hsl(0, 0%, 49%)" }}
            className="flex-1 py-5 font-sans font-bold text-3xl"
          >
            Protein
          </div>
          <div
            style={{ color: "hsl(123, 35%, 51%)" }}
            className="flex-1 py-1 -ml-1 pl-6 font-sans font-bold text-5xl"
          >
            {Math.round(protein)}g
          </div>
        </div>
        <div className="flex">
          <div
            style={{ color: "hsl(0, 0%, 49%)" }}
            className="flex-1 pr-1 py-5 font-sans font-bold text-3xl"
          >
            Fat
          </div>
          <div
            style={{ color: "hsl(123, 35%, 51%)" }}
            className="flex-1 py-1 pl-4 font-sans font-bold text-5xl"
          >
            {Math.round(fat)}g
          </div>
        </div>
      </div>
    </div>
  );
};
export default Calculate;
