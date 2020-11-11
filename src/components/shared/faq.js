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
    <div className='h-screen flex items-start lg:items-center justify-center mt-40'>
      <div className='container mx-auto px-4 h-full'>
        <h2 className='text-green-500 font-thin font-mono tracking-tight leading-loose text-center text-3xl lg:text-4xl lg:text-5xl my-2 lg:my-8'>
          Frequently Asked Questions
        </h2>

        <section className='shadow-md bg-gray-800 overflow-hidden rounded-lg mt-6 sm:shadow-lg lg:mt-16 lg:mx-auto lg:max-w-4xl'>
          <article className='border-green-500 border-b hover:bg-gray-500'>
            <div>
              <header
                onClick={() => toggle(1)}
                className={`${selectedItem === 1 &&
                  'bg-green-500'} flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none`}
              >
                <h3 className='font-semibold text-xl text-gray-800'>
                  Do you offer team pricing?
                </h3>
                <div className='rounded-full border w-7 h-7 flex items-center justify-center hover:bg-gray-200'>
                  {selectedItem === 1 ? (
                    <div
                      x-show='selectedItem === 1'
                      className='rounded-full text-gray-500 w-7 h-7 flex items-center justify-center'
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
                    <div className='rounded-full text-gray-500 w-7 h-7 flex items-center justify-center'>
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
                  <div className='pl-8 pr-8 py-5 bg-gray-100 text-gray-700'>
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

          <article className='border-green-500 border-b hover:bg-gray-500'>
            <div>
              <header
                onClick={() => toggle(2)}
                className={`${selectedItem === 2 &&
                  'bg-green-500'} flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none`}
              >
                <h3 className='font-semibold text-xl text-gray-800'>
                  How do I add a custom domain?
                </h3>
                <div className='rounded-full border w-7 h-7 flex items-center justify-center hover:bg-gray-200'>
                  {selectedItem === 2 ? (
                    <div
                      x-show='selectedItem === 1'
                      className='rounded-full text-gray-500 w-7 h-7 flex items-center justify-center'
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
                    <div className='rounded-full text-gray-500 w-7 h-7 flex items-center justify-center'>
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
                  <div className='pl-8 pr-8 py-5 bg-gray-100 text-gray-700'>
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

          <article className='border-green-500 border-b hover:bg-gray-500'>
            <div>
              <header
                onClick={() => toggle(3)}
                className={`${selectedItem === 3 &&
                  'bg-green-500'} flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none`}
              >
                <h3 className='font-semibold text-xl text-gray-800'>
                  How do I add a custom domain?
                </h3>
                <div className='rounded-full border w-7 h-7 flex items-center justify-center hover:bg-gray-200'>
                  {selectedItem === 3 ? (
                    <div
                      x-show='selectedItem === 1'
                      className='rounded-full text-gray-500 w-7 h-7 flex items-center justify-center'
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
                    <div className='rounded-full text-gray-500 w-7 h-7 flex items-center justify-center'>
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
                  <div className='pl-8 pr-8 py-5 bg-gray-100 text-gray-700'>
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
