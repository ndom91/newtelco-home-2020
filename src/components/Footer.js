import React from 'react'
import Logo from './NewtelcoLogo'

const Footer = ({ social }) => {
  const today = new Date()
  const year = today.getFullYear()

  const fb = social.find(item => item.provider === 'Facebook').url
  const twitter = social.find(item => item.provider === 'Twitter').url
  const github = social.find(item => item.provider === 'Github').url
  const instagram = social.find(item => item.provider === 'Instagram').url
  const linkedin = social.find(item => item.provider === 'Linkedin').url

  return (
    <footer className="text-gray-500 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-no-wrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <Logo />
            <span className="ml-3 text-xl">NewTelco GmbH</span>
          </a>
          <p className="mt-2 text-sm text-gray-700">
            Air plant banjo lyft occupy retro adaptogen indego
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              Locations
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 text-sm hover:text-white">
                  First Link
                </a>
              </li>
              <li>
                <a className="text-gray-600 text-sm hover:text-white">
                  Second Link
                </a>
              </li>
              <li>
                <a className="text-gray-600 text-sm hover:text-white">
                  Third Link
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              Company
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 text-sm hover:text-white">
                  First Link
                </a>
              </li>
              <li>
                <a className="text-gray-600 text-sm hover:text-white">
                  Second Link
                </a>
              </li>
              <li>
                <a className="text-gray-600 text-sm hover:text-white">
                  Third Link
                </a>
              </li>
              <li>
                <a className="text-gray-600 text-sm hover:text-white">
                  Fourth Link
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              Products
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 text-sm hover:text-white">
                  First Link
                </a>
              </li>
              <li>
                <a className="text-gray-600 text-sm hover:text-white">
                  Second Link
                </a>
              </li>
              <li>
                <a className="text-gray-600 text-sm hover:text-white">
                  Third Link
                </a>
              </li>
              <li>
                <a className="text-gray-600 text-sm hover:text-white">
                  Fourth Link
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              Services
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 text-sm hover:text-white">
                  First Link
                </a>
              </li>
              <li>
                <a className="text-gray-600 text-sm hover:text-white">
                  Second Link
                </a>
              </li>
              <li>
                <a className="text-gray-600 text-sm hover:text-white">
                  Third Link
                </a>
              </li>
              <li>
                <a className="text-gray-600 text-sm hover:text-white">
                  Fourth Link
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-800">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-600 text-sm text-center sm:text-left">
            © {year} NewTelco GmbH -
            <a
              href="https://github.com/ndom91"
              rel="noopener noreferrer"
              className="text-gray-700 ml-1 hover:text-green-500 hover:no-underline"
              target="_blank"
            >
              @ndomino
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a href={fb} className="text-gray-600 hover:text-green-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a
              href={twitter}
              className="ml-3 text-gray-600 hover:text-green-500"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a
              href={instagram}
              className="ml-3 text-gray-600 hover:text-green-500"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a
              href={linkedin}
              className="ml-3 text-gray-600 hover:text-green-500"
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
            <a
              href={github}
              className="ml-3 text-gray-600 hover:text-green-500"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M5.883 18.653c-.3-.2-.558-.455-.86-.816a50.32 50.32 0 0 1-.466-.579c-.463-.575-.755-.84-1.057-.949a1 1 0 0 1 .676-1.883c.752.27 1.261.735 1.947 1.588-.094-.117.34.427.433.539.19.227.33.365.44.438.204.137.587.196 1.15.14.023-.382.094-.753.202-1.095C5.38 15.31 3.7 13.396 3.7 9.64c0-1.24.37-2.356 1.058-3.292-.218-.894-.185-1.975.302-3.192a1 1 0 0 1 .63-.582c.081-.024.127-.035.208-.047.803-.123 1.937.17 3.415 1.096A11.731 11.731 0 0 1 12 3.315c.912 0 1.818.104 2.684.308 1.477-.933 2.613-1.226 3.422-1.096.085.013.157.03.218.05a1 1 0 0 1 .616.58c.487 1.216.52 2.297.302 3.19.691.936 1.058 2.045 1.058 3.293 0 3.757-1.674 5.665-4.642 6.392.125.415.19.879.19 1.38a300.492 300.492 0 0 1-.012 2.716 1 1 0 0 1-.019 1.958c-1.139.228-1.983-.532-1.983-1.525l.002-.446.005-.705c.005-.708.007-1.338.007-1.998 0-.697-.183-1.152-.425-1.36-.661-.57-.326-1.655.54-1.752 2.967-.333 4.337-1.482 4.337-4.66 0-.955-.312-1.744-.913-2.404a1 1 0 0 1-.19-1.045c.166-.414.237-.957.096-1.614l-.01.003c-.491.139-1.11.44-1.858.949a1 1 0 0 1-.833.135A9.626 9.626 0 0 0 12 5.315c-.89 0-1.772.119-2.592.35a1 1 0 0 1-.83-.134c-.752-.507-1.374-.807-1.868-.947-.144.653-.073 1.194.092 1.607a1 1 0 0 1-.189 1.045C6.016 7.89 5.7 8.694 5.7 9.64c0 3.172 1.371 4.328 4.322 4.66.865.097 1.201 1.177.544 1.748-.192.168-.429.732-.429 1.364v3.15c0 .986-.835 1.725-1.96 1.528a1 1 0 0 1-.04-1.962v-.99c-.91.061-1.662-.088-2.254-.485z" />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
