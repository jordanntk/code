// src/data/questions.js
const questions = [
  {
    id: 1,
    text: "You find it difficult to introduce yourself to other people.",
    options: [
      { text: "Strongly Agree", value: "E1" },
      { text: "Agree", value: "E2" },
      { text: "Neutral", value: "N" },
      { text: "Disagree", value: "I1" },
      { text: "Strongly Disagree", value: "I2" }
    ],
    trait: "E/I" // Extraversion/Introversion
  },
  {
    id: 2,
    text: "You often get so lost in thoughts that you ignore or forget your surroundings.",
    options: [
      { text: "Strongly Agree", value: "N2" },
      { text: "Agree", value: "N1" },
      { text: "Neutral", value: "N" },
      { text: "Disagree", value: "S1" },
      { text: "Strongly Disagree", value: "S2" }
    ],
    trait: "N/S" // Intuition/Sensing
  },
  // Add more questions...
  {
    id: 3,
    text: "You 2often get so lost in thoughts that you ignore or forget your surroundings.",
    options: [
      { text: "Strongly Agree", value: "N2" },
      { text: "Agree", value: "N1" },
      { text: "Neutral", value: "N" },
      { text: "Disagree", value: "S1" },
      { text: "Strongly Disagree", value: "S2" }
    ],
    trait: "N/S" // Intuition/Sensing
  },
  {
    id: 4,
    text: "You osften get so lost in thoughts that you ignore or forget your surroundings.",
    options: [
      { text: "Strongly Agree", value: "N2" },
      { text: "Agree", value: "N1" },
      { text: "Neutral", value: "N" },
      { text: "Disagree", value: "S1" },
      { text: "Strongly Disagree", value: "S2" }
    ],
    trait: "N/S" // Intuition/Sensing
  },
];

export default questions;