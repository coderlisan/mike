import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import BigFeature from '../components/BigFeature';
import DuckDivider from '../components/DuckDivider';
import Hero from '../components/HeroImage';
import HollowButtonLink from '../components/HollowButtonLink';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import TwoPictures from '../components/TwoPictures';

const Hotel = ({
  data: {
    hotelNightWide,
    room,
    insidePool,
    food,
    sauna,
    kidsCorner,
    bar,
    garden,
    playground,
    room1,
    bathroom,
    balcony,
    insidePool1,
    bar1,
    bar2,
    bar3,
    hotel1,
    hotel2,
    hotel3,
  },
}) => (
  <Layout>
    <SEO
      title="Hotel"
      description="Nowy pawilon hotelowy z basenem wewnętrznym, sauną, dodatkowym placem zabaw oraz klimatyzowanymi pokojami"
    />
    <Hero
      image={hotelNightWide.childImageSharp.gatsbyImageData}
      altText="Hotel Kacze Stawy nocą"
      header="Wyjątkowy hotel"
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
          Nowe 2-4 osobowe, klimatyzowane pokoje z zamkniętym ogrodem oraz
          placem zabaw.
        </p>

        <div className="center-on-small">
          <Link to="/pokoje">
            <HollowButtonLink>Zobacz pokoje</HollowButtonLink>
          </Link>
        </div>
      </BigFeature>
    </div>
    <div className="m-t-5">
      <BigFeature
        img={insidePool.childImageSharp.gatsbyImageData}
        bigSign="Basen"
        alt="Basen wewnętrzny"
      >
        <h2>Basen wewnętrzny</h2>
        <p>
          Dla gości pawilonu hotelowego przygotowaliśmy nowy basen wewnętrzny
          wraz z sauną.
        </p>

        <div className="center-on-small">
          <Link to="/basen-wewnetrzny">
            <HollowButtonLink>Zobacz basen wewnętrzny</HollowButtonLink>
          </Link>
        </div>
      </BigFeature>
    </div>
    <div className="m-t-5">
      <BigFeature
        img={food.childImageSharp.gatsbyImageData}
        imgOnRight
        bigSign="Wyżywienie"
        alt="Bufet"
      >
        <h2>Całodniowe wyżywienie</h2>
        <p>
          Codziennie rano w naszej restauracji serwujemy śniadania, a późnym
          popołudniem obiadokolację.
        </p>
        <p>Szeroki wybór dań gwarantuje, że każdy znajdzie coś dla siebie.</p>
        <p>
          Najesz się do syta, a to wszystko jest już zawarte w cenie pobytu!
        </p>

        <div className="center-on-small">
          <Link to="/wyzywienie">
            <HollowButtonLink>Zobacz wyżywienie</HollowButtonLink>
          </Link>
        </div>
      </BigFeature>
    </div>
    <div className="m-t-5">
      <BigFeature
        img={sauna.childImageSharp.gatsbyImageData}
        bigSign="Sauna"
        alt="Sauna"
      >
        <h2>Sauna</h2>
        <p>
          Zrelaksuj się i zregeneruj siły w naszej saunie przy basenie
          wewnętrznym.
        </p>
      </BigFeature>
    </div>
    <div className="m-t-7">
      <Hero
        image={garden.childImageSharp.gatsbyImageData}
        header="Niepowtarzalny klimat"
        altText="Kurtyna wodna"
      />
    </div>
    <DuckDivider />
    <div className="m-t-5">
      <BigFeature
        img={kidsCorner.childImageSharp.gatsbyImageData}
        imgOnRight
        bigSign="Dzieci"
        alt="Kącik dla dzieci"
      >
        <h2>Kącik dla dzieci</h2>
        <p>
          W holu głównym hotelu przygotowaliśmy kącik dla dzieci z przeróżnymi
          zabawkami.
        </p>
      </BigFeature>
    </div>
    <div className="m-t-5">
      <BigFeature
        img={bar.childImageSharp.gatsbyImageData}
        bigSign="Bar"
        alt="Bar hotelowy"
      >
        <h2>Całodobowy bar</h2>
        <p>Nasz hotelowy bar jest otwarty całą dobę.</p>
      </BigFeature>
    </div>
    <div className="m-t-5">
      <BigFeature
        img={playground.childImageSharp.gatsbyImageData}
        bigSign="Plac"
        imgOnRight
        alt="Plac zabaw hotelowy"
      >
        <h2>Dodatkowy plac zabaw</h2>
        <p>
          Oprócz pięciu placów zabaw na terenie Kaczych Stawów, dodatkowy plac
          zabaw w hotelowym ogrodzie na wyłączność dla gości hotelowych.
        </p>

        <div className="center-on-small">
          <Link to="/place-zabaw">
            <HollowButtonLink>Zobacz place zabaw</HollowButtonLink>
          </Link>
        </div>
      </BigFeature>
    </div>
    <DuckDivider />
    <div className="m-t-7">
      <TwoPictures
        firstPhoto={room1.childImageSharp.gatsbyImageData}
        secondPhoto={bathroom.childImageSharp.gatsbyImageData}
        firstAlt="Pokój hotelowy"
        secondAlt="Łazienka w pokoju hotelowym"
      />
      <TwoPictures
        firstPhoto={balcony.childImageSharp.gatsbyImageData}
        secondPhoto={insidePool1.childImageSharp.gatsbyImageData}
        firstAlt="Balkon z widokiem na ogród"
        secondAlt="Basen wewnętrzny z wyjściem na ogród"
      />
      <TwoPictures
        firstPhoto={bar1.childImageSharp.gatsbyImageData}
        secondPhoto={bar2.childImageSharp.gatsbyImageData}
        firstAlt="Recepcja oraz bar hotelowy"
        secondAlt="Kanapa i fotel w lobby hotelowym"
      />
      <TwoPictures
        firstPhoto={bar3.childImageSharp.gatsbyImageData}
        firstAlt="Lobby hotelowe"
        secondPhoto={hotel1.childImageSharp.gatsbyImageData}
        secondAlt="Hotel nocą"
      />
      <TwoPictures
        firstPhoto={hotel2.childImageSharp.gatsbyImageData}
        secondPhoto={hotel3.childImageSharp.gatsbyImageData}
        firstAlt="Hotel nocą"
        secondAlt="Leżaki przy basenie nocą"
      />
    </div>
  </Layout>
);

