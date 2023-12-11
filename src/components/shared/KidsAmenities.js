import React from 'react';

import BabyCrib from '../icons/BabyCrib';
import BoardGames from '../icons/BoardGames';
import BottleWarmer from '../icons/BottleWarmer';
import KidsBathtub from '../icons/KidsBathtub';
import KidsChair from '../icons/KidsChair';
import Safe from '../icons/Safe';
import SocketSafety from '../icons/SocketSafety';
import Utensils from '../icons/Utensils';
import SmallerFeature from '../SmallerFeature';
import SmallerFeatures from '../SmallerFeatures';

export function KidsAmenities() {
  return (
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
      <SmallerFeature icon={<Safe />} header="Nakładki na toaletę, podnóżki" />
      <SmallerFeature
        icon={<BoardGames />}
        header="Gry i książeczki do wypożyczenia w recepcji"
      />
    </SmallerFeatures>
  );
}
