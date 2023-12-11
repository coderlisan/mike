import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import BigFeature from '../components/BigFeature';
import DuckDivider from '../components/DuckDivider';
import Hero from '../components/HeroImage';
import HollowButtonLink from '../components/HollowButtonLink';
import BabyCrib from '../components/icons/BabyCrib';
import BoardGames from '../components/icons/BoardGames';
import BottleWarmer from '../components/icons/BottleWarmer';
import KidsBathtub from '../components/icons/KidsBathtub';
import KidsChair from '../components/icons/KidsChair';
import Safe from '../components/icons/Safe';
import SocketSafety from '../components/icons/SocketSafety';
// icons
import Utensils from '../components/icons/Utensils';
import Layout from '../components/Layout';
import Review from '../components/Review';
import SEO from '../components/Seo';
import SmallerFeature from '../components/SmallerFeature';
import SmallerFeatures from '../components/SmallerFeatures';
import TwoPictures from '../components/TwoPictures';

const Kids = ({
  data: {
    kidsHero,
    kids,
    kids2,
    kids3,
    kids4,
    sports1,
    sports2,
    sports3,
    miki1,
    miki2,
    miki3,
    slide2,
    playground,
    insidePool,
    zoo,
  },
}) => (
  <Layout>
    <SEO
      title="Dzieci w Kaczych Stawach"
      description="Twoje dzieci u nas nie będą się nudzić. Animacje, klub dla dzieci, zajęcia sportowe, dwa baseny, zjeżdżalnia, 6 placów zabaw, mini zoo. Multum udogodnień dla dzieci."
    />
    <Hero
      image={kidsHero.childImageSharp.gatsbyImageData}
      header="Dzieci w Kaczych Stawach"
      objectPosition="top"
      altText="Dzieci na animacjach"
    />
    <div className="m-t-7">
      <BigFeature
        img={kids.childImageSharp.gatsbyImageData}
        bigSign="Animacje"
        imgOnRight
        alt="Animacje dla dzieci"
      >
        <h2>Animacje dla dzieci</h2>
        <p>
          Przygotowaliśmy multum atrakcji dla Twoich dzieci. Nasz autorski
          program animacji od lat cieszy się zadowoleniem naszych gości. Cały
          dzień wypełniony animacjami tak, aby żadne dziecko się nie nudziło.
        </p>
      </BigFeature>
    </div>
    <div className="m-t-7">
      <BigFeature
        img={kids2.childImageSharp.gatsbyImageData}
        bigSign="Edukacja"
        alt="Zajęcia edukacyjne"
      >
        <h2>Zajęcia edukacyjne</h2>
        <p>
          Część naszych animacji obfituje również w walory edukacyjne. Lepienie
          naczyń z gliny, warsztaty kulinarne, warsztaty plastyczno-techniczne
          oraz wszelakie zajęcia tematyczne.
        </p>
      </BigFeature>
    </div>
    <div className="m-t-7">
      <TwoPictures
        firstPhoto={kids3.childImageSharp.gatsbyImageData}
        secondPhoto={kids4.childImageSharp.gatsbyImageData}
      />
    </div>
    <DuckDivider />
    <div className="m-t-7">
      <BigFeature
        img={sports1.childImageSharp.gatsbyImageData}
        bigSign="Sport"
        imgOnRight
        alt="Zajęcia z piłki nożnej"
      >
        <h2>Zajęcia sportowe</h2>
        <p>
          Dla dzieci chcących spędzić aktywnie czas przygotowaliśmy również
          zajęcia sportowe: turnieje sportowe, gry rekreacyjne czy nawet
          treningi piłkarskie.
        </p>
      </BigFeature>
    </div>
    <div className="m-t-7">
      <TwoPictures
        firstPhoto={sports2.childImageSharp.gatsbyImageData}
        secondPhoto={sports3.childImageSharp.gatsbyImageData}
      />
    </div>
    <DuckDivider />
    <div className="m-t-7">
      <BigFeature
        img={miki1.childImageSharp.gatsbyImageData}
        bigSign="Klub"
        alt="Klub Myszki Miki"
      >
        <h2>Klub dla dzieci</h2>
        <p>
          Codziennie od godziny do 11 do 18 (z wyjątkiem sobót) czynny jest nasz
          klubik dla dzieci. Zostaw swoje dziecko pod opieką naszych
          doświadczonych animatorów i odpocznij na naszym basenie!
        </p>
      </BigFeature>
    </div>
    <div className="m-t-7">
      <TwoPictures
        firstPhoto={miki2.childImageSharp.gatsbyImageData}
        secondPhoto={miki3.childImageSharp.gatsbyImageData}
      />
    </div>
    <DuckDivider />
    <div className="m-t-7">
      <BigFeature
        img={slide2.childImageSharp.gatsbyImageData}
        bigSign="Basen"
        imgOnRight
        alt="Zjeżdżalnia na basenie"
      >
        <h2>Basen zewnętrzny</h2>
        <p>
          Dzieci nie chcą wychodzić z naszego basenu zewnętrznego. Ogromny basen
          o powierzchni 320m<sup>2</sup> ze zjeżdżalniami dostarcza sporą dawkę
          emocji.
        </p>
        <p>Dla mniejszych dzieci dostępny również brodzik.</p>
        <div className="center-on-small">
          <Link to="/basen">
            <HollowButtonLink>Zobacz basen zewnętrzny</HollowButtonLink>
          </Link>
        </div>
      </BigFeature>
    </div>
    <div className="m-t-7">
      <BigFeature
        img={playground.childImageSharp.gatsbyImageData}
        bigSign="Place"
        alt="Plac zabaw przy domku"
      >
        <h2>6 placów zabaw</h2>
        <p>
          Na całym terenie Holiday Parku Kacze Stawy przygotowaliśmy 6 placów
          zabaw (w tym jeden na terenie hotelu).
        </p>
        <div className="center-on-small">
          <Link to="/place-zabaw">
            <HollowButtonLink>Zobacz place zabaw</HollowButtonLink>
          </Link>
        </div>
      </BigFeature>
    </div>
    <div className="m-t-7">
      <BigFeature
        img={insidePool.childImageSharp.gatsbyImageData}
        bigSign="Basen"
        imgOnRight
        alt="Basen wewnętrzny"
      >
        <h2>Basen wewnętrzny</h2>
        <p>
          Dla gości pawilonu hotelowego przygotowaliśmy nowy basen wewnętrzny
          wraz z sauną.
        </p>

        <div className="center-on-small">
          <Link to="/basen-wewnetrzny">
            <HollowButtonLink>Zobacz basen wewnętrzny</HollowButtonLink>
          </Link>
        </div>
      </BigFeature>
    </div>
    <div className="m-t-7">
      <BigFeature
        img={zoo.childImageSharp.gatsbyImageData}
        bigSign="Zoo"
        alt="Koza w zoo"
      >
        <h2>Mini Zoo</h2>
        <p>
          Ogromną popularnością cieszy się nasze mini ZOO gdzie Twoje dziecko
          może zobaczyć króliki, kozy czy owce.
        </p>
        {/* <div className="center-on-small">
            <HollowButtonLink>Zobacz mini zoo</HollowButtonLink>
          </div> */}
      </BigFeature>
    </div>
    <div className="m-t-7">
      <SmallerFeatures>
        <SmallerFeature
          icon={<Utensils />}
          header="Plastikowe sztućce i talerzyki w jadalni"
        />
        <SmallerFeature icon={<KidsChair />} header="Krzesełka do karmienia" />
        <SmallerFeature
          icon={<BottleWarmer />}
          header="Podgrzewacze do butelek"
        />
        <SmallerFeature icon={<KidsBathtub />} header="Wanienki" />
        <SmallerFeature icon={<BabyCrib />} header="Łóżeczka dziecięce" />
        <SmallerFeature
          icon={<SocketSafety />}
          header="Zatyczki bezpieczeństwa do kontaktów"
        />
        <SmallerFeature
          icon={<Safe />}
          header="Nakładki na toaletę, podnóżki"
        />
        <SmallerFeature
          icon={<BoardGames />}
          header="Gry i książeczki do wypożyczenia w recepcji"
        />
      </SmallerFeatures>
    </div>
    <div className="m-t-7">
      <h2 className="text-center">Opinie naszych gości</h2>
      <div className="review-grid">
        <Review
          text="Nie ma lepszego miejsca na wakacje nad morzem z dziećmi. Baza jest tak przygotowana, że nawet w deszczową pogodę jest tam co robić."
          name="Waldemar"
          source="Google"
        />
        <Review
          text="Mnóstwo animacji dla dzieci. Trafiliśmy m.in. na teatrzyk kukiełkowy i pokaz magika."
          name="Małgorzata"
          source="Google"
        />
        <Review
          text="Nasza córka szczęśliwa i wybawiona w basenach, klubie Myszki Miki i podczas innych zabaw organizowanych dla dzieci. Polecamy rodzinom z dziećmi."
          name="Marta"
          source="Google"
        />
        <Review
          text="Świetne miejsce dla rodzin z dziećmi. Codziennie inne atrakcje, a oprócz tego jest basen z wielkimi zjeżdżalniami i klub Myszki Miki dla najmłodszych."
          name="Nikladia"
          source="Google"
        />
        <Review
          text="Bardzo dobrze przygotowana baza noclegowa z mnóstwem atrakcji dla dzieci i nie tylko, animacje które nam oferowano dla dzieci bardzo dobrze i starannie zostały przygotowane. Atrakcje dla dorosłych też nie odbiegały profesjonalizmem od tych dla dzieci. Duże pokłony dla animatorów z Klubu Myszki Miki, bardzo fajnie przygotowane gry terenowe dla wszystkich kto miał chęć na bieganie po ośrodku."
          name="Mateusz"
          source="Google"
        />
        <Review
          text="Na uwagę zasługuje proponowana oferta atrakcji dla wszystkich wczasowiczów. Małych i dużych. Program jest ustawiony na cały tydzień i każdy może znaleźć coś dla siebie. Konkursy, pokazy, zabawy od rana do wieczora."
          name=""
          source="TripAdvisor"
        />
      </div>
      <p className="super-text-center">
        <Link to="/opinie">Zobacz więcej opinii naszych gości</Link>
      </p>
    </div>
  </Layout>
);

