import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Hero from '../components/HeroImage';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import TwoPictures from '../components/TwoPictures';

const Zoo = ({
  data: { zoo, /* zoo1, */ zoo2, zoo3, zoo4, zoo5 /*  zoo6 */ },
}) => (
  <Layout>
    <SEO
      title="Mini zoo"
      description="Mini zoo na terenie ośrodka Holiday Park Kacze Stawy w Łebie"
    />
    <Hero
      image={zoo.childImageSharp.gatsbyImageData}
      header="Mini zoo"
      altText="Koza w mini zoo"
      objectPosition="top"
    />
    <div className="m-t-5-desktop">
      <div className="text-block-wider block-centered">
        <h2>Mini Zoo tylko dla naszych gości</h2>
        <p>
          Zabierz swoje dzieci do naszego Mini Zoo. Zobaczą tam kozy, puchate
          owce, króliki a nawet kolorowe kurki.
        </p>
      </div>
    </div>
    {/* Temporary disabled full segment with horses */}
    {/* <div className="m-t-7">
      <TwoPictures
        firstPhoto={zoo3.childImageSharp.gatsbyImageData}
        secondPhoto={zoo1.childImageSharp.gatsbyImageData}
        firstAlt="Kozy"
        secondAlt="Kucyk"
      />
      <TwoPictures
        firstPhoto={zoo2.childImageSharp.gatsbyImageData}
        secondPhoto={zoo4.childImageSharp.gatsbyImageData}
        firstAlt="Króliczek"
        secondAlt="Kozioł"
      />
      <TwoPictures
        firstPhoto={zoo6.childImageSharp.gatsbyImageData}
        secondPhoto={zoo5.childImageSharp.gatsbyImageData}
        firstAlt="Kucyk z dziećmi"
        secondAlt="Króliki z dziećmi"
      />
    </div> */}
    <div className="m-t-7">
      <TwoPictures
        firstPhoto={zoo3.childImageSharp.gatsbyImageData}
        secondPhoto={zoo4.childImageSharp.gatsbyImageData}
        firstAlt="Kozy"
        secondAlt="Kozioł"
      />
      <TwoPictures
        firstPhoto={zoo2.childImageSharp.gatsbyImageData}
        secondPhoto={zoo5.childImageSharp.gatsbyImageData}
        firstAlt="Króliczek"
        secondAlt="Króliki z dziećmi"
      />
    </div>
  </Layout>
);
Zoo.propTypes = {
  data: PropTypes.object,
};

export default Zoo;

export const query = graphql`
  {
    zoo: file(relativePath: { eq: "b/mini-zoo.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    zoo1: file(relativePath: { eq: "o/IV/_DSC0039-2.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    zoo2: file(relativePath: { eq: "minizoo/minizoo-6.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 850, layout: CONSTRAINED)
      }
    }
    zoo3: file(relativePath: { eq: "minizoo/minizoo-5.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 850, layout: CONSTRAINED)
      }
    }
    zoo4: file(relativePath: { eq: "minizoo/minizoo-4.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 850, layout: CONSTRAINED)
      }
    }
    zoo5: file(relativePath: { eq: "minizoo/minizoo-2.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 850, layout: CONSTRAINED)
      }
    }
    zoo6: file(relativePath: { eq: "minizoo/minizoo-1.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 850, layout: CONSTRAINED)
      }
    }
  }
`;
