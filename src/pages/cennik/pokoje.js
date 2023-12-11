import { graphql, Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import Aerobic from '../../components/icons/Aerobic';
import Broom from '../../components/icons/Broom';
import Buffet from '../../components/icons/Buffet';
import BusSvg from '../../components/icons/BusSvg';
import Car from '../../components/icons/Car';
import Fishing from '../../components/icons/Fishing';
import Fun from '../../components/icons/Fun';
import InsidePool from '../../components/icons/InsidePool';
import Kids from '../../components/icons/Kids';
import Sauna from '../../components/icons/Sauna';
import WaterSlide from '../../components/icons/WaterSlide';
import Wifi from '../../components/icons/Wifi';
import Layout from '../../components/Layout';
// import { MayOffer } from '../../components/offers/MayOffer';
// import { JuneOffer } from '../../components/offers/JuneOffer';
import SEO from '../../components/Seo';
import { KidsAmenities } from '../../components/shared/KidsAmenities';
import SmallFeature from '../../components/SmallFeature';

const RoomsPriceList = ({ data }) => (
  <Layout>
    <SEO
      title="Cennik pokojów"
      description="Cennik pokojów hotelowych w Łebie. Ceny zawierają całodniowe wyżywienie, korzystanie z basenu zewnętrznego oraz wewnętrznego, animacje dla dzieci, klubik dla dzieci, zarybione stawy, parking"
    />
    <div className="m-t-3 centered-container">
      {/* <div className="mt-8 lg:mt-12 px-2">
        <h2 className="text-center">Oferty specjalne</h2>
        <div className="grid ml-auto mr-auto max-w-lg mt-8">
          <JuneOffer />
        </div>
      </div> */}
      <div className="p-4 mt-8 lg:mt-12">
        <h1 className="text-center">Cennik pokojów 2023</h1>
        <p>
          Szukasz cennika domków? Przejdź do{' '}
          <Link to="/cennik/domki">cennika domków</Link>
        </p>
      </div>
      <div className="pricelist">
        <div>Ceny za dobę</div>
        <div>2 osobowy</div>
        <div>3 osobowy</div>
        <div>4 osobowy</div>

        <div>28.04 - 07.05</div>
        <div>725 zł</div>
        <div>1100 zł</div>
        <div>1285 zł</div>

        <div>07.05 - 07.06</div>
        <div>685 zł</div>
        <div>1050 zł</div>
        <div>1235 zł</div>

        <div>07.06 - 11.06</div>
        <div>725 zł</div>
        <div>1100 zł</div>
        <div>1285 zł</div>

        <div>11.06 - 24.06</div>
        <div>685 zł</div>
        <div>1050 zł</div>
        <div>1235 zł</div>

        <div>24.06 - 26.08</div>
        <div>775 zł</div>
        <div>1115 zł</div>
        <div>1435 zł</div>

        <div>26.08 - 03.09</div>
        <div>685 zł</div>
        <div>1050 zł</div>
        <div>1235 zł</div>
      </div>
    </div>
    <div className="text-block-wider block-centered m-t-5">
      <ul className="dot-list">
        <li>
          1 dziecko do 3 lat przebywa w pokoju bezpłatnie - jako dodatkowa osoba
          bez dostawki.
        </li>
        <li>Dostawka max 1 osoba w pokoju - dopłata 235 zł / doba</li>
        <li>Wynajęcie łóżeczka dla dziecka z pościelą 100 zł / pobyt</li>
        <li>Wynajęcie łóżeczka dla dziecka bez pościeli 60 zł / pobyt</li>
      </ul>
      {data.site.siteMetadata.animalsAllowed && (
        <p>
          Do budynku hotelowego nie przyjmujemy zwierząt - strefa bezpieczna dla
          alergików.
        </p>
      )}
    </div>

    <div>
      <div className="p-t-3 mobile darker">
        <h2 className="text-center">Cena pokoju zawiera:</h2>
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
            icon={<InsidePool />}
            header="Basen wewnętrzny"
            text="Dla gości hotelowych dodatkowy basen wewnętrzny"
            // hotelTag
          />
          <SmallFeature
            icon={<Sauna />}
            header="Sauna"
            text="Dla gości hotelowych sauna przy basenie wewnętrznym"
            // hotelTag
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
          <SmallFeature
            icon={<Broom />}
            header="Sprzątanie"
            text="Usługa sprzątania na żądanie"
          />
        </div>
      </div>
      <div className="m-t-5">
        <h2 className="text-center">Udogodnienia dla dzieci</h2>
        <KidsAmenities />
      </div>
      <div className="m-t-5">
        <div className="text-block-wider block-centered">
          <h2>Inne informacje</h2>
          <h3>Opaska</h3>
          <p>
            Zgodnie z regulaminem naszego ośrodka, Goście podczas całego pobytu
            są zobowiązani do noszenia na nadgarstkach opasek identyfikacyjnych
            otrzymanych w recepcji w dniu przyjazdu.
          </p>

          <ul className="dot-list">
            {' '}
            Opaska upoważnia do:
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
            <Link to="/faq">Zobacz również najczęściej zadawane pytania</Link>
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

RoomsPriceList.propTypes = {
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

export default RoomsPriceList;
