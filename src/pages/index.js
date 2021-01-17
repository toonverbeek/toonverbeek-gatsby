import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <section className="container justify-center w-full p-4 mx-auto my-12 lg:p-8 hero-container">
      <div className="flex flex-col items-center max-w-screen-lg m-auto text-center ">
        <div className="flex items-center mb-8 text-white bg-black rounded-full logo w-14 h-14">
          <span className="w-full text-lg font-bold text-center">TV</span>
        </div>
        <span className="font-semibold text-gray-700 ">
          Hi there 👋 I'm Toon
        </span>
        <h1
          style={{ lineHeight: 1.3 }}
          className="text-4xl font-black text-black leading md:text-6xl header-title"
        >
          Let's build something together
        </h1>
        <p className="max-w-xl text-xl leading-relaxed text-gray-600 header-subtitle">
          I’m a product engineer that helps people and companies build MVPs and
          websites, automate processes and product management work.
        </p>
        <div className="flex flex-col justify-center w-full mb-5 md:flex-row header-services">
          <div className="px-4 py-2 mb-4 font-bold transition-shadow duration-200 ease-in-out border-2 border-black rounded-lg cursor-pointer bg-gray-50 shadow-btn md:mb-0 md:mr-4 header-service">
            User Research
          </div>
          <div className="px-4 py-2 mb-4 font-bold transition-shadow duration-200 ease-in-out border-2 border-black rounded-lg cursor-pointer bg-gray-50 shadow-btn md:mb-0 md:mr-4 header-service">
            MVP & Prototyping
          </div>
          <div className="px-4 py-2 font-bold transition-shadow duration-200 ease-in-out border-2 border-black rounded-lg cursor-pointer bg-gray-50 shadow-btn header-service">
            Product Management
          </div>
        </div>
      </div>
      <div className="p-4 m-auto hero-image-container md:w-3/5">
        <Img
          className="mx-auto bg-contain rounded-lg "
          fluid={data.portraitToon.childImageSharp.fluid}
          alt="An astronaut"
        />
      </div>
    </section>
    <section className="p-4 my-12 lg:p-8 hero-validation">
      <h2 className="text-2xl font-medium text-center text-gray-500 validation-header">
        Trusted by companies small and large
      </h2>
      <div className="grid justify-around max-w-screen-lg grid-cols-2 gap-1 mx-auto text-center company-images">
        <div className="p-10 text-lg font-bold text-gray-500 rounded bg-gray-50 company-image">
          Homerun
        </div>
        <div className="p-10 text-lg font-bold text-gray-500 rounded bg-gray-50 company-image">
          Backbase
        </div>
        <div className="p-10 text-lg font-bold text-gray-500 rounded bg-gray-50 company-image">
          Bravely
        </div>
        <div className="p-10 text-lg font-bold text-gray-500 rounded bg-gray-50 company-image">
          Fox-it
        </div>
      </div>
    </section>
    <section className="max-w-screen-lg p-4 mx-auto my-12 lg:p-8 services">
      <div className="grid gap-4 mx-auto md:grid-cols-2 services-grid">
        <div className="flex flex-col max-w-sm service-block">
          <div
            className="w-16 h-16 rounded service-image-container"
            style={{ background: 'var(--primary-opacity)' }}
          />
          <h3>User Research & Interviews</h3>
          <p className="text-gray-500 service-description">
            I've spent a lot of time talking to users. My goal is to help you
            understand their problems and their motivations.
          </p>
        </div>
        <div className="flex flex-col max-w-sm service-block">
          <div
            className="w-16 h-16 rounded service-image-container"
            style={{ background: 'var(--primary-opacity)' }}
          />
          <h3>Prototype & MVP</h3>
          <p className="text-gray-500 service-description">
            Have an idea? I’ve been building prototypes for nearly a decade. Let
            me guide you through the most common pitfalls.
          </p>
        </div>
        <div className="flex flex-col max-w-sm service-block">
          <div
            className="w-16 h-16 rounded service-image-container"
            style={{ background: 'var(--primary-opacity)' }}
          />
          <h3>Product Management</h3>
          <p className="text-gray-500 service-description">
            What to build, for whom and when? If you’re building a digital
            product, these questions can be tough — so let me help you.
          </p>
        </div>
        <div className="flex flex-col max-w-sm service-block">
          <div
            className="w-16 h-16 rounded service-image-container"
            style={{ background: 'var(--primary-opacity)' }}
          />
          <h3>Product Engineering</h3>
          <p className="text-gray-500 service-description">
            Looking to build your next set of features for your customers? I can
            help you design it, then make it.
          </p>
        </div>
      </div>
    </section>
    <section className="mx-4 my-12 rounded projects">
      <h2 className="text-5xl text-center">Projects</h2>
      <div className="py-8 lg:px-32 ">
        <div className="max-w-4xl p-4 mx-auto bg-white border-2 border-black rounded shadow-flat project">
          <div className="relative mb-4 rounded h-96 project-image-container">
            <Img
              className="w-full h-full mx-auto rounded-lg"
              fluid={data.projectImage1.childImageSharp.fluid}
              alt="An astronaut"
            />
          </div>
          <h3 className="m-0">Project 1</h3>
          <p className="text-gray-700 project-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            qui natus error veritatis, commodi quae, iure quasi aliquid, libero
            fuga quis dicta eos ipsa magnam ipsam voluptatem aliquam vitae
            velit?
          </p>
        </div>
      </div>
      <div className="py-8 lg:px-32 ">
        <div className="max-w-4xl p-4 mx-auto bg-white border-2 border-black rounded shadow-flat project">
          <div className="relative mb-4 rounded h-96 project-image-container">
            <Img
              className="w-full h-full mx-auto rounded-lg"
              fluid={data.projectImage1.childImageSharp.fluid}
              alt="An astronaut"
            />
          </div>
          <h3 className="m-0">Project 1</h3>
          <p className="text-gray-700 project-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            qui natus error veritatis, commodi quae, iure quasi aliquid, libero
            fuga quis dicta eos ipsa magnam ipsam voluptatem aliquam vitae
            velit?
          </p>
        </div>
      </div>
      <div className="py-8 lg:px-32 ">
        <div className="max-w-4xl p-4 mx-auto bg-white border-2 border-black rounded shadow-flat project">
          <div className="relative mb-4 rounded h-96 project-image-container">
            <Img
              className="w-full h-full mx-auto rounded-lg"
              fluid={data.projectImage1.childImageSharp.fluid}
              alt="An astronaut"
            />
          </div>
          <h3 className="m-0">Project 1</h3>
          <p className="text-gray-700 project-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            qui natus error veritatis, commodi quae, iure quasi aliquid, libero
            fuga quis dicta eos ipsa magnam ipsam voluptatem aliquam vitae
            velit?
          </p>
        </div>
      </div>
    </section>
    <section
      className="p-4 xl:p-8 quotes"
      style={{ background: 'var(--primary-bg)' }}
    >
      <div className="items-center mx-auto my-12 2xl:grid 2xl:grid-cols-2">
        <div className="max-w-xl mx-auto 2xl:mx-8 xl:text-left quotes-text-block">
          <h2 className="text-5xl">Don't take my word for it</h2>
          <p className="text-center text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, at
            quidem ad quaerat eaque asperiores! Natus voluptas veniam mollitia
            vero ducimus fugiat minima, deserunt optio doloremque illo.
            Excepturi, ex expedita.
          </p>
        </div>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 2 }}>
          <Masonry className="max-w-2xl mx-auto">
            <div className="max-w-xs p-4 m-4 mx-auto bg-white quote-container rounded-xl">
              <div className="quote-text">
                <p>
                  I first met Toon when I joined Homerun for a growth project
                  and he was their only Product Manager. His computer science
                  background paired up with curiosity and user empathy made him
                  a natural problem solver.
                </p>
                <p>
                  Toon is a 1-man startup, someone you can rely on for the whole
                  journey. He will talk to users, identify the problem, think of
                  solutions, estimate their technical complexity and build.
                </p>
                <p>
                  Since Homerun, I've worked on another 3 projects with Toon.
                </p>
              </div>
              <div className="flex items-center quote-footer">
                <div className="relative w-20 mr-4 quote-footer-image-container">
                  <Img
                    className="absolute w-full bg-cover rounded-lg"
                    fluid={data.portraitBarbara.childImageSharp.fluid}
                    alt="preview of project"
                  />
                </div>
                <div className="flex flex-col w-full quote-footer-name">
                  <span className="font-bold">Bárbara Galiza</span>
                  <span>Head of Growth</span>
                </div>
              </div>
            </div>
            <div className="max-w-xs p-4 m-4 mx-auto bg-white quote-container md:mt-16 rounded-xl">
              <div className="quote-text">
                <p>
                  I worked with Toon at Homerun for a very enjoyable 1,5 years.
                  At Homerun, Toon did a great job building and leading a very
                  engaged engineering team. Toon and I worked together closely
                  on strategic and tactical product design projects.
                </p>
                <p>
                  I found Toon to be a very good conceptual and pragmatic
                  product thinker, empowered by his engineering background, his
                  knack and love for user experience, and his knowledge of our
                  product and customers.
                </p>
                <p>
                  His communication is always pleasant and clear, which helped
                  him built many strong relationships within his own team, the
                  wider company, and also with our customers. Toon truly cared
                  about the team and the product
                </p>
              </div>
              <div className="flex items-center quote-footer">
                <div className="relative w-20 mr-4 quote-footer-image-container">
                  <Img
                    className="absolute w-full bg-cover rounded-lg"
                    fluid={data.portraitJoris.childImageSharp.fluid}
                    alt="preview of project"
                  />
                </div>
                <div className="flex flex-col w-full quote-footer-name">
                  <span className="font-bold">Joris Zaalberg</span>
                  <span>Head of Design at Homerun</span>
                </div>
              </div>
            </div>

            <div className="max-w-xs p-4 m-4 mx-auto bg-white quote-container rounded-xl">
              <div className="quote-text">
                <p>
                  Working with Toon was an absolute pleasure. He helped us bring
                  meetbravely.co from an idea to product. Everything from
                  branding, development and setting up our learning management
                  system - Toon took care of it.
                </p>
                <p>
                  I would highly recommend working with Toon if you're looking
                  for someone that not only listens to your ideas, but helps you
                  take them to the next level.
                </p>
              </div>
              <div className="flex items-center quote-footer">
                <div className="relative w-20 mr-4 quote-footer-image-container">
                  <Img
                    className="absolute w-full bg-cover rounded-lg"
                    fluid={data.portraitCharlotte.childImageSharp.fluid}
                    alt="preview of project"
                  />
                </div>
                <div className="flex flex-col w-full quote-footer-name">
                  <span className="font-bold">Charlotte Mesterwerdt</span>
                  <span>Founder, Bravely</span>
                </div>
              </div>
            </div>
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </section>
    <section className="grid items-center p-4 my-12 lg:gap-12 lg:p-8 lg:grid-cols-2 offering">
      <div className="mx-auto text-center lg:max-w-md offering-header">
        <h2 className="text-5xl">Let's talk</h2>
        <p className="max-w-lg text-lg text-gray-700">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit deserunt
          corrupti, ab provident in voluptatem officiis voluptates soluta,
          perspiciatis praesentium corporis ipsum culpa ullam error consequuntur
          voluptate quo doloribus dolores.
        </p>
        <button
          className="px-4 py-2 mx-auto font-semibold text-gray-100 bg-black rounded md:mx-8 md:my-4 md:w-auto "
          type="button"
        >
          GET IN TOUCH 🚀
        </button>
        {/* <div className="w-2/5 mx-auto">
          <div className="flex items-center gap-4 mb-4 question-block">
            <div className="w-8 h-8 bg-gray-100 rounded-sm question-image-container" />
            <h3 className="my-0 text-lg">What are you trying to achieve?</h3>
          </div>
          <div className="flex items-center gap-4 mb-4 question-block">
            <div className="w-8 h-8 bg-gray-100 rounded-sm question-image-container" />
            <h3 className="my-0 text-lg">What’s your timeline?</h3>
          </div>
          <div className="flex items-center gap-4 mb-4 question-block">
            <div className="w-8 h-8 bg-gray-100 rounded-sm question-image-container" />
            <h3 className="my-0 text-lg">How can I help you get there?</h3>
          </div>
        </div> */}
      </div>
      <div className="grid max-w-lg mx-auto offering-list">
        <div className="p-4 my-2 border-2 border-black rounded-lg shadow-flat offering-container">
          <span className="px-2 py-1 font-bold text-white bg-yellow-500 rounded question-tag">
            Free
          </span>
          <div className="my-4 offering-content">
            <h3 className="my-1 text-xl">30-min “pick my brain” slot</h3>
            <p>
              I’d love to hear your ideas, and I’m sure you’ll have questions
              for me too. I can give you my thoughts on your product or website.
            </p>
            <p>Note: I only do a few of those each month.</p>
          </div>
        </div>
        <div className="p-4 my-2 border-2 border-black rounded-lg shadow-flat offering-container">
          <span className="px-2 py-1 font-bold text-white bg-yellow-500 rounded question-tag">
            1 - 2 weeks
          </span>
          <div className="my-4 offering-content">
            <h3 className="my-1 text-xl">Prototype / MVP</h3>
            <p>
              If you want to test an idea and build something that actually
              works. This is the best way to start if you don’t know yet whether
              your idea is any good.
            </p>
          </div>
        </div>
        <div className="p-4 my-2 border-2 border-black rounded-lg shadow-flat offering-container">
          <span className="px-2 py-1 font-bold text-white bg-yellow-500 rounded question-tag">
            1+ week
          </span>
          <div className="my-4 offering-content">
            <h3 className="my-1 text-xl">Personal / Company website</h3>
            <p>
              Don’t have a website yet? Start here. From small personal websites
              to fully-fledged company websites.{' '}
            </p>
          </div>
        </div>
        <div className="p-4 my-2 border-2 border-black rounded-lg shadow-flat offering-container">
          <span className="px-2 py-1 font-bold text-white bg-yellow-500 rounded question-tag">
            3+ weeks
          </span>
          <div className="my-4 offering-content">
            <h3 className="my-1 text-xl">Product work</h3>
            <p>
              Need help with product management? Building a roadmap, setting
              goals and defining sprints. I can help!{' '}
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export const pageQuery = graphql`
  query {
    portraitToon: file(relativePath: { eq: "toon-portrait-small.jpg" }) {
      ...fluidImage
    }
    portraitCharlotte: file(relativePath: { eq: "charlotte_mesterwerdt.jpg" }) {
      ...fluidImage
    }
    portraitJoris: file(relativePath: { eq: "joris_zaalberg.jpg" }) {
      ...fluidImage
    }
    portraitBarbara: file(relativePath: { eq: "barbara_galiza.jpg" }) {
      ...fluidImage
    }
    projectImage1: file(relativePath: { eq: "project-placeholder.jpg" }) {
      ...fluidImage
    }
  }
`

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
IndexPage.propTypes = {
  data: PropTypes.object,
}

export default IndexPage
