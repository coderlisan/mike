import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import BigFeature from '../../components/BigFeature';
import Hero from '../../components/HeroImage';
import Armchair from '../../components/icons/Armchair';
import Bathroom from '../../components/icons/Bathroom';
import Bedroom from '../../components/icons/Bedroom';
import Couch from '../../components/icons/Couch';
import DoubleBed from '../../components/icons/DoubleBed';
import Fridge from '../../components/icons/Fridge';
import Kettle from '../../components/icons/Kettle';
import LivingRoom from '../../components/icons/LivingRoom';
// icons
import Person from '../../components/icons/Person';
import SingleBed from '../../components/icons/SingleBed';
import Sunbed from '../../components/icons/Sunbed';
import TV from '../../components/icons/TV';
import Layout from '../../components/Layout';
import SEO from '../../components/Seo';
import SmallerFeature from '../../components/SmallerFeature';
import SmallerFeatures from '../../components/SmallerFeatures';
import ThreePicturesVertical from '../../components/ThreePicturesVertical';
import TwoPictures from '../../components/TwoPictures';

const ClassicPremium = ({
  data: {
    domkiNight,
    bedroom,
    livingRoom,
    livingRoom1,
    livingRoom2,
    domki,
    bathroom,
    withPond,
    domek,
  },
}) => (
  <Layout>
    <SEO
      title="Domki Classic i Premium"
      description="Domki Classic i Premium dla 4-6 osób. Dwie sypialnie, łazienka, salon, taras"
    />
    <Hero
      image={domkiNight.childImageSharp.gatsbyImageData}
      altText="Domek Premium w Kaczych Stawach nocą"
      header="Domek Classic i Premium"
      objectPosition="70% 40%"
    />
    <div className="m-t-7">
      <BigFeature
        img={bedroom.childImageSharp.gatsbyImageData}
        imgOnRight
        bigSign="Komfort"
        alt="Sypialnia domku Classic/Premium"
      >
        <h2>Komfortowe domki</h2>
        <p>
          Nasze Domki Classic i Premium idealne dla rodziny do spędzenia
          komfortowych wczasów nad morzem. Dwie sypialnie, salon, łazienka,
          taras.
        </p>
      </BigFeature>
    </div>
    <div className="m-t-5">
      <SmallerFeatures>
        <SmallerFeature icon={<Person />} header="4-6 osób" />
        <SmallerFeature icon={<Bedroom />} header="2 sypialnie" />
        <SmallerFeature icon={<Bathroom />} header="Łazienka" />
        <SmallerFeature icon={<LivingRoom />} header="Salon" />
        <SmallerFeature icon={<DoubleBed />} header="1 podwójne łóżko" />
        <SmallerFeature icon={<SingleBed />} header="2 pojedyncze łóżka" />
        <SmallerFeature icon={<Couch />} header="Rozkładana kanapa" />
        <SmallerFeature icon={<Armchair />} header="Fotel" />
        <SmallerFeature icon={<TV />} header="TV LCD" />
        <SmallerFeature icon={<Fridge />} header="Lodówka" />
        <SmallerFeature icon={<Kettle />} header="Czajnik elektryczny" />
        <SmallerFeature icon={<Sunbed />} header="2 leżaki" />
      </SmallerFeatures>
    </div>
    <div className="max-1300 align-center p-4">
      <h2>Ponadto:</h2>
      <ul className="dot-list">
        <li>
          <strong>Sypialnia: </strong>4 szafki nocne, 1 toaletka, kołdry,
          poduszki, pościel
        </li>
        <li>
          <strong>Salon: </strong>stolik, stół, krzesła
        </li>
        <li>
          <strong>Aneks kuchenny: </strong>zlewozmywak, naczynia, sztućce
        </li>
        <li>
          <strong>Łazienka: </strong> umywalka, ubikacja, kabina przysznicowa
        </li>
      </ul>
      <p>
        Na tarasie znajdują się meble ogrodowe. W słoneczne dni można skorzystać
        z leżaków (2 sztuki w każdym domku), a w wietrzne z parawanu (1 sztuka w
        domku). Na terenie całego Holiday Parku „Kacze Stawy” dostępny jest
        bezpłatny dostęp do bezprzewodowego Internetu.
      </p>
    </div>
    <div className="max-1300 align-center p-4">
      <h3>Czym się różni domek Classic od Premium?</h3>
      <ul className="dot-list">
        <li>
          <strong>Położenie: </strong>
          domki Premium są lepiej umiejscowione, bliżej basenu lub placów zabaw.
        </li>
        <li>W domkach Premium dodatkowo jest kuchenka mikrofalowa</li>
      </ul>
    </div>
    <div className="m-t-5">
      <ThreePicturesVertical
        firstPhoto={livingRoom.childImageSharp.gatsbyImageData}
        secondPhoto={withPond.childImageSharp.gatsbyImageData}
        thirdPhoto={bathroom.childImageSharp.gatsbyImageData}
        firstAlt="Salon oraz sypialnie domku letniskowego"
        secondAlt="Staw z domkiem w tle"
        thirdAlt="Łazienka w domku letniskowym"
      />
      <TwoPictures
        firstPhoto={domek.childImageSharp.gatsbyImageData}
        secondPhoto={livingRoom1.childImageSharp.gatsbyImageData}
        firstAlt="Wnętrze domku letniskowego z basenem w oknie"
        secondAlt="Salon domku letniskowego"
      />
      <TwoPictures
        firstPhoto={livingRoom2.childImageSharp.gatsbyImageData}
        firstAlt="Salon i aneks kuchenny w domku"
        secondPhoto={domki.childImageSharp.gatsbyImageData}
        secondAlt="Domki letniskowe z zewnątrz"
      />
    </div>
  </Layout>
);

ClassicPremium.propTypes = {
  data: PropTypes.object,
};

export default ClassicPremium;

export const query = graphql`
  {
    domkiNight: file(relativePath: { eq: "b/domek-noc-kacze-stawy.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    bedroom: file(relativePath: { eq: "b/sypialnia-domek-kacze-stawy.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    livingRoom: file(relativePath: { eq: "b/salon-domek-kacze-stawy.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    livingRoom1: file(relativePath: { eq: "b/salon-domek-kacze-stawy-1.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    livingRoom2: file(relativePath: { eq: "b/salon-domek-kacze-stawy-2.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    domki: file(relativePath: { eq: "b/domki-kacze-stawy.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    bathroom: file(relativePath: { eq: "b/lazienka-domek.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 500, layout: CONSTRAINED)
      }
    }
    withPond: file(relativePath: { eq: "n/MPK2966.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 500, layout: CONSTRAINED)
      }
    }
    domek: file(relativePath: { eq: "b/domek-basen-w-tle.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
