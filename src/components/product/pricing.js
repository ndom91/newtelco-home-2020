import React from 'react'

const ColoPricing = () => {
  return (
    <section>
      <div class='container max-w-full mx-auto py-24 px-6'>
        {/* <h1 class='text-center text-4xl text-green-500 font-medium leading-snug tracking-wider'>
          Pricing
        </h1>
        <p class='text-center text-lg text-gray-700 mt-2 px-6'>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam.
        </p>
        <div class='h-1 mx-auto bg-green-500 w-24 opacity-75 mt-4 rounded'></div> */}

        <div class='max-w-full md:max-w-6xl mx-auto my-3 md:px-8'>
          <div class='relative block flex flex-col md:flex-row items-center'>
            <div class='w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-mr-4'>
              <div class='bg-white text-black rounded-lg shadow-inner shadow-lg overflow-hidden'>
                <div class='block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6'>
                  <h1 class='text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide'>
                    Half Rack
                  </h1>
                  <h2 class='text-sm text-gray-500 text-center pb-6'>
                    <small>From</small> €120 /mo
                  </h2>
                  With fantastic around the clock support, NewTelco offers
                  everything you need to open a new PoP or just get your
                  hardware online, fast!
                </div>

                <div class='flex flex-wrap mt-3 px-6'>
                  <ul>
                    <li class='flex items-center'>
                      <div class=' rounded-full p-2 fill-current text-green-700'>
                        <svg
                          class='w-6 h-6 align-middle'
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
                      <span class='text-gray-700 text-lg ml-3'>
                        Electricity
                      </span>
                    </li>
                    <li class='flex items-center'>
                      <div class=' rounded-full p-2 fill-current text-green-700'>
                        <svg
                          class='w-6 h-6 align-middle'
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
                      <span class='text-gray-700 text-lg ml-3'>
                        Setup Included
                      </span>
                    </li>
                    <li class='flex items-center'>
                      <div class=' rounded-full p-2 fill-current text-green-700'>
                        <svg
                          class='w-6 h-6 align-middle'
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
                      <span class='text-gray-700 text-lg ml-3'>Support</span>
                    </li>
                  </ul>
                </div>
                <div class='block flex items-center p-8  uppercase'>
                  <button class='mt-3 text-lg font-semibold bg-green-500 w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:bg-gray-700 transition ease-in-out duration-300'>
                    Select
                  </button>
                </div>
              </div>
            </div>
            <div class='w-full max-w-md sm:w-2/3 lg:w-1/3 sm:my-5 my-8 relative z-10 bg-white rounded-lg shadow-lg'>
              <div class='text-sm leading-none rounded-t-lg bg-gray-200 text-black font-semibold uppercase py-4 text-center tracking-wide'>
                Most Popular
              </div>
              <div class='block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6'>
                <h1 class='text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide'>
                  Full Rack
                </h1>
                <h2 class='text-sm text-gray-500 text-center pb-6'>
                  <span class='text-3xl'>
                    <small>From</small> €300
                  </span>{' '}
                  /mo
                </h2>
                With fantastic around the clock support, NewTelco offers
                everything you need to open a new PoP or just get your hardware
                online, fast!
              </div>
              <div class='flex pl-12 justify-start sm:justify-start mt-3'>
                <ul>
                  <li class='flex items-center'>
                    <div class='rounded-full p-2 fill-current text-green-700'>
                      <svg
                        class='w-6 h-6 align-middle'
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
                    <span class='text-gray-700 text-lg ml-3'>Electricity</span>
                  </li>
                  <li class='flex items-center'>
                    <div class=' rounded-full p-2 fill-current text-green-700'>
                      <svg
                        class='w-6 h-6 align-middle'
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
                    <span class='text-gray-700 text-lg ml-3'>
                      No Setup fees
                    </span>
                  </li>
                  <li class='flex items-center'>
                    <div class=' rounded-full p-2 fill-current text-green-700'>
                      <svg
                        class='w-6 h-6 align-middle'
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
                    <span class='text-gray-700 text-lg ml-3'>Support</span>
                  </li>
                </ul>
              </div>

              <div class='block flex items-center p-8  uppercase'>
                <button class='mt-3 text-lg font-semibold bg-green-500 w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:bg-gray-700 transition ease-in-out duration-300'>
                  Select
                </button>
              </div>
            </div>
            <div class='w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-ml-4'>
              <div class='bg-white text-black rounded-lg shadow-inner shadow-lg overflow-hidden'>
                <div class='block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6'>
                  <h1 class='text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide'>
                    2+ Racks
                  </h1>
                  <h2 class='text-sm text-gray-500 text-center pb-6'>
                    Custom Pricing
                  </h2>
                  With fantastic around the clock support, NewTelco offers
                  everything you need to open a new PoP or just get your
                  hardware online, fast!
                </div>
                <div class='flex flex-wrap mt-3 px-6'>
                  <ul>
                    <li class='flex items-center'>
                      <div class=' rounded-full p-2 fill-current text-green-700'>
                        <svg
                          class='w-6 h-6 align-middle'
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
                      <span class='text-gray-700 text-lg ml-3'>
                        Power (2kW)
                      </span>
                    </li>
                    <li class='flex items-center'>
                      <div class=' rounded-full p-2 fill-current text-green-700'>
                        <svg
                          class='w-6 h-6 align-middle'
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
                      <span class='text-gray-700 text-lg ml-3'>
                        Premium Support
                      </span>
                    </li>
                    <li class='flex items-center'>
                      <div class=' rounded-full p-2 fill-current text-green-700'>
                        <svg
                          class='w-6 h-6 align-middle'
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
                      <span class='text-gray-700 text-lg ml-3'>
                        Remote Hands
                      </span>
                    </li>
                  </ul>
                </div>

                <div class='block flex items-center p-8  uppercase'>
                  <button class='mt-3 text-lg font-semibold bg-green-500 w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:bg-gray-700 transition ease-in-out duration-300'>
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
