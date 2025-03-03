// src/data/questions.js
const questions = [
  {
    id: 1,
    text: "Difficulty falling asleep | 잠들기 어려움:",
    options: [
      { text: "None | 없음", value: 0 },
      { text: "Mild | 가벼운", value: 1 },
      { text: "Moderate | 중간", value: 2 },
      { text: "Severe | 심한", value: 3 },
      { text: "Very Severe | 매우 심한", value: 4 }
    ]
  },
  {
    id: 2,
    text: "Difficulty staying asleep | 계속 자는 것이 어려움:",
    options: [
      { text: "None | 없음", value: 0 },
      { text: "Mild | 가벼운", value: 1 },
      { text: "Moderate | 중간", value: 2 },
      { text: "Severe | 심한", value: 3 },
      { text: "Very Severe | 매우 심한", value: 4 }
    ]
  },
  {
    id: 3,
    text: "Problems waking up too early | 너무 일찍 깨는 문제:",
    options: [
      { text: "None | 없음", value: 0 },
      { text: "Mild | 가벼운", value: 1 },
      { text: "Moderate | 중간", value: 2 },
      { text: "Severe | 심한", value: 3 },
      { text: "Very Severe | 매우 심한", value: 4 }
    ]
  },
  {
    id: 4,
    text: "How satisfied/dissatisfied are you with your current sleep pattern? | 현재 수면 패턴에 얼마나 만족/불만족하십니까?",
    options: [
      { text: "Very Satisfied | 매우 만족", value: 0 },
      { text: "Satisfied | 만족", value: 1 },
      { text: "Moderately Satisfied | 적당히 만족", value: 2 },
      { text: "Dissatisfied | 불만족", value: 3 },
      { text: "Very Dissatisfied | 매우 불만족", value: 4 }
    ]
  },
  {
    id: 5,
    text: "To what extent do you consider your sleep problem to INTERFERE with your daily functioning? | 수면 문제가 일상 기능에 얼마나 방해가 된다고 생각하십니까?",
    options: [
      { text: "Not at all Interfering | 전혀 방해되지 않음", value: 0 },
      { text: "A Little | 조금", value: 1 },
      { text: "Somewhat | 어느 정도", value: 2 },
      { text: "Much | 많이", value: 3 },
      { text: "Very Much Interfering | 매우 많이 방해됨", value: 4 }
    ]
  },
  {
    id: 6,
    text: "How NOTICEABLE to others do you think your sleep problem is? | 다른 사람들에게 당신의 수면 문제가 얼마나 눈에 띈다고 생각하십니까?",
    options: [
      { text: "Not at all Noticeable | 전혀 눈에 띄지 않음", value: 0 },
      { text: "Barely | 거의 눈에 띄지 않음", value: 1 },
      { text: "Somewhat | 어느 정도", value: 2 },
      { text: "Much | 많이", value: 3 },
      { text: "Very Much Noticeable | 매우 많이 눈에 띔", value: 4 }
    ]
  },
  {
    id: 7,
    text: "How WORRIED/distressed are you about your current sleep problem? | 현재 수면 문제에 대해 얼마나 걱정/스트레스를 받고 있습니까?",
    options: [
      { text: "Not at all | 전혀 아님", value: 0 },
      { text: "A Little | 조금", value: 1 },
      { text: "Somewhat | 어느 정도", value: 2 },
      { text: "Much | 많이", value: 3 },
      { text: "Very Much | 매우 많이", value: 4 }
    ]
  },
];

// Interpretation ranges
export const interpretScore = (score) => {
  if (score <= 7) return { 
    level: "No clinically significant insomnia",
    levelKr: "임상적으로 유의한 불면증 없음", 
    description: "You don't appear to be experiencing insomnia symptoms.",
    descriptionKr: "불면증 증상을 경험하고 있지 않은 것으로 보입니다."
  };
  if (score <= 14) return { 
    level: "Subthreshold insomnia",
    levelKr: "역치 이하 불면증", 
    description: "You may be experiencing mild sleep difficulties.",
    descriptionKr: "가벼운 수면 어려움을 경험할 수 있습니다."
  };
  if (score <= 21) return { 
    level: "Clinical insomnia (moderate severity)",
    levelKr: "임상적 불면증 (중등도)", 
    description: "You are experiencing moderate insomnia symptoms.",
    descriptionKr: "중등도의 불면증 증상을 경험하고 있습니다."
  };
  return { 
    level: "Clinical insomnia (severe)",
    levelKr: "임상적 불면증 (심각)", 
    description: "You are experiencing severe insomnia symptoms.",
    descriptionKr: "심각한 불면증 증상을 경험하고 있습니다."
  };
};

export default questions;