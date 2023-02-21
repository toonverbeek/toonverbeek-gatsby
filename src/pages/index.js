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
          Hi there 👋 — I'm Toon
        </span>
        <h1
          style={{ lineHeight: 1.3 }}
          className="text-5xl font-black text-black leading md:text-6xl header-title"
        >
          I help companies build and design software
        </h1>
        <p className="max-w-xl text-xl leading-relaxed text-gray-600 header-subtitle">
          I’m a freelance product manager and engineer with a love for building
          digital products users love. I design MVPs, build software, automate
          processes and work with other specialists to bring new products to
          market.
        </p>
        <div className="flex flex-col justify-center w-full mb-5 md:flex-row header-services">
          <div className="px-4 py-2 mb-4 font-bold transition-shadow duration-200 ease-in-out border-2 border-black rounded-lg cursor-pointer bg-gray-50 shadow-btn md:mb-0 md:mr-4 header-service">
            <a href="#my-services">User Research</a>
          </div>
          <div className="px-4 py-2 mb-4 font-bold transition-shadow duration-200 ease-in-out border-2 border-black rounded-lg cursor-pointer bg-gray-50 shadow-btn md:mb-0 md:mr-4 header-service">
            <a href="#my-services">Development & Design</a>
          </div>
          <div className="px-4 py-2 font-bold transition-shadow duration-200 ease-in-out border-2 border-black rounded-lg cursor-pointer bg-gray-50 shadow-btn header-service">
            <a href="#my-services">Product Management</a>
          </div>
        </div>
      </div>
      <div className="max-w-lg p-4 m-auto hero-image-container md:w-2/5">
        <Img
          className="mx-auto bg-contain rounded-lg "
          fluid={data.portraitToon.childImageSharp.fluid}
          alt="A picture of me"
        />
      </div>
    </section>
    <section className="p-4 my-12 lg:p-8 hero-validation">
      <h2 className="text-2xl font-medium text-center text-gray-500 validation-header">
        Trusted by companies small and large
      </h2>
      <div className="grid justify-around max-w-screen-lg grid-cols-2 gap-1 mx-auto text-center company-images">
        <div className="p-4 text-lg font-bold text-gray-500 rounded md:p-10 bg-gray-50 company-image">
          Homerun
        </div>
        <div className="p-4 text-lg font-bold text-gray-500 rounded md:p-10 bg-gray-50 company-image">
          Backbase
        </div>
        <div className="p-4 text-lg font-bold text-gray-500 rounded md:p-10 bg-gray-50 company-image">
          Bravely
        </div>
        <div className="p-4 text-lg font-bold text-gray-500 rounded md:p-10 bg-gray-50 company-image">
          Fox-it
        </div>
      </div>
    </section>
    <section className="max-w-screen-lg p-4 mx-auto my-12 lg:p-8 services">
      <h2 className="text-5xl text-center">
        A partner to help you realize your digital product
      </h2>
      <h3 className="max-w-lg mx-auto text-lg font-normal text-center text-gray-700 ">
        With a background in software engineering and experience as a product
        manager, I love helping companies bring their product to market
        whichever way I can.
      </h3>

      <div className="grid justify-center gap-4 mx-auto mt-24 md:grid-cols-2 services-grid">
        <div className="flex flex-col max-w-sm service-block">
          <div
            className="flex items-center justify-center w-12 h-12 rounded service-image-container"
            style={{ background: 'var(--primary-opacity)' }}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.42857 24.5714H7.92857V24.0714H7.42857V24.5714ZM7.42857 31H6.92857C6.92857 31.1894 7.03557 31.3625 7.20496 31.4472C7.37436 31.5319 7.57706 31.5136 7.72857 31.4L7.42857 31ZM16 24.5714V24.0714H15.8333L15.7 24.1714L16 24.5714ZM9.57143 9.07141H9.07143V10.0714H9.57143V9.07141ZM22.4286 10.0714H22.9286V9.07141H22.4286V10.0714ZM9.57143 15.5H9.07143V16.5H9.57143V15.5ZM18.1429 16.5H18.6429V15.5H18.1429V16.5ZM6.92857 24.5714V31H7.92857V24.5714H6.92857ZM7.72857 31.4L16.3 24.9714L15.7 24.1714L7.12857 30.6L7.72857 31.4ZM16 25.0714H28.8571V24.0714H16V25.0714ZM28.8571 25.0714C30.3183 25.0714 31.5 23.8897 31.5 22.4286H30.5C30.5 23.3374 29.766 24.0714 28.8571 24.0714V25.0714ZM31.5 22.4286V3.14282H30.5V22.4286H31.5ZM31.5 3.14282C31.5 1.68166 30.3183 0.5 28.8571 0.5V1.5C29.766 1.5 30.5 2.23397 30.5 3.14282H31.5ZM28.8571 0.5H3.14286V1.5H28.8571V0.5ZM3.14286 0.5C1.68173 0.5 0.5 1.68166 0.5 3.14282H1.5C1.5 2.23397 2.23399 1.5 3.14286 1.5V0.5ZM0.5 3.14282V22.4286H1.5V3.14282H0.5ZM0.5 22.4286C0.5 23.8897 1.68173 25.0714 3.14286 25.0714V24.0714C2.23399 24.0714 1.5 23.3374 1.5 22.4286H0.5ZM3.14286 25.0714H7.42857V24.0714H3.14286V25.0714ZM9.57143 10.0714H22.4286V9.07141H9.57143V10.0714ZM9.57143 16.5H18.1429V15.5H9.57143V16.5Z"
                fill="black"
              />
            </svg>
          </div>
          <h3>User Research & Interviews</h3>
          <p className="text-gray-500 service-description">
            I've spent a lot of time talking to users. My goal is to help you
            understand their problems and their motivations. I'm comfortable
            collaborating across the org so that everyone has access to the same
            insights
          </p>
        </div>
        <div className="flex flex-col max-w-sm service-block">
          <div
            className="flex items-center justify-center w-12 h-12 rounded service-image-container"
            style={{ background: 'var(--primary-opacity)' }}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 6.99609L15 1L29 6.99609M1 6.99609L15 12.9922M1 6.99609V7M29 6.99609L15 12.9922M29 6.99609V23L15 29M29 6.99609L15 13V29M15 12.9922V29M15 12.9922L1 7M15 29L1 23V7"
                stroke="black"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3>Development & prototyping</h3>
          <p className="text-gray-500 service-description">
            Have an idea? I’ve been building software for nearly a decade. Let
            me guide you through the most common pitfalls.
          </p>
        </div>
        <div className="flex flex-col max-w-sm service-block">
          <div
            className="flex items-center justify-center w-12 h-12 rounded service-image-container"
            style={{ background: 'var(--primary-opacity)' }}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 5C8.10457 5 9 5.89543 9 7C9 8.10457 8.10457 9 7 9C5.89543 9 5 8.10457 5 7C5 5.89543 5.89543 5 7 5Z"
                stroke="black"
              />
              <path
                d="M23 1H7C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13H23C26.3137 13 29 10.3137 29 7C29 3.68629 26.3137 1 23 1Z"
                stroke="black"
              />
              <path
                d="M23 25C21.8954 25 21 24.1046 21 23C21 21.8954 21.8954 21 23 21C24.1046 21 25 21.8954 25 23C25 24.1046 24.1046 25 23 25Z"
                stroke="black"
              />
              <path
                d="M7 29H23C26.3137 29 29 26.3137 29 23C29 19.6863 26.3137 17 23 17L7 17C3.68629 17 1 19.6863 1 23C1 26.3137 3.68629 29 7 29Z"
                stroke="black"
              />
            </svg>
          </div>
          <h3>Product Management</h3>
          <p className="text-gray-500 service-description">
            What to build, for whom and when? If you’re building a digital
            product, these questions can be tough — so let me help you.
          </p>
        </div>
        <div className="flex flex-col max-w-sm service-block">
          <div
            className="flex items-center justify-center w-12 h-12 rounded service-image-container"
            style={{ background: 'var(--primary-opacity)' }}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 15L17 15M22 8L17 14.9908L22 22M29 4.99739C29 7.20395 27.208 8.99478 25 8.99478C22.792 8.99478 21 7.20395 21 4.99739C21 2.79083 22.792 1 25 1C27.208 1 29 2.79083 29 4.99739ZM29 24.9843C29 27.1909 27.208 28.9817 25 28.9817C22.792 28.9817 21 27.1909 21 24.9843C21 22.7778 22.792 20.9869 25 20.9869C27.208 20.9869 29 22.7778 29 24.9843ZM9 14.9909C9 17.1974 7.208 18.9883 5 18.9883C2.792 18.9883 1 17.1974 1 14.9909C1 12.7843 2.792 10.9935 5 10.9935C7.208 10.9935 9 12.7843 9 14.9909Z"
                stroke="black"
                strokeLinecap="square"
              />
            </svg>
          </div>
          <h3>Product Engineering</h3>
          <p className="text-gray-500 service-description">
            Looking to build your next set of features for your customers? I can
            help you design it, then make it.
          </p>
        </div>
      </div>
    </section>
    <section className="mx-4 my-12 rounded projects">
      <h2 className="mb-4 text-5xl font-black text-center">Projects —</h2>
      {/* <h3 className="text-4xl text-center">I've worked on a few</h3> */}
      <div className="py-8 lg:px-32 ">
        <div className="max-w-4xl p-4 mx-auto bg-white border-2 border-gray-800 rounded shadow-flat project">
          <div className="relative mb-4 rounded h-96">
            <a href="https://jobwatchr.com?utm_source=toonverbeek.com">
              <Img
                className="w-full h-full mx-auto rounded-lg hover:shadow-sm"
                fluid={data.projectImage5.childImageSharp.fluid}
                alt="A picture of the jobwatchr live feed. It shows a list of jobs that match the user's job alert."
              />
            </a>
          </div>
          <h3 className="mb-2 text-3xl">jobwatchr.com</h3>
          <p className="text-gray-700 project-content">
            I built another job search tool called jobwatchr. I've been
            following the recent layoffs and it made me curious how quickly
            companies would publish new job openings post-layoffs. So I built a
            live feed that tracks jobs opened in the last 24h 👀
          </p>
          <p>
            Technologies used: NextJS, React, Redis, Postgres, BullMQ, NodeJS,
            Express
          </p>
          <a
            href="https://recipeboard.webflow.io?utm_source=toonverbeek.com"
            className="px-4 py-2 font-medium text-gray-700 bg-gray-100 rounded hover:bg-gray-200"
            target="_blank"
            rel="noreferrer"
          >
            Read more →
          </a>
        </div>
      </div>
      <div className="py-8 lg:px-32 ">
        <div className="max-w-4xl p-4 mx-auto bg-white border-2 border-gray-800 rounded shadow-flat project">
          <div className="relative mb-4 rounded h-96">
            <a href="https://getdime.co?utm_source=toonverbeek.com">
              <Img
                className="w-full h-full mx-auto rounded-lg hover:shadow-sm"
                fluid={data.projectImage6.childImageSharp.fluid}
                alt="A picture of the getdime.co homepage with an example invoice"
              />
            </a>
          </div>
          <h3 className="mb-2 text-3xl">Dime</h3>
          <p className="text-gray-700 project-content">
            I'm a freelance product engineer and I built Dime to scratch my own
            itch. So many other accounting tools out there have a dated design,
            have a ton of features I don't need, or are too expensive 🤷‍♂️. Dime
            is just an invoicing tool. What it's not is an accounting solution,
            difficult to use or (hopefully) boring. I'd like Dime to be a
            simple, privacy friendly, and free alternative.
          </p>
          <p>Technologies used: NextJS, React, Tailwind, Midjourney</p>
          <a
            href="https://getdime.co?utm_source=toonverbeek.com"
            className="px-4 py-2 font-medium text-gray-700 bg-gray-100 rounded hover:bg-gray-200"
            target="_blank"
            rel="noreferrer"
          >
            Read more →
          </a>
        </div>
      </div>
      <div className="py-8 lg:px-32 ">
        <div className="max-w-4xl p-4 mx-auto bg-white border-2 border-gray-800 rounded shadow-flat project">
          <div className="relative mb-4 rounded h-96">
            <a href="https://horta.io?utm_source=toonverbeek.com">
              <Img
                className="w-full h-full mx-auto rounded-lg hover:shadow-sm"
                fluid={data.projectImage4.childImageSharp.fluid}
                alt="A picture of a job alert"
              />
            </a>
          </div>
          <h3 className="mb-2 text-3xl">Horta.io</h3>
          <p className="text-gray-700 project-content">
            I'm the co-founder of Horta.io, a startup that helps recruiters grow
            a talent pool by utilizing job alerts.
          </p>
          <p>
            Technologies used: NextJS, React, Tailwind, Node, Firebase and
            Stripe.
          </p>
          <a
            href="https://horta.io?utm_source=toonverbeek.com"
            className="px-4 py-2 font-medium text-gray-700 bg-gray-100 rounded hover:bg-gray-200"
            target="_blank"
            rel="noreferrer"
          >
            Read more →
          </a>
        </div>
      </div>
      <div className="py-8 lg:px-32 ">
        <div className="max-w-4xl p-4 mx-auto bg-white border-2 border-gray-800 rounded shadow-flat project">
          <div className="relative mb-4 rounded h-96 project-image-container">
            <a href="https://jobdispatch.co?utm_source=toonverbeek.com">
              <Img
                className="w-full h-full mx-auto rounded-lg hover:shadow-sm"
                fluid={data.projectImage1.childImageSharp.fluid}
                alt="An astronaut"
              />
            </a>
          </div>
          <h3 className="mb-2 text-3xl">Recipeboard</h3>
          <p className="text-gray-700 project-content">
            Recipeboard is a SaaS that I designed and built myself. Recipeboard
            lets people manage their recipes online and share them with others,
            while other users can copy recipes they find to their own board.
            Later on I expanded on this concept by adding the ability to
            subscriptions to your recipes. To validate this idea I conducted
            user research by reaching out to recipe bloggers.
          </p>
          <p>
            Landing page built with Webflow. Frontend built in React and backend
            done in Firbase and Stripe.
          </p>
          <a
            href="https://recipeboard.webflow.io?utm_source=toonverbeek.com"
            className="px-4 py-2 font-medium text-gray-700 bg-gray-100 rounded hover:bg-gray-200"
            target="_blank"
            rel="noreferrer"
          >
            Read more →
          </a>
        </div>
      </div>
      <div className="py-8 lg:px-32 ">
        <div className="max-w-4xl p-4 mx-auto bg-white border-2 border-gray-800 rounded shadow-flat project">
          <div className="relative mb-4 rounded h-96 project-image-container">
            <a href="https://jobdispatch.co?utm_source=toonverbeek.com">
              <Img
                className="w-full h-full mx-auto border border-gray-100 rounded-lg hover:shadow-sm"
                fluid={data.projectImage2.childImageSharp.fluid}
                alt="A screenshot of the Job Dispatch UI"
              />
            </a>
          </div>
          <h3 className="mb-2 text-3xl">Job Dispatch</h3>
          <p className="text-gray-700 project-content">
            Job Dispatch was created out of my own need. While searching for a
            job I spent a lot of time checking company career pages, again and
            again. Job Dispatch started as a simple chrome extension that
            allowed me to subscribe to companies and get an alert whenever they
            posted a new job.
          </p>
          <p>
            I designed and developed the Chrome Extension. I built the backend
            in JavaScript using Firebase Functions.
          </p>
          <a
            href="https://jobdispatch.co?utm_source=toonverbeek.com"
            className="px-4 py-2 font-medium text-gray-700 bg-gray-100 rounded hover:bg-gray-200"
            target="_blank"
            rel="noreferrer"
          >
            Read more →
          </a>
        </div>
      </div>
      <div className="py-8 lg:px-32 ">
        <div className="max-w-4xl p-4 mx-auto bg-white border-2 border-gray-800 rounded shadow-flat project">
          <div className="relative mb-4 bg-top rounded h-96 project-image-container">
            <Img
              className="w-full h-full mx-auto rounded-lg"
              fluid={data.projectImage3.childImageSharp.fluid}
              alt="An astronaut"
            />
          </div>
          <h3 className="mb-2 text-3xl">Meetbravely.co</h3>
          <p className="text-gray-700 project-content">
            For Bravely I collaborated closely with the founders to bring their
            services and product to the market for the first time. I worked on
            their branding, developed their website using Webflow and set up
            their Learning Management System so that they could sell their
            course.
          </p>
          <a
            href="https://meetbravely.co?utm_source=toonverbeek.com"
            className="px-4 py-2 font-medium text-gray-700 bg-gray-100 rounded hover:bg-gray-200"
            target="_blank"
            rel="noreferrer"
          >
            Read more →
          </a>
        </div>
      </div>
    </section>
    <section
      className="p-4 xl:p-8 quotes"
      style={{ background: 'var(--primary-bg)' }}
    >
      <div className="items-center mx-auto my-12 2xl:grid 2xl:grid-cols-2">
        <div className="max-w-xl mx-auto 2xl:mx-8 xl:text-left quotes-text-block">
          <h2 className="text-5xl text-center">
            Don't take <em>my</em> word for it
          </h2>
          <p className="text-lg text-center text-gray-900/80">
            I've had the pleasure to work with all kinds of great people and
            companies. Here's a few words they had to say about me and about our
            collaboration.
          </p>
        </div>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 2 }}>
          <Masonry className="max-w-2xl mx-auto">
            <div className="max-w-xs p-4 m-4 mx-auto bg-white quote-container rounded-xl">
              <div className="quote-text">
                <p>
                  Things constantly change in a startup and the best people can
                  shine in that kind of an environment. Toon is one of them.
                </p>
                <p>
                  He's able to not just deliver on a list of requirements, but
                  shape a product together with the team as we discover the best
                  solution to a user problem.
                </p>
                <p>I couldn't recommend Toon more.</p>
              </div>
              <div className="flex items-center quote-footer">
                <div className="relative w-20 mr-4 quote-footer-image-container">
                  <Img
                    className="absolute w-full bg-cover rounded-lg"
                    fluid={data.portraitRobert.childImageSharp.fluid}
                    alt="preview of project"
                  />
                </div>
                <div className="flex flex-col w-full quote-footer-name">
                  <span className="font-bold">Robert Gaal</span>
                  <span>Founder, Quest (YC21)</span>
                </div>
              </div>
            </div>
            <div className="max-w-xs p-4 m-4 mx-auto bg-white md:mt-16 quote-container rounded-xl">
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
            <div className="max-w-xs p-4 m-4 mx-auto bg-white quote-container rounded-xl">
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
                  Working with Toon was a real pleasure. He helped us bring
                  meetbravely.co from an idea to product. Everything from
                  branding, development and setting up our learning management
                  system - Toon took care of it.
                </p>
                <p>
                  I would highly recommend working with Toon if you're looking
                  for someone that not only listens to your ideas, but works
                  with you to expand on them.
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
    <section
      className="grid items-center p-4 my-12 lg:gap-12 lg:p-8 lg:grid-cols-2"
      id="my-services"
    >
      <div className="mx-auto text-center lg:max-w-md offering-header">
        <h2 className="text-5xl text-center">Let's talk —</h2>
        <p className="max-w-lg text-lg text-gray-700">
          Do you have a business idea? Or a product that could use an extra pair
          of hands? Users that need to be talked to? Shoot me an email and let
          me know how I could help! Or if you just want to say hi: hi!
        </p>
        <a href="mailto:hello@toonverbeek.com?subject=Work together">
          <button
            className="px-4 py-2 mx-auto font-semibold text-gray-100 bg-gray-800 rounded shadow-xl md:mx-8 md:my-4 md:w-auto "
            type="button"
          >
            Get in touch 🚀
          </button>
        </a>
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
            <p>Note that I only do a few of those each month.</p>
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
            <h3 className="my-1 text-xl">User Research & Interviews</h3>
            <p>
              Need someone to talk to your users or target audience? I can help
              with setting up and executing interviews. We'll uncover their
              needs and problems and translate those into personas.
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
              goals and defining sprints. I can help!
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
    portraitRobert: file(relativePath: { eq: "robert_gaal.jpeg" }) {
      ...fluidImage
    }
    projectImage1: file(relativePath: { eq: "recipeboard.png" }) {
      ...fluidImage
    }
    projectImage2: file(relativePath: { eq: "job_dispatch.png" }) {
      ...fluidImage
    }
    projectImage3: file(relativePath: { eq: "bravely.png" }) {
      ...fluidImage
    }
    projectImage4: file(
      relativePath: { eq: "feature-job-alert-page-stylized.png" }
    ) {
      ...fluidImage
    }
    projectImage5: file(relativePath: { eq: "jobwatchr-social-dark.png" }) {
      ...fluidImage
    }
    projectImage6: file(relativePath: { eq: "dime-social.png" }) {
      ...fluidImage
    }
    logoHomerun: file(relativePath: { eq: "homerun-logo-retina-black.png" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    logoBackbase: file(relativePath: { eq: "BB_white.png" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    logoFoxIt: file(relativePath: { eq: "fox_it_logo.png" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
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
