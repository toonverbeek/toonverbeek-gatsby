import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <header
    className="border-b border-gray-50"
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div className="flex justify-between px-4 py-8 ">
      <div className="flex items-center">
        <h1 className="m-0 text-lg">
          <Link
            to="/"
            style={{
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
      <div className="flex items-center">
        <a href="https://twitter.com/tonnusos" target="_blank" rel="noreferrer">
          <svg
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-4"
          >
            <path
              d="M19.9698 1.95587C19.9521 1.68844 19.7759 1.45763 19.5226 1.36998C19.2693 1.28232 18.9882 1.35485 18.8089 1.5541C18.3482 2.06631 17.7657 2.4134 17.1747 2.57165C16.3526 1.80415 15.248 1.33331 14.0342 1.33331C11.4291 1.33331 9.31898 3.44815 9.31898 6.05477V6.64118C5.33065 6.33296 3.19784 3.30326 2.62233 1.76621C2.52931 1.51776 2.29783 1.34811 2.0329 1.33422C1.76797 1.32033 1.52002 1.46484 1.40153 1.7022C0.00589085 4.49778 -0.209143 7.20924 0.805198 9.51812C1.69376 11.5407 3.48074 13.1518 6.01344 14.2192C4.86239 15.035 2.92505 16 0.666718 16C0.373028 16 0.113933 16.1922 0.028726 16.4732C-0.056481 16.7543 0.052274 17.058 0.296523 17.2211C2.462 18.667 4.73153 18.6668 6.84246 18.6666L6.90706 18.6666C13.3879 18.6666 18.64 13.405 18.64 6.91663V6.27891C19.1245 5.78641 19.5018 5.28225 19.733 4.63048C19.991 3.90322 20.043 3.05995 19.9698 1.95587Z"
              fill="black"
            />
          </svg>
        </a>
        <a
          href="https://linkedin.com/in/toonverbeek"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 2C0 0.895431 0.89543 0 2 0H18C19.1046 0 20 0.89543 20 2V18C20 19.1046 19.1046 20 18 20H2C0.895431 20 0 19.1046 0 18V2ZM6.66667 6.66667H5.33333V5.33333H6.66667V6.66667ZM5.33333 14.6667V8H6.66667V14.6667H5.33333ZM11.3333 9.33333C10.2288 9.33333 9.33333 10.2288 9.33333 11.3333V14.6667H8V8H9.33333V8.66642C9.89044 8.24796 10.5829 8 11.3333 8C13.1743 8 14.6667 9.49238 14.6667 11.3333V14.6667H13.3333V11.3333C13.3333 10.2288 12.4379 9.33333 11.3333 9.33333Z"
              fill="black"
            />
          </svg>
        </a>
        <Link
          to="https://blog.toonverbeek.com"
          className="px-4 py-2 ml-4 text-white rounded-sm bg-blue-gray-800 hover:bg-blue-gray-700"
        >
          Blog
        </Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