Kids.propTypes = {
  data: PropTypes.object,
};

export default Kids;

export const query = graphql`
  {
    kidsHero: file(relativePath: { eq: "b/animacje-dla-dzieci.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    kids: file(relativePath: { eq: "b/animacje-dla-dzieci-myszka.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    kids2: file(relativePath: { eq: "MPK1870-edited.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    kids3: file(
      relativePath: { eq: "b/warsztaty-z-robotyki-kacze-stawy.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    kids4: file(relativePath: { eq: "o/II/DSC_5181.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    sports1: file(relativePath: { eq: "b/zajecia-sportowe.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    sports2: file(relativePath: { eq: "b/zajecia-sportowe-1.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    sports3: file(relativePath: { eq: "b/zajecia-sportowe-2.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    miki1: file(relativePath: { eq: "b/klub-dla-dzieci.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    miki2: file(relativePath: { eq: "b/klub-dla-dzieci-1.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    miki3: file(relativePath: { eq: "b/klub-dla-dzieci-2.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    slide2: file(relativePath: { eq: "o/II/DSC_3215.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    playground: file(relativePath: { eq: "b/plac-zabaw-dla-dzieci.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    insidePool: file(relativePath: { eq: "b/basen-wewnetrzny.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    zoo: file(relativePath: { eq: "b/mini-zoo.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
