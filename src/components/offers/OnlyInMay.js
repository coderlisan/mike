import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import { RoundedImage } from '../common/RoundedImage';

export function OnlyInMay() {
  const { dmuchance, alpaki, ognisko, wata } = useStaticQuery(
    graphql`
      {
        dmuchance: file(relativePath: { eq: "kidsweek/kids-week-hero.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              sizes: "(min-width: 1024px) 25vw, 100vw"
            )
          }
        }
        alpaki: file(relativePath: { eq: "alpaki.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              sizes: "(min-width: 1024px) 25vw, 100vw"
            )
          }
        }
        ognisko: file(relativePath: { eq: "kidsweek/IMG_2871.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              sizes: "(min-width: 1024px) 25vw, 100vw"
            )
          }
        }
        wata: file(relativePath: { eq: "wata-cukrowa.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              sizes: "(min-width: 1024px) 25vw, 100vw"
              transformOptions: { cropFocus: SOUTH }
            )
          }
        }
      }
    `
  );
  return (
    <div className="mt-16 lg:mt-24">
      <div className="ml-auto mr-auto max-w-xl">
        <h2>W majówkę między innymi:</h2>
      </div>
      <div className="grid lg:grid-cols-4 gap-3">
        <div>
          <h3>Dmuchańce</h3>
          <RoundedImage
            image={dmuchance.childImageSharp.gatsbyImageData}
            alt="Dmuchańce"
          />
        </div>
        <div>
          <h3>Alpaki</h3>
          <RoundedImage
            image={alpaki.childImageSharp.gatsbyImageData}
            alt="Alpaki"
          />
        </div>
        <div>
          <h3>Ognisko</h3>
          <RoundedImage
            image={ognisko.childImageSharp.gatsbyImageData}
            alt="Ognisko"
          />
        </div>
        <div>
          <h3>Wata cukrowa</h3>
          <RoundedImage
            image={wata.childImageSharp.gatsbyImageData}
            alt="Wata cukrowa"
          />
        </div>
      </div>
    </div>
  );
}
