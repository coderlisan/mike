import { Link } from 'gatsby';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';

const KidsWeekAlert = ({ arrivalDate, departureDate }) => {
  if (!arrivalDate || !departureDate) return null;
  const kidsWeekStart = moment('2021-05-29');
  const kidsWeekEnd = moment('2021-06-06');
  const numberOfDays = departureDate.diff(arrivalDate, 'days');
  if (arrivalDate.isBetween(kidsWeekStart, kidsWeekEnd) && numberOfDays < 4)
    return (
      <div style={{ marginTop: '1rem' }}>
        <div className="notification is-link is-light">
          Wybierz więcej dni i skorzystaj z promocji Kids Week nawet do -15%!
          <br />
          <Link to="/kids-week-dzien-dziecka-boze-cialo-nad-morzem">
            Zobacz szczegóły promocji.
          </Link>
        </div>
      </div>
    );
  if (arrivalDate.isBetween(kidsWeekStart, kidsWeekEnd) && numberOfDays < 5)
    return (
      <div style={{ marginTop: '1rem' }}>
        <div className="notification is-link is-light">
          Wybierz dwa dni więcej i skorzystaj z większej promocji Kids Week
          -15%!
          <br />
          <Link to="/kids-week-dzien-dziecka-boze-cialo-nad-morzem">
            Zobacz szczegóły promocji.
          </Link>
        </div>
      </div>
    );
  if (arrivalDate.isBetween(kidsWeekStart, kidsWeekEnd) && numberOfDays < 6)
    return (
      <div style={{ marginTop: '1rem' }}>
        <div className="notification is-link is-light">
          Wybierz jeden dzień więcej i skorzystaj z większej promocji Kids Week
          -15%!
          <br />
          <Link to="/kids-week-dzien-dziecka-boze-cialo-nad-morzem">
            Zobacz szczegóły promocji.
          </Link>
        </div>
      </div>
    );
  return null;
};
KidsWeekAlert.propTypes = {
  arrivalDate: PropTypes.instanceOf(moment),
  departureDate: PropTypes.instanceOf(moment),
};
export default React.memo(KidsWeekAlert);
