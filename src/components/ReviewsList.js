import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';

import { reviewList } from '../scss/modules/ReviewList.module.scss';
import Review from './Review';

const ReviewsList = () => {
  const {
    pool,
    hotelRoom,
    kids,
    kids2,
    pool2,
    air,
    bar1,
    domkiNight,
    insidePool,
    domkiLux1,
    kids4,
    pool5,
    playground1,
  } = useStaticQuery(graphql`
    {
      pool: file(
        relativePath: { eq: "b/basen-ze-zjezdzalnia-kacze-stawy-1.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED)
        }
      }
      hotelRoom: file(relativePath: { eq: "b/hotel-pokoj.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED)
        }
      }
      kids: file(relativePath: { eq: "b/animacje-dla-dzieci.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED)
        }
      }
      kids2: file(relativePath: { eq: "b/animacje-dla-dzieci-myszka.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED)
        }
      }
      pool2: file(relativePath: { eq: "o/II/DSC_3215.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED)
        }
      }
      air: file(relativePath: { eq: "o/lotnicze/DSC_6200.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED)
        }
      }
      bar1: file(relativePath: { eq: "b/hotel-bar-1.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED)
        }
      }
      domkiNight: file(relativePath: { eq: "b/domek-noc-kacze-stawy.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED)
        }
      }
      insidePool: file(relativePath: { eq: "b/basen-wewnetrzny-ogrod.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED)
        }
      }
      domkiLux1: file(relativePath: { eq: "b/domki-lux-1.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED)
        }
      }
      kids4: file(relativePath: { eq: "o/II/DSC_5181.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED)
        }
      }
      pool5: file(relativePath: { eq: "o/II/DSC_3126.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED)
        }
      }
      playground1: file(relativePath: { eq: "b/plac-zabaw-1.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED)
        }
      }
    }
  `);
  return (
    <div className={reviewList}>
      <Review
        text="Fantastyczne miejsce rodzinnego wypoczynku. Mnóstwo zajęć dla dzieci. Bardzo dobre wyżywienie."
        name="Krzysztof"
        source="Google"
      />
      <Review
        text="Raj na Ziemi ❤️😍 Cudowne miejsce do wypoczynku zwłaszcza dla rodzin z dziećmi!!! Tutaj nie ma czasu na nudę 😉"
        name="Ewelina"
        source="Facebook"
      />

      <GatsbyImage
        image={pool.childImageSharp.gatsbyImageData}
        alt="Basen zewnętrzny ze zjeżdżalnią"
      />

      <Review
        text="Pod względem atmosfery, całego personelu wiecznie uśmiechniętego, posiłków w ośrodku oraz zorganizowania czasu dla najmłodszych jak i dla całej rodziny PETARDA"
        name="Dariusz"
        source="Google"
      />
      <Review
        text="Nie ma lepszego miejsca na wakacje nad morzem z dziećmi. Baza jest tak przygotowana, że nawet w deszczową pogodę jest tam co robić. Kuchnia znakomita, Panie kucharki gotują super. No i basen ze zjeżdżalnią 😁😁😁"
        name="Waldemar"
        source="Google"
      />

      <GatsbyImage
        image={hotelRoom.childImageSharp.gatsbyImageData}
        alt="Pokój hotelowy"
      />
      <Review
        text="Cudowne miejsce dla rodzin z dziećmi - pyszne jedzenie, świetne animacje ❤️❤️🤩 Polecamy"
        name="Aleksandra"
        source="Facebook"
      />
      <Review
        text="Nasz drugi pobyt, ale nie ostatni 😁😊👌"
        name="Arkadiusz"
        source="Facebook"
      />

      <GatsbyImage
        image={kids.childImageSharp.gatsbyImageData}
        alt="Zawody dla dzieci"
      />
      <Review
        text="Wszystko jest na najwyższym poziomie.
        Pięknie, czysto, obsługa przemiła, jedzenie bardzo pyszne, staw zarybiony, basen podgrzewamy i fantastyczne animatorki w klubie dla dzieci.
        Ponadto liczne atrakcje typu teatrzyk, szanty, biesiada przy ognisku, koncert...
        Z całego serca polecam"
        name="Sylwia"
        source="Google"
      />
      <Review
        text="Cudowne miejsce na pobyt z dziećmi. Rewelacyjnie zorganizowany czas dla dzieci w różnym wieku. Klub Myszki Miki - gdzie można zostawić pociechę - organizuje wiele zabaw manualnych, dzieci mogą tez swobodnie bawić się znajdującymi się tam zabawkami. Na powietrzu liczne place zabaw, piaskownice, siłownie na powietrzu. Wokół ośrodka droga wewnętrzna - chodnik. Można jeździć tam na rowerze hulajnodze czy rolkach. Basen ze zjeżdżalnią i podgrzewaną wodą. Ratownik, który dba o bezpieczeństwo. Dodatkowe atrakcje w ciągu dnia takie jak: zabawy w podchody, robienie mydełek, autobus z czekoladą, robienie robotów i programowanie ich. Wszystko w cenie. Wieczorem koncerty, szanty, kiełbaski przy ognisku. Mieszkać można w domkach - czyste. W środku talerze, szklanki, sztućce, lodówka, parawan, leżaki. Brak ręczników. Na terenie również mały hotel a w środku basen kryty i część SPA przy recepcji. Mini zoo i możliwość wypożyczenia rowerów. Spod recepcji jeździ darmowy autobus na plażę i do Łeby"
        name="Agnieszka"
        source="Google"
      />

      <GatsbyImage
        image={kids2.childImageSharp.gatsbyImageData}
        alt="Animacje dla dzieci"
      />
      <Review
        text="Jesteśmy tutaj szósty raz, wszystko nam się podoba. Myślę, że za rok tez przyjedziemy 😍"
        name="Anna"
        source="Facebook"
      />

      <Review
        text="W 'Kaczych Stawach' byliśmy niedawno w dwie rodziny. Wynajęliśmy domki, jeden premium, drugi classic, oba czyste i wygodne. Dzieci są w wieku: 7, 8, 12, 13 i 14 lat, żadne nie chciało wracać do domu, dosłownie miały łzy w oczach. Korzystały z mnóstwa atrakcji, jak np. podchody, autobus z warsztatami czekoladowymi, teatrzyk, robotyka, lepienie z gliny, spacery z kijkami (Nordic Walking), gra w siatkówkę i w nożną, tory przeszkód, zawody w sterowaniu autami Monster Truck, itd. Naprawdę, jeśli ktoś nie jest marudą i ma ochotę, to będzie bawić się wyśmienicie. Pogoda nam dopisała, więc oczywiście basen i zjeżdżalnia przysporzyły wiele radości nie tylko dzieciom. Stoły do ping ponga też okazały się 'strzałem w 10'. Ośrodek jest wyposażony w liczne place zabaw i siłownię w parku, a w stawie można łowić ryby. Jeżeli jesteście nastawieni pozytywnie, to nie sposób się nudzić. Mini ZOO to kolejna super sprawa. Po każdym posiłku dzieci biegały odwiedzić zwierzątka: króliki, kury, indyka, owce, kózki i kucyka. Oj, ciężko było się rozstać. Jednego dnia pojechaliśmy autobusem do Łeby i też było fajnie.
        'Kacze Stawy' to wiele możliwości na spędzanie czasu. Moim zdaniem nie ma się do czego przyczepić. (...)
        Jedzenie smaczne i dużo. Obsługa miła, a posiłki sprawnie wydawane. Wieczorami grillowaliśmy przy domku i graliśmy w badmintona.
        Jesteśmy bardzo zadowoleni z pobytu i z pewnością tam wrócimy. Uczciwie polecam 'Kacze Stawy'. Przekonajcie się sami."
        name="Maciej"
        source="Google"
      />

      <GatsbyImage
        image={pool2.childImageSharp.gatsbyImageData}
        alt="Dzieci zjeżdżające na zjeżdżalni przy basenie"
      />
      <Review
        text="Dosłownie tydzień temu wróciliśmy z Kaczych Stawów. Pobyt w ośrodku uważam za udany. Dobry pakiet żywieniowy(śniadania i obiadokolacje w formie szwedzkiego bufetu - nikt nie chodził głodny).  Mnóstwo atrakcji dla dzieci: bezkonkurencyjny Klub Myszki Miki, moje dziecko nie chciało wracać do domu, atrakcje typu podgrzewany basen w ogóle go nie interesowały, w mini zoo spotkamy zadbane zwierzęta, a fajne place zabaw przyciągają maluchy. Wieczorami sporo atrakcji dla dorosłych. Profesjonalny i miły personel w połączeniu z niesamowitym pomysłem na rodzinne wakacje skłaniają do powrotu."
        name="Monika"
        source="Google"
      />
      <Review
        text="Wiele wspaniałych atrakcji dla dzieci. Super basen i aqua-aerobic. Bardzo pyszne i urozmaicone menu w formie bufetu szwedzkiego. Czyste i zadbane otoczenie. Przyjemne domki. Mini zoo przy parkingu."
        name="Bogusia"
        source="Google"
      />
      <GatsbyImage
        image={air.childImageSharp.gatsbyImageData}
        alt="Kacze Stawy z lotu ptaka"
      />
      <Review
        text="Czysto, mnóstwo zieleni, dużo miejsca na spacery, mini zoo dla dzieci, basen z ciepłą wodą ze zjeżdżalniami, smaczne jedzenie i staw z możliwością wędkowania. Dzieci zadowolone, bo mogły też poćwiczyć na przyrządach a mniejsze dzieci na placach zabaw. Wszyscy zadowoleni 😁"
        name="Beata"
        source="Google"
      />
      <Review
        text="Cudowne miejsce na odpoczynek z dziećmi"
        name="Marcin"
        source="Google"
      />
      <GatsbyImage
        image={bar1.childImageSharp.gatsbyImageData}
        alt="Bar hotelowy"
      />
      <Review
        text="Rewelacyjny ośrodek do aktywnego wypoczynku. Dwa baseny: zewnętrzny i w budynku z dodatkową opcja sauny. Możliwość kwaterunku w domkach lub pokojach hotelowych. Pokoje urządzony w wysokim standardzie, czyste i jasne, każdy pokój z opcja tarasu. Obsługa uprzejma i taktowna, dobra kuchnia. Ośrodek zamknięty wiec bezpieczny dla dzieci. Gorąco polecam"
        name="Andrzej"
        source="Google"
      />
      <Review
        text="Miejsce wspaniałe dla rodzin, dla małych i dużych. Cudowne zabawy organizowane w ośrodku, autobus na plażę. Domki rewelacja, apartamenty poziom 5 gwiazdek. Niczego nam nie brakowało. Wracamy za rok!! Dziękujemy za cudowny relaxxxxx‼️"
        name="Andrzej"
        source="Google"
      />
      <GatsbyImage
        image={domkiNight.childImageSharp.gatsbyImageData}
        alt="Domek nocą"
      />
      <Review
        text="Wspaniały wypoczynek dla rodzin z małymi dziećmi"
        name="Roman"
        source="Google"
      />
      <Review
        text="Idealne miejsce dla rodzin z dziećmi:) duży basen, cudowne otoczenie wśród drzew, zorganizowane wieczory, polecam."
        name="Dominika"
        source="Google"
      />
      <GatsbyImage
        image={insidePool.childImageSharp.gatsbyImageData}
        alt="Basen wewnętrzny, wyjście na ogród"
      />

      <Review
        text="Dużo atrakcji dla dzieci, oprócz tego plac zabaw oraz basen i dojazd do morza - wszystko w cenie pobytu 😊 👍"
        name="Magda"
        source="Google"
      />
      <Review
        text="Witam serdecznie, Kacze Stawy to super miejsce na pobyt z dziećmi, ale nie tylko. Basen zewnętrzny z podgrzewaną wodą - rewelacja. Jedzenie bardzo smaczne i różnorodne, nawet dla wybrednych wczasowiczów znajdzie się coś dobrego. Atrakcje dla dzieci interesujące. Zajęcia dla dorosłych ciekawe. Obsługa miła i uprzejma. Okna w domkach zabezpieczone siatką - brak komarów i innych owadów! Jesteśmy bardzo zadowoleni i mamy nadzieję, że kiedyś tam wrócimy! Polecam wszystkim!!!"
        name="Compass04345353243"
        source="TripAdvisor"
      />
      <GatsbyImage
        image={domkiLux1.childImageSharp.gatsbyImageData}
        alt="Domki Lux wraz z placem zabaw"
      />
      <Review
        text="Wczoraj wróciliśmy z Kaczych stawów. Mieliśmy dwa pokoje w hotelu: jeden dla rodziny z dziećmi, drugi osoby dorosłe. Hotel i tereny w okół bardzo zadbane, jedzenie pyszne, cała obsługa bardzo pomocna i uprzejma. Dzieci na pewno nie będą się tam nudzić place zabaw, duży teren, animacje, baseny, wędkowanie. Dla dorosłych też były organizowane zawody sportowe. Gorąco polecam, my na pewno tu wrócimy :)"
        name="Paulina"
        source="TripAdvisor"
      />
      <Review
        text="Wspaniałe miejsce na odpoczynek z dziećmi. Czysto, wygodnie, dużo zieleni. Domki wyposażone we wszystko, zgodne z opisem na stronie internetowej. Raj dla dzieci. Zadbane place zabaw, basen ze zjeżdżalniami i brodzikiem. Animacje dla dzieci i dorosłych. Miła i pomocna obsługa. Posiłki w formie bufetu, zróżnicowane, każdy znajdzie coś dla siebie. Polecam w 100%."
        name="Katarzyna"
        source="Google"
      />
      <GatsbyImage
        image={kids4.childImageSharp.gatsbyImageData}
        alt="Animacje dla dzieci"
      />
      <Review
        text="Świetny ośrodek dla rodzin. Nie można się nudzić. Wiele atrakcji dla dzieci na terenie ośrodka. Jedzenie w formie bufetu i każdy znajdzie coś dla siebie. Darmowa komunikacja miejska z ośrodka do centrum Łeby. Domki czyste i duże. Cisza i spokój."
        name="Łukasz"
        source="Google"
      />
      <Review
        text="Polecam na rodzinny wypoczynek. Piękny ośrodek z dala od centrum, pyszne jedzenie, mnogość atrakcji dla dzieci i dorosłych, basen, place zabaw i klub dla dzieci. Domki super wyposażone. Raj dla wędkarzy. Bar przy basenie bardzo dobrze wyposażony i dobre ceny. Mega udany wypoczynek 😍"
        name="Monika"
        source="Facebook"
      />
      <GatsbyImage
        image={pool5.childImageSharp.gatsbyImageData}
        alt="Dziecko w basenie z kołem ratunkowym"
      />
      <Review
        text="Wakacje zaliczamy do bardzo udanych. Cały pobyt był wspaniały. Przed domkiem plac zabaw za domkiem basen, leżaki, plaża. Wszystko w zasięgu ręki. Żyć nie umierać. Dzieci nie czuły potrzeby opuszczania Ośrodka. Mnóstwo animacji dla dzieci. Wyżywienie super. Możliwość wędkowania i grillowania. Z pewnością wracamy za rok z większym gronem znajomych 😊 Pozdrawiamy i dziękujemy za wspaniały wypoczynek."
        name="Kasia"
        source="Facebook"
      />
      <Review
        text="Miejsce warte polecenia na wakacje z rodzina. Na miejscu basen że zjeżdżalnia, brodzik, place zabaw dla małych i większych dzieci, boisko do siatkówki, stawy z możliwości łowienia. W okolicy kilka ciekawych atrakcji."
        name="Radosław"
        source="Google"
      />
      <GatsbyImage
        image={playground1.childImageSharp.gatsbyImageData}
        alt="Plac zabaw"
      />
      <Review
        text="Cudowne miejsce ❤️ idealne dla rodzin z dziećmi 😍❤️ Hotel piękny, bardzo praktycznie urządzony, jedzenie przepyszne, obsługa przesympatyczna ❤️ Na pewno wrócimy tu nie raz! ❤️👌"
        name="Ewelina"
        source="Facebook"
      />
      <Review
        text="Czas spędzony tutaj to był strzał w 10! Dogodna lokalizacja, cicha i spokojna. Każdy znajdzie coś dla siebie i swoich dzieci, jeśli chodzi o część rekreacyjną ;) Obsługa młodego zespołu bardzo sympatyczna i pomocna :) Jedzenie bardzo dobre, duży wybór wśród posiłków. Hotel czyściutki, pachnący nowością. Cały ośrodek bardzo zadbany. Polecam każdej rodzinie! Pobyt w hotelu był dla nas przyjemnością, na pewno tu wrócimy, pozdrawiam!"
        name="Natalia"
        source="Facebook"
      />
      <Review
        text="Najlepsze wakacje dla nas, a szczególnie dla naszego syna, który nie chciał wracać do domu;) Klub dla dzieci super sprawa i wspaniałe Panie, za którymi synek już tęskni... Bardzo czysto,baseny, wiele placów zabaw,przyjaźnie i super atmosfera.SAME PLUSY... jedynym 'minusem' jest tak pyszne jedzenie, pięknie podawane, dla każdego coś dobrego:) a kilogramy w górę 😂 Dziękujemy i na pewno odwiedzamy w przyszłym roku."
        name="Anna"
        source="Facebook"
      />
    </div>
  );
};

export default ReviewsList;
