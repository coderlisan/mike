import { graphql, Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import Aerobic from '../../components/icons/Aerobic';
import Buffet from '../../components/icons/Buffet';
import BusSvg from '../../components/icons/BusSvg';
import Car from '../../components/icons/Car';
import Fishing from '../../components/icons/Fishing';
import Fun from '../../components/icons/Fun';
import Kids from '../../components/icons/Kids';
import WaterSlide from '../../components/icons/WaterSlide';
import Wifi from '../../components/icons/Wifi';
import Layout from '../../components/Layout';
// import { JuneOffer } from '../../components/offers/JuneOffer';
// import { MayOffer } from '../../components/offers/MayOffer';
import SEO from '../../components/Seo';
import { KidsAmenities } from '../../components/shared/KidsAmenities';
import SmallFeature from '../../components/SmallFeature';

const BungalowsPricelist = ({ data }) => (
  <Layout>
    <SEO
      title="Cennik domków"
      description="Cennik domków letniskowych w Łebie. Ceny zawierają całodniowe wyżywienie, korzystanie z basenu zewnętrznego, animacje dla dzieci, klubik dla dzieci, zarybione stawy, parking"
    />
    <div>
      <div className="m-t-3 centered-container">
        {/* <div className="mt-8 lg:mt-12 px-2">
          <h2 className="text-center">Oferty specjalne</h2>
          <div className="grid ml-auto mr-auto max-w-lg mt-8">
            <JuneOffer />
          </div>
        </div> */}
        <div className="p-4 mt-8">
          <h1 className="text-center">Cennik domków 2023</h1>
          <p>
            Szukasz cennika pokojów? Przejdź do{' '}
            <Link to="/cennik/pokoje">cennika pokojów</Link>
          </p>
        </div>
        <div className="pricelist">
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

          <div>24.06 - 01.07</div>
          <div>1025 zł</div>
          <div>1125 zł</div>
          <div>1775 zł</div>

          <div>01.07 - 19.08</div>
          <div>1095 zł</div>
          <div>1195 zł</div>
          <div>1845 zł</div>

          <div>19.08 - 26.08</div>
          <div>1025 zł</div>
          <div>1125 zł</div>
          <div>1775 zł</div>

          <div>26.08 - 03.09</div>
          <div>965 zł</div>
          <div>1065 zł</div>
          <div>1695 zł</div>
        </div>
      </div>
      <div className="m-t-5 centered-container">
        <div className="text-block-wider block-centered">
          <ul className="dot-list">
            <li>
              1 dziecko do 3 lat przebywa w domku bezpłatnie - jako dodatkowa
              osoba bez dostawki.
            </li>
            <li>
              Dostawka, maksymalnie 2 osoby w domku - dopłata 235 zł za dobę od
              osoby.
            </li>
          </ul>
          <h2>Dodatkowo płatne:</h2>
          <ul className="dot-list">
            <li>łóżeczko dla dziecka z pościelą - 100 zł za pobyt</li>
            <li>łóżeczko dla dziecka bez pościeli - 60 zł za pobyt</li>
            {data.site.siteMetadata.animalsAllowed && (
              <li>pies - 30 zł / doba</li>
            )}
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
      </div>

      <div className="p-t-3 darker">
        <h2 className="text-center">Cena domku zawiera:</h2>
        <div className="icons">
          <SmallFeature
            icon={<Buffet />}
            header="Całodniowe wyżywienie"
            text="Wyżywienie HB - śniadania i obiadokolacje"
          />
          <SmallFeature
            icon={<WaterSlide />}
            header="Basen zewnętrzny"
            text="Duży, podgrzewany basen zewnętrzny ze zjeżdżalniami i atrakcjami wodnymi"
          />
          <SmallFeature
            icon={<Kids />}
            header="Klub dla dzieci"
            text="Korzystanie z klubu dla dzieci z opieką animatorów od 11:00 do 18:00 (poza sobotami)"
          />
          <SmallFeature
            icon={<Fun />}
            header="Animacje dla dzieci"
            text="Wstęp na wszystkie animacje"
          />
          <SmallFeature
            icon={<Fishing />}
            header="Zarybiony staw"
            text="Możliwość wędkowania w corocznie zarybianym stawie"
          />
          <SmallFeature
            icon={<Aerobic />}
            header="Zajęcia sportowo-rekreacyjne"
            text="Zajęcia sportowe dla dzieci i dorosłych"
          />
          <SmallFeature
            icon={<Car />}
            header="Parking"
            text="Miejsce parkingowe na terenie ośrodka"
            smallText={
              <>
                Domki Classic lub Premium: 1 samochód
                <br />
                Domek Lux: 2 samochody
              </>
            }
          />
          <SmallFeature
            icon={<BusSvg />}
            header="Holiday Bus"
            text={`Transfer na plażę i do miasta (w dniach ${data.site.siteMetadata.busDateRange})`}
          />
          <SmallFeature
            icon={<Wifi />}
            header="Internet Wi-Fi"
            text="Bezprzewodowy internet na terenie całego ośrodka"
          />
        </div>
      </div>
      <div className="m-t-5 darker-mobile">
        <h2 className="text-center">Udogodnienia dla dzieci</h2>
        <KidsAmenities />
      </div>

      <div className="m-t-5">
        <div className="text-block-wider block-centered">
          <h2 className="m-t-3">Inne informacje</h2>
          <h3>Opaska</h3>
          <p>
            Zgodnie z regulaminem naszego ośrodka, Goście podczas całego pobytu
            są zobowiązani do noszenia na nadgarstkach opasek identyfikacyjnych
            otrzymanych w recepcji w dniu przyjazdu. Opaska upoważnia do:
          </p>
          <ul className="dot-list">
            <li>
              swobodnego poruszania się po ośrodku Holiday Park Kacze Stawy
            </li>
            <li>
              bezpłatnego transferu Holiday Park - miasto - plaża - Holiday Park
              (transfer w dniach {`${data.site.siteMetadata.busDateRange}`})
            </li>
            <li>korzystania z restauracji, basenu, klubu i parkingu.</li>
          </ul>

          <h3>Płatność kartą</h3>
          <p>
            Ośrodek akceptuje karty płatnicze: VISA, VISA Electron, MasterCard,
            MasterCard Electronic, Maestro, PolCard, Diner Club International, B
            Bis, JCB, V Pay.
          </p>
          <h3>Opłata miejscowa</h3>
          <p>
            W dniu przyjazdu jest pobierana opłata miejscowa od turystów i
            zgodnie z uchwałą Rady Gminy Wicko za każdą rozpoczętą dobę pobytu
            wynosi 2,20 zł od osoby.
          </p>
          <h3>Zwrot zadatku</h3>
          <p>
            W przypadku wcześniejszej rezygnacji z pobytu lub skrócenia pobytu
            (opóźniony przyjazd lub wcześniejszy wyjazd, awaria środka
            transportu, choroba, warunki atmosferyczne) - pobrany zadatek jak i
            opłata za pobyt nie podlegają zwrotowi. (Podstawa prawna
            &quot;Ustawa o turystyce&quot; z dn. 4.12.1997 r. oraz art.394
            kodeksu cywilnego).
          </p>
          <h3>Faktura VAT</h3>
          <p>
            W przypadku chęci otrzymania faktury na wpłacaną kwotę prosimy o
            przesłanie takiej informacji oraz wpisanie w danych do przelewu -
            NIP. Ustawa z dnia 4 lipca 2019 r. o zmianie ustawy o podatku od
            towarów i usług oraz niektórych innych ustaw (Dz.U. poz. 1520) Brak
            podania NIP-u uniemożliwi wystawienie faktury.
          </p>
          <p>
            Zobacz również <Link to="/faq"> najczęściej zadawane pytania </Link>
          </p>
        </div>
        <div className="block-centered text-block-wider">
          <h3>Plan Holiday Parku Kacze Stawy</h3>
        </div>
        <div className="block-centered-without-padding map-image">
          <StaticImage
            src="../../images/mapa2019.jpg"
            className="map-image"
            width={882}
            height={650}
            quality={100}
            alt="Mapa Holiday Parku Kacze Stawy"
          />
        </div>
      </div>
    </div>
  </Layout>
);

BungalowsPricelist.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        busDateRange: PropTypes.string.isRequired,
        animalsAllowed: PropTypes.bool.isRequired,
      }),
    }),
  }),
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        busDateRange
        animalsAllowed
      }
    }
  }
`;

export default BungalowsPricelist;
