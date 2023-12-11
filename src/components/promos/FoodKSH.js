import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import { RoundedImage } from '../common/RoundedImage';

export function FoodKSH() {
  const { food1, food2, food3, food4, food5, food6, food7, food8 } =
    useStaticQuery(
      graphql`
        {
          food1: file(relativePath: { eq: "b/bufet-hotel.jpg" }) {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                sizes: "(min-width: 1024px) 25vw, 100vw"
              )
            }
          }
          food2: file(relativePath: { eq: "b/bufet-kacze-stawy-4.jpg" }) {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                sizes: "(min-width: 1024px) 25vw, 100vw"
              )
            }
          }
          food3: file(relativePath: { eq: "b/bufet-kacze-stawy.jpg" }) {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                sizes: "(min-width: 1024px) 25vw, 100vw"
              )
            }
          }
          food4: file(relativePath: { eq: "b/hotel-bar-3.jpg" }) {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                sizes: "(min-width: 1024px) 25vw, 100vw"
              )
            }
          }
          food5: file(relativePath: { eq: "b/hotel-kacze-stawy-bufet-1.jpg" }) {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                sizes: "(min-width: 1024px) 25vw, 100vw"
              )
            }
          }
          food6: file(relativePath: { eq: "b/hotel-stolowka-1.jpg" }) {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                sizes: "(min-width: 1024px) 25vw, 100vw"
              )
            }
          }
          food7: file(relativePath: { eq: "b/hotel-stolowka.jpg" }) {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                sizes: "(min-width: 1024px) 25vw, 100vw"
              )
            }
          }
          food8: file(relativePath: { eq: "b/hotel-wyzywienie.jpg" }) {
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
        <h2>Całodniowe wyżywienie</h2>
        <p>
          Codziennie rano w naszej restauracji serwujemy śniadania, a późnym
          popołudniem obiadokolację. Szeroki wybór dań gwarantuje, że na pewno
          znajdziesz coś dla siebie.
        </p>
      </div>
      <div className="grid gap-3 lg:grid-cols-4 lg:mt-10">
        <RoundedImage
          image={food6.childImageSharp.gatsbyImageData}
          alt="Restauracja z widokiem na ogród"
        />
        <RoundedImage
          image={food1.childImageSharp.gatsbyImageData}
          alt="Bufet"
        />
        <RoundedImage
          image={food2.childImageSharp.gatsbyImageData}
          alt="Bufet"
        />
        <RoundedImage
          image={food3.childImageSharp.gatsbyImageData}
          alt="Bufet"
        />
        <RoundedImage
          image={food4.childImageSharp.gatsbyImageData}
          alt="Sofy w lobby"
        />
        <RoundedImage
          image={food5.childImageSharp.gatsbyImageData}
          alt="Bufet"
        />
        <RoundedImage
          image={food7.childImageSharp.gatsbyImageData}
          alt="Restauracja"
        />
        <RoundedImage
          image={food8.childImageSharp.gatsbyImageData}
          alt="Bufet"
        />
      </div>
    </div>
  );
}
