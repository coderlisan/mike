import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Hero from '../components/HeroImage';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import TwoPictures from '../components/TwoPictures';

const Massage = ({ data: { massage, massage1 } }) => (
  <Layout>
    <SEO
      title="Gabinet masażu"
      description="Gabinet masażu dostępny dla gości. W naszej ofercie znajdują się m.in. masaże klasyczne, aromaterapeutyczne, relaksacyjne, ujędrniające."
    />
    <Hero
      image={massage.childImageSharp.gatsbyImageData}
      header="Gabinet masażu"
      altText="Gabinet masażu"
    />
    <div className="m-t-5-desktop">
      <div className="text-block-wider block-centered">
        <h2>Zrelaksuj się</h2>
        <p>
          Gabinet masażu jest miejscem, gdzie w atmosferze relaksu i odprężenia
          możesz znaleźć czas wyłącznie dla siebie. To idealne dopełnienie
          Twojego urlopu, które pozwala zatrzymać na chwilę tempo codziennego
          dnia, zaznać pełnego spokoju i odpoczynku.
        </p>
        <p>
          W naszej ofercie znajdują się m.in. masaże klasyczne,
          aromaterapeutyczne, relaksacyjne, ujędrniające.
        </p>
      </div>
    </div>
    <div className="m-t-7">
      <TwoPictures
        firstPhoto={massage.childImageSharp.gatsbyImageData}
        secondPhoto={massage1.childImageSharp.gatsbyImageData}
        firstAlt="Gabinet masażu"
        secondAlt="Gabinet masażu"
      />
    </div>
  </Layout>
);
Massage.propTypes = {
  data: PropTypes.object,
};

export default Massage;

export const query = graphql`
  {
    massage: file(relativePath: { eq: "b/gabinet-masazu.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    massage1: file(relativePath: { eq: "b/gabinet-masazu-1.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
