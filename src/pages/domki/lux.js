import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import BigFeature from '../../components/BigFeature';
import Hero from '../../components/HeroImage';
import AC from '../../components/icons/AC';
import Armchair from '../../components/icons/Armchair';
import Bathroom from '../../components/icons/Bathroom';
import Bedroom from '../../components/icons/Bedroom';
import Couch from '../../components/icons/Couch';
import DoubleBed from '../../components/icons/DoubleBed';
import FloorBed from '../../components/icons/FloorBed';
import Fridge from '../../components/icons/Fridge';
import Kettle from '../../components/icons/Kettle';
import LivingRoom from '../../components/icons/LivingRoom';
// icons
import Person from '../../components/icons/Person';
import Sunbed from '../../components/icons/Sunbed';
import TV from '../../components/icons/TV';
import Washer from '../../components/icons/Washer';
import Layout from '../../components/Layout';
import SEO from '../../components/Seo';
import SmallerFeature from '../../components/SmallerFeature';
import SmallerFeatures from '../../components/SmallerFeatures';
import TwoPictures from '../../components/TwoPictures';

const Lux = ({
  data: {
    domkiLux,
    domekLux,
    domkiLux1,
    domkiLux2,
    livingRoom,
    livingRoom1,
    livingRoom2,
    bedroom,
    corridor,
    terrace,
  },
}) => (
  <Layout>
    <SEO
      title="Domki Lux"
      description="3 domki Lux dla 6-8 osób. Trzy sypialnie, dwie łazienki, taras, salon z kuchnią"
    />
    <Hero
      image={domkiLux.childImageSharp.gatsbyImageData}
      header="Domki Lux"
      altText="Domki lux"
      objectPosition="70% 40%"
    />
    <div className="m-t-7">
      <BigFeature
        img={domekLux.childImageSharp.gatsbyImageData}
        imgOnRight
        bigSign="Lux"
        alt="Sypialnia domku Classic/Premium"
      >
        <h2>Dla dwóch rodzin</h2>
        <p>
          Nasze domki Lux są idealne dla dwóch rodzin z dziećmi. Trzy sypialnie,
          dwie łazienki, salon oraz taras.
        </p>
      </BigFeature>
    </div>
    <div className="m-t-5">
      <SmallerFeatures>
        <SmallerFeature icon={<AC />} header="Klimatyzacja" />
        <SmallerFeature icon={<Person />} header="6-8 osób" />
        <SmallerFeature icon={<Bedroom />} header="3 sypialnie" />
        <SmallerFeature icon={<Bathroom />} header="Łazienka i&nbsp;toaleta" />
        <SmallerFeature icon={<LivingRoom />} header="Salon" />
        <SmallerFeature icon={<DoubleBed />} header="2 podwójne łóżka" />
        <SmallerFeature icon={<FloorBed />} header="2 łóżka piętrowe" />
        <SmallerFeature icon={<Couch />} header="Rozkładana kanapa" />
        <SmallerFeature icon={<Armchair />} header="Fotel" />
        <SmallerFeature icon={<TV />} header="TV LCD" />
        <SmallerFeature icon={<Fridge />} header="Lodówka" />
        <SmallerFeature icon={<Kettle />} header="Czajnik elektryczny" />
        <SmallerFeature icon={<Sunbed />} header="3 leżaki" />
        <SmallerFeature icon={<Washer />} header="Pralka" />
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
          <strong>Salon: </strong>stolik, stół, krzesła, rogówka
        </li>
        <li>
          <strong>Aneks kuchenny: </strong>zlewozmywak, naczynia, sztućce,
          kuchenka mikrofalowa
        </li>
        <li>
          <strong>Łazienka: </strong> umywalka, ubikacja, kabina prysznicowa
        </li>
        <li>
          <strong>Toaleta: </strong> umywalka, ubikacja
        </li>
      </ul>
      <p>
        Na tarasie znajdują się meble ogrodowe. W słoneczne dni można skorzystać
        z leżaków (3 sztuki w każdym domku), a w wietrzne z parawanu (2 sztuki w
        domku). Na terenie całego Holiday Parku „Kacze Stawy” dostępny jest
        bezpłatny dostęp do bezprzewodowego Internetu.
      </p>
    </div>
    <div className="m-t-5">
      <TwoPictures
        firstPhoto={bedroom.childImageSharp.gatsbyImageData}
        secondPhoto={terrace.childImageSharp.gatsbyImageData}
        firstAlt="Sypialnia w domku Lux"
        secondAlt="Taras w domku Lux"
      />
      <TwoPictures
        firstPhoto={domkiLux1.childImageSharp.gatsbyImageData}
        firstAlt="Domki Lux z placem zabaw"
        secondAlt="Domki lux"
        secondPhoto={domkiLux2.childImageSharp.gatsbyImageData}
      />
      <TwoPictures
        firstPhoto={livingRoom.childImageSharp.gatsbyImageData}
        firstAlt="Kuchnia"
        secondPhoto={livingRoom1.childImageSharp.gatsbyImageData}
        secondAlt="Aneks kuchenny"
      />
      <TwoPictures
        firstPhoto={livingRoom2.childImageSharp.gatsbyImageData}
        secondPhoto={corridor.childImageSharp.gatsbyImageData}
        firstAlt="Salon w domku Lux"
        secondAlt="Korytarz domku Lux"
      />
    </div>
  </Layout>
);

Lux.propTypes = {
  data: PropTypes.object,
};

export default Lux;

export const query = graphql`
  {
    domkiLux: file(relativePath: { eq: "b/domki-lux.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    domekLux: file(relativePath: { eq: "b/domek-lux.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    domkiLux1: file(relativePath: { eq: "b/domki-lux-1.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    domkiLux2: file(relativePath: { eq: "b/domki-lux-2.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    livingRoom: file(relativePath: { eq: "b/domek-lux-kuchnia.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    livingRoom1: file(relativePath: { eq: "b/domek-lux-kuchnia-1.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    livingRoom2: file(relativePath: { eq: "b/domek-lux-salon.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    bedroom: file(relativePath: { eq: "b/domek-lux-sypiania.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    corridor: file(relativePath: { eq: "b/domek-lux-korytarz.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    terrace: file(relativePath: { eq: "b/domek-lux-taras.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
