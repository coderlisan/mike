import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import 'react-toastify/dist/ReactToastify.css';
import 'moment/locale/pl';
import '../scss/BulmaForm.scss';

import { ErrorMessage, Field, Form, Formik } from 'formik';
// import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import moment from 'moment';
import React, { useRef, useState } from 'react';
import { DateRangePicker } from 'react-dates';
import { Slide, toast, ToastContainer } from 'react-toastify';
import * as Yup from 'yup';

import HollowButtonLink from '../components/HollowButtonLink';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import * as infoStyles from '../scss/modules/Info.module.scss';

moment.locale('pl');

const BookingSchema = Yup.object().shape({
  name: Yup.string().required('Imię i nazwisko wymagane'),
  room: Yup.string().required('Wybierz pokój albo domek'),
  roomCategory: Yup.string().required('Wybierz pokój albo domek'),
  email: Yup.string()
    .email('Nieprawidłowy email')
    .required('Email jest wymagany'),
  phone: Yup.string().required('Telefon jest wymagany'),
  arrivalDate: Yup.mixed().required('Musisz wybrać datę przyjazdu'),
  departureDate: Yup.mixed().required('Musisz wybrać datę wyjazdu'),
  adults: Yup.number().min(0, 'Nie może być mniejsze niż 0'),
  kids_3: Yup.number().min(0, 'Nie może być mniejsze niż 0'),
  kids_3_13: Yup.number().min(0, 'Nie może być mniejsze niż 0'),
});

