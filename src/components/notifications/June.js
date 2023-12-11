/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import { Transition } from '@headlessui/react';
import { useLocation } from '@reach/router';
import { graphql, navigate, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Cookie from 'js-cookie';
import React, { useEffect, useState } from 'react';

export function JuneNotif() {
  const [visible, setIsVisible] = useState(false);
  const location = useLocation();
  const { poolHero } = useStaticQuery(
    graphql`
      {
        poolHero: file(
          relativePath: { eq: "b/basen-ze-zjezdzalnia-kacze-stawy-1.jpg" }
        ) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 600)
          }
        }
      }
    `
  );

  const closeNotification = e => {
    e.stopPropagation();
    Cookie.set('closedJune', 1, { expires: 1 });
    setIsVisible(false);
  };

  useEffect(() => {
    if (
      !!Cookie.get('closedJune') === true ||
      location.pathname ===
        '/boze-cialo-dlugi-weekend-czerwcowy-z-dziecmi-w-lebie-nad-morzem/' ||
      location.pathname ===
        '/boze-cialo-dlugi-weekend-czerwcowy-z-dziecmi-w-lebie-nad-morzem'
    ) {
      return;
    }
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 5000);
    return () => {
      clearTimeout(timeout);
    };
  }, [location]);

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
      <div
        role="button"
        onClick={() =>
          navigate(
            '/boze-cialo-dlugi-weekend-czerwcowy-z-dziecmi-w-lebie-nad-morzem'
          )
        }
        className="relative shadow-lg rounded-lg w-full min-w-[300px] h-48 flex cursor-pointer linear-background"
      >
        <GatsbyImage
          image={poolHero.childImageSharp.gatsbyImageData}
          className="!absolute w-full h-full object-cover rounded-lg -z-10"
        />
        <button
          onClick={closeNotification}
          type="button"
          className="absolute text-white right-2 top-1 p-0 border-0 bg-transparent cursor-pointer outline-none text-xl"
        >
          &#10006;
        </button>
        <div className="self-end pl-4">
          <span className="font-bold -mt-8 rounded bg-orange-600 text-sm text-white p-2 shadow">
            Rabat 10%
          </span>
          <h2 className="mt-4 text-shadow-headers text-white font-bold">
            Weekend czerwcowy
          </h2>
        </div>
      </div>
    </Transition>
  );
}
