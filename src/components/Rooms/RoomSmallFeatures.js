import React from 'react';

import AC from '../icons/AC';
import Elevator from '../icons/Elevator';
import Fridge from '../icons/Fridge';
import HairDryer from '../icons/HairDryer';
import Kettle from '../icons/Kettle';
import LockableSafe from '../icons/LockableSafe';
import Towels from '../icons/Towels';
import TV from '../icons/TV';
import SmallerFeature from '../SmallerFeature';
import SmallerFeatures from '../SmallerFeatures';

export function RoomSmallFeatures() {
  return (
    <SmallerFeatures>
      <SmallerFeature icon={<AC />} header="Klimatyzacja" />
      <SmallerFeature icon={<LockableSafe />} header="Sejf" />
      <SmallerFeature icon={<Towels />} header="Ręczniki" />
      <SmallerFeature icon={<HairDryer />} header="Suszarka do włosów" />
      <SmallerFeature icon={<TV />} header="TV LCD" />
      <SmallerFeature icon={<Fridge />} header="Lodówka" />
      <SmallerFeature icon={<Kettle />} header="Czajnik elektryczny" />
      <SmallerFeature icon={<Elevator />} header="Winda" />
    </SmallerFeatures>
  );
}
