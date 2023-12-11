/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';

export function MayOffer() {
  const { may } = useStaticQuery(
    graphql`
      {
        may: file(relativePath: { eq: "o/II/DSC_3126.jpg" }) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 432)
          }
        }
      }
    `
  );
  return (
    <Link to="/majowka-w-lebie" className="no-underline">
      <div
        role="button"
        className="relative shadow-lg rounded-lg w-full min-w-[300px] h-56 flex cursor-pointer linear-background"
      >
        <GatsbyImage
          className="!absolute w-full h-full object-cover rounded-lg -z-10"
          image={may.childImageSharp.gatsbyImageData}
          alt="Dziecko w basenie"
        />

        <div className="self-end pl-4">
          <span className="font-bold -mt-8 rounded bg-orange-600 text-sm text-white p-2 shadow">
            Rabat 10%
          </span>
          <h2 className="mt-4 text-shadow-headers text-white font-bold">
            Majówka{' '}
          </h2>
        </div>
      </div>
    </Link>
  );
}
