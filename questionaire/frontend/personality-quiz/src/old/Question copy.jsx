// src/components/quiz/Question.jsx
const Question = ({ question, selectedAnswer, onAnswer }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">{question.text}</h2>
      
      <div className="space-y-4">
        {question.options.map((option) => (
          <button
            key={option.value}
            onClick={() => onAnswer(option.value)}
            className={`w-full p-4 text-left rounded-lg border transition-colors ${
              selectedAnswer === option.value 
                ? 'bg-blue-100 border-blue-500' 
                : 'bg-white border-gray-300 hover:bg-gray-50'
            }`}
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;