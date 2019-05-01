import React, { useState, useEffect } from "react";

const Calculate = ({
  formula,
  gender,
  age,
  weight,
  height,
  bodyFat,
  activityLevel,
  weightGoal,
  weightPlan,
  macro
}) => {
  const [TDEE, setTDEE] = useState(null);
  const [calories, setCalories] = useState(null);
  const [carbs, setCarbs] = useState(null);
  const [protein, setProtein] = useState(null);
  const [fat, setFat] = useState(null);

  useEffect(() => {
    console.log("use effect");
    if (formula === "mifflin") calculateBMR();
    else calculateLBM();
  }, [formula]);

  const calculateLBM = () => {
    // Lean Body Mass
    let LBM = (weight * (100 - bodyFat)) / 100;
    // Basal Metabolic Rate
    let BMR = 370 + 21.6 * LBM;

    calculateTDEE(BMR);
  };

  const calculateBMR = () => {
    let BMR;
    if (gender === "male") BMR = 9.99 * weight + 6.25 * height - 4.92 * age + 5;
    else BMR = 9.99 * weight + 6.25 * height - 4.92 * age - 161;

    calculateTDEE(BMR);
  };

  const calculateTDEE = BMR => {
    let tempTDEE = BMR * activityLevel;
    setTDEE(tempTDEE);

    console.log("TDEE: " + tempTDEE);

    calculateSurplus(tempTDEE);
  };

  const calculateSurplus = tempTDEE => {
    let surplusAmount;
    let totalCalories;
    if (weightGoal === "gain") {
      surplusAmount = tempTDEE * weightPlan;
      totalCalories = surplusAmount + tempTDEE;
    } else if (weightGoal === "lose") {
      surplusAmount = tempTDEE * weightPlan;
      totalCalories = tempTDEE - surplusAmount;
    } else totalCalories = tempTDEE;
    setCalories(totalCalories);

    console.log("TOTAL CAL: " + totalCalories);

    calculateMacro(totalCalories);
  };

  const calculateMacro = totalCalories => {
    let tempCarbs;
    let tempProtein;
    let tempFat;

    switch (macro) {
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

    let carbs = tempCarbs / 4;
    let protein = tempProtein / 4;
    let fat = tempFat / 9;

    setCarbs(carbs);
    setProtein(protein);
    setFat(fat);

    console.log("CARBS: " + carbs);
    console.log("PROTEIN: " + protein);
    console.log("FAT: " + fat);
  };

  return <div>Calculated</div>;
};
export default Calculate;
