import { useLocation } from '@reach/router';
import { graphql, useStaticQuery } from 'gatsby';
import React, { useEffect, useState } from 'react';

import { seeAlso } from '../scss/modules/SeeAlso.module.scss';
import DuckDivider from './DuckDivider';
import SeeAlsoItem from './SeeAlsoItem';

const SeeAlso = () => {
  const location = useLocation();

  const {
    pool,
    kids,
    bungalows,
    hotel,
    food,
    insidePool,
    playground,
    massage,
    fishing,
    gym,
    zoo,
  } = useStaticQuery(graphql`
    {
      pool: file(
        relativePath: { eq: "b/basen-ze-zjezdzalnia-kacze-stawy-1.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 400, layout: CONSTRAINED)
        }
      }
      kids: file(relativePath: { eq: "b/animacje-dla-dzieci.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 400, layout: CONSTRAINED)
        }
      }
      bungalows: file(relativePath: { eq: "b/domek-noc-kacze-stawy.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 400, layout: CONSTRAINED)
        }
      }
      hotel: file(relativePath: { eq: "b/pokoj-hotel-kacze-stawy.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 400, layout: CONSTRAINED)
        }
      }
      food: file(relativePath: { eq: "b/wyzywienie-bufet-kacze-stawy.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 400, layout: CONSTRAINED)
        }
      }
      insidePool: file(relativePath: { eq: "b/basen-wewnetrzny.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 400, layout: CONSTRAINED)
        }
      }
      playground: file(relativePath: { eq: "b/plac-zabaw-1.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 400, layout: CONSTRAINED)
        }
      }
      massage: file(relativePath: { eq: "b/gabinet-masazu.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 400, layout: CONSTRAINED)
        }
      }
      fishing: file(relativePath: { eq: "b/staw-dla-wedkarzy-2.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 400, layout: CONSTRAINED)
        }
      }
      gym: file(relativePath: { eq: "b/silownia-zewnetrzna-2.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 400, layout: CONSTRAINED)
        }
      }
      zoo: file(relativePath: { eq: "b/mini-zoo.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 400, layout: CONSTRAINED)
        }
      }
    }
  `);
  const locations = [
    {
      path: '/basen',
      img: pool,
      text: 'Basen zewnętrzny',
    },
    {
      path: '/dzieci-w-kaczych-stawach',
      img: kids,
      text: 'Dla dzieci',
    },
    {
      path: '/domki',
      img: bungalows,
      text: 'Domki',
    },
    {
      path: '/hotel',
      img: hotel,
      text: 'Hotel',
    },
    {
      path: '/wyzywienie',
      img: food,
      text: 'Wyżywienie',
    },
    {
      path: '/basen-wewnetrzny',
      img: insidePool,
      text: 'Basen wewnętrzny',
    },
    {
      path: '/place-zabaw',
      img: playground,
      text: 'Place zabaw',
    },
    {
      path: '/masaze',
      img: massage,
      text: 'Masaże',
    },
    {
      path: '/staw-dla-wedkarzy',
      img: fishing,
      text: 'Staw dla wędkarzy',
    },
    {
      path: '/silownia-zewnetrzna',
      img: gym,
      text: 'Siłownia zewnętrzna',
    },
    {
      path: '/mini-zoo',
      img: zoo,
      text: 'Mini Zoo',
    },
  ];
  const [locationsState, setLocationsState] = useState(locations);
  useEffect(() => {
    function shuffleAndCut(array) {
      const sorted = [...array]
        .sort(() => Math.random() - 0.5)
        .filter(o => {
          if (location.pathname.slice(-1) === '/') {
            return o.path !== location.pathname.slice(0, -1);
          }
          return o.path !== location.pathname;
        });
      // if (sorted.length > 6) {
      return sorted.slice(0, 9);
      // }
      // return sorted;
    }
    setLocationsState(shuffleAndCut(locationsState));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (location.pathname === '/') {
    return null;
  }

  return (
    <div className="m-t-7 text-center">
      <DuckDivider />
      <h2>Zobacz również</h2>
      <div className={seeAlso}>
        {locationsState.map(item => (
          <SeeAlsoItem key={item.path} item={item} />
        ))}
      </div>
    </div>
  );
};

export default SeeAlso;
