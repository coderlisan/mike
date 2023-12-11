import React from 'react';

import { JuneNotif } from './notifications/June';
// import { MayNotif } from './notifications/May';

// import BonTurystycznyNotif from './BonTurystycznyNotif';

export default function NotificationsContainer() {
  return (
    <div className="z-50 grid gap-4 fixed bottom-4 right-4 lg:w-96">
      {/* <MayNotif /> */}
      <JuneNotif />
      {/* <BonTurystycznyNotif /> */}
    </div>
  );
}
