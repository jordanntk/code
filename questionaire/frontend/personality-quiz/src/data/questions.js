// src/data/questions.js
export const insomniaQuestions = [
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

export const stressQuestions = [
  {
    id: 1,
    text: "In the last month, how often have you been upset because of something that happened unexpectedly? | 지난 한 달 동안 예상치 못한 일로 인해 얼마나 자주 화가 났습니까?",
    options: [
      { text: "Never | 전혀 없음", value: 0 },
      { text: "Almost Never | 거의 없음", value: 1 },
      { text: "Sometimes | 가끔", value: 2 },
      { text: "Fairly Often | 꽤 자주", value: 3 },
      { text: "Very Often | 매우 자주", value: 4 }
    ]
  },
  {
    id: 2,
    text: "In the last monnth, how often have you felt that you were unable to control the important things in your life? | 지난 한 달 동안 중요한 일을 제어할 수 없다고 느낀 적이 얼마나 있습니까?",
    options: [
      { text: "Never | 전혀 없음", value: 0 },
      { text: "Almost Never | 거의 없음", value: 1 },
      { text: "Sometimes | 가끔", value: 2 },
      { text: "Fairly Often | 꽤 자주", value: 3 },
      { text: "Very Often | 매우 자주", value: 4 }
    ]
  },
  {
    id: 3,
    text: "In the last month, how often have you felt nervous and 'stressed'? | 지난 한 달 동안 얼마나 자주 긴장되고 '스트레스'를 받았습니까?",
    options: [
      { text: "Never | 전혀 없음", value: 0 },
      { text: "Almost Never | 거의 없음", value: 1 },
      { text: "Sometimes | 가끔", value: 2 },
      { text: "Fairly Often | 꽤 자주", value: 3 },
      { text: "Very Often | 매우 자주", value: 4 }
    ]
  },
  {
    id: 4,
    text: "In the last month, how often have you felt confident about your ability to handle your personal problems? | 지난 한 달 동안 개인적인 문제를 해결할 능력에 대해 얼마나 자신감을 가졌습니까?",
    options: [
      { text: "Never | 전혀 없음", value: 0 },
      { text: "Almost Never | 거의 없음", value: 1 },
      { text: "Sometimes | 가끔", value: 2 },
      { text: "Fairly Often | 꽤 자주", value: 3 },
      { text: "Very Often | 매우 자주", value: 4 }
    ]
  },
  {
    id: 5,
    text: "In the last month, how often have you felt that things were going your way? | 지난 한 달 동안 일이 당신의 방향으로 흘러가고 있다고 느낀 적이 얼마나 있습니까?",
    options: [
      { text: "Never | 전혀 없음", value: 0 },
      { text: "Almost Never | 거의 없음", value: 1 },
      { text: "Sometimes | 가끔", value: 2 },
      { text: "Fairly Often | 꽤 자주", value: 3 },
      { text: "Very Often | 매우 자주", value: 4 }
    ]
  },
  {
    id: 6,
    text: "In the last month, how often have you found that you could not cope with all the things that you had to do? | 지난 한 달 동안 해야 할 모든 일을 처리할 수 없다는 것을 얼마나 자주 느꼈습니까?",
    options: [
      { text: "Never | 전혀 없음", value: 0 },
      { text: "Almost Never | 거의 없음", value: 1 },
      { text: "Sometimes | 가끔", value: 2 },
      { text: "Fairly Often | 꽤 자주", value: 3 },
      { text: "Very Often | 매우 자주", value: 4 }
    ]
  },
  {
    id: 7,
    text: "In the last month, how often have you been able to control irritations in your life? | 지난 한 달 동안 삶 속의 짜증을 얼마나 자주 제어할 수 있었습니까?",
    options: [
      { text: "Never | 전혀 없음", value: 0 },
      { text: "Almost Never | 거의 없음", value: 1 },
      { text: "Sometimes | 가끔", value: 2 },
      { text: "Fairly Often | 꽤 자주", value: 3 },
      { text: "Very Often | 매우 자주", value: 4 }
    ]
  },
  {
    id: 8,
    text: "In the last month, how often have you felt that you were on top of things? | 지난 한 달 동안 일을 잘 처리하고 있다고 느낀 적이 얼마나 있습니까?",
    options: [
      { text: "Never | 전혀 없음", value: 0 },
      { text: "Almost Never | 거의 없음", value: 1 },
      { text: "Sometimes | 가끔", value: 2 },
      { text: "Fairly Often | 꽤 자주", value: 3 },
      { text: "Very Often | 매우 자주", value: 4 }
    ]
  },
  {
    id: 9,
    text: "In the last month, how often have you been angered because of things that were outside of your control? | 지난 한 달 동안 제어할 수 없는 일로 인해 얼마나 자주 화가 났습니까?",
    options: [
      { text: "Never | 전혀 없음", value: 0 },
      { text: "Almost Never | 거의 없음", value: 1 },
      { text: "Sometimes | 가끔", value: 2 },
      { text: "Fairly Often | 꽤 자주", value: 3 },
      { text: "Very Often | 매우 자주", value: 4 }
    ]
  },
  {
    id: 10,
    text: "In the last month, how often have you felt difficulties were piling up so high that you could not overcome them? | 지난 한 달 동안 어려움이 쌓여서 극복할 수 없다고 느낀 적이 얼마나 있습니까?",
    options: [
      { text: "Never | 전혀 없음", value: 0 },
      { text: "Almost Never | 거의 없음", value: 1 },
      { text: "Sometimes | 가끔", value: 2 },
      { text: "Fairly Often | 꽤 자주", value: 3 },
      { text: "Very Often | 매우 자주", value: 4 }
    ]
  },
];

// Interpretation ranges
export const interpretInsomniaScore = (score) => {
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

export const interpretStressScore = (score) => {
  if (score <= 13) return {
    level: "Low perceived stress",
    levelKr: "낮은 인지된 스트레스",
    description: "Your stress levels appear to be manageable.",
    descriptionKr: "귀하의 스트레스 수준은 관리 가능한 것으로 보입니다."
  };
  if (score <= 26) return {
    level: "Moderate perceived stress",
    levelKr: "중간 정도의 인지된 스트레스",
    description: "You are experiencing moderate stress levels.",
    descriptionKr: "귀하는 중간 정도의 스트레스를 경험하고 있습니다."
  };
  return {
    level: "High perceived stress",
    levelKr: "높은 인지된 스트레스",
    description: "You are experiencing high levels of stress.",
    descriptionKr: "귀하는 높은 수준의 스트레스를 경험하고 있습니다."
  };
};

// Add metadata for each quiz type
export const quizMetadata = {
  insomnia: {
    maxScore: 28,
    explanation: {
      english: "This assessment measures the severity of your insomnia symptoms. The higher the score, the more severe your symptoms may be. A score above 14 may indicate clinically significant insomnia.",
      korean: "이 평가는 귀하의 불면증 증상의 심각도를 측정합니다. 점수가 높을수록 증상이 더 심각할 수 있습니다. 14점 이상은 임상적으로 유의한 불면증을 나타낼 수 있습니다."
    },
    severityRanges: [
      { max: 7, color: 'bg-green-500' },
      { max: 14, color: 'bg-yellow-500' },
      { max: 21, color: 'bg-orange-500' },
      { max: 28, color: 'bg-red-500' }
    ],
    severityLabels: [
      { english: "None", korean: "없음" },
      { english: "Mild", korean: "가벼운" },
      { english: "Moderate", korean: "중간" },
      { english: "Severe", korean: "심한" }
    ],
    },
  
  stress: {
    maxScore: 40,
    explanation: {
      english: "This assessment measures your perceived stress levels during the past month. Higher scores indicate higher perceived stress. A score above 20 may indicate significant stress that might benefit from stress management techniques.",
      korean: "이 평가는 지난 한 달 동안의 인지된 스트레스 수준을 측정합니다. 점수가 높을수록 인지된 스트레스가 높음을 나타냅니다. 20점 이상은 스트레스 관리 기법이 도움이 될 수 있는 상당한 스트레스를 나타낼 수 있습니다."
    },
    severityRanges: [
      { max: 13, color: 'bg-green-500' },
      { max: 26, color: 'bg-yellow-500' },
      { max: 40, color: 'bg-red-500' }
    ],
    severityLabels: [
      { english: "Low", korean: "낮음" },
      { english: "Moderate", korean: "중간" },
      { english: "High", korean: "높음" }
    ],
  }
};

export default insomniaQuestions;