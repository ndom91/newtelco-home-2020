import React from 'react'

const HeaderBanner = () => {
  return (
    <div class='bg-indigo-600'>
      <div class='mx-auto px-3 py-3 max-w-screen-xl sm:px-6 lg:px-8'>
        <div class='flex flex-wrap items-center justify-between'>
          <div class='flex flex-1 items-center w-0'>
            <span class='flex p-2 bg-indigo-800 rounded-lg'>
              <svg
                class='w-6 h-6 text-white'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z'
                />
              </svg>
            </span>
            <p class='ml-3 text-white font-medium truncate'>
              <span class='md:hidden'>We announced a new product!</span>
              <span class='hidden md:inline'>
                Big news! We're excited to announce a brand new product.
              </span>
            </p>
          </div>
          <div class='flex-shrink-0 order-3 mt-2 w-full sm:order-2 sm:mt-0 sm:w-auto'>
            <div class='rounded-md shadow-sm'>
              <a
                href='#'
                class='flex items-center justify-center px-4 py-2 hover:text-indigo-500 text-indigo-600 text-sm font-medium leading-5 bg-white border border-transparent rounded-md focus:outline-none focus:shadow-outline transition duration-150 ease-in-out'
              >
                Learn more
              </a>
            </div>
          </div>
          <div class='flex-shrink-0 order-2 sm:order-3 sm:ml-3'>
            <button
              type='button'
              class='flex -mr-1 p-2 hover:bg-indigo-500 focus:bg-indigo-500 rounded-md focus:outline-none transition duration-150 ease-in-out sm:-mr-2'
              aria-label='Dismiss'
            >
              <svg
                class='w-6 h-6 text-white'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderBanner
