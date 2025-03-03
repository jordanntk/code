const Question = ({ question, selectedAnswer, onAnswer }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">{question.text}</h2>
      
      <div className="space-y-4">
        {question.options.map((option) => {
          // Check if this option is selected by comparing values
          const isSelected = selectedAnswer && selectedAnswer.value === option.value;
          
          return (
            <button
              key={option.value}
              onClick={() => onAnswer(option)}
              className={`w-full p-4 text-left rounded-lg transition-all duration-200 ${
                isSelected
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-600 border-2 border-blue-700 shadow-md' 
                  : 'bg-white border border-gray-300 hover:border-blue-300 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center">
                <div className={`
                  w-5 h-5 rounded-full flex items-center justify-center mr-3 transition-colors
                  ${isSelected 
                    ? "bg-white border border-white" 
                    : "border border-white-400"}
                `}>
                  {isSelected && <span className="text-blue-600 text-xs">✓</span>}
                </div>
                <span className={isSelected ? "text-white font-medium" : "text-white-700"}>
                  {option.text}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Question;