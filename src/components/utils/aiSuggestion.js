export const getGoalSuggestion = (weight, height) => {
  if (!weight || !height) return null;

  const h = height / 100;
  const bmi = weight / (h * h);

  if (bmi < 18.5) {
    return {
      goal: "muscles",
      message: "You are underweight → Build muscles 💪"
    };
  }

  if (bmi > 25) {
    return {
      goal: "weight",
      message: "You are overweight → Lose fat 🔥"
    };
  }

  return {
    goal: "balance",
    message: "You are in good shape → Maintain balance ⚖️"
  };
};