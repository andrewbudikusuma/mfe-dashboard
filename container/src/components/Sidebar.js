import React, { useState } from 'react';

export default function Sidebar(props) {
  const [isOpen, setOpen] = useState(false);
  const [isDropOpen, setDropOpen] = useState(false);

  return (
    <div className="md:flex flex-col md:flex-row md:min-h-screen w-full">
      <div className="flex flex-col w-full md:w-64 text-gray-700 bg-white flex-shrink-0">
        <div className="flex-shrink-0 px-8 py-4 flex flex-row items-center justify-between">
          <a href="#" className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg focus:outline-none focus:shadow-outline">QQQ</a>
          <button className="rounded-lg md:hidden rounded-lg focus:outline-none focus:shadow-outline" onClick={() => setOpen(!isOpen)}>
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
              {!isOpen && <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd"></path>}
              {isOpen && <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>}
            </svg>
          </button>
        </div>
        <nav className={`flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto ${isOpen ? 'block' : 'hidden'}`}>
          <a className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 hover:text-white focus:text-white hover:bg-indigo-700 focus:bg-indigo-700 focus:outline-none focus:shadow-outline">Dashboard</a>
          <div className="relative">
            <button className="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg md:block hover:text-white focus:text-white hover:bg-indigo-700 focus:bg-indigo-700 focus:outline-none focus:shadow-outline" onClick={()=> setDropOpen(!isDropOpen)}>
              <span>Partnership</span>
              <svg fill="currentColor" viewBox="0 0 20 20" className={`${isDropOpen ? 'rotate-180' : 'rotate-0'} inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1`}><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
            <div className={`absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg z-50 ${isDropOpen ? 'block': 'hidden'}`}>
              <div className="px-2 py-2 bg-white rounded-md shadow">
                <a className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 hover:text-white focus:text-white hover:bg-indigo-700 focus:bg-indigo-700 focus:outline-none focus:shadow-outline" href="#">Link #1</a>
                <a className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 hover:text-white focus:text-white hover:bg-indigo-700 focus:bg-indigo-700 focus:outline-none focus:shadow-outline" href="#">Link #2</a>
                <a className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 hover:text-white focus:text-white hover:bg-indigo-700 focus:bg-indigo-700 focus:outline-none focus:shadow-outline" href="#">Link #3</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="flex flex-col w-full">
        {props.children}
      </div>
    </div>
  )
}