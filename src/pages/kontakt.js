import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Envelope from '../images/envelope-light.svg';
import Facebook from '../images/facebook-brands.svg';
import Instagram from '../images/instagram-brands.svg';
// icons
import PhoneSvg from '../images/phone-alt-light.svg';
import {
  contactContainer,
  splitContact,
} from '../scss/modules/Contact.module.scss';

const Contact = ({ data: { entrance } }) => (
  <Layout>
    <SEO title="Kontakt" description="Skontaktuj się z nami" />
    <div className="m-t-3">
      <h1 className="text-center">Kontakt</h1>
      <div className={splitContact}>
        <GatsbyImage
          image={entrance.childImageSharp.gatsbyImageData}
          alt="Brama wjazdowa nocą"
          objectFit="cover"
        />
        <div className={contactContainer}>
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
            <a href="https://facebook.com/kaczestawy">
              facebook.com/kaczestawy
            </a>
            <br />
            <img
              className="inline-svg"
              src={Instagram}
              alt="Ikonka Instagrama"
            />
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
          <p>
            <br />
            <h4>Numer konta:</h4>
            66 1240 5790 1111 0010 3425 9376
            <br />
            &quot;Ruszewski&quot; Spółka Jawna
            <br />
            84-360 Nowęcin, ul. Żwirowa 24
            <br />
            Nazwa Banku: Bank Pekao SA
          </p>
          <br />
        </div>
      </div>
    </div>
  </Layout>
);
Contact.propTypes = {
  data: PropTypes.object,
};
export default Contact;

export const query = graphql`
  {
    entrance: file(relativePath: { eq: "o/III/DSC_6562.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