Hotel.propTypes = {
  data: PropTypes.object,
};

export default Hotel;

export const query = graphql`
  {
    hotelNightWide: file(relativePath: { eq: "b/hotel-kacze-stawy-noc.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    room: file(relativePath: { eq: "b/pokoj-hotel-kacze-stawy.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    insidePool: file(relativePath: { eq: "b/basen-wewnetrzny.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    food: file(relativePath: { eq: "b/bufet-hotel.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    sauna: file(relativePath: { eq: "b/sauna.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    kidsCorner: file(relativePath: { eq: "b/kacik-dla-dzieci.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    bar: file(relativePath: { eq: "b/hotel-bar.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    garden: file(relativePath: { eq: "b/ogrod-fontanna.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    playground: file(relativePath: { eq: "b/hotel-plac-zabaw.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    room1: file(relativePath: { eq: "b/hotel-pokoj.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    bathroom: file(relativePath: { eq: "b/hotel-lazienka.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    balcony: file(relativePath: { eq: "b/hotel-balkon.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    insidePool1: file(relativePath: { eq: "b/basen-wewnetrzny-ogrod.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    bar1: file(relativePath: { eq: "b/hotel-bar-1.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    bar2: file(relativePath: { eq: "b/hotel-bar-2.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    bar3: file(relativePath: { eq: "b/hotel-bar-3.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    hotel1: file(relativePath: { eq: "b/hotel-noc-ogrod.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    hotel2: file(relativePath: { eq: "b/hotel-noc-front.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    hotel3: file(relativePath: { eq: "b/hotel-noc-ogrod-2.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
