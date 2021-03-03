import React from 'react'

const ColoPricing = () => {
  return (
    <section>
      <div class='container mx-auto px-6 py-24 max-w-full'>
        {/* <h1 class='text-center text-4xl text-green-500 font-medium leading-snug tracking-wider'>
          Pricing
        </h1>
        <p class='text-center text-lg text-gray-700 mt-2 px-6'>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam.
        </p>
        <div class='h-1 mx-auto bg-green-500 w-24 opacity-75 mt-4 rounded'></div> */}

        <div class='mx-auto my-3 max-w-full md:px-8 md:max-w-6xl'>
          <div class='relative block flex flex-col items-center md:flex-row'>
            <div class='relative z-0 my-8 w-11/12 max-w-sm rounded-lg shadow-lg sm:my-5 sm:w-3/5 md:-mr-4 lg:w-1/3'>
              <div class='text-black bg-white rounded-lg shadow-inner shadow-lg overflow-hidden'>
                <div class='sm:text-md block mt-2 mx-auto px-8 max-w-sm text-left text-black text-sm lg:px-6'>
                  <h1 class='p-3 pb-0 text-center text-lg font-medium tracking-wide uppercase'>
                    Half Rack
                  </h1>
                  <h2 class='pb-6 text-center text-gray-500 text-sm'>
                    <small>From</small> €120 /mo
                  </h2>
                  With fantastic around the clock support, NewTelco offers
                  everything you need to open a new PoP or just get your
                  hardware online, fast!
                </div>

                <div class='flex flex-wrap mt-3 px-6'>
                  <ul>
                    <li class='flex items-center'>
                      <div class='p-2 text-green-700 rounded-full fill-current'>
                        <svg
                          class='align-middle w-6 h-6'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='#67b246'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
                          <polyline points='22 4 12 14.01 9 11.01'></polyline>
                        </svg>
                      </div>
                      <span class='ml-3 text-gray-700 text-lg'>
                        Electricity
                      </span>
                    </li>
                    <li class='flex items-center'>
                      <div class='p-2 text-green-700 rounded-full fill-current'>
                        <svg
                          class='align-middle w-6 h-6'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='#67b246'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
                          <polyline points='22 4 12 14.01 9 11.01'></polyline>
                        </svg>
                      </div>
                      <span class='ml-3 text-gray-700 text-lg'>
                        Setup Included
                      </span>
                    </li>
                    <li class='flex items-center'>
                      <div class='p-2 text-green-700 rounded-full fill-current'>
                        <svg
                          class='align-middle w-6 h-6'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='#67b246'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
                          <polyline points='22 4 12 14.01 9 11.01'></polyline>
                        </svg>
                      </div>
                      <span class='ml-3 text-gray-700 text-lg'>Support</span>
                    </li>
                  </ul>
                </div>
                <div class='block flex items-center p-8 uppercase'>
                  <button class='block mt-3 px-6 py-3 w-full text-white text-lg font-semibold hover:bg-gray-700 bg-green-500 rounded-lg shadow-xl transition duration-300 ease-in-out'>
                    Select
                  </button>
                </div>
              </div>
            </div>
            <div class='relative z-10 my-8 w-full max-w-md bg-white rounded-lg shadow-lg sm:my-5 sm:w-2/3 lg:w-1/3'>
              <div class='py-4 text-center text-black text-sm font-semibold tracking-wide leading-none bg-gray-200 rounded-t-lg uppercase'>
                Most Popular
              </div>
              <div class='sm:text-md block mt-2 mx-auto px-8 max-w-sm text-left text-black text-sm lg:px-6'>
                <h1 class='p-3 pb-0 text-center text-lg font-medium tracking-wide uppercase'>
                  Full Rack
                </h1>
                <h2 class='pb-6 text-center text-gray-500 text-sm'>
                  <span class='text-3xl'>
                    <small>From</small> €300
                  </span>{' '}
                  /mo
                </h2>
                With fantastic around the clock support, NewTelco offers
                everything you need to open a new PoP or just get your hardware
                online, fast!
              </div>
              <div class='flex justify-start mt-3 pl-12 sm:justify-start'>
                <ul>
                  <li class='flex items-center'>
                    <div class='p-2 text-green-700 rounded-full fill-current'>
                      <svg
                        class='align-middle w-6 h-6'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='#67b246'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      >
                        <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
                        <polyline points='22 4 12 14.01 9 11.01'></polyline>
                      </svg>
                    </div>
                    <span class='ml-3 text-gray-700 text-lg'>Electricity</span>
                  </li>
                  <li class='flex items-center'>
                    <div class='p-2 text-green-700 rounded-full fill-current'>
                      <svg
                        class='align-middle w-6 h-6'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='#67b246'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      >
                        <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
                        <polyline points='22 4 12 14.01 9 11.01'></polyline>
                      </svg>
                    </div>
                    <span class='ml-3 text-gray-700 text-lg'>
                      No Setup fees
                    </span>
                  </li>
                  <li class='flex items-center'>
                    <div class='p-2 text-green-700 rounded-full fill-current'>
                      <svg
                        class='align-middle w-6 h-6'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='#67b246'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      >
                        <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
                        <polyline points='22 4 12 14.01 9 11.01'></polyline>
                      </svg>
                    </div>
                    <span class='ml-3 text-gray-700 text-lg'>Support</span>
                  </li>
                </ul>
              </div>

              <div class='block flex items-center p-8 uppercase'>
                <button class='block mt-3 px-6 py-3 w-full text-white text-lg font-semibold hover:bg-gray-700 bg-green-500 rounded-lg shadow-xl transition duration-300 ease-in-out'>
                  Select
                </button>
              </div>
            </div>
            <div class='relative z-0 my-8 w-11/12 max-w-sm rounded-lg shadow-lg sm:my-5 sm:w-3/5 md:-ml-4 lg:w-1/3'>
              <div class='text-black bg-white rounded-lg shadow-inner shadow-lg overflow-hidden'>
                <div class='sm:text-md block mt-2 mx-auto px-8 max-w-sm text-left text-black text-sm lg:px-6'>
                  <h1 class='p-3 pb-0 text-center text-lg font-medium tracking-wide uppercase'>
                    2+ Racks
                  </h1>
                  <h2 class='pb-6 text-center text-gray-500 text-sm'>
                    Custom Pricing
                  </h2>
                  With fantastic around the clock support, NewTelco offers
                  everything you need to open a new PoP or just get your
                  hardware online, fast!
                </div>
                <div class='flex flex-wrap mt-3 px-6'>
                  <ul>
                    <li class='flex items-center'>
                      <div class='p-2 text-green-700 rounded-full fill-current'>
                        <svg
                          class='align-middle w-6 h-6'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='#67b246'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
                          <polyline points='22 4 12 14.01 9 11.01'></polyline>
                        </svg>
                      </div>
                      <span class='ml-3 text-gray-700 text-lg'>
                        Power (2kW)
                      </span>
                    </li>
                    <li class='flex items-center'>
                      <div class='p-2 text-green-700 rounded-full fill-current'>
                        <svg
                          class='align-middle w-6 h-6'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='#67b246'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
                          <polyline points='22 4 12 14.01 9 11.01'></polyline>
                        </svg>
                      </div>
                      <span class='ml-3 text-gray-700 text-lg'>
                        Premium Support
                      </span>
                    </li>
                    <li class='flex items-center'>
                      <div class='p-2 text-green-700 rounded-full fill-current'>
                        <svg
                          class='align-middle w-6 h-6'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='#67b246'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
                          <polyline points='22 4 12 14.01 9 11.01'></polyline>
                        </svg>
                      </div>
                      <span class='ml-3 text-gray-700 text-lg'>
                        Remote Hands
                      </span>
                    </li>
                  </ul>
                </div>

                <div class='block flex items-center p-8 uppercase'>
                  <button class='block mt-3 px-6 py-3 w-full text-white text-lg font-semibold hover:bg-gray-700 bg-green-500 rounded-lg shadow-xl transition duration-300 ease-in-out'>
                    Select
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ColoPricing
