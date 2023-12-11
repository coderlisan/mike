import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import { RoundedImage } from '../common/RoundedImage';

export function Pond() {
  const { pond1, pond2, pond3 } = useStaticQuery(
    graphql`
      {
        pond1: file(relativePath: { eq: "b/kacze-stawy-wedkowanie.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              sizes: "(min-width: 1024px) 33vw, 100vw"
            )
          }
        }
        pond2: file(relativePath: { eq: "b/staw-dla-wedkarzy-1.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              sizes: "(min-width: 1024px) 33vw, 100vw"
            )
          }
        }
        pond3: file(relativePath: { eq: "b/staw-dla-wedkarzy-2.jpg" }) {
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
        <h2>Zarybiony staw dla wędkarzy</h2>
        <p>Na amatorów wędkarstwa czeka nasz corocznie zarybiany staw.</p>
        <p>Łowisz ryby za darmo, a złowioną rybę zjesz na wieczornym grillu.</p>
        <p>
          Umiejscowienie stawu w pobliżu domków sprawia, że każdy miłośnik
          wędkowania może uprawiać swoje hobby na wyciągnięcie ręki.
        </p>
      </div>
      <div className="grid gap-3 lg:grid-cols-3 lg:mt-10">
        <RoundedImage
          image={pond1.childImageSharp.gatsbyImageData}
          alt="Staw dla wędkarzy"
        />
        <RoundedImage
          image={pond2.childImageSharp.gatsbyImageData}
          alt="Staw dla wędkarzy"
        />
        <RoundedImage
          image={pond3.childImageSharp.gatsbyImageData}
          alt="Staw dla wędkarzy"
        />
      </div>
    </div>
  );
}
