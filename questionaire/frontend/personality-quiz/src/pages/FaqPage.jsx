import React from 'react'

const FaqPage = () => {
  return (
    <>
        <div className='flex flex-col items-center justify-center w-full max-w-3xl mx-auto px-4' style={{ paddingTop: '200px' }}>
      {/* Text container with centered content */}
      <div className="text-center mb-4">
        <div className="pb-2"> {/* Add padding to bottom to prevent clipping */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-medium bg-gradient-to-r from-blue-600 to-indigo-700 text-transparent bg-clip-text leading-tight">FAQ Page stuff here.</h1>
        </div>
        <h1 className="text-5xl font-medium text-gray-800 mt-6 sm:mt-10">자주 묻는 질문은 여기예요.</h1>
      </div>
      </div>
    </>
  )
}

export default FaqPage