import { Transition } from '@headlessui/react';
import { Link } from 'gatsby';
import Cookie from 'js-cookie';
import React, { useEffect, useState } from 'react';

export default function BonTurystycznyNotif() {
  const [visible, setIsVisible] = useState(false);

  const closeNotification = e => {
    e.stopPropagation();
    Cookie.set('closedBon', 1, { expires: 1 });
    setIsVisible(false);
  };

  useEffect(() => {
    if (!!Cookie.get('closedBon') === true) {
      return;
    }
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 5000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <Transition
      show={visible}
      enter="transition-opacity duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-all duration-200"
      leaveFrom="opacity-100 translate-x-0"
      leaveTo="opacity-0 translate-x-full"
    >
      <div className="relative bg-slate-100 px-4 pt-8 pb-1 shadow-lg rounded-lg w-full">
        <button
          onClick={closeNotification}
          type="button"
          className="absolute text-gray-600 right-2 top-1 p-0 border-0 bg-transparent cursor-pointer outline-none"
        >
          &#10006;
        </button>
        <h3 className="m-0">Bon turystyczny</h3>
        <p className="mt-2 pb-0 mb-0">Wykorzystaj bon na wczasy w lato</p>
        <p className="mt-2 pb-0">
          <Link to="/wykorzystaj-bon-turystyczny" onClick={closeNotification}>
            Zobacz szczegóły
          </Link>
        </p>
      </div>
    </Transition>
  );
}
