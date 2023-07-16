import React from 'react'

function HomeFooter() {
  return (
    <footer className="bg-neutral-800 text-white body-font">
    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      
      <p className="text-sm text-white sm:ml-4 sm:pl-4 ">
        Built with 💚 by Pushkar Yadav —
        <a
          href="https://github.com/pushkarydv"
          className="text-white ml-1"
          rel="noopener noreferrer"
          target="_blank"
        >
          @pushkarydv
        </a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a
          className="ml-3 text-white"
          href="https://twitter.com/pushkaryadavin"
          rel="noopener noreferrer"
          target="_blank"
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
          className="ml-3 text-white"
          href="https://instagram.com/pushkaryadav_"
          rel="noopener noreferrer"
          target="_blank"
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
          className="ml-3 text-white"
          href="https://www.linkedin.com/in/pushkarydv/"
          rel="noopener noreferrer"
          target="_blank"
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
      </span>
    </div>
  </footer>
  )
}

export default HomeFooter