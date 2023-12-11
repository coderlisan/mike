import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';

import { RoundedImage } from '../common/RoundedImage';
// import { RoomSmallFeatures } from '../Rooms/RoomSmallFeatures';

export function Rooms() {
  const {
    room1,
    room2,
    room3,
    room4,
    room5,
    room6,
    room7,
    room8,
    room9,
    room10,
    room11,
  } = useStaticQuery(
    graphql`
      {
        room1: file(relativePath: { eq: "b/hotel-balkon-1.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              sizes: "(min-width: 1024px) 33vw, 100vw"
            )
          }
        }
        room2: file(relativePath: { eq: "b/hotel-balkon.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              sizes: "(min-width: 1024px) 33vw, 100vw"
            )
          }
        }
        room3: file(relativePath: { eq: "b/hotel-lazienka-1.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              sizes: "(min-width: 1024px) 33vw, 100vw"
            )
          }
        }
        room4: file(relativePath: { eq: "b/hotel-lazienka.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              sizes: "(min-width: 1024px) 33vw, 100vw"
            )
          }
        }
        room5: file(relativePath: { eq: "b/hotel-pokoj-1.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              sizes: "(min-width: 1024px) 33vw, 100vw"
            )
          }
        }
        room6: file(relativePath: { eq: "b/hotel-pokoj-2.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              sizes: "(min-width: 1024px) 33vw, 100vw"
            )
          }
        }
        room7: file(relativePath: { eq: "b/hotel-pokoj-3.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              sizes: "(min-width: 1024px) 33vw, 100vw"
            )
          }
        }
        room8: file(relativePath: { eq: "b/hotel-pokoj-4.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              sizes: "(min-width: 1024px) 33vw, 100vw"
            )
          }
        }
        room9: file(relativePath: { eq: "b/hotel-pokoj-ogrod.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              sizes: "(min-width: 1024px) 33vw, 100vw"
            )
          }
        }
        room10: file(relativePath: { eq: "b/hotel-pokoj.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              sizes: "(min-width: 1024px) 33vw, 100vw"
            )
          }
        }
        room11: file(relativePath: { eq: "b/taras-hotelowy.jpg" }) {
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
        <h2>Komfortowe pokoje</h2>
        <p>
          Odpocznij w naszych komfortowych pokojach i ciesz się odpoczynkiem w
          pięknej Łebie. Oferujemy pokoje 2, 3 i 4 osobowe, które są idealne dla
          rodzin z dziećmi. W naszych przestronnych i wygodnych pokojach
          znajdziesz wszystko, czego potrzebujesz, aby zrelaksować się po dniu
          pełnym wrażeń.
        </p>
        <p>
          Każdy nasz pokój jest jasny i przytulny, wyposażony w wygodne łóżka,
          telewizor z płaskim ekranem i biurko z krzesłami. Dla naszych gości
          przygotowaliśmy również bezpłatny internet Wi-Fi.
        </p>
        <p>
          Nasze pokoje są utrzymane w stonowanej kolorystyce, co tworzy
          kameralny i przytulny klimat.
        </p>
        <p>
          <Link to="/pokoje">Zobacz nasze pokoje</Link>
        </p>
      </div>
      <div className="grid gap-3 lg:grid-cols-3 lg:mt-10">
        <RoundedImage
          image={room6.childImageSharp.gatsbyImageData}
          alt="Pokój, łóżko"
        />
        <RoundedImage
          image={room1.childImageSharp.gatsbyImageData}
          alt="Balkon"
        />
        <RoundedImage
          image={room2.childImageSharp.gatsbyImageData}
          alt="Balkon"
        />
        <RoundedImage
          image={room3.childImageSharp.gatsbyImageData}
          alt="Łazienka"
        />
        <RoundedImage
          image={room4.childImageSharp.gatsbyImageData}
          alt="Łazienka"
        />
        <RoundedImage
          image={room5.childImageSharp.gatsbyImageData}
          alt="Łóżko i sofa"
        />
        <RoundedImage
          image={room7.childImageSharp.gatsbyImageData}
          alt="Łóżko i sofa"
        />
        <RoundedImage
          image={room8.childImageSharp.gatsbyImageData}
          alt="Biurko i szafa"
        />
        <RoundedImage
          image={room9.childImageSharp.gatsbyImageData}
          alt="Pokój z wyjściem na ogród"
        />
        <RoundedImage
          image={room10.childImageSharp.gatsbyImageData}
          alt="Pokój"
        />
        <RoundedImage
          image={room11.childImageSharp.gatsbyImageData}
          alt="Taras z widokiem na ogród"
        />
      </div>
      {/* <div className="mt-8 lg:mt-24">
        <RoomSmallFeatures />
      </div> */}
    </div>
  );
}
