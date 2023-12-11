import { graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import BigFeature from '../components/BigFeature';
import DuckDivider from '../components/DuckDivider';
import Hero from '../components/HeroImage';
import HollowButtonLink from '../components/HollowButtonLink';
import AC from '../components/icons/AC';
import Bathroom from '../components/icons/Bathroom';
import Bedroom from '../components/icons/Bedroom';
// icons
import Person from '../components/icons/Person';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import SmallerFeature from '../components/SmallerFeature';
import {
  bungalowDescription,
  singleBungalow,
  smallerFeatures,
} from '../scss/modules/SingleBungalow.module.scss';

const Domki = ({
  data: { domkiAir, domkiNight, bedroomClassic, domki, domekLux },
}) => (
  <Layout>
    <SEO
      title="Komfortowe domki nad morzem"
      description="71 domków na siedmiu hektarach. Mnóstwo zieleni i przestrzeni. Komfortowo wyposażone domki na Twoje wczasy rodzinne."
    />
    <Hero
      image={domkiAir.childImageSharp.gatsbyImageData}
      altText="Domki z lotu ptaka"
      header="Komfortowe domki nad morzem"
    />
    <div className="m-t-7">
      <BigFeature
        img={domkiNight.childImageSharp.gatsbyImageData}
        bigSign="Domki"
        imgOnRight
        alt="Domek nocą"
      >
        <h2>Domki letniskowe</h2>
        <p>
          Przygotowaliśmy 71 domków letniskowych. Rozstawione na siedmiu
          hektarach tworzą piękny krajobraz z mnóstwem przestrzeni.
        </p>
      </BigFeature>
    </div>
    <div className="m-t-7">
      <BigFeature
        img={bedroomClassic.childImageSharp.gatsbyImageData}
        bigSign="Komfort"
        alt="Sypialnia domku"
      >
        <h2>Komfort</h2>
        <p>
          Domki z dwiema lub trzema sypialniami oraz salonem. Domki są wygodnie
          urządzone oraz posiadają taras. Komfort dla całej rodziny.
        </p>
      </BigFeature>
    </div>
    <div className="m-t-7">
      <BigFeature
        img={domki.childImageSharp.gatsbyImageData}
        bigSign="Cisza"
        imgOnRight
        alt="Otoczenie domków"
      >
        <h2>Cisza i spokój</h2>
        <p>
          Kacze Stawy są umiejscowione za lasem, z dala od zgiełku. Specjalnie
          wybraliśmy takie miejsce abyś odpoczął w ciszy i spokoju.
        </p>
      </BigFeature>
    </div>
    <DuckDivider />
    <div className="m-t-7">
      <h2 className="text-center">Rodzaje domków</h2>
    </div>
    <div className="align-center max-1600 ">
      <div className={singleBungalow}>
        <div className={bungalowDescription}>
          <h3>Classic i Premium</h3>
          <p>68 domków idealnych dla 3-5 osobowej rodziny.</p>
          <div className={smallerFeatures}>
            <SmallerFeature icon={<Person />} header="4-6 osób" />
            <SmallerFeature icon={<Bedroom />} header="2 sypialnie" />
            <SmallerFeature icon={<Bathroom />} header="1 łazienka" />
          </div>
          <div className="text-center">
            <Link to="/domki/classic-premium">
              <HollowButtonLink>Zobacz domek Classic/Premium</HollowButtonLink>
            </Link>
          </div>
        </div>
        <GatsbyImage
          image={domkiNight.childImageSharp.gatsbyImageData}
          alt="Domek Premium nocą"
          objectFit="cover"
        />
      </div>
      <DuckDivider />
      <div className={singleBungalow}>
        <div className={bungalowDescription}>
          <h3>Lux</h3>
          <p>3 domki Lux idealne dla dwóch rodzin.</p>
          <div className={smallerFeatures}>
            <SmallerFeature icon={<Person />} header="6-8 osób" />
            <SmallerFeature icon={<Bedroom />} header="3 sypialnie" />
            <SmallerFeature icon={<AC />} header="Klimatyzacja" />
          </div>
          <div className="text-center">
            <Link to="/domki/lux">
              <HollowButtonLink>Zobacz domek Lux</HollowButtonLink>
            </Link>
          </div>
        </div>
        <GatsbyImage
          image={domekLux.childImageSharp.gatsbyImageData}
          alt="Domek Luz z zewnątrz"
          objectFit="cover"
        />
      </div>
    </div>
  </Layout>
);

Domki.propTypes = {
  data: PropTypes.object,
};

export const query = graphql`
  {
    domkiAir: file(
      relativePath: { eq: "o/lotnicze/darktable_exported/DSC_6086_01.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    domkiNight: file(relativePath: { eq: "b/domek-noc-kacze-stawy.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    bedroomClassic: file(
      relativePath: { eq: "b/sypialnia-domek-kacze-stawy.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    domki: file(relativePath: { eq: "b/domki-kacze-stawy.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    domekLux: file(relativePath: { eq: "b/domek-lux.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;

export default Domki;
