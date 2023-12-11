import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import { RoundedImage } from '../common/RoundedImage';

export function Kids() {
  const { kids1, kids2, kids3, kids4, kids5, kids6 } = useStaticQuery(
    graphql`
      {
        kids1: file(relativePath: { eq: "b/animacje-dla-dzieci-myszka.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              sizes: "(min-width: 1024px) 33vw, 100vw"
            )
          }
        }
        kids2: file(relativePath: { eq: "b/animacje-dla-dzieci.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              sizes: "(min-width: 1024px) 33vw, 100vw"
            )
          }
        }
        kids3: file(
          relativePath: { eq: "b/warsztaty-z-robotyki-kacze-stawy.jpg" }
        ) {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              sizes: "(min-width: 1024px) 33vw, 100vw"
            )
          }
        }
        kids4: file(relativePath: { eq: "b/zajecia-sportowe.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              sizes: "(min-width: 1024px) 33vw, 100vw"
            )
          }
        }
        kids5: file(relativePath: { eq: "b/zajecia-sportowe-1.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              sizes: "(min-width: 1024px) 33vw, 100vw"
            )
          }
        }
        kids6: file(relativePath: { eq: "b/zajecia-sportowe-2.jpg" }) {
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
        <h2>Animacje dla dzieci</h2>
        <p>
          Przygotowaliśmy multum atrakcji dla Twoich dzieci. Nasz autorski
          program animacji od lat cieszy się zadowoleniem naszych gości. Cały
          dzień wypełniony animacjami tak, aby żadne dziecko się nie nudziło.
        </p>
      </div>
      <div className="grid gap-3 lg:grid-cols-3 lg:mt-10">
        <RoundedImage
          image={kids6.childImageSharp.gatsbyImageData}
          alt="Animacje sportowe"
        />
        <RoundedImage
          image={kids1.childImageSharp.gatsbyImageData}
          alt="Zabawa z Myszką Miki"
        />
        <RoundedImage
          image={kids2.childImageSharp.gatsbyImageData}
          alt="Zabawy dla dzieci"
        />
        <RoundedImage
          image={kids3.childImageSharp.gatsbyImageData}
          alt="Zajęcia z robotyki"
        />
        <RoundedImage
          image={kids4.childImageSharp.gatsbyImageData}
          alt="Zajęcia sportowe"
        />
        <RoundedImage
          image={kids5.childImageSharp.gatsbyImageData}
          alt="Zajęcia sportowe"
        />
      </div>
    </div>
  );
}
