import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Hero from '../components/HeroImage';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import TwoPictures from '../components/TwoPictures';

const Fishing = ({
  data: { fishing, fishing1, fishing2, fishing3, fishing4 },
}) => (
  <Layout>
    <SEO
      title="Staw dla wędkarzy | Rodzinne wakacje z wędką"
      description="Corocznie zarybiony staw dla wędkarzy. Odpocznij z rodziną nad morzem i uprawiaj swoje ulubione hobby na wyciągnięcie ręki."
    />
    <Hero
      image={fishing.childImageSharp.gatsbyImageData}
      header="Staw dla wędkarzy. Rodzinne wakacje z wędką."
      altText="Staw dla wędkarzy w Kaczych Stawach"
    />
    <div className="m-t-5-desktop">
      <div className="text-block-wider block-centered">
        <h2>Corocznie zarybiany staw</h2>
        <p>
          W cenie każdego pobytu dostęp do corocznie zarybianego stawu. Twoje
          hobby na wyciągnięcie ręki. Nie potrzebujesz żadnych zezwoleń.
        </p>
        <p>
          Spędzaj czas ze swoimi dziećmi, ucząc je jak zarzucać wędkę albo
          zostaw je pod opieką naszych animatorów i odetchnij w ciszy nad
          stawem.
        </p>
        <p>
          W stawie możesz złowić między innymi karpie, liny, szczupaki, okonie i
          karasie.
        </p>
        <p>Zabierz swoje wędki! Nie posiadamy wędek na wypożyczenie.</p>
      </div>
    </div>
    <div className="m-t-7">
      <TwoPictures
        firstPhoto={fishing1.childImageSharp.gatsbyImageData}
        secondPhoto={fishing2.childImageSharp.gatsbyImageData}
        firstAlt="Staw dla wędkarzy"
        secondAlt="Staw dla wędkarzy na Kaczych Stawach"
      />
    </div>
    <TwoPictures
      firstPhoto={fishing3.childImageSharp.gatsbyImageData}
      secondPhoto={fishing4.childImageSharp.gatsbyImageData}
      firstAlt="Staw dla wędkarzy"
      secondAlt="Staw dla wędkarzy na Kaczych Stawach"
    />
  </Layout>
);
Fishing.propTypes = {
  data: PropTypes.object,
};

export default Fishing;

export const query = graphql`
  {
    fishing: file(relativePath: { eq: "o/I/_DSC9983.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    fishing1: file(relativePath: { eq: "b/staw-dla-wedkarzy-1.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    fishing2: file(relativePath: { eq: "b/staw-dla-wedkarzy-2.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    fishing3: file(relativePath: { eq: "b/kacze-stawy-wedkowanie.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    fishing4: file(relativePath: { eq: "o/III/DSC_5923.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
