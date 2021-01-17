/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import '@fontsource/inter'
import Header from './header'
import './layout.css'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <main>{children}</main>
        <footer className="flex items-center p-4 mt-24 text-gray-300 bg-black border-t border-gray-100 place-content-between">
          <span className="ml-4">
            Toon Verbeek © {new Date().getFullYear()}
          </span>
          <button
            type="button"
            className="px-4 py-2 font-bold text-white bg-yellow-500 rounded "
          >
            Work with me
          </button>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
