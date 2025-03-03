// src/data/questions.js
const questions = [
  {
    id: 1,
    text: "Difficulty falling asleep",
    options: [
      { text: "None", value: 0 },
      { text: "Mild", value: 1 },
      { text: "Moderate", value: 2 },
      { text: "Severe", value: 3 },
      { text: "Very Severe", value: 4 }
    ]
  },
  {
    id: 2,
    text: "Difficulty staying asleep",
    options: [
      { text: "None", value: 0 },
      { text: "Mild", value: 1 },
      { text: "Moderate", value: 2 },
      { text: "Severe", value: 3 },
      { text: "Very Severe", value: 4 }
    ]
  },
  {
    id: 3,
    text: "Problems waking up too early",
    options: [
      { text: "None", value: 0 },
      { text: "Mild", value: 1 },
      { text: "Moderate", value: 2 },
      { text: "Severe", value: 3 },
      { text: "Very Severe", value: 4 }
    ]
  },
  {
    id: 4,
    text: "How satisfied/dissatisfied are you with your current sleep pattern?",
    options: [
      { text: "Very Satisfied", value: 0 },
      { text: "Satisfied", value: 1 },
      { text: "Moderately Satisfied", value: 2 },
      { text: "Dissatisfied", value: 3 },
      { text: "Very Dissatisfied", value: 4 }
    ]
  },
];

// Interpretation ranges
export const interpretScore = (score) => {
  if (score <= 7) return { 
    level: "No clinical insomnia", 
    description: "You don't appear to be experiencing insomnia symptoms."
  };
  if (score <= 14) return { 
    level: "Subthreshold insomnia", 
    description: "You may be experiencing mild sleep difficulties."
  };
  if (score <= 21) return { 
    level: "Clinical insomnia (moderate severity)", 
    description: "You are experiencing moderate insomnia symptoms."
  };
  return { 
    level: "Clinical insomnia (severe)", 
    description: "You are experiencing severe insomnia symptoms."
  };
};

export default questions;