import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';

import { RoundedImage } from '../common/RoundedImage';
// import { RoomSmallFeatures } from '../Rooms/RoomSmallFeatures';

export function Bungalows() {
  const { bungalow1, bungalow2, bungalow3, bungalow4, bungalow5, bungalow6 } =
    useStaticQuery(
      graphql`
        {
          bungalow1: file(relativePath: { eq: "b/domek-lux.jpg" }) {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                sizes: "(min-width: 1024px) 33vw, 100vw"
              )
            }
          }
          bungalow2: file(relativePath: { eq: "b/domek-basen-w-tle.jpg" }) {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                sizes: "(min-width: 1024px) 33vw, 100vw"
              )
            }
          }
          bungalow3: file(
            relativePath: { eq: "b/salon-domek-kacze-stawy.jpg" }
          ) {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                sizes: "(min-width: 1024px) 33vw, 100vw"
              )
            }
          }
          bungalow4: file(relativePath: { eq: "b/domek-lux-sypiania.jpg" }) {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                sizes: "(min-width: 1024px) 33vw, 100vw"
              )
            }
          }
          bungalow5: file(relativePath: { eq: "b/domki-kacze-stawy.jpg" }) {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                sizes: "(min-width: 1024px) 33vw, 100vw"
              )
            }
          }
          bungalow6: file(relativePath: { eq: "b/domek-lux-taras.jpg" }) {
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
        <h2>Klimatyczne domki</h2>
        <p>
          W naszym ośrodku wczasowym Kacze Stawy w Łebie czekają na Ciebie
          wygodne i przestronne domki letniskowe, w których z pewnością
          poczujesz się jak w domu. Domki są w pełni wyposażone, co zapewni Ci
          wygodny pobyt.
        </p>
        <p>
          Każdy domek posiada dwie sypialnie z wygodnymi łóżkami, salon z
          kanapą, łazienkę z prysznicem oraz kuchnię z lodówką, czajnikiem,
          naczyniami i sztućcami. Na zewnątrz każdego domku znajduje się taras z
          meblami ogrodowymi, gdzie możesz cieszyć się świeżym powietrzem i
          pięknymi widokami.
        </p>
        <p>
          <Link to="/domki">Zobacz jakie domki oferujemy</Link>
        </p>
      </div>
      <div className="grid gap-3 lg:grid-cols-3 lg:mt-10">
        <RoundedImage
          image={bungalow6.childImageSharp.gatsbyImageData}
          alt="Taras domku Lux"
        />
        <RoundedImage
          image={bungalow1.childImageSharp.gatsbyImageData}
          alt="Domek Lux"
        />
        <RoundedImage
          image={bungalow2.childImageSharp.gatsbyImageData}
          alt="Domek z basenem w oknie"
        />
        <RoundedImage
          image={bungalow3.childImageSharp.gatsbyImageData}
          alt="Salon domku"
        />
        <RoundedImage
          image={bungalow4.childImageSharp.gatsbyImageData}
          alt="Sypialnia domku"
        />
        <RoundedImage
          image={bungalow5.childImageSharp.gatsbyImageData}
          alt="Domki wśród drzew"
        />
      </div>
      {/* <div className="mt-8 lg:mt-24">
        <RoomSmallFeatures />
      </div> */}
    </div>
  );
}
