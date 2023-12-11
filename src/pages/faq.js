import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/Seo';

const Faq = ({ data }) => (
  <Layout>
    <SEO
      title="FAQ - Najczęściej zadawane pytania"
      description="Odpowiedzi na najczęściej zadawane przez Was pytania"
    />
    <div className="m-t-3">
      <h1 className="text-center">FAQ - Najczęściej zadawane pytania</h1>
      <div className="m-t-3 p-4 align-center max-800">
        <h2>Czym się różni domek Classic od domku Premium?</h2>
        <p>
          Domki te różnią się:
          <br />
          <br />
          <ul className="dot-list">
            <li>
              położeniem - domki typu Premium są umiejscowione bliżej placów
              zabaw albo bliżej basenu lub stawu
            </li>
            <li>
              wyposażeniem - domki typu Premium są dodatkowo wyposażone w
              kuchenkę mikrofalową.
            </li>
          </ul>
        </p>
        <h2>Czy domki wyposażone są w kuchenkę gazową lub elektryczną?</h2>
        <p>
          W domkach nie ma kuchenki gazowej ani elektrycznej. Domki typu Premium
          oraz Lux są wyposażone w kuchenkę mikrofalową. W cenie pobytu
          zapewniamy całodzienne wyżywienie w formie śniadań i obiadokolacji.
        </p>
        <h2>Jakie ryby znajdują się w stawie?</h2>
        <p>
          W stawie możemy złowić między innymi karpie, liny, szczupaki, okonie i
          karasie.
        </p>
        <h2>Czy można wypożyczyć wędki?</h2>
        <p>Nie wypożyczamy wędek .</p>
        <h2>Czy w domkach znajduje się pościel oraz ręczniki?</h2>
        <p>
          Goście w dniu przyjazdu dostają pościel zgodną z ilością opłaconych
          osób.
        </p>
        <p>
          W domkach nie ma ręczników. Ręczniki w domkach dostępne są za
          dodatkową opłatą.
        </p>

        <p>W pokojach hotelowych ręczniki są wliczone w cenę pobytu.</p>
        <h2>Co jest zawarte w cenie pobytu?</h2>
        <p>Wszystkie informacje są zawarte na podstronach cenników:</p>
        <p>
          <Link to="/cennik/domki">Cennik domków</Link>
        </p>
        <p>
          <Link to="/cennik/pokoje">Cennik pokojów</Link>
        </p>
        <h2>Czy przed domkiem można grillować?</h2>
        <p>Oczywiście przed domkiem można grillować.</p>
        <h2>Jak daleko jest do plaży oraz do centrum Łeby.</h2>
        <p>
          Do plaży są około 4 km, do centrum Łeby 3 km. Nasz Holiday Bus
          zawiezie Państwa zarówno do centrum, jak i na plażę (transfer w dniach
          {` `}
          {`${data.site.siteMetadata.busDateRange}`}).
        </p>
        <h2>Jak często jeździ Holiday Bus?</h2>
        <p>
          Holiday Bus jeździ co około godzinę. Dokładny rozkład dostaną Państwo
          w dniu przyjazdu.
        </p>
        <h2>Jakie są boiska na terenie ośrodka?</h2>
        <p>
          Na terenie ośrodka znajduje się boisko do siatkówki plażowej, piłki
          nożnej, badmintona oraz stół do tenisa stołowego.
        </p>
        <h2>Czy jest możliwość wypożyczenia roweru?</h2>
        <p>
          Tak, rower kosztuje 5 zł za godzinę. Wypożyczenie na dzień kosztuje 30
          zł.
        </p>
        <h2>Ile trwa doba hotelowa?</h2>
        <p>Doba hotelowa zaczyna się o godzinie 15:00, kończy o 10:00.</p>
        <h2>Jaka jest wysokość zadatku?</h2>
        <p>Zadatek wynosi około 30% ceny pobytu.</p>
        <h2>
          Czy kupując pobyt w domku można skorzystać z wewnętrznego basenu w
          hotelu, gabinetu masażu oraz sauny za dodatkową opłatą?
        </h2>
        <p>
          Wewnętrzny basen oraz sauna są dostępne dla gości kupujących pobyt w
          hotelu. Nie ma możliwości dopłaty. Gabinet masażu jest dostępny za
          opłatą dla wszystkich gości ośrodka.
        </p>
      </div>
    </div>
  </Layout>
);

Faq.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        busDateRange: PropTypes.string.isRequired,
      }),
    }),
  }),
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        busDateRange
      }
    }
  }
`;

export default Faq;
