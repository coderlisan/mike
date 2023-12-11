import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Hero from '../components/HeroImage';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import TwoPictures from '../components/TwoPictures-66-33';

const OutdoorGym = ({ data: { gym, gym1, gym2 } }) => (
  <Layout>
    <SEO
      title="Siłownia na świeżym powietrzu"
      description="Wszechstronna zewnętrzna siłownia na terenie ośrodka. "
    />
    <Hero
      image={gym2.childImageSharp.gatsbyImageData}
      header="Siłownia na świeżym powietrzu"
      altText="Siłownia zewnętrzna"
    />
    <div className="m-t-5-desktop">
      <div className="text-block-wider block-centered">
        <h2>Zadbaj o formę na urlopie</h2>
        <p>
          Spal trochę kalorii po naszych obfitych posiłkach :) Zadbaj o swoje
          ciało i skorzystaj z różnorodnych, bezpiecznych urządzeń w naszej
          siłowni zewnętrznej.
        </p>
        <p>
          Przyrządy są łatwe w obsłudze i przygotowane dla każdego. Nieważne czy
          jesteś stałym bywalcem siłowni czy osobą początkującą, na pewno
          znajdziesz coś dla siebie.
        </p>
      </div>
    </div>
    <div className="m-t-7">
      <TwoPictures
        firstPhoto={gym.childImageSharp.gatsbyImageData}
        secondPhoto={gym1.childImageSharp.gatsbyImageData}
        firstAlt="Siłownia zewnętrzna"
        secondAlt="Siłownia na świeżym powietrzu"
      />
    </div>
  </Layout>
);
OutdoorGym.propTypes = {
  data: PropTypes.object,
};

export default OutdoorGym;

export const query = graphql`
  {
    gym: file(relativePath: { eq: "b/silownia-zewnetrzna.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    gym1: file(relativePath: { eq: "b/silownia-zewnetrzna-1.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 800, layout: CONSTRAINED)
      }
    }
    gym2: file(relativePath: { eq: "b/silownia-zewnetrzna-2.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
