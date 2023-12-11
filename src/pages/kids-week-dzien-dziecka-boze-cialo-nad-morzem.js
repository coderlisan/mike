import { graphql, Link } from 'gatsby';
import Cookie from 'js-cookie';
import PropTypes from 'prop-types';
import React from 'react';

import BigFeature from '../components/BigFeature';
import BookNow from '../components/BookNow';
import Hero from '../components/HeroImage';
import HollowButtonLink from '../components/HollowButtonLink';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import SmallImageGrid from '../components/SmallImageGrid';
import Tag from '../components/Tag';

const KidsWeek = ({
  data: {
    kidsHero1,
    boats,
    bull,
    balls,
    slide,
    line,
    bonfire,
    party,
    climbing,
    bubbles,
    pool,
    kids,
    room,
    food,
    fishing,
    playgrounds,
    insidePool,
    bar,
    zoo,
    domkiNight,
    massage,
  },
}) => {
  Cookie.set('seenKidsWeek', 'true', { expires: 1 });
  return (
    <Layout>
      <SEO
        title="Kids Week | Dzień Dziecka i Boże Ciało nad morzem"
        description="Kids Week - Pakiet na Dzień Dziecka i Boże Ciało. Mnóstwo atrakcji, dwa baseny, animacje dla dzieci, całodniowe wyżywienie, 6 placów zabaw"
      />
      <Hero
        image={kidsHero1.childImageSharp.gatsbyImageData}
        header="Kids Week - Dzień Dziecka i Boże Ciało nad morzem"
        altText="Dzieci na dmuchanych zabawkach"
      />
      <div className="short-centered-container m-t-5 p-4">
        <Tag text="Oferta specjalna" />
        <h2>
          rabat do <span style={{ fontSize: '2.2rem' }}>-15%</span>
        </h2>
        <p>
          Chcesz sprawić swoim pociechom niezapomniany Dzień Dziecka?
          <br />
          Wybierz{' '}
          <span style={{ textTransform: 'uppercase' }}>
            kids week kacze stawy!
          </span>
        </p>
        <p>Zapraszamy do spędzenia wspólnych chwil pełnych zabawy.</p>
        <p>
          Każdego dnia będą czekały na dzieci wspaniałe niespodzianki: bogaty
          program animacji, gry i zabawy, Klubik Kacze Stawy, warsztaty.
        </p>
        <p>Promocja obowiązuje w terminie 29.05-6.06:</p>
        <ul className="dot-list">
          <li>
            4 i 5 dni: <strong>10% rabatu</strong>
          </li>
          <li>
            6 dni i więcej: <strong>15% rabatu</strong>
          </li>
        </ul>
        <p>
          Pakiet obejmuje nocleg, wyżywienie, korzystanie z basenu zewnętrznego,
          parking, wstęp na wszystkie animacje i zabawy.
        </p>
        <p>Dla Gości hotelu dodatkowo basen wewnętrzny i sauna.</p>
        <h3>1.06 i 4.06 - Fiesta rodzinna</h3>
        <ul className="dot-list">
          <li>zabawa z DJ-em</li>
          <li>wata cukrowa</li>
          <li>dmuchane zjeżdżalnie</li>
          <li>łódki i kule wodne</li>
          <li>Bańkoludy</li>
          <li>ścianka wspinaczkowa</li>
          <li>byk rodeo</li>
          <li>zabawy i konkursy</li>
          <li>ognisko z kiełbaskami</li>
        </ul>
      </div>
      <div className="centered-container m-t-3">
        <SmallImageGrid
          items={[
            { header: 'Łódki', image: boats, altText: 'Łódki' },
            { header: 'Byk rodeo', image: bull, altText: 'Dmuchany byk rodeo' },
            { header: 'Kule wodne', image: balls, altText: 'Kule wodne' },
            {
              header: 'Dmuchana zjeżdżalnia',
              image: slide,
              altText: 'Dmuchańce, dmuchana zjeżdżalnia',
            },
            {
              header: 'Zabawy i konkursy',
              image: line,
              altText: 'Przeciąganie liny',
            },
            {
              header: 'Ognisko z kiełbaskami',
              image: bonfire,
              altText: 'Ognisko z kiełbaskami',
            },
            {
              header: 'Ścianka wspinaczkowa',
              image: climbing,
              altText: 'Ścianka wspinaczkowa',
            },
            {
              header: 'Zabawa z DJ-em',
              image: party,
              altText: 'Zabawa z DJ-em w barze',
            },
            {
              header: 'Bańkoludy',
              image: bubbles,
              altText: 'Bańkoludy - pokaz baniek',
            },
          ]}
        />
      </div>
      <div className="m-t-3 just-center">{/* <BookNow /> */}</div>
      <div className="m-t-3">
        <BigFeature
          img={pool.childImageSharp.gatsbyImageData}
          imgOnRight
          bigSign="Basen"
          alt="Basen zewnętrzny ze zjeżdżalniami"
        >
          <h2>Basen ze zjeżdżalniami</h2>
          <p>
            Odpocznij korzystając z dużego, zewnętrznego basenu z podgrzewaną
            wodą, zjeżdżalniami i atrakcjami wodnymi.
          </p>
          <p>Mnóstwo dobrej zabawy dla dzieci i dorosłych.</p>
          <p>
            Po emocjach w wodzie odpocznij na rozstawionych wokół basenu
            leżakach lub przygotowanej przez nas plaży. Czysty piasek z Łeby.
          </p>
          <div className="center-on-small">
            <Link to="/basen">
              <HollowButtonLink>Zobacz basen zewnętrzny</HollowButtonLink>
            </Link>
          </div>
        </BigFeature>
      </div>
      <div className="m-t-5">
        <BigFeature
          img={kids.childImageSharp.gatsbyImageData}
          bigSign="Dzieci"
          alt="Animacja dla dzieci"
        >
          <h2>Atrakcje dla dzieci</h2>
          <p>
            Jeśli masz ochotę odpocząć od swoich pociech, zajmą się nimi nasi
            animatorzy czasu wolnego. Specjalnie stworzony przez nas w tym celu
            klub Myszki Miki obfituje w różne atrakcje.
          </p>
          <p>
            Twoje dzieci spędzą wakacje swojego życia, a Ty odpoczniesz jak
            nigdy wcześniej.
          </p>
          <div className="center-on-small">
            <Link to="/dzieci-w-kaczych-stawach">
              <HollowButtonLink>Zobacz atrakcje dla dzieci</HollowButtonLink>
            </Link>
          </div>
        </BigFeature>
      </div>
      <div className="m-t-5">
        <BigFeature
          img={domkiNight.childImageSharp.gatsbyImageData}
          bigSign="Domki"
          imgOnRight
          alt="Sypialnia domku letniskowego"
        >
          <h2>Komfortowe domki</h2>
          <p>
            W pełni wyposażone domki letniskowe 3 lub 4 pokojowe gwarantują
            rewelacyjne wakacje nad morzem w komfortowych warunkach!
          </p>
          <p>
            Domki bajecznie rozstawione na siedmiu hektarach bez zbędnego
            ścisku.
          </p>

          <div className="center-on-small">
            <Link to="/domki">
              <HollowButtonLink>Zobacz domki</HollowButtonLink>
            </Link>
          </div>
        </BigFeature>
      </div>
      <div className="m-t-5">
        <BigFeature
          img={room.childImageSharp.gatsbyImageData}
          bigSign="Hotel"
          alt="Hotel nocą"
        >
          <h2>Wyjątkowy hotel</h2>
          <p>
            Nowe 2-4 osobowe, klimatyzowane pokoje z zamkniętym ogrodem oraz
            dodatkowym placem zabaw.
          </p>

          <div className="center-on-small">
            <Link to="/hotel">
              <HollowButtonLink>Zobacz hotel</HollowButtonLink>
            </Link>
          </div>
        </BigFeature>
      </div>
      {/* <div className="m-t-5">
        <BigFeature
          img={room.childImageSharp.fluid}
          imgOnRight
          bigSign="Pokoje"
          alt="Pokój hotelowy"
        >
          <h2>Nowoczesne pokoje</h2>
          <p>
            Nowe 2-4 osobowe, klimatyzowane pokoje z zamkniętym ogrodem oraz
            placem zabaw.
          </p>

          <div className="center-on-small">
            <HollowButtonLink>Zobacz pokoje</HollowButtonLink>
          </div>
        </BigFeature>
      </div> */}
      <div className="m-t-5">
        <BigFeature
          img={food.childImageSharp.gatsbyImageData}
          imgOnRight
          bigSign="Wyżywienie"
          alt="Bufet"
        >
          <h2>Całodniowe wyżywienie</h2>
          <p>
            Codziennie rano w naszej restauracji serwujemy śniadania, a późnym
            popołudniem obiadokolację.
          </p>
          <p>
            Szeroki wybór dań gwarantuje, że na pewno znajdziesz coś dla siebie.
          </p>
          <p>
            Najesz się do syta, a to wszystko jest już zawarte w cenie pobytu!
          </p>

          <div className="center-on-small">
            <Link to="/wyzywienie">
              <HollowButtonLink>Zobacz wyżywienie</HollowButtonLink>
            </Link>
          </div>
        </BigFeature>
      </div>
      <div className="m-t-5">
        <BigFeature
          img={insidePool.childImageSharp.gatsbyImageData}
          bigSign="Basen"
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
      <div className="m-t-5">
        <BigFeature
          img={fishing.childImageSharp.gatsbyImageData}
          imgOnRight
          bigSign="Stawy"
          alt="Staw z domkami w tle"
        >
          <h2>Raj dla wędkarzy</h2>
          <p>Na amatorów wędkarstwa czeka nasz corocznie zarybiany staw.</p>
          <p>
            Łowisz ryby za darmo, a złowioną rybę zjesz na wieczornym grillu.
          </p>
          <p>
            Umiejscowienie stawu w pobliżu domków sprawia, że każdy miłośnik
            wędkowania może uprawiać swoje hobby na wyciągnięcie ręki.
          </p>

          {/* <div className="center-on-small">
            <HollowButtonLink>Zobacz nasze stawy</HollowButtonLink>
          </div> */}
        </BigFeature>
      </div>
      <div className="m-t-5">
        <BigFeature
          img={playgrounds.childImageSharp.gatsbyImageData}
          bigSign="Place"
          alt="Plac zabaw"
        >
          <h2>Place zabaw</h2>
          <p>
            Do Państwa dyspozycji oddajemy sześć placów zabaw rozmieszczonych na
            całym ośrodku. Różnorodność zabawek, huśtawek czy karuzeli sprawi,
            że Twoje dziecko na pewno znajdzie coś dla siebie.
          </p>

          <div className="center-on-small">
            <Link to="/place-zabaw">
              <HollowButtonLink>Zobacz place zabaw</HollowButtonLink>
            </Link>
          </div>
        </BigFeature>
      </div>
      <div className="m-t-5">
        <BigFeature
          img={bar.childImageSharp.gatsbyImageData}
          imgOnRight
          bigSign="Bar"
          alt="Bar nocą"
        >
          <h2>Drink Bar</h2>
          <p>
            Przy basenie w ciągu dnia i do późnego wieczora działa Drink Bar,
            gdzie możesz spożyć swojego ulubionego drinku lub napić się kawy.
          </p>
          {/* <div className="center-on-small">
            <HollowButtonLink>Zobacz bar</HollowButtonLink>
          </div> */}
        </BigFeature>
      </div>
      <div className="m-t-5">
        <BigFeature
          img={zoo.childImageSharp.gatsbyImageData}
          bigSign="Zoo"
          alt="Koza w zoo"
        >
          <h2>Mini Zoo</h2>
          <p>
            Ogromną popularnością cieszy się nasze mini ZOO gdzie Twoje dziecko
            może zobaczyć króliki, kozy czy piękne kucyki.
          </p>
          {/* <div className="center-on-small">
            <HollowButtonLink>Zobacz mini zoo</HollowButtonLink>
          </div> */}
        </BigFeature>
      </div>
      <div className="m-t-5">
        <BigFeature
          img={massage.childImageSharp.gatsbyImageData}
          imgOnRight
          bigSign="Masaż"
          alt="Gabinet masażu"
        >
          <h2>Gabinet masażu</h2>
          <p>Zrelaksuj sie korzystając z szerokiej oferty masaży.</p>
          <div className="center-on-small">
            <Link to="/masaze">
              <HollowButtonLink>Zobacz gabinet masażu</HollowButtonLink>
            </Link>
          </div>
        </BigFeature>
      </div>
      <div className="m-t-3 centered-container text-center">
        {/* <BookNow /> */}
      </div>
    </Layout>
  );
};

