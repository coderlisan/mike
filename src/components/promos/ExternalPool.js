import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

// import Pool1 from '@/images/ks/externalPool/basen-ze-zjezdzalnia-kacze-stawy-1.jpg';
// import Pool2 from '@/images/ks/externalPool/basen-zewnetrzny-noc.jpg';
// import Pool3 from '@/images/ks/externalPool/bicz.jpg';
// import Pool4 from '@/images/ks/externalPool/brodzik.jpg';
// import Pool5 from '@/images/ks/externalPool/DSC_3195.jpg';
// import Pool6 from '@/images/ks/externalPool/zjezdzalnia-kacze-stawy.jpg';
import { RoundedImage } from '../common/RoundedImage';

export function ExternalPool() {
  const { pool1, pool2, pool3, pool4, pool5, pool6 } = useStaticQuery(
    graphql`
      {
        pool1: file(
          relativePath: { eq: "b/basen-ze-zjezdzalnia-kacze-stawy-1.jpg" }
        ) {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              sizes: "(min-width: 1024px) 33vw, 100vw"
            )
          }
        }
        pool2: file(relativePath: { eq: "b/basen-zewnetrzny-noc.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              sizes: "(min-width: 1024px) 33vw, 100vw"
            )
          }
        }
        pool3: file(relativePath: { eq: "b/bicz.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              sizes: "(min-width: 1024px) 33vw, 100vw"
            )
          }
        }
        pool4: file(relativePath: { eq: "o/II/DSC_3195.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              sizes: "(min-width: 1024px) 33vw, 100vw"
            )
          }
        }
        pool5: file(relativePath: { eq: "b/zjezdzalnia-kacze-stawy.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              sizes: "(min-width: 1024px) 33vw, 100vw"
            )
          }
        }
        pool6: file(relativePath: { eq: "b/brodzik.jpg" }) {
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
    <>
      <div className="mt-16 lg:mt-24">
        <div className="ml-auto mr-auto max-w-xl">
          <h2>Basen zewnętrzny ze zjeżdżalniami</h2>
          <p>
            Odpocznij korzystając z dużego, zewnętrznego basenu z podgrzewaną
            wodą, zjeżdżalniami i atrakcjami wodnymi.
          </p>
        </div>
      </div>
      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4">
        <RoundedImage
          image={pool1.childImageSharp.gatsbyImageData}
          alt="Basen zewnętrzny - widok ze zjeżdżalni"
        />
        <RoundedImage
          image={pool2.childImageSharp.gatsbyImageData}
          alt="Podświetlony basen zewnętrzny nocą"
        />
        <RoundedImage
          image={pool3.childImageSharp.gatsbyImageData}
          alt="Bicz wodny"
        />
        <RoundedImage
          image={pool4.childImageSharp.gatsbyImageData}
          alt="Basen zewnętrzny - widok ze zjeżdżalni"
        />
        <RoundedImage
          image={pool5.childImageSharp.gatsbyImageData}
          alt="Podświetlony basen zewnętrzny nocą"
        />
        <RoundedImage
          image={pool6.childImageSharp.gatsbyImageData}
          alt="Bicz wodny"
        />
      </div>
    </>
  );
}
