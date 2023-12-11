import React from 'react';

import { useSiteMetadata } from '../hooks/use-site-metadata';
import AnimalsAllowed from './icons/AnimalsAllowed';
import AnimalsNotAllowed from './icons/AnimalsNotAllowed';
import Beach from './icons/Beach';
import Bicycle from './icons/Bicycle';
import Buffet from './icons/Buffet';
// import HotelTag from './HotelTag';
// icons
import BusSvg from './icons/BusSvg';
import Fishing from './icons/Fishing';
import Grill from './icons/Grill';
import Gym from './icons/Gym';
import InsidePool from './icons/InsidePool';
import Sauna from './icons/Sauna';
import WaterSlide from './icons/WaterSlide';
import Wifi from './icons/Wifi';
import SmallFeature from './SmallFeature';

const SmallFeatures = () => {
  const { animalsAllowed } = useSiteMetadata();
  return (
    <div className="icons">
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
        icon={<Buffet />}
        header="Całodniowe wyżywienie"
        text="Wyżywienie HB - śniadania i obiadokolacje w cenie"
      />
      <SmallFeature
        icon={<Gym />}
        header="Siłownia zewnętrzna"
        text="Wszechstronna siłownia na świeżym powietrzu"
      />
      <SmallFeature
        icon={<Wifi />}
        header="Internet WiFi"
        text="Bezprzewodowy internet na terenie ośrodka"
      />
      <SmallFeature
        icon={<Fishing />}
        header="Zarybione stawy"
        text="Corocznie zarybiane stawy dla wędkarzy"
      />
      <SmallFeature
        icon={<Beach />}
        header="Plaża przy basenie"
        text="Zaraz przy basenie leżaki i parasole na piasku z łebskiej plaży"
      />
      <SmallFeature
        icon={<Grill />}
        header="Możliwość grillowania"
        text="Można grillować przy domku"
      />
      <SmallFeature
        icon={<Bicycle />}
        header="Rowery"
        text="Wypożyczalnia rowerów na terenie ośrodka"
      />
      <SmallFeature
        icon={<BusSvg />}
        header="Transfer na plażę"
        text="Nasz bus zawiezie Ciebie na łebską plażę i do centrum Łeby"
      />
      {animalsAllowed && (
        <SmallFeature
          icon={<AnimalsAllowed />}
          header="Akceptujemy zwierzęta"
          text="Akceptujemy zwierzęta w domkach letniskowych"
        />
      )}
      {!animalsAllowed && (
        <SmallFeature
          icon={<AnimalsNotAllowed />}
          header="Nie akceptujemy zwierząt"
          text="Nie akceptujemy zwierząt na terenie ośrodka"
        />
      )}
    </div>
  );
};

export default SmallFeatures;
