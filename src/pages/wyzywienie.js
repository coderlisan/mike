import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Hero from '../components/HeroImage';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import TwoPictures from '../components/TwoPictures';

const Food = ({
  data: {
    canteen,
    hotelCanteen,
    hotelCanteen1,
    hotelCanteen2,
    hotelCanteen3,
    hotelCanteen4,
    hotelCanteen5,
    mainCanteen,
    mainCanteen1,
    mainCanteen2,
    mainCanteen3,
  },
}) => (
  <Layout>
    <SEO
      title="Całodniowe wyżywienie"
      description="W cenie każdego pobytu Kacze Stawy oferują całodniowe wyżywienie - śniadania i obiadokolację. Szeroki wybór dań."
    />
    <Hero
      image={canteen.childImageSharp.gatsbyImageData}
      header="Całodniowe wyżywienie"
      altText="Restauracja w hotelu Kacze Stawy"
    />
    <div className="m-t-5-desktop">
      <div className="text-block-wider block-centered">
        <h2>Całodniowe wyżywienie w cenie pobytu</h2>
        <p>
          W cenie każdego pobytu zawarte jest całodniowe wyżywienie HB.
          Codziennie rano serwujemy śniadania, a późnym popołudniem
          obiadokolację.
        </p>
        <p>
          Szeroki wybór dań gwarantuje, że na pewno znajdziesz coś dla siebie.
        </p>
      </div>
    </div>
    <div className="m-t-7">
      <TwoPictures
        firstPhoto={hotelCanteen.childImageSharp.gatsbyImageData}
        secondPhoto={hotelCanteen1.childImageSharp.gatsbyImageData}
        firstAlt="Jadalnia w hotelu"
        secondAlt="Bufet hotelowy - zupy"
      />
      <TwoPictures
        firstPhoto={hotelCanteen2.childImageSharp.gatsbyImageData}
        secondPhoto={hotelCanteen3.childImageSharp.gatsbyImageData}
        firstAlt="Bufet śniadaniowy w hotelu"
        secondAlt="Bufet obiadowy w hotelu"
      />
      <TwoPictures
        firstPhoto={hotelCanteen4.childImageSharp.gatsbyImageData}
        secondPhoto={mainCanteen.childImageSharp.gatsbyImageData}
        firstAlt="Bufet hotelowy"
        secondAlt="Bufet w głównej jadalni"
      />
      <TwoPictures
        firstPhoto={mainCanteen1.childImageSharp.gatsbyImageData}
        secondPhoto={mainCanteen2.childImageSharp.gatsbyImageData}
        firstAlt="Jadalnia w głównym budynku"
        secondAlt="Bufet w jadalni"
      />
      <TwoPictures
        firstPhoto={mainCanteen3.childImageSharp.gatsbyImageData}
        secondPhoto={hotelCanteen5.childImageSharp.gatsbyImageData}
        firstAlt="Bufet śniadaniowy"
        secondAlt="Bufet hotelowy"
      />
    </div>
  </Layout>
);

Food.propTypes = {
  data: PropTypes.object,
};

export default Food;

export const query = graphql`
  {
    canteen: file(relativePath: { eq: "b/hotel-stolowka.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    hotelCanteen: file(relativePath: { eq: "b/hotel-stolowka-1.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    hotelCanteen1: file(relativePath: { eq: "b/hotel-wyzywienie.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    hotelCanteen2: file(
      relativePath: { eq: "b/hotel-kacze-stawy-bufet-1.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    hotelCanteen3: file(relativePath: { eq: "b/bufet-hotel.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    hotelCanteen4: file(relativePath: { eq: "b/bufet-kacze-stawy.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    mainCanteen: file(
      relativePath: { eq: "b/wyzywienie-bufet-kacze-stawy.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    mainCanteen1: file(relativePath: { eq: "b/bufet-kacze-stawy-1.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    mainCanteen2: file(relativePath: { eq: "b/bufet-kacze-stawy-2.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    mainCanteen3: file(relativePath: { eq: "b/bufet-kacze-stawy-3.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    hotelCanteen5: file(relativePath: { eq: "b/bufet-kacze-stawy-4.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
