import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import { RoundedImage } from '../common/RoundedImage';

export function InteriorPool({ withInfo }) {
  const { pool1, pool2, pool3, pool4, pool5, pool6, pool7, sauna } =
    useStaticQuery(
      graphql`
        {
          pool1: file(relativePath: { eq: "b/basen-wewnetrzny-1.jpg" }) {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                sizes: "(min-width: 1024px) 25vw, 100vw"
              )
            }
          }
          pool2: file(relativePath: { eq: "b/basen-wewnetrzny-3.jpg" }) {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                sizes: "(min-width: 1024px) 25vw, 100vw"
              )
            }
          }
          pool3: file(relativePath: { eq: "b/basen-wewnetrzny-4.jpg" }) {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                sizes: "(min-width: 1024px) 25vw, 100vw"
              )
            }
          }
          pool4: file(relativePath: { eq: "b/basen-wewnetrzny-ogrod-1.jpg" }) {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                sizes: "(min-width: 1024px) 25vw, 100vw"
              )
            }
          }
          pool5: file(relativePath: { eq: "b/basen-wewnetrzny-ogrod.jpg" }) {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                sizes: "(min-width: 1024px) 25vw, 100vw"
              )
            }
          }
          pool6: file(relativePath: { eq: "b/basen-wewnetrzny.jpg" }) {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                sizes: "(min-width: 1024px) 25vw, 100vw"
              )
            }
          }
          pool7: file(relativePath: { eq: "b/_MPK3570-Redigera-2.jpg" }) {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                sizes: "(min-width: 1024px) 25vw, 100vw"
              )
            }
          }
          pool8: file(relativePath: { eq: "b/hotel-noc-ogrod-3.jpg" }) {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                sizes: "(min-width: 1024px) 25vw, 100vw"
              )
            }
          }
          sauna: file(relativePath: { eq: "b/sauna.jpg" }) {
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
    <div className="mt-16 lg:mt-24">
      <div className="ml-auto mr-auto max-w-xl">
        <h2>Kryty basen z brodzikiem i sauną</h2>
        <p>
          Dla miłośników kąpieli przygotowaliśmy basen wewnętrzny, który pozwoli
          na relaks i ochłodzenie w ciepłe dni.
        </p>
        {withInfo && (
          <p className="bg-orange-100 p-4 rounded-lg text-orange-950">
            Basen wewnętrzny i sauna dostępne tylko w przypadku pobytu w
            pokojach hotelowych
          </p>
        )}
      </div>
      <div className="grid gap-3 lg:grid-cols-4 lg:mt-10">
        <RoundedImage
          image={pool1.childImageSharp.gatsbyImageData}
          alt="Basen wewnętrzny"
        />
        <RoundedImage
          image={pool6.childImageSharp.gatsbyImageData}
          alt="Basen wewnętrzny"
        />
        <RoundedImage
          image={pool2.childImageSharp.gatsbyImageData}
          alt="Basen wewnętrzny"
        />
        <RoundedImage
          image={pool5.childImageSharp.gatsbyImageData}
          alt="Basen wewnętrzny - wyjście na ogród"
        />
        <RoundedImage
          image={pool4.childImageSharp.gatsbyImageData}
          alt="Basen wewnętrzny - wyjście na ogród"
        />
        <RoundedImage
          image={pool3.childImageSharp.gatsbyImageData}
          alt="Basen wewnętrzny z zewnątrz"
        />
        <RoundedImage
          image={pool7.childImageSharp.gatsbyImageData}
          alt="Leżak przed basenem wewnętrznym"
        />
        <RoundedImage
          image={sauna.childImageSharp.gatsbyImageData}
          alt="Sauna"
        />
      </div>
    </div>
  );
}
InteriorPool.propTypes = {
  withInfo: PropTypes.bool,
};
