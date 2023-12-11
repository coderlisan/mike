import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import { RoundedImage } from '../common/RoundedImage';

export function KidsClub() {
  const { kids1, kids2, kids3 } = useStaticQuery(
    graphql`
      {
        kids1: file(relativePath: { eq: "b/klub-dla-dzieci.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              sizes: "(min-width: 1024px) 33vw, 100vw"
            )
          }
        }
        kids2: file(relativePath: { eq: "b/klub-dla-dzieci-1.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              sizes: "(min-width: 1024px) 33vw, 100vw"
            )
          }
        }
        kids3: file(relativePath: { eq: "b/klub-dla-dzieci-2.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              sizes: "(min-width: 1024px) 33vw, 100vw"
            )
          }
        }
      }
    `
  );
  return (
    <div className="mt-16 lg:mt-24 xl:mt-32">
      <div className="ml-auto mr-auto max-w-xl">
        <h2>Klub dla dzieci</h2>
        <p>
          Codziennie od godziny do 11 do 18 czynny jest nasz klubik dla dzieci.
          Zostaw swoje dziecko pod opieką naszych doświadczonych animatorów i
          odpocznij na naszym basenie!
        </p>
      </div>
      <div className="grid gap-3 lg:grid-cols-3 lg:mt-10">
        <RoundedImage
          image={kids1.childImageSharp.gatsbyImageData}
          alt="Klub dla dzieci"
        />
        <RoundedImage
          image={kids2.childImageSharp.gatsbyImageData}
          alt="Klub dla dzieci"
        />
        <RoundedImage
          image={kids3.childImageSharp.gatsbyImageData}
          alt="Klub dla dzieci"
        />
      </div>
    </div>
  );
}
