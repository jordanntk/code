import React from 'react'

const StorePage = () => {
  return (
    <>
        <div className='flex flex-col items-center justify-center w-full max-w-3xl mx-auto px-4' style={{ paddingTop: '200px' }}>
      {/* Text container with centered content */}
      <div className="text-center mb-4">
      <h1 className="text-4xl sm:text-5xl lg:text-7xl font-medium bg-gradient-to-r from-blue-600 to-indigo-700 text-transparent bg-clip-text">Link to Store here.</h1>
        <h1 className="text-5xl font-medium text-gray-800 mt-6 sm:mt-10">스토어 링크 여기 있어요.</h1>
      </div>
      </div>
    </>
  )
}

export default StorePage