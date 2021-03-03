import React from 'react'

const ctaAlert = () => {
  return (
    <div class='min-w-screen flex items-center justify-center p-5 min-h-screen bg-gray-100'>
      <div class='to-teal-400 relative flex flex-col items-center mx-auto px-4 py-8 w-full max-w-6xl text-center bg-gradient-to-br rounded-lg shadow-2xl from-purple-600 via-indigo-500 sm:px-6 md:pb-0 md:pt-12 lg:block lg:px-12 lg:py-12 lg:text-left'>
        <h2 class='my-4 text-white text-3xl font-extrabold tracking-tight sm:text-4xl sm:leading-tight md:text-5xl lg:my-0 xl:text-4xl'>
          Infastructure that is{' '}
          <span class='block text-indigo-200 xl:inline'>out of this world</span>
        </h2>
        <p class='mb-10 mt-1 text-indigo-200 text-sm font-medium uppercase lg:mb-0 xl:text-base xl:tracking-wider'>
          Pushing the envelope for being awesome!
        </p>
        <div class='flex mb-8 lg:mb-0 lg:mt-6'>
          <div class='inline-flex'>
            <a
              href='#'
              class='inline-flex items-center justify-center px-5 py-3 hover:text-indigo-600 text-indigo-700 text-base font-medium bg-indigo-100 hover:bg-indigo-50 border focus:border-indigo-300 border-transparent rounded-md focus:outline-none focus:shadow-outline transition duration-150 ease-in-out'
            >
              Sign Up Today
            </a>
          </div>
        </div>
        <div class='bottom-0 right-0 mb-0 mr-3 lg:absolute lg:-mb-12'>
          <img
            src='https://cdn.devdojo.com/images/september2020/cta-1.png'
            class='mb-4 max-w-xs opacity-75 md:max-w-2xl lg:max-w-lg xl:mb-0 xl:max-w-md'
          />
        </div>
      </div>
    </div>
  )
}

export default ctaAlert
