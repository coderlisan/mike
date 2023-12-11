import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import { RoundedImage } from '../common/RoundedImage';

export function MoreFeatures() {
  const { sauna, zoo, gym, parking, boisko } = useStaticQuery(
    graphql`
      {
        sauna: file(relativePath: { eq: "b/sauna.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              sizes: "(min-width: 1024px) 33vw, 100vw"
            )
          }
        }
        zoo: file(relativePath: { eq: "b/mini-zoo.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              sizes: "(min-width: 1024px) 33vw, 100vw"
            )
          }
        }
        gym: file(relativePath: { eq: "b/silownia-zewnetrzna-2.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              sizes: "(min-width: 1024px) 33vw, 100vw"
            )
          }
        }
        parking: file(relativePath: { eq: "parking.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              sizes: "(min-width: 1024px) 33vw, 100vw"
            )
          }
        }
        boisko: file(relativePath: { eq: "boisko-pn.jpg" }) {
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
    <div className="mt-12 lg:mt-24 grid lg:grid-cols-3 gap-3">
      <div>
        <h3>Sauna</h3>
        <RoundedImage
          image={sauna.childImageSharp.gatsbyImageData}
          alt="Sauna"
        />
      </div>
      <div>
        <h3>Boisko</h3>
        <RoundedImage
          image={boisko.childImageSharp.gatsbyImageData}
          alt="Boisko do piłki nożnej"
        />
      </div>
      <div>
        <h3>Mini Zoo</h3>
        <RoundedImage
          image={zoo.childImageSharp.gatsbyImageData}
          alt="Mini Zoo"
        />
      </div>
      <div>
        <h3>Siłownia zewnętrzna</h3>
        <RoundedImage
          image={gym.childImageSharp.gatsbyImageData}
          alt="Siłownia zewnętrzna"
        />
      </div>
      <div>
        <h3>Parking</h3>
        <RoundedImage
          image={parking.childImageSharp.gatsbyImageData}
          alt="Parking"
        />
      </div>
    </div>
  );
}
