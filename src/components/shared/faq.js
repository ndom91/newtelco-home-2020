import React, { useState } from 'react'

const Faq = () => {
  const [selectedItem, setSelectedItem] = useState(0)
  const toggle = item => {
    if (selectedItem === 0) {
      setSelectedItem(item)
    } else {
      setSelectedItem(0)
    }
  }
  return (
    <div className='flex items-start justify-center mt-40 h-screen lg:items-center'>
      <div className='container mx-auto px-4 h-full'>
        <h2 className='my-2 text-center text-green-500 font-mono text-3xl font-thin tracking-tight leading-loose lg:my-8 lg:text-4xl lg:text-5xl'>
          Frequently Asked Questions
        </h2>

        <section className='mt-6 bg-gray-800 rounded-lg shadow-md overflow-hidden sm:shadow-lg lg:mt-16 lg:mx-auto lg:max-w-4xl'>
          <article className='hover:bg-gray-500 border-b border-green-500'>
            <div>
              <header
                onClick={() => toggle(1)}
                className={`${
                  selectedItem === 1 && 'bg-green-500'
                } flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none`}
              >
                <h3 className='text-gray-800 text-xl font-semibold'>
                  Do you offer team pricing?
                </h3>
                <div className='flex items-center justify-center w-7 h-7 hover:bg-gray-200 border rounded-full'>
                  {selectedItem === 1 ? (
                    <div
                      x-show='selectedItem === 1'
                      className='flex items-center justify-center w-7 h-7 text-gray-500 rounded-full'
                    >
                      <svg
                        className='w-6 h-6'
                        fill='#67b246'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fill-rule='evenodd'
                          d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                          clip-rule='evenodd'
                        ></path>
                      </svg>
                    </div>
                  ) : (
                    <div className='flex items-center justify-center w-7 h-7 text-gray-500 rounded-full'>
                      <svg
                        className='w-6 h-6'
                        fill='#67b246'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fill-rule='evenodd'
                          d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                          clip-rule='evenodd'
                        ></path>
                      </svg>
                    </div>
                  )}
                </div>
              </header>
              {selectedItem === 1 && (
                <div>
                  <div className='pl-8 pr-8 py-5 text-gray-700 bg-gray-100'>
                    <p>
                      Yes, we do! Team pricing is available for any plan. You
                      can take advantage of 30% off for signing up for team
                      pricing of 10 users or more.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </article>

          <article className='hover:bg-gray-500 border-b border-green-500'>
            <div>
              <header
                onClick={() => toggle(2)}
                className={`${
                  selectedItem === 2 && 'bg-green-500'
                } flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none`}
              >
                <h3 className='text-gray-800 text-xl font-semibold'>
                  How do I add a custom domain?
                </h3>
                <div className='flex items-center justify-center w-7 h-7 hover:bg-gray-200 border rounded-full'>
                  {selectedItem === 2 ? (
                    <div
                      x-show='selectedItem === 1'
                      className='flex items-center justify-center w-7 h-7 text-gray-500 rounded-full'
                    >
                      <svg
                        className='w-6 h-6'
                        fill='#67b246'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fill-rule='evenodd'
                          d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                          clip-rule='evenodd'
                        ></path>
                      </svg>
                    </div>
                  ) : (
                    <div className='flex items-center justify-center w-7 h-7 text-gray-500 rounded-full'>
                      <svg
                        className='w-6 h-6'
                        fill='#67b246'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fill-rule='evenodd'
                          d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                          clip-rule='evenodd'
                        ></path>
                      </svg>
                    </div>
                  )}
                </div>
              </header>
              {selectedItem === 2 && (
                <div>
                  <div className='pl-8 pr-8 py-5 text-gray-700 bg-gray-100'>
                    <p>
                      You can easily change your site settings inside of your
                      site dashboard by clicking the top right menu and clicking
                      the settings button.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </article>

          <article className='hover:bg-gray-500 border-b border-green-500'>
            <div>
              <header
                onClick={() => toggle(3)}
                className={`${
                  selectedItem === 3 && 'bg-green-500'
                } flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none`}
              >
                <h3 className='text-gray-800 text-xl font-semibold'>
                  How do I add a custom domain?
                </h3>
                <div className='flex items-center justify-center w-7 h-7 hover:bg-gray-200 border rounded-full'>
                  {selectedItem === 3 ? (
                    <div
                      x-show='selectedItem === 1'
                      className='flex items-center justify-center w-7 h-7 text-gray-500 rounded-full'
                    >
                      <svg
                        className='w-6 h-6'
                        fill='#67b246'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fill-rule='evenodd'
                          d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                          clip-rule='evenodd'
                        ></path>
                      </svg>
                    </div>
                  ) : (
                    <div className='flex items-center justify-center w-7 h-7 text-gray-500 rounded-full'>
                      <svg
                        className='w-6 h-6'
                        fill='#67b246'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fill-rule='evenodd'
                          d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                          clip-rule='evenodd'
                        ></path>
                      </svg>
                    </div>
                  )}
                </div>
              </header>
              {selectedItem === 3 && (
                <div x-show='selectedItem === 3'>
                  <div className='pl-8 pr-8 py-5 text-gray-700 bg-gray-100'>
                    <p>
                      Our platform works with your content to provides insights
                      and metrics on how you can grow your business and scale
                      your infastructure.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </article>
        </section>
      </div>
    </div>
  )
}

export default Faq
