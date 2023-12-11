import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Hero from '../components/HeroImage';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import TwoPictures from '../components/TwoPictures';

const Playgrounds = ({
  data: {
    playground,
    playground1,
    playground2,
    playground3,
    playground4,
    playground5,
    playground6,
  },
}) => (
  <Layout>
    <SEO
      title="6 placów zabaw"
      description="Na terenie Kaczych Stawów w sumie 6 różnorodnych placów zabaw."
    />
    <Hero
      image={playground1.childImageSharp.gatsbyImageData}
      header="6 placów zabaw"
      altText="Plac zabaw na Kaczych Stawach"
    />
    <div className="m-t-5-desktop">
      <div className="text-block-wider block-centered">
        <h2>Różnorodne place zabaw</h2>
        <p>
          Na terenie całego Holiday Parku Kacze Stawy przygotowaliśmy w sumie 6
          placów zabaw.
        </p>
        <p>
          Różnorodność zabawek sprawia, że każde dziecko znajdzie coś dla
          siebie.
        </p>
      </div>
    </div>
    <div className="m-t-7">
      <TwoPictures
        firstPhoto={playground.childImageSharp.gatsbyImageData}
        secondPhoto={playground2.childImageSharp.gatsbyImageData}
        firstAlt="Drewniany plac zabaw"
        secondAlt="Plac zabaw przy domkach"
      />
      <TwoPictures
        firstPhoto={playground3.childImageSharp.gatsbyImageData}
        secondPhoto={playground4.childImageSharp.gatsbyImageData}
        firstAlt="Drewniany plac zabaw z boiskiem do siatkówki"
        secondAlt="Plac zabaw i ławeczka przy domkach"
      />
      <TwoPictures
        firstPhoto={playground5.childImageSharp.gatsbyImageData}
        secondPhoto={playground6.childImageSharp.gatsbyImageData}
        firstAlt="Ławeczka i plac zabaw"
        secondAlt="Boisko do siatkówki plażowej"
      />
    </div>
  </Layout>
);
Playgrounds.propTypes = {
  data: PropTypes.object,
};

export default Playgrounds;

export const query = graphql`
  {
    playground: file(relativePath: { eq: "b/plac-zabaw.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    playground1: file(relativePath: { eq: "b/plac-zabaw-1.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    playground2: file(relativePath: { eq: "b/plac-zabaw-3.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    playground3: file(relativePath: { eq: "b/plac-zabaw-2.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    playground4: file(relativePath: { eq: "b/plac-zabaw-4.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    playground5: file(relativePath: { eq: "b/plac-zabaw-5.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    playground6: file(relativePath: { eq: "b/boisko.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