const Booking = () => {
  const [rangeFocus, setRangeFocus] = useState(null);
  const scrollRef = useRef(null);
  const scrollToRef = ref => ref.current.scrollIntoView({ behavior: 'smooth' });
  const executeScroll = () => scrollToRef(scrollRef);

  const mobile = typeof window !== 'undefined' && window.innerWidth < 500;
  return (
    <Layout>
      <SEO
        title="Zapytaj o termin"
        description="Zarezerwuj już teraz swoje rodzinne wakacje z dziećmi. Całodniowe wyżywienie, animacje dla dzieci oraz basen w cenie."
      />
      <ToastContainer transition={Slide} />
      <div className="m-t-3">
        <h1 className="text-center px-2" ref={scrollRef}>
          Zapytaj o termin
        </h1>
        <div className="m-t-3 p-4 align-center max-800">
          <Formik
            validationSchema={BookingSchema}
            initialValues={{
              email: '',
              name: '',
              phone: '',
              room: '',
              adults: 2,
              kids_3_13: 0,
              kids_3: 0,
              arrivalDate: null,
              departureDate: null,
              message: '',
              roomCategory: '',
            }}
            onSubmit={(values, { setSubmitting, setStatus }) => {
              // console.log(values);
              fetch(`${process.env.MAILSERVER_ADDRESS}`, {
                method: 'POST',
                body: JSON.stringify(values, null, 2),
                headers: {
                  Accept: '/application/json',
                  'Content-Type': 'application/json',
                },
              })
                .then(response => response.json())
                .then(response => {
                  if (response.status === 'success') {
                    toast.success('Wysłano formularz!');
                    setStatus({ sent: true });
                    typeof window !== 'undefined' &&
                      window.gtag('event', 'dokonanie_rezerwacji', {
                        event_category: 'Booking',
                        event_name: 'Click',
                        // debug_mode: true,
                      });
                    window.gtag('event', 'conversion', {
                      send_to: 'AW-852948291/oYp6CNLs1pcYEMPq25YD',
                    });
                    // typeof window !== 'undefined' &&
                    //   window.gtag('event', 'Click', {
                    //     event_category: 'Booking',
                    //     debug_mode: true,
                    //   });
                    // trackCustomEvent({
                    //   // string - required - The object that was interacted with (e.g.video)
                    //   category: 'Booking',
                    //   // string - required - Type of interaction (e.g. 'play')
                    //   action: 'Click',
                    // });
                    setSubmitting(false);
                    executeScroll();
                  } else if (response.status === 'fail') {
                    toast.error('Ups. Coś poszło nie tak');
                    setSubmitting(false);
                  }
                })
                .catch(error => {
                  toast.error('Ups. Coś poszło nie tak');
                  // console.error(error);
                  setSubmitting(false);
                });
            }}
          >
            {({
              setFieldValue,
              values,
              status,
              submitCount,
              isSubmitting,
              isValid,
            }) => {
              if (status?.sent)
                return (
                  <div>
                    <h3 className="text-center">
                      Wysłano! Niedługo odpowiemy na twoje zapytanie.
                    </h3>
                    <p>Oto informacje które otrzymamy:</p>
                    <p className={infoStyles.info}>
                      Imię i nazwisko: {values.name} <br />
                      Email: {values.email} <br />
                      Telefon: {values.phone} <br />
                      Data przyjazdu: {values.arrivalDate.format('L')} <br />
                      Data wyjazdu: {values.departureDate.format('L')} <br />
                      Rodzaj pokoju lub domku: {values.room} <br />
                      Osoby dorosłe: {values.adults} <br />
                      Dzieci 3 - 13 lat: {values.kids_3_13} <br />
                      Dzieci do 3 lat: {values.kids_3} <br />
                      Wiadomość: {values.message}
                    </p>
                    <p className="m-t-3">Źle wypełniłeś? </p>
                    <HollowButtonLink
                      onClick={() => {
                        if (typeof window !== 'undefined') {
                          window.location.reload(false);
                        }
                      }}
                    >
                      Wypełnij jeszcze raz
                    </HollowButtonLink>
                  </div>
                );
              return (
                <Form className="bookingForm">
                  <p>
                    Po wysłaniu formularza skontaktujemy się z Tobą jak
                    najszybciej oraz przygotujemy dla Ciebie ofertę pobytu w
                    Kaczych Stawach 😊
                  </p>
                  <h3>Szczegóły pobytu</h3>
                  <div>
                    <div className="buttonGroup">
                      <legend className="label">Domek czy pokój?</legend>
                      <div className="m-t-1">
                        <div className="inline-block">
                          <Field
                            type="radio"
                            name="roomCategory"
                            value="Domek"
                            id="domek"
                            onChange={() => {
                              setFieldValue('room', '');
                              setFieldValue('roomCategory', 'Domek');
                            }}
                          />
                          <label className="radioButton" htmlFor="domek">
                            Domek
                          </label>
                          <Field
                            type="radio"
                            name="roomCategory"
                            value="Pokój"
                            id="pokoj"
                            onChange={() => {
                              setFieldValue('room', '');
                              setFieldValue('roomCategory', 'Pokój');
                            }}
                          />
                          <label className="radioButton" htmlFor="pokoj">
                            Pokój
                          </label>
                        </div>
                      </div>
                      {values.roomCategory === 'Domek' && (
                        <div className="m-t-1">
                          <p className="label">Wybierz domek: </p>
                          <div className="inline-block">
                            <Field
                              type="radio"
                              name="room"
                              value="Classic"
                              id="classic"
                            />
                            <label className="radioButton" htmlFor="classic">
                              Classic
                            </label>
                            <Field
                              type="radio"
                              name="room"
                              value="Premium"
                              id="premium"
                            />
                            <label className="radioButton" htmlFor="premium">
                              Premium
                            </label>
                            <Field
                              type="radio"
                              name="room"
                              value="Lux"
                              id="lux"
                            />
                            <label className="radioButton" htmlFor="lux">
                              Lux
                            </label>
                          </div>
                          <ErrorMessage name="room">
                            {msg => <p className="is-danger help">{msg}</p>}
                          </ErrorMessage>
                        </div>
                      )}
                      {values.roomCategory === 'Pokój' && (
                        <div className="m-t-1">
                          <p className="label">Wybierz pokój: </p>
                          <div className="inline-block">
                            <Field
                              type="radio"
                              name="room"
                              value="2 osobowy"
                              id="2osobowy"
                            />
                            <label className="radioButton" htmlFor="2osobowy">
                              2 osobowy
                            </label>
                            <Field
                              type="radio"
                              name="room"
                              value="3 osobowy"
                              id="3osobowy"
                            />
                            <label className="radioButton" htmlFor="3osobowy">
                              3 osobowy
                            </label>
                            <Field
                              type="radio"
                              name="room"
                              value="4 osobowy"
                              id="4osobowy"
                            />
                            <label className="radioButton" htmlFor="4osobowy">
                              4 osobowy
                            </label>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="label" htmlFor="arrivalDate">
                      Termin pobytu
                    </label>
                    <DateRangePicker
                      // name="range"
                      startDate={values.arrivalDate}
                      startDateId="arrivalDate-id"
                      startDatePlaceholderText="Przyjazd"
                      endDate={values.departureDate}
                      endDateId="departureDate-id"
                      endDatePlaceholderText="Wyjazd"
                      hideKeyboardShortcutsPanel
                      focusedInput={rangeFocus}
                      onFocusChange={focusedInput =>
                        setRangeFocus(focusedInput)
                      }
                      onDatesChange={({ startDate, endDate }) => {
                        setFieldValue('arrivalDate', startDate);
                        setFieldValue('departureDate', endDate);
                      }}
                      required
                      firstDayOfWeek={1}
                      readOnly
                      withPortal
                      disableScroll
                      numberOfMonths={mobile ? 1 : 2}
                      minDate={moment('2023-04-28')}
                      initialVisibleMonth={() => {
                        const now = moment();
                        const april2023 = moment().year(2023).month(3);
                        if (now.isAfter(april2023)) {
                          return now;
                        }
                        return april2023;
                      }}
                      enableOutsideDays={false}
                      isOutsideRange={date =>
                        date.isBefore(moment('2023-04-28'), 'day')
                      }
                    />
                    <ErrorMessage name="arrivalDate">
                      {msg => <p className="is-danger help">{msg}</p>}
                    </ErrorMessage>
                    <ErrorMessage name="departureDate">
                      {msg => <p className="is-danger help">{msg}</p>}
                    </ErrorMessage>
                  </div>
                  <div>
                    <label className="label" htmlFor="adults">
                      Osoby dorosłe
                    </label>
                    <div className="field has-addons">
                      <div className="control">
                        <button
                          type="button"
                          onClick={() => {
                            if (values.adults === 0) {
                              return;
                            }
                            setFieldValue(
                              'adults',
                              parseInt(values.adults) - 1
                            );
                          }}
                          className="formButton"
                        >
                          -
                        </button>
                      </div>
                      <div className="control">
                        <Field
                          className="input"
                          type="number"
                          name="adults"
                          min="0"
                          max="8"
                          id="adults"
                          readOnly
                        />
                        {/* <ErrorMessage name="name" component="div" /> */}
                      </div>
                      <div className="control">
                        <button
                          type="button"
                          onClick={() => {
                            if (values.adults === 8) {
                              return;
                            }
                            setFieldValue(
                              'adults',
                              parseInt(values.adults) + 1
                            );
                          }}
                          className="formButton"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <ErrorMessage name="adults">
                      {msg => <p className="is-danger help">{msg}</p>}
                    </ErrorMessage>
                  </div>
                  <div>
                    <label className="label" htmlFor="kids_3_13">
                      Dzieci od 3 do 13 lat
                    </label>
                    <div className="field has-addons">
                      <div className="control">
                        <button
                          type="button"
                          onClick={() => {
                            if (values.kids_3_13 === 0) {
                              return;
                            }
                            setFieldValue(
                              'kids_3_13',
                              parseInt(values.kids_3_13) - 1
                            );
                          }}
                          className="formButton"
                        >
                          -
                        </button>
                      </div>
                      <div className="control">
                        <Field
                          className="input"
                          type="number"
                          name="kids_3_13"
                          min="0"
                          max="8"
                          id="kids_3_13"
                          readOnly
                        />
                        {/* <ErrorMessage name="name" component="div" /> */}
                      </div>
                      <div className="control">
                        <button
                          type="button"
                          onClick={() => {
                            if (values.kids_3_13 === 8) {
                              return;
                            }
                            setFieldValue(
                              'kids_3_13',
                              parseInt(values.kids_3_13) + 1
                            );
                          }}
                          className="formButton"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <ErrorMessage name="kids_3_13">
                      {msg => <p className="is-danger help">{msg}</p>}
                    </ErrorMessage>
                  </div>
                  <div>
                    <label className="label" htmlFor="kids_3">
                      Dzieci do lat 3
                    </label>
                    <div className="field has-addons">
                      <div className="control">
                        <button
                          type="button"
                          onClick={() => {
                            if (values.kids_3 === 0) return;
                            setFieldValue(
                              'kids_3',
                              parseInt(values.kids_3) - 1
                            );
                          }}
                          className="formButton"
                        >
                          -
                        </button>
                      </div>
                      <div className="control">
                        <Field
                          className="input"
                          type="number"
                          name="kids_3"
                          min="0"
                          max="8"
                          id="kids_3"
                          readOnly
                        />
                        {/* <ErrorMessage name="name" component="div" /> */}
                      </div>
                      <div className="control">
                        <button
                          type="button"
                          onClick={() => {
                            if (values.kids_3 === 8) return;
                            setFieldValue(
                              'kids_3',
                              parseInt(values.kids_3) + 1
                            );
                          }}
                          className="formButton"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <ErrorMessage name="kids_3">
                      {msg => <p className="is-danger help">{msg}</p>}
                    </ErrorMessage>
                  </div>
                  <h3 className="m-t-3">
                    Potrzebujemy Twoich danych aby się z Tobą skontaktować
                  </h3>
                  <div>
                    <label className="label" htmlFor="name">
                      Imię i Nazwisko
                    </label>
                    <Field
                      className="input"
                      type="text"
                      name="name"
                      placeholder="Jan Kowalski"
                      id="name"
                    />
                    <ErrorMessage name="name">
                      {msg => <p className="is-danger help">{msg}</p>}
                    </ErrorMessage>
                  </div>
                  <div>
                    <label className="label" htmlFor="email">
                      E-mail
                    </label>
                    <Field
                      className="input"
                      type="email"
                      name="email"
                      placeholder="jankowalski@domena.pl"
                      id="email"
                    />
                    <ErrorMessage name="email">
                      {msg => <p className="is-danger help">{msg}</p>}
                    </ErrorMessage>
                  </div>
                  <div>
                    <label className="label" htmlFor="phone">
                      Telefon
                    </label>
                    <Field
                      className="input"
                      type="tel"
                      name="phone"
                      placeholder="605123456"
                      id="phone"
                    />
                    <ErrorMessage name="phone">
                      {msg => <p className="is-danger help">{msg}</p>}
                    </ErrorMessage>
                  </div>
                  <div>
                    <label htmlFor="message" className="label">
                      Dodatkowe informacje
                    </label>
                    <Field
                      className="textarea"
                      as="textarea"
                      name="message"
                      id="message"
                      rows="5"
                      // cols=""
                      placeholder="Napisz jeśli masz jakieś dodatkowe uwagi"
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="hollow-button send-button"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Wysyłanie' : 'Wyślij zapytanie'}
                    </button>
                    {!isValid && submitCount > 0 && (
                      <p className="is-danger help">
                        Są błędy w formularzu. Sprawdź formularz.
                      </p>
                    )}
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </Layout>
  );
};

export default Booking;
