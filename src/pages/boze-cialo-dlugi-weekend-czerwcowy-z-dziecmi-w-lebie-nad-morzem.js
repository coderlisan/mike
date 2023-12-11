import { graphql, navigate } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import { CTAButton } from '../components/common/CTAButton';
import Hero from '../components/HeroImage';
import Layout from '../components/Layout';
import { OnlyInJune } from '../components/offers/OnlyInJune';
import { Bungalows } from '../components/promos/Bungalows';
import { ExternalPool } from '../components/promos/ExternalPool';
import { FoodKSH } from '../components/promos/FoodKSH';
import { InteriorPool } from '../components/promos/InteriorPool';
import { Kids } from '../components/promos/Kids';
import { KidsClub } from '../components/promos/KidsClub';
import { MoreFeaturesKS } from '../components/promos/MoreFeaturesKS';
import { PlaceZabawKSH } from '../components/promos/PlaceZabawKSH';
import { Pond } from '../components/promos/Pond';
import { Rooms } from '../components/promos/Rooms';
import SEO from '../components/Seo';
import { KidsAmenities } from '../components/shared/KidsAmenities';

export default function BozeCialoNadMorzem({ data }) {
  const { heroImage } = data;
  return (
    <Layout>
      <SEO
        title="Długi weekend czerwcowy z dziećmi w Łebie nad morzem"
        description="Spędź długi weekend czerwcowy nad morzem w Łebie w ośrodku Kacze Stawy! Animacje, basen ze zjeżdżalniami, całodniowe wyżywienie. Rezerwuj już teraz!"
      />
      <Hero
        image={heroImage.childImageSharp.gatsbyImageData}
        header="Długi weekend czerwcowy z dziećmi w Łebie nad morzem"
        altText="Basen zewnętrzny Kacze Stawy Łeba"
      />
      <div className="px-4 lg:px-8">
        <div className="mt-12 lg:mt-16 ml-auto mr-auto max-w-[36em]">
          <p className="bg-green-100 p-4 rounded text-green-900">
            Rabat <strong>10%</strong> dla pobytów 4 dniowych i dłuższych!
          </p>
          <p className="mt-8 lg:mt-16 ml-auto mr-auto max-w-xl text-center">
            <CTAButton onClick={() => navigate('/rezerwacja')}>
              Zapytaj o termin na Boże Ciało
            </CTAButton>
          </p>
          <p>
            Jeśli szukasz idealnego miejsca na długi weekend czerwcowy nad
            morzem, Holiday Park Kacze Stawy w Łebie to doskonały wybór! Nasz
            ośrodek oferuje{' '}
            <strong>bogaty program animacyjny dla dzieci</strong>, w tym zabawy,
            konkursy i warsztaty, które zapewnią im wiele frajdy i wrażeń. Dla
            miłośników kąpieli przygotowaliśmy{` `}
            <strong>basen zewnętrzny i wewnętrzny</strong>, który pozwoli na
            relaks i ochłodzenie w ciepłe dni.
          </p>
          <p>
            Naszym gościom zapewniamy również{' '}
            <strong>całodzienne wyżywienie</strong>, w skład którego wchodzą
            pyszne i zdrowe posiłki. W menu znajdziesz różnorodne dania,
            dostosowane do potrzeb każdego z naszych gości.
          </p>
          <p>
            Nasze komfortowe domki i pokoje to idealne miejsce na wypoczynek po
            całym dniu zabaw i atrakcji. Oferujemy wygodne łóżka, telewizję oraz
            dostęp do internetu. Dla najmłodszych przygotowaliśmy specjalny
            klub, gdzie będą mogli się bawić i poznawać nowych przyjaciół.
          </p>
          <p>
            Oprócz tego, nasz ośrodek posiada <strong>mini zoo</strong>, gdzie
            dzieci mogą zobaczyć różne zwierzęta, m.in. króliki i kozy. A jeśli
            zdecydujesz się na pobyt dłuższy niż 4 dni, przysługuje Ci{' '}
            <strong>10 % rabatu </strong> na cały pobyt!
          </p>
          <p>
            Zapraszamy na długi weekend czerwcowy w Boże Ciało do ośrodka
            wczasowego Kacze Stawy w Łebie. Znajdziesz tu wiele atrakcji dla
            całej rodziny i zapewnisz sobie i dzieciom niezapomniane wczasy nad
            morzem.
          </p>
        </div>
        <ExternalPool />
        <InteriorPool withInfo />
        <FoodKSH />
        <Kids />
        <OnlyInJune />
        <KidsClub />
        <Pond />
        <PlaceZabawKSH />
        <MoreFeaturesKS />
        <div className="mt-8 lg:mt-24 text-center ml-auto mr-auto max-w-xl">
          <h1>Zakwaterowanie</h1>
          <p className="text-center">
            Zakwaterowanie możliwe w pokojach lub domkach
          </p>
        </div>
        <Rooms />
        <Bungalows />
        <div className="mt-8 lg:mt-24">
          <h2 className="text-center">Udogodnienia dla dzieci</h2>
          <KidsAmenities />
        </div>
        <div className="mt-8 lg:mt-24">
          <h1 className="text-center">Cennik Boże Ciało 2023</h1>
          <h2 className="text-center">Cennik pokojów</h2>
          <div className="pricelist mt-8 lg:mt-12 max-w-2xl ml-auto mr-auto">
            <div>Ceny za dobę</div>
            <div>2 osobowy</div>
            <div>3 osobowy</div>
            <div>4 osobowy</div>

            <div>07.05 - 07.06</div>
            <div>685 zł</div>
            <div>1050 zł</div>
            <div>1235 zł</div>

            <div>28.04 - 07.05</div>
            <div>725 zł</div>
            <div>1100 zł</div>
            <div>1285 zł</div>

            <div>11.06 - 24.06</div>
            <div>685 zł</div>
            <div>1050 zł</div>
            <div>1235 zł</div>
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
        <h2 className="text-center">Cennik domków</h2>
        <div className="pricelist mt-8 lg:mt-12 max-w-2xl ml-auto mr-auto">
          <div>Ceny za dobę</div>
          <div>
            Classic
            <br />
            <span>4 osoby</span>
          </div>
          <div>
            Premium
            <br />
            <span>4 osoby</span>
          </div>
          <div>
            Lux
            <br />
            <span>6 osób</span>
          </div>

          <div>
            07.06 - 11.06
            {/* <br />
            <span className="text-sm">Boże Ciało</span> */}
          </div>
          <div>1025 zł</div>
          <div>1125 zł</div>
          <div>1775 zł</div>

          <div>11.06 - 24.06</div>
          <div>965 zł</div>
          <div>1065 zł</div>
          <div>1695 zł</div>
        </div>
        <div className="mt-8 ml-auto mr-auto max-w-xl">
          <p className="bg-green-100 p-4 rounded text-green-900">
            Rabat <strong>10%</strong> dla pobytów 4 dniowych i dłuższych!
          </p>
        </div>
        <div className="ml-auto mr-auto max-w-xl">
          <ul className="dot-list mt-8 lg:mt-16">
            <li>
              1 dziecko do 3 lat przebywa w domku bezpłatnie - jako dodatkowa
              osoba bez dostawki.
            </li>
            <li>
              Dostawka, maksymalnie 2 osoby w domku - dopłata 235 zł za dobę od
              osoby.
            </li>
          </ul>
        </div>
        <div className="ml-auto mr-auto max-w-xl">
          <h2>Dodatkowo płatne w domkach:</h2>
          <ul className="dot-list">
            <li>łóżeczko dla dziecka z pościelą - 100 zł za pobyt</li>
            <li>łóżeczko dla dziecka bez pościeli - 60 zł za pobyt</li>
            <li>
              wypożyczenie ręczników - komplet na osobę (2 sztuki) / cały pobyt
              - 40 zł
            </li>
            <li>
              dodatkowy samochód - 40 zł / doba:
              <ul>
                <li>drugi samochód w domku Classic lub Premium</li>
                <li>trzeci samochód w domku Lux</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="mt-8 lg:mt-16 ml-auto mr-auto max-w-xl text-center">
          <CTAButton onClick={() => navigate('/rezerwacja')}>
            Zapytaj o termin na Boże Ciało
          </CTAButton>
        </div>
      </div>
    </Layout>
  );
}

BozeCialoNadMorzem.propTypes = {
  data: PropTypes.any,
};

export const query = graphql`
  {
    heroImage: file(
      relativePath: { eq: "b/basen-ze-zjezdzalnia-kacze-stawy-1.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
