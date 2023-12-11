import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Hero from '../components/HeroImage';
import Info from '../components/Info';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import TwoPictures from '../components/TwoPictures';

const InsidePool = ({
  data: {
    poolHero,
    insidePool,
    insidePool1,
    insidePool2,
    insidePool3,
    insidePool4,
    insidePool5,
    sauna,
    insidePool6,
    insidePool7,
    insidePool8,
  },
}) => (
  <Layout>
    <SEO
      title="Basen wewnętrzny z sauną"
      description="Basen wewnętrzny z brodzikiem oraz sauną. Otwierane wyjście na ogród."
    />
    <Hero
      image={poolHero.childImageSharp.gatsbyImageData}
      altText="Basen wewnętrzny"
      header="Basen wewnętrzny z sauną"
    />
    <div className="m-t-5-desktop">
      <div className="text-block-wider block-centered">
        <h2>Kryty basen z brodzikiem oraz sauną</h2>
        <p>
          Dla gości hotelu dostępny kryty basen z wyjściem na nasz ogród.
          Zregeneruj się również w naszej saunie.
        </p>
        <Info text="Basen wewnętrzny jak i sauna są dostępne tylko w przypadku wykupienia pobytu w pokojach hotelowych" />
      </div>
    </div>
    <div className="m-t-7">
      <TwoPictures
        firstPhoto={insidePool.childImageSharp.gatsbyImageData}
        firstAlt="Wyjście na ogród z basenu wewnętrznego"
        secondAlt="Wyjście na ogród z basenu wewnętrznego"
        secondPhoto={insidePool1.childImageSharp.gatsbyImageData}
      />
      <TwoPictures
        firstPhoto={insidePool2.childImageSharp.gatsbyImageData}
        firstAlt="Wejście z ogrodu na basen wewnętrzny"
        secondAlt="Basen wewnętrzny"
        secondPhoto={insidePool3.childImageSharp.gatsbyImageData}
      />
      <TwoPictures
        firstPhoto={insidePool4.childImageSharp.gatsbyImageData}
        firstAlt="Basen wewnętrzny"
        secondAlt="Basen wewnętrzny"
        secondPhoto={insidePool5.childImageSharp.gatsbyImageData}
      />
      <TwoPictures
        firstPhoto={sauna.childImageSharp.gatsbyImageData}
        secondPhoto={insidePool6.childImageSharp.gatsbyImageData}
        firstAlt="Sauna"
        secondAlt="Basen wewnętrzny nocą"
      />
      <TwoPictures
        firstPhoto={insidePool7.childImageSharp.gatsbyImageData}
        firstAlt="Leżaki nocą przy basenie wewnętrznym"
        secondPhoto={insidePool8.childImageSharp.gatsbyImageData}
        secondAlt="Leżaki nocą przy basenie wewnętrznym"
      />
    </div>
  </Layout>
);

InsidePool.propTypes = {
  data: PropTypes.object,
};

export default InsidePool;

export const query = graphql`
  {
    poolHero: file(relativePath: { eq: "b/basen-wewnetrzny-1.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    insidePool: file(relativePath: { eq: "b/basen-wewnetrzny-ogrod.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    insidePool1: file(relativePath: { eq: "b/basen-wewnetrzny-ogrod-1.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    insidePool2: file(relativePath: { eq: "b/basen-wewnetrzny-2.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    insidePool3: file(relativePath: { eq: "b/basen-wewnetrzny-3.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    insidePool4: file(relativePath: { eq: "b/basen-wewnetrzny-1.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    insidePool5: file(relativePath: { eq: "b/basen-wewnetrzny.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    sauna: file(relativePath: { eq: "b/sauna.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    insidePool6: file(relativePath: { eq: "b/basen-wewnetrzny-4.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    insidePool7: file(relativePath: { eq: "b/hotel-noc-ogrod-3.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    insidePool8: file(relativePath: { eq: "b/hotel-noc-ogrod-2.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
