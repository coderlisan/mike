import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import BigFeature from '../components/BigFeature';
import Hero from '../components/HeroImage';
// icons
import Layout from '../components/Layout';
import { RoomSmallFeatures } from '../components/Rooms/RoomSmallFeatures';
import SEO from '../components/Seo';
import TwoPictures from '../components/TwoPictures';

const Rooms = ({
  data: {
    roomHero,
    room,
    room1,
    room2,
    room3,
    room4,
    room5,
    balcony,
    balcony1,
    bathroom,
    bathroom1,
    terrace,
  },
}) => (
  <Layout>
    <SEO
      title="Pokoje hotelowe"
      description="Nowe, klimatyzowane pokoje hotelowe. Dostępne 2,3 i 4 osobowe pokoje"
    />
    <Hero
      image={roomHero.childImageSharp.gatsbyImageData}
      header="Pokoje"
      altText="Pokój hotelowy"
      objectPosition="80% 50%"
    />
    <div className="m-t-5">
      <BigFeature
        img={room.childImageSharp.gatsbyImageData}
        imgOnRight
        bigSign="Pokoje"
        alt="Pokój hotelowy"
      >
        <h2>Nowoczesne pokoje</h2>
        <p>
          Nowe, 2-4 osobowe, klimatyzowane pokoje. Każdy pokój na piętrze
          posiada balkon z widokiem na ogród. Pokoje na parterze mają taras z
          bezpośrednim wyjściem na ogród i plac zabaw.
        </p>
        <p>W ofercie:</p>
        <ul className="dot-list">
          <li>
            2-osobowe od 20 m<sup>2</sup> do 24 m<sup>2</sup>
          </li>
          <li>
            3-osobowe od 24 m<sup>2</sup> do 26 m<sup>2</sup>
          </li>
          <li>
            4-osobowe od 30 m<sup>2</sup> do 33 m<sup>2</sup>
          </li>
        </ul>
      </BigFeature>
    </div>
    <div className="m-t-5">
      <RoomSmallFeatures />
    </div>
    <div className="m-t-7">
      <TwoPictures
        firstPhoto={room1.childImageSharp.gatsbyImageData}
        secondPhoto={room2.childImageSharp.gatsbyImageData}
        firstAlt="Łóżko w pokoju hotelowym"
        secondAlt="Łóżko w pokoju hotelowym"
      />
      <TwoPictures
        firstPhoto={room3.childImageSharp.gatsbyImageData}
        secondPhoto={room4.childImageSharp.gatsbyImageData}
        firstAlt="Łóżko i kanapa w pokoju hotelowym"
        secondAlt="Pokój hotelowy"
      />
      <TwoPictures
        firstPhoto={room5.childImageSharp.gatsbyImageData}
        secondPhoto={balcony.childImageSharp.gatsbyImageData}
        firstAlt="Pokój hotelowy"
        secondAlt="Balkon z meblami"
      />
      <TwoPictures
        firstPhoto={terrace.childImageSharp.gatsbyImageData}
        secondPhoto={bathroom1.childImageSharp.gatsbyImageData}
        firstAlt="Taras z wyjściem na ogród"
        secondAlt="Łazienka w pokoju hotelowym"
      />
      <TwoPictures
        firstPhoto={balcony1.childImageSharp.gatsbyImageData}
        secondPhoto={bathroom.childImageSharp.gatsbyImageData}
        firstAlt="Balkon z widokiem na ogród"
        secondAlt="Łazienka w pokoju hotelowym"
      />
    </div>
  </Layout>
);
Rooms.propTypes = {
  data: PropTypes.object,
};
export default Rooms;

export const query = graphql`
  {
    roomHero: file(relativePath: { eq: "b/hotel-pokoj.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    room: file(relativePath: { eq: "b/hotel-pokoj-ogrod.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    room1: file(relativePath: { eq: "b/hotel-pokoj-1.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    room2: file(relativePath: { eq: "b/hotel-pokoj-2.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    bathroom: file(relativePath: { eq: "b/hotel-lazienka.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    bathroom1: file(relativePath: { eq: "b/hotel-lazienka-1.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    room3: file(relativePath: { eq: "b/hotel-pokoj-3.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    room4: file(relativePath: { eq: "b/hotel-pokoj-4.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    room5: file(relativePath: { eq: "b/pokoj-hotel-kacze-stawy.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    balcony: file(relativePath: { eq: "b/hotel-balkon-1.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    balcony1: file(relativePath: { eq: "b/hotel-balkon.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    terrace: file(relativePath: { eq: "b/taras-hotelowy.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
