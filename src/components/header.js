import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <header
    className="border-b border-gray-100"
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div className="flex justify-between px-4 py-8">
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