KidsWeek.propTypes = {
  data: PropTypes.object,
};

export default KidsWeek;

export const query = graphql`
  {
    kidsHero1: file(relativePath: { eq: "kidsweek/kids-week-hero.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    boats: file(relativePath: { eq: "kidsweek/20170513_130346.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    bull: file(relativePath: { eq: "kidsweek/20170513_130333.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    slide: file(relativePath: { eq: "kidsweek/20190602_152158.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    balls: file(relativePath: { eq: "kidsweek/colors-742423_1280.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    line: file(relativePath: { eq: "kidsweek/IMG_3087.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    bonfire: file(relativePath: { eq: "kidsweek/IMG_2871.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    climbing: file(relativePath: { eq: "kidsweek/scianka.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    party: file(relativePath: { eq: "kidsweek/impreza.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    bubbles: file(relativePath: { eq: "kidsweek/bankoludy.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    pool: file(
      relativePath: { eq: "b/basen-ze-zjezdzalnia-kacze-stawy-1.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    kids: file(relativePath: { eq: "b/animacje-dla-dzieci.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    room: file(relativePath: { eq: "b/pokoj-hotel-kacze-stawy.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    fishing: file(relativePath: { eq: "b/kacze-stawy-wedkowanie.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    food: file(relativePath: { eq: "b/wyzywienie-bufet-kacze-stawy.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    playgrounds: file(relativePath: { eq: "o/III/DSC_5553.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    insidePool: file(relativePath: { eq: "b/basen-wewnetrzny.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    bar: file(relativePath: { eq: "drinkbar/drink-bar-1.jpg" }) {
      childImageSharp {
        gatsbyImageData(quality: 100, layout: FULL_WIDTH)
      }
    }
    zoo: file(relativePath: { eq: "b/mini-zoo.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    domkiNight: file(relativePath: { eq: "b/domek-noc-kacze-stawy.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    massage: file(relativePath: { eq: "b/gabinet-masazu.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
