import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { NavLink } from 'react-router-dom'

export default function NotFound() {
    const { setTheme, light, dark, theme } = useContext(ThemeContext);

    const themeChoice = theme === 'light' ? light : dark;

    return (
      <div className="bg-white min-h-screen flex flex-col lg:relative z-0">
        <div className="flex-grow flex flex-col">
          <main className={theme === 'light' ? "flex-grow flex flex-col bg-light-bg" : "flex-grow flex flex-col bg-dark-bg"}>
            <div className="flex-grow mx-auto max-w-7xl w-full flex flex-col px-4 sm:px-6 lg:px-8">
              <div className="flex-shrink-0 pt-10 sm:pt-16">
                <a href="/" className="inline-flex">
                  <span className="sr-only">Workflow</span>
                </a>
              </div>
              <div className="flex-shrink-0 my-auto py-16 sm:py-32">
                <p className={theme === 'light' ? "text-sm font-semibold text-peach uppercase tracking-wide" : "text-sm font-semibold text-avocado uppercase tracking-wide"}>404 error</p>
                <h1 className={theme === 'light' ? "mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl" : "mt-2 text-4xl font-extrabold text-grey-text tracking-tight sm:text-5xl"}>Page not found</h1>
                <p className="mt-2 text-base text-gray-500">Sorry, we couldn’t find the page you’re looking for.</p>
                <div className="mt-6">
                  <a href="#" className={theme === 'light' ? "text-base font-medium text-peach hover:text-indigo-500" : "text-base font-medium text-avocado hover:text-indigo-500"}>
                    <NavLink to='/' exact={true}>Go back home<span aria-hidden="true"> &rarr;</span></NavLink>
                  </a>
                </div>
              </div>
            </div>
          </main>
          <footer className={theme === 'light' ? "flex-shrink-0 bg-light-bg" : "flex-shrink-0 bg-dark-bg"}>
            <div className="mx-auto max-w-7xl w-full px-4 py-16 sm:px-6 lg:px-8">
              <nav className="flex space-x-4">
                <a href="https://github.com/owenbeckles" className={theme === 'light' ? "text-sm font-medium text-gray-500 hover:text-peach" : "text-sm font-medium text-gray-500 hover:text-avocado"}>
                        Github
                </a>
                <span className="inline-block border-l border-gray-300" aria-hidden="true" />
                <a href="https://www.linkedin.com/in/becklesowen/" className={theme === 'light' ? "text-sm font-medium text-gray-500 hover:text-peach" : "text-sm font-medium text-gray-500 hover:text-avocado"}>
                        LinkedIn
                </a>
                <span className="inline-block border-l border-gray-300" aria-hidden="true" />
                <a href="https://owenbeckles.com" className={theme === 'light' ? "text-sm font-medium text-gray-500 hover:text-peach" : "text-sm font-medium text-gray-500 hover:text-avocado"}>
                  Portfolio
                </a>
              </nav>
            </div>
          </footer>
        </div>
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://live.staticflickr.com/65535/51384665961_fdce52d2f9_b.jpg"
            alt=""
          />
        </div>
      </div>
    )
  }