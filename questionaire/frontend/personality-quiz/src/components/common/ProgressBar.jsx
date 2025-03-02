// src/components/common/ProgressBar.jsx
const ProgressBar = ({ progress }) => {
  console.log(`Rendering progress bar with ${progress}% complete`);
  
  return (
    <div className="w-full bg-gray-200 rounded-full h-4 my-4 border border-gray-300 shadow-inner">
      <div 
        className="bg-blue-600 h-full rounded-full transition-all duration-300" 
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;