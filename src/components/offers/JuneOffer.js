/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';

export function JuneOffer() {
  const { poolHero } = useStaticQuery(
    graphql`
      {
        poolHero: file(
          relativePath: { eq: "b/basen-ze-zjezdzalnia-kacze-stawy-1.jpg" }
        ) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 600)
          }
        }
      }
    `
  );
  return (
    <Link
      to="/boze-cialo-dlugi-weekend-czerwcowy-z-dziecmi-w-lebie-nad-morzem/"
      className="no-underline"
    >
      <div
        role="button"
        className="relative shadow-lg rounded-lg w-full min-w-[300px] h-56 flex cursor-pointer linear-background"
      >
        <GatsbyImage
          className="!absolute w-full h-full object-cover rounded-lg -z-10"
          image={poolHero.childImageSharp.gatsbyImageData}
          alt="Basen zewnętrzny ze zjeżdżalnią"
        />

        <div className="self-end pl-4">
          <span className="font-bold -mt-8 rounded bg-orange-600 text-sm text-white p-2 shadow">
            Rabat 10%
          </span>
          <h2 className="mt-4 text-shadow-headers text-white font-bold">
            Weekend czerwcowy
          </h2>
        </div>
      </div>
    </Link>
  );
}
