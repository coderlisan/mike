import { graphql, navigate } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import { CTAButton } from '../components/common/CTAButton';
import Hero from '../components/HeroImage';
import Layout from '../components/Layout';
import { OnlyInMay } from '../components/offers/OnlyInMay';
import { FoodKSH } from '../components/promos/FoodKSH';
import { InteriorPool } from '../components/promos/InteriorPool';
import { Kids } from '../components/promos/Kids';
import { KidsClub } from '../components/promos/KidsClub';
import { MoreFeatures } from '../components/promos/MoreFeatures';
import { PlaceZabawKSH } from '../components/promos/PlaceZabawKSH';
import { Pond } from '../components/promos/Pond';
import { Rooms } from '../components/promos/Rooms';
import SEO from '../components/Seo';
import { KidsAmenities } from '../components/shared/KidsAmenities';

export default function MajowkaWLebie({ data }) {
  const { heroImage } = data;
  return (
    <Layout>
      <SEO
        title="Majówka z dziećmi w Łebie nad morzem"
        description="Spędź majówkę nad morzem w Łebie w hotelu Kacze Stawy! Animacje i basen wewnętrzny, całodniowe wyżywienie. Rezerwuj już teraz!"
      />
      <Hero
        image={heroImage.childImageSharp.gatsbyImageData}
        header="Majówka z dziećmi w Łebie nad morzem"
        altText="Dziecko w kole ratunkowym w basenie"
      />
      <div className="px-4 lg:px-8">
        <div className="mt-12 lg:mt-16 ml-auto mr-auto max-w-[36em]">
          <p className="bg-green-100 p-4 rounded text-green-900">
            Rabat <strong>10%</strong> dla pobytów 4 dniowych i dłuższych!
          </p>
          <p>
            Jeśli szukasz idealnego miejsca na majówkę nad morzem, hotel Kacze
            Stawy w Łebie to doskonały wybór! Nasz hotel oferuje{' '}
            <strong>bogaty program animacyjny dla dzieci</strong>, w tym zabawy,
            konkursy i warsztaty, które zapewnią im wiele frajdy i wrażeń. Dla
            miłośników kąpieli przygotowaliśmy{` `}
            <strong>basen wewnętrzny</strong>, który pozwoli na relaks i
            ochłodzenie w ciepłe dni.
          </p>
          <p>
            Naszym gościom zapewniamy również{' '}
            <strong>całodzienne wyżywienie</strong>, w skład którego wchodzą
            pyszne i zdrowe posiłki. W menu znajdziesz różnorodne dania,
            dostosowane do potrzeb każdego z naszych gości. Po dniu pełnym
            wrażeń polecamy odwiedzenie naszej sauny, która pomoże zrelaksować
            się i odpocząć.
          </p>
          <p>
            Nasze komfortowe pokoje to idealne miejsce na wypoczynek po całym
            dniu zabaw i atrakcji. Oferujemy wygodne łóżka, telewizję oraz
            dostęp do internetu. Dla najmłodszych przygotowaliśmy specjalny
            klub, gdzie będą mogli się bawić i poznawać nowych przyjaciół.
          </p>
          <p>
            Oprócz tego, nasz hotel posiada <strong>mini zoo</strong>, gdzie
            dzieci mogą zobaczyć różne zwierzęta, m.in. króliki i kozy. A jeśli
            zdecydujesz się na pobyt dłuższy niż 4 dni, przysługuje Ci{' '}
            <strong>10 % rabatu </strong> na cały pobyt!
          </p>
          <p>
            Zapraszamy na majówkę do hotelu Kacze Stawy w Łebie. Znajdziesz tu
            wiele atrakcji dla całej rodziny i zapewnisz sobie niezapomniane
            wczasy nad morzem.
          </p>
        </div>
        <InteriorPool />
        <FoodKSH />
        <Kids />
        <OnlyInMay />
        <KidsClub />
        <Pond />
        <PlaceZabawKSH />
        <MoreFeatures />
        <Rooms />
        <div className="mt-8 lg:mt-24">
          <h2 className="text-center">Udogodnienia dla dzieci</h2>
          <KidsAmenities />
        </div>
        <div className="mt-8 lg:mt-24">
          <h2 className="text-center">Cennik Majówka 2023</h2>
          <div className="pricelist mt-8 lg:mt-12 max-w-2xl ml-auto mr-auto">
            <div>Ceny za dobę</div>
            <div>2 osobowy</div>
            <div>3 osobowy</div>
            <div>4 osobowy</div>

            <div>28.04 - 07.05</div>
            <div>725 zł</div>
            <div>1100 zł</div>
            <div>1285 zł</div>
          </div>
          <div className="mt-8 ml-auto mr-auto max-w-xl">
            <p className="bg-green-100 p-4 rounded text-green-900">
              Rabat <strong>10%</strong> dla pobytów 4 dniowych i dłuższych!
            </p>
          </div>
          <div className="ml-auto mr-auto max-w-xl">
            <ul className="dot-list mt-8 lg:mt-16">
              <li>
                1 dziecko do 3 lat przebywa w pokoju bezpłatnie - jako dodatkowa
                osoba bez dostawki.
              </li>
              <li>Dostawka max 1 osoba w pokoju - dopłata 235 zł / doba</li>
              <li>Wynajęcie łóżeczka dla dziecka z pościelą 100 zł / pobyt</li>
              <li>Wynajęcie łóżeczka dla dziecka bez pościeli 60 zł / pobyt</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 lg:mt-16 ml-auto mr-auto max-w-xl text-center">
          <CTAButton onClick={() => navigate('/rezerwacja')}>
            Zapytaj o termin majówkowy
          </CTAButton>
        </div>
      </div>
    </Layout>
  );
}

MajowkaWLebie.propTypes = {
  data: PropTypes.any,
};

export const query = graphql`
  {
    heroImage: file(relativePath: { eq: "o/II/DSC_3126.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
