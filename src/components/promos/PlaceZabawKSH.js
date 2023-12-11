import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import { RoundedImage } from '../common/RoundedImage';

export function PlaceZabawKSH() {
  const { plac1, plac2, plac3, plac4 } = useStaticQuery(
    graphql`
      {
        plac1: file(relativePath: { eq: "b/_MPK3047-Redigera.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              sizes: "(min-width: 1024px) 25vw, 100vw"
            )
          }
        }
        plac2: file(relativePath: { eq: "b/plac-zabaw-1.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              sizes: "(min-width: 1024px) 25vw, 100vw"
            )
          }
        }
        plac3: file(relativePath: { eq: "b/plac-zabaw-dla-dzieci.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              sizes: "(min-width: 1024px) 25vw, 100vw"
            )
          }
        }
        plac4: file(relativePath: { eq: "b/hotel-plac-zabaw.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              sizes: "(min-width: 1024px) 25vw, 100vw"
            )
          }
        }
      }
    `
  );
  return (
    <div className="mt-16 lg:mt-24 xl:mt-32">
      <div className="ml-auto mr-auto max-w-xl">
        <h2>6 placów zabaw</h2>
        <p>Przygotowaliśmy dla Twoich dzieci 6 placów zabaw.</p>
        <p>
          Różnorodność zabawek sprawia, że każde dziecko znajdzie coś dla
          siebie.
        </p>
      </div>
      <div className="grid gap-3 lg:grid-cols-4 lg:mt-10">
        <RoundedImage
          image={plac1.childImageSharp.gatsbyImageData}
          alt="Plac zabaw"
        />
        <RoundedImage
          image={plac2.childImageSharp.gatsbyImageData}
          alt="Plac zabaw"
        />
        <RoundedImage
          image={plac3.childImageSharp.gatsbyImageData}
          alt="Plac zabaw"
        />
        <RoundedImage
          image={plac4.childImageSharp.gatsbyImageData}
          alt="Plac zabaw"
        />
      </div>
    </div>
  );
}
