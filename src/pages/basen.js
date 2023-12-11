import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import BigFeature from '../components/BigFeature';
import DuckDivider from '../components/DuckDivider';
import Hero from '../components/HeroImage';
import Layout from '../components/Layout';
import Review from '../components/Review';
import SEO from '../components/Seo';
// import HollowButtonLink from '../components/HollowButtonLink';
// import SmallFeatures from '../components/SmallFeatures';
import TwoPictures from '../components/TwoPictures';

const Pool = ({
  data: {
    poolHero,
    pool1,
    pool2,
    pool3,
    slide1,
    slide2,
    slide3,
    paddling,
    beach,
    beach2,
    // pool4,
    pool5,
    // pool6,
    aqua,
  },
}) => (
  <Layout>
    <SEO
      title="Basen Zewnętrzny"
      description="Duży basen zewnętrzny ze zjeżdżalniami. Podgrzewana woda, jacuzzi, kurtyna wodna."
    />
    <Hero
      image={poolHero.childImageSharp.gatsbyImageData}
      altText="Basen zewnętrzny ze zjeżdżalnią"
      header="Basen zewnętrzny z atrakcjami"
    />
    <div className="m-t-7">
      <BigFeature
        img={pool1.childImageSharp.gatsbyImageData}
        imgOnRight
        bigSign="Basen"
        alt="Basen zewnętrzny z głównym budynkiem"
      >
        <h2>Podgrzewany basen</h2>
        <p>Duży, zewnętrzny, podgrzewany basen z atrakcjami:</p>
        <ul className="dot-list">
          <li>zjeżdżalnie</li>
          <li>kurtyna wodna</li>
          <li>jacuzzi</li>
        </ul>
      </BigFeature>
    </div>
    <div className="m-t-7">
      <TwoPictures
        firstPhoto={pool2.childImageSharp.gatsbyImageData}
        secondPhoto={pool3.childImageSharp.gatsbyImageData}
      />
    </div>
    <DuckDivider />
    <div className="m-t-7">
      <BigFeature
        img={slide1.childImageSharp.gatsbyImageData}
        bigSign="Zjeżdżalnia"
        alt="Zjeżdżalnia na basenie zewnętrznym"
      >
        <h2>Zjeżdżalnia</h2>
        <p>
          Zjeżdżalnia dostarczająca mnóstwo adrenaliny zarówno dla dorosłych jak
          i najmłodszych.
        </p>
      </BigFeature>
    </div>
    <div className="m-t-7">
      <TwoPictures
        firstPhoto={slide2.childImageSharp.gatsbyImageData}
        secondPhoto={slide3.childImageSharp.gatsbyImageData}
      />
    </div>
    <DuckDivider />
    <div className="m-t-7">
      <BigFeature
        img={paddling.childImageSharp.gatsbyImageData}
        bigSign="Brodzik"
        imgOnRight
        alt="Brodzik z małą zjeżdżalnią"
      >
        <h2>Brodzik</h2>
        <p>Osobny brodzik dla najmniejszych dzieci wraz z małą zjeżdżalnią.</p>
      </BigFeature>
    </div>
    <div className="m-t-7">
      <BigFeature
        img={beach.childImageSharp.gatsbyImageData}
        bigSign="Plaża"
        alt="Plaża z parasolami"
      >
        <h2>Plaża</h2>
        <p>
          Zaraz przy basenie plaża z leżakami i parasolami. Czysty piasek prosto
          z łebskiej plaży.
        </p>
      </BigFeature>
    </div>
    <div className="m-t-7">
      <BigFeature
        img={aqua.childImageSharp.gatsbyImageData}
        bigSign="Fit"
        imgOnRight
        alt="Zajęcia Aqua"
      >
        <h2>Zajęcia Aqua</h2>
        <p>
          Zadbaj o swoje zdrowie i samopoczucie na organizowanych przez nas
          zajęciach rekreacyjnych w wodzie.
        </p>
      </BigFeature>
    </div>
    <div className="m-t-7">
      <h2 className="text-center">Opinie naszych gości o basenie</h2>
      <div className="review-grid">
        <Review
          text="Nasza córka szczęśliwa i wybawiona w basenach."
          name="Marta"
          source="Google"
        />
        <Review text="Basen jest boski." name="Aneta" source="Google" />
        <Review
          text="Baseny i animacje zapewniają świetny wypoczynek."
          name="Monika"
          source="Google"
        />
        <Review
          text="Odkryty podgrzewany basen jest spory oraz ma zjeżdżalnie dla dzieci i dorosłych."
          name="Filip"
          source="Google"
        />
      </div>
      <p className="super-text-center">
        <Link to="/opinie">Zobacz więcej opinii naszych gości</Link>
      </p>
      <div className="m-t-7">
        {/* <TwoPictures
            firstPhoto={beach2.childImageSharp.fluid}
            secondPhoto={pool4.childImageSharp.fluid}
          /> */}
        {/* <TwoPictures
            firstPhoto={pool5.childImageSharp.fluid}
            secondPhoto={pool6.childImageSharp.fluid}
          /> */}
        <TwoPictures
          firstPhoto={pool5.childImageSharp.gatsbyImageData}
          firstAlt="Dziecko w basenie z pompowanym kołem"
          secondAlt="Plaża przy basenie zewnętrznym"
          secondPhoto={beach2.childImageSharp.gatsbyImageData}
        />
      </div>
    </div>
  </Layout>
);

Pool.propTypes = {
  data: PropTypes.object,
};

export const query = graphql`
  {
    poolHero: file(
      relativePath: { eq: "b/basen-ze-zjezdzalnia-kacze-stawy-1.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    pool1: file(relativePath: { eq: "b/basen-zewnetrzny-kacze-stawy-1.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    pool2: file(relativePath: { eq: "b/basen-zewnetrzny-kacze-stawy-2.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    pool3: file(relativePath: { eq: "b/basen-zewnetrzny-noc.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    slide1: file(relativePath: { eq: "b/zjezdzalnia-kacze-stawy.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    slide2: file(relativePath: { eq: "o/II/DSC_3215.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    slide3: file(relativePath: { eq: "o/II/DSC_3195.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    paddling: file(relativePath: { eq: "b/brodzik.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    beach: file(relativePath: { eq: "b/plaza.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    beach2: file(relativePath: { eq: "b/plaza-1.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    pool5: file(relativePath: { eq: "o/II/DSC_3126.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    aqua: file(relativePath: { eq: "b/aqua.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;

export default Pool;
