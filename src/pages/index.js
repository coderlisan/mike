import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import BigFeature from '../components/BigFeature';
import Hero from '../components/HeroImageArtDir';
import HollowButtonLink from '../components/HollowButtonLink';
import Layout from '../components/Layout';
// import { JuneOffer } from '../components/offers/JuneOffer';
// import { MayOffer } from '../components/offers/MayOffer';
import Ratings from '../components/Ratings';
import SEO from '../components/Seo';
import SmallFeatures from '../components/SmallFeatures';

const IndexPage = ({
  data: {
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
    gym,
    heroDesktopImage,
    heroDesktopImageMobile,
  },
}) => (
  <Layout>
    <SEO title="Wakacje rodzinne z dzieckiem nad morzem | Łeba" />
    <Hero
      image={heroDesktopImage}
      altText="Kacze Stawy z lotu ptaka"
      header="Pełne wrażeń wakacje z dziećmi nad morzem"
      mobileImage={heroDesktopImageMobile}
    />
    {/* <div className="mt-8 lg:mt-12 px-2">
      <h2 className="text-center">Oferty specjalne</h2>
      <div className="grid ml-auto mr-auto max-w-lg mt-8">
        <JuneOffer />
      </div>
    </div> */}
    <div className="m-t-7">
      <div className="text-block-wider block-centered">
        <h2 className="first-header">
          Unikatowe miejsce na Twój rodzinny wypoczynek w Łebie
        </h2>
        <p>
          Holiday Park Kacze Stawy Łeba to jedyne w swoim rodzaju miejsce nad
          morzem.
        </p>
        <p>
          Jeśli szukasz miejsca, w którym cała rodzina może się bawić i
          odpocząć, nasz ośrodek jest właśnie dla Ciebie. Posiadamy dwa baseny z
          wieloma atrakcjami i zjeżdżalniami, które zapewnią niezapomniane
          chwile pełne radości dla dzieci i dorosłych.
        </p>
        <p>
          Nie zapomnieliśmy o najmłodszych gościach - nasz zespół animatorów
          przygotował mnóstwo zabaw i gier, które zapewnią im niezapomniane
          chwile. Dzieci będą się bawić i uczyć nowych rzeczy pod czujnym okiem
          naszych wykwalifikowanych opiekunów.
        </p>
        <Ratings />
      </div>
    </div>
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
          Po emocjach w wodzie odpocznij na rozstawionych wokół basenu leżakach
          lub przygotowanej przez nas plaży. Czysty piasek z Łeby.
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
          Twoje dzieci spędzą wakacje swojego życia, a Ty odpoczniesz jak nigdy
          wcześniej.
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
          Nasze domki są rozstawione w komfortowej odległości na siedmiu
          hektarach, bez ścisku, wśród natury i drzew. Oferujemy domki 3 i 4
          pokojowe, które zapewnią Tobie i Twojej rodzinie prywatność i wygodę.
          Zrelaksujcie się w otoczeniu pięknej natury i cieszcie się
          wypoczynkiem nad morzem w pełni.
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
          Jeśli szukasz komfortowego i przestronnego hotelu, nasz hotel jest
          idealnym miejscem dla Ciebie.
        </p>
        <p>
          Hotel posiada wewnętrzny basen, dodatkowy plac zabaw dla dzieci oraz
          saunę.
        </p>
        <p>
          Nasze pokoje są przestronne i komfortowe, dostępne w wersji 2, 3 i 4
          osobowej, co pozwala na dostosowanie naszej oferty do potrzeb każdego
          gościa. Wszystkie pokoje są klimatyzowane.
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
        <p>Łowisz ryby za darmo, a złowioną rybę zjesz na wieczornym grillu.</p>
        <p>
          Umiejscowienie stawu w pobliżu domków sprawia, że każdy miłośnik
          wędkowania może uprawiać swoje hobby na wyciągnięcie ręki.
        </p>
        <div className="center-on-small">
          <Link to="/staw-dla-wedkarzy">
            <HollowButtonLink>Zobacz staw dla wędkarzy</HollowButtonLink>
          </Link>
        </div>
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
          całym ośrodku. Różnorodność zabawek, huśtawek czy karuzeli sprawi, że
          Twoje dziecko na pewno znajdzie coś dla siebie.
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
          może zobaczyć króliki, kozy czy owce.
        </p>
        <div className="center-on-small">
          <Link to="/mini-zoo">
            <HollowButtonLink>Zobacz Mini Zoo</HollowButtonLink>
          </Link>
        </div>
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
    <div className="m-t-5">
      <BigFeature
        img={gym.childImageSharp.gatsbyImageData}
        bigSign="Siłownia"
        alt="Siłownia zewnętrzna"
      >
        <h2>Siłownia zewnętrzna</h2>
        <p>Zadbaj o formę na świeżym powietrzu.</p>
        <div className="center-on-small">
          <Link to="/silownia-zewnetrzna">
            <HollowButtonLink>Zobacz siłownię</HollowButtonLink>
          </Link>
        </div>
      </BigFeature>
    </div>
    <div className="m-t-7">
      <SmallFeatures />
    </div>
  </Layout>
);
IndexPage.propTypes = {
  data: PropTypes.object,
};

export const query = graphql`
  {
    heroDesktopImage: file(relativePath: { eq: "kacze-stawy-hero-2018.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    heroDesktopImageMobile: file(
      relativePath: { eq: "kacze-stawy-hero-2018.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          aspectRatio: 0.6
          # width: 800
          transformOptions: { cropFocus: NORTH }
        )
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
    gym: file(relativePath: { eq: "b/silownia-zewnetrzna-2.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;

export default IndexPage;
