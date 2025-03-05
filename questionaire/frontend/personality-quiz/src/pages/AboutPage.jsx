import React from 'react'

const AboutPage = () => {
  return (
    <>
        <div className='flex flex-col items-center justify-center w-full max-w-3xl mx-auto px-4' style={{ paddingTop: '200px' }}>
      {/* Text container with centered content */}
      <div className="text-center mb-4">
      <h1 className="text-4xl sm:text-5xl lg:text-7xl font-medium bg-gradient-to-r from-blue-600 to-indigo-700 text-transparent bg-clip-text">About Page stuff here.</h1>
        <h1 className="text-5xl font-medium text-gray-800 mt-6 sm:mt-10">소개 페이지 내용은 여기예요.</h1>
      </div>
      </div>
    </>
  )
}

export default AboutPage