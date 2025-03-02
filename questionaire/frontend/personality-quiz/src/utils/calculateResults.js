// src/utils/calculateResults.js
const calculateResults = (answers) => {
  // This is a simplified example
  // In a real app, you would have a more complex algorithm
  
  const traits = {
    "Mind: Introverted/Extraverted": 0,
    "Energy: Intuitive/Observant": 0,
    "Nature: Thinking/Feeling": 0,
    "Tactics: Judging/Prospecting": 0
  };
  
  // Calculate scores based on answers
  Object.values(answers).forEach(answer => {
    if (answer.startsWith('E')) {
      traits["Mind: Introverted/Extraverted"] += answer === 'E1' ? 20 : 10;
    } else if (answer.startsWith('I')) {
      traits["Mind: Introverted/Extraverted"] -= answer === 'I1' ? 10 : 20;
    }
    // Similar calculations for other traits...
  });
  
  // Normalize scores to percentages
  Object.keys(traits).forEach(key => {
    traits[key] = Math.min(Math.max(50 + traits[key], 0), 100);
  });
  
  // Determine personality type
  const typeCode = [
    traits["Mind: Introverted/Extraverted"] > 50 ? 'E' : 'I',
    traits["Energy: Intuitive/Observant"] > 50 ? 'N' : 'S',
    traits["Nature: Thinking/Feeling"] > 50 ? 'F' : 'T',
    traits["Tactics: Judging/Prospecting"] > 50 ? 'J' : 'P'
  ].join('');
  
  // Get description for the type
  const typeDescriptions = {
    'ENFJ': 'The Protagonist',
    'INFJ': 'The Advocate',
    // Add all 16 personality types...
  };
  
  return {
    type: typeCode,
    description: typeDescriptions[typeCode] || 'Unknown Type',
    traits
  };
};

export default calculateResults;