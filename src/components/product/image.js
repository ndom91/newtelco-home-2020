import react from 'React'

const ItemImage = () => {
  return (
    <div class='flex flex-col justify-center py-6 min-h-screen bg-gray-100 sm:py-12'>
      <div class='relative py-3 sm:mx-auto sm:max-w-xl'>
        <div class='from-teal-400 absolute inset-0 bg-gradient-to-r shadow-lg to-blue-400 transform -skew-y-6 sm:rounded-3xl sm:-rotate-6 sm:skew-y-0'></div>
        <div class='relative px-4 py-10 bg-white shadow-lg sm:p-20 sm:rounded-3xl'>
          <div class='mx-auto max-w-md'>
            <div>
              <img src='/img/logo.svg' class='h-7 sm:h-8' />
            </div>
            <div class='divide-gray-200 divide-y'>
              <div class='py-8 text-gray-700 text-base leading-6 space-y-4 sm:text-lg sm:leading-7'>
                <p>
                  An advanced online playground for Tailwind CSS, including
                  support for things like:
                </p>
                <ul class='list-disc space-y-2'>
                  <li class='flex items-start'>
                    <span class='flex items-center h-6 sm:h-7'>
                      <svg
                        class='text-teal-500 flex-shrink-0 w-5 h-5'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                      >
                        <path
                          fill-rule='evenodd'
                          d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                          clip-rule='evenodd'
                        />
                      </svg>
                    </span>
                    <p class='ml-2'>
                      Customizing your
                      <code class='text-gray-900 text-sm font-bold'>
                        tailwind.config.js
                      </code>{' '}
                      file
                    </p>
                  </li>
                  <li class='flex items-start'>
                    <span class='flex items-center h-6 sm:h-7'>
                      <svg
                        class='text-teal-500 flex-shrink-0 w-5 h-5'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                      >
                        <path
                          fill-rule='evenodd'
                          d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                          clip-rule='evenodd'
                        />
                      </svg>
                    </span>
                    <p class='ml-2'>
                      Extracting classes with
                      <code class='text-gray-900 text-sm font-bold'>
                        @apply
                      </code>
                    </p>
                  </li>
                  <li class='flex items-start'>
                    <span class='flex items-center h-6 sm:h-7'>
                      <svg
                        class='text-teal-500 flex-shrink-0 w-5 h-5'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                      >
                        <path
                          fill-rule='evenodd'
                          d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                          clip-rule='evenodd'
                        />
                      </svg>
                    </span>
                    <p class='ml-2'>Code completion with instant preview</p>
                  </li>
                </ul>
                <p>
                  Perfect for learning how the framework works, prototyping a
                  new idea, or creating a demo to share online.
                </p>
              </div>
              <div class='pt-6 text-base font-bold leading-6 sm:text-lg sm:leading-7'>
                <p>Want to dig deeper into Tailwind?</p>
                <p>
                  <a
                    href='https://tailwindcss.com'
                    class='text-teal-600 hover:text-teal-700'
                  >
                    {' '}
                    Read the docs &rarr;{' '}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemImage
