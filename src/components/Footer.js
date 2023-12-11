import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Envelope from '../images/envelope-light.svg';
import Facebook from '../images/facebook-brands.svg';
import Instagram from '../images/instagram-brands.svg';
import PhoneSvg from '../images/phone-alt-light.svg';

const Footer = () => (
  <div className="footer-wrapper">
    <footer>
      <div>
        <h3>Mapa strony</h3>
        <ul className="sitemap">
          <li>
            <Link to="/">Strona Główna</Link>
          </li>
          <div className="li-divider">Atrakcje</div>
          <li>
            <Link to="/dzieci-w-kaczych-stawach">Dla dzieci</Link>
          </li>
          <li>
            <Link to="/basen">Basen zewnętrzny</Link>
          </li>
          <li>
            <Link to="/basen-wewnetrzny">Basen wewnętrzny</Link>
          </li>
          <li>
            <Link to="/wyzywienie">Wyżywienie</Link>
          </li>
          <li>
            <Link to="/place-zabaw">Place zabaw</Link>
          </li>
          <li>
            <Link to="/staw-dla-wedkarzy">Staw dla wędkarzy</Link>
          </li>
          <li>
            <Link to="/silownia-zewnetrzna">Siłownia zewnętrzna</Link>
          </li>
          <li>
            <Link to="/masaze">Masaże</Link>
          </li>
          <li>
            <Link to="/mini-zoo">Mini Zoo</Link>
          </li>
          <div className="li-divider">Zakwaterowanie</div>
          <li>
            <Link to="/domki">Domki</Link>
            <ul>
              <li>
                <Link to="/domki/classic-premium">Classic i Premium</Link>
              </li>
              <li>
                <Link to="/domki/lux">Lux</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/hotel">Hotel</Link>
            <ul>
              <li>
                <Link to="/pokoje">Pokoje</Link>
              </li>
            </ul>
          </li>
          <div className="li-divider">Cenniki</div>
          <li>
            <Link to="/cennik/domki">Cennik domków</Link>
          </li>
          <li>
            <Link to="/cennik/pokoje">Cennik pokojów</Link>
          </li>
          <div className="li-divider">Dodatkowe informacje</div>
          <li>
            <Link to="/kontakt">Kontakt</Link>
          </li>
          <li>
            <Link to="/rezerwacja">Zapytaj o termin</Link>
          </li>
          <li>
            <Link to="/opinie">Opinie naszych gości</Link>
          </li>
          <li>
            <Link to="/faq">Najczęściej zadawane pytania</Link>
          </li>
          <li>
            <Link to="/regulamin">Regulamin</Link>
          </li>
        </ul>
      </div>
      <div>
        <h3>Kontakt</h3>

        <p>
          {/* <img className="inline-svg" src={PhoneSvg} alt="Ikonka telefonu" />
          Domki: <a href="tel:+48598662900">+48 59 8662 900</a>
          <br /> */}
          {/* <img className="inline-svg" src={PhoneSvg} alt="Ikonka telefonu" />
          Domki: <a href="tel:+48795525417">+48 795 525 417</a>
          <br /> */}
          <img className="inline-svg" src={PhoneSvg} alt="Ikonka telefonu" />
          <a href="tel:+48602577710">+48 602 577 710</a>
        </p>
        <p>
          <img className="inline-svg" src={Envelope} alt="Ikonka maila" />
          <a href="mailto:stawy@kaczestawy.pl">stawy@kaczestawy.pl</a>
        </p>
        <p>
          <img className="inline-svg" src={Facebook} alt="Ikonka Facebooka" />
          <a href="https://facebook.com/kaczestawy">facebook.com/kaczestawy</a>
          <br />
          <img className="inline-svg" src={Instagram} alt="Ikonka Instagrama" />
          <a href="https://instagram.com/kaczestawy">
            instagram.com/kaczestawy
          </a>
        </p>
        <p>
          Holiday Park Kacze Stawy
          <br />
          ul. Żwirowa 24
          <br />
          84-360 Łeba - Nowęcin
        </p>
        <br />
      </div>
      <div className="logo-footer-container">
        <StaticImage
          src="../images/kacze-stawy-logo.png"
          className="logo"
          width={160}
          quality="95"
          alt="Logo Kacze Stawy"
        />
      </div>
    </footer>
    <div className="cookies-container">
      <div className="cookies">
        <p>
          Nasze strony wykorzystują pliki cookies. Używamy informacji zapisanych
          za pomocą cookies i podobnych technologii w celach statystycznych. W
          programie służącym do obsługi internetu można zmienić ustawienia
          dotyczące cookies. Korzystanie z naszych serwisów internetowych bez
          zmiany ustawień dotyczących cookies oznacza, że będą one zapisane w
          pamięci urządzenia.
        </p>
      </div>
    </div>
    <div className="webjuice">
      <p>
        Realizacja:{' '}
        <a className="violet" href="https://www.webjuice.pl">
          webjuice.pl
        </a>
        <br />
        Kacze Stawy korzystają z{' '}
        <a className="orange" href="https://www.juicybooking.com">
          grafiku rezerwacji Juicybooking
        </a>
      </p>
    </div>
  </div>
);

export default Footer;
