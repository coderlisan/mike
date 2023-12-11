import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/Seo';

const Regulations = () => (
  <Layout>
    <SEO
      title="Regulamin"
      description="Regulamin ośrodka wczasowego Holiday Park Kacze Stawy"
    />
    <div className="m-t-3">
      <div className="block-centered text-block-wider">
        <h1 className="text-center">Regulamin Holiday Parku Kacze Stawy</h1>
        <p className="text-center">&sect; 1</p>
        <ol>
          <li>
            Gość ośrodka wypoczynkowego Holiday Park „Kacze Stawy” zobowiązany
            jest do okazania dowodu tożsamości przed zameldowaniem oraz
            podpisania karty meldunkowej. W przypadku odmowy, recepcjonista ma
            obowiązek odmowy wydania klucza do domku.
          </li>
          <li>
            Goście zobowiązani są pozostawić samochód na parkingu za recepcją z
            włożoną za szybę kartą wjazdową otrzymaną w recepcji.
          </li>
          <li>
            Goście korzystający z basenu oraz przychodzący do restauracji
            zobowiązani są do noszenia na ręce opasek otrzymanych na recepcji w
            dniu przyjazdu.
          </li>
          <li>
            Domek w ośrodku wynajmowany jest na doby. Doba hotelowa trwa od
            godz. 15:00 w dniu wynajmu do godz. 10:00 dnia następnego.
          </li>
          <li>
            Jeżeli Gość nie określi czasu pobytu najmując domek, przyjmuje się,
            że domek został wynajęty na jedną dobę.
          </li>
          <li>
            Życzenie przedłużenia pobytu poza okres wskazany w dniu przybycia,
            Gość ośrodka powinien zgłosić w recepcji do godz. 10:00 dnia, w
            którym upływa termin najmu domku.
          </li>
          <li>
            Obiekt uwzględni życzenie przedłużenia pobytu w miarę posiadanych
            możliwości.
          </li>
          <li>
            Przedłużenie pobytu w domku poza godzinę 10:00 jest traktowane jako
            przedłużenie pobytu.
          </li>
        </ol>
        <p className="text-center">&sect; 2</p>
        <ol>
          <li>
            W dniu przyjazdu Goście zobowiązani są do sprawdzenia czy
            wyposażenie domku zgadza się z załączoną do regulaminu listą.
            Wszelkie braki należy zgłosić do recepcji do godz. 10.00 dnia
            następnego. Za wszelkie braki w wyposażeniu, niezgłoszone do
            recepcji Goście zostaną obciążeni finansowo zgodnie z cennikiem
            znajdującym się w recepcji.
          </li>
          <li>
            W dniu wyjazdu Goście zobowiązani są do pozmywania naczyń, zdjęcia
            białej pościeli i wyrzucenia śmieci.
          </li>
        </ol>
        <p className="text-center">&sect; 3</p>
        <ol>
          <li>
            Gość ośrodka nie może przekazywać domku innym osobom, nawet jeśli
            nie upłynął okres, za który uiścił opłatę.
          </li>
          {/* <li>
            Osoby niezameldowane mogą przebywać w domku w godz. 13.00 – 21.30.
            Przebywanie osoby niezameldowanej w domku gościa ośrodka po godz.
            21.30 jest równoznaczne z wyrażeniem zgody przez najmującego domek
            na odpłatne dokwaterowanie osoby do domku Gościa ośrodka, według cen
            obowiązujących w dniu dokwaterowania ale nie może przekroczyć ilości
            osób 6 w domku classic i premium oraz 8 osób w domku lux.
          </li> */}
          <li>
            Zmiany w regulaminie w związku z panującą w Polsce epidemią
            Covid-19. Wytyczne Ministerstwa Rozwoju i Głównego Inspektora
            Sanitarnego zaleca się bezwzględny zakaz przebywania w
            hotelu/obiekcie osób tam nie zakwaterowanych. Ze względu na
            wydłużony czas związany z dezynfekcją domków doba hotelowa zaczyna
            się o godz. 15:00
          </li>
        </ol>
        <p className="text-center">&sect; 4</p>
        <ol>
          <li>
            Na terenie ośrodka obowiązuje absoluty zakaz jeżdżenia samochodami
            po trawie.
          </li>
          <li>
            Gość ośrodka ma prawo podjechać pod domek wyłącznie w dniu przyjazdu
            w celu wypakowania bagaży oraz w dniu wyjazdu w celu zapakowania
            bagaży. Samochód należy pozostawić na parkingu za recepcją. Na teren
            ośrodka mają prawo wjazdu wyłącznie zameldowani goście ośrodka.
          </li>
        </ol>
        <p className="text-center">&sect; 5</p>
        <ol>
          <li>
            Goście korzystający z basenu są zobowiązani do absolutnego
            przestrzegania regulaminu basenu znajdującego się przy basenie.
          </li>
        </ol>
        <p className="text-center">&sect; 6</p>
        <ol>
          <li>
            Obiekt świadczy usługi zgodnie ze swoją kategorią i standardem. W
            przypadku zastrzeżeń dotyczących jakości usług, Gość jest proszony o
            bezzwłoczne zgłoszenie ich w recepcji, co umożliwi personelowi
            ośrodka reakcję.
          </li>
        </ol>
        <p className="text-center">&sect; 7</p>
        <ol>
          <li>
            Ośrodek nie ponosi odpowiedzialności z tytułu straty lub uszkodzenia
            pieniędzy, papierów wartościowych, kosztowności, innych rzeczy i
            przedmiotów wartościowych albo przedmiotów mających wartość naukową
            lub artystyczną, jeżeli przedmioty te nie zostaną przechowanie do
            depozytu recepcji.
          </li>
        </ol>
        <p className="text-center">&sect; 8</p>
        <ol>
          <li>
            W ośrodku obowiązuje zachowanie ciszy od godz. 23.00 do godz. 7.00
            dnia następnego.
          </li>
          <li>
            W godzinach ciszy nocnej Goście i osoby korzystające z usług ośrodka
            mają obowiązek takiego zachowania, by w żaden sposób nie zakłócało
            ono spokoju pobytu innych Gości.
          </li>
        </ol>
        <p className="text-center">&sect; 9</p>
        <ol>
          <li>
            Gość ośrodka ponosi pełna odpowiedzialność materialną za wszelkiego
            rodzaju uszkodzenia lu zniszczenia przedmiotów wyposażenia i
            urządzeń technicznych ośrodka powstałe z winy jego lub
            odwiedzających Go gości.
          </li>
          <li>
            W przypadku naruszenia postanowień niniejszego regulaminu ośrodek
            może odmówić dalszego świadczenia usług osobie, która je naruszyła.
            Osoba taka zobowiązana jest do niezwłocznego zastosowania się do
            żądań pracowników ośrodka, uregulowania należności za dotychczasowe
            świadczenia oraz do zapłaty za ewentualnie poczynione uszkodzenia i
            zniszczenia oraz opuszczenia terenu ośrodka.
          </li>
          <li>
            Ośrodek może odmówić przyjęcia Gościa, który podczas poprzedniego
            pobytu rażąco naruszył regulamin Ośrodka, wyrządzając szkodę w
            imieniu ośrodka lub Gości albo szkodę na osobie Gości, pracowników
            ośrodka lub innych osób przebywających na ośrodku, albo też w inny
            sposób zakłócił spokój.
          </li>
        </ol>
        <p className="text-center">&sect; 10</p>
        <ol>
          <li>
            Ze względu na bezpieczeństwo pożarowe zabronione jest używanie w
            domkach grzałek, żelazek i innych urządzeń elektrycznych, nie
            stanowiących wyposażenia domku. Powyższe nie dotyczy ładowarek i
            zasilaczy urządzeń RTV oraz komputerowych.
          </li>
          <li>
            Każdorazowo opuszczając domek Gość powinien sprawdzić zamknięcie
            drzwi i upewnić się, że są zamknięte.
          </li>
        </ol>
        <p className="text-center">&sect; 11</p>
        <ol>
          <li>
            Przedmioty osobistego użytku pozostawione w domku przez
            wyjeżdżającego Gościa będą odesłane na Jego koszt, na adres przez
            niego wskazany. W przypadku nie otrzymania takiej dyspozycji Ośrodek
            przechowa te przedmioty przez 3 miesiące, a następnie przekaże na
            cele charytatywne lub do użytku publicznego.
          </li>
        </ol>
        <p className="text-center">&sect; 12</p>
        <ol>
          <li>
            Ośrodek zastrzega sobie prawo do zażądania płatności „ z góry”. W
            momencie odmowy, Recepcjonista ma prawo odmówić wydania klucza do
            pokoju.
          </li>
          <li>W przypadku skrócenia pobytu ośrodek nie zwraca pieniędzy.</li>
        </ol>
        <p className="text-center">&sect; 13</p>
        <ol>
          <li>
            Ośrodek zastrzega sobie prawo do zmian wydawania posiłków. Godziny
            wydawania posiłków:
            <br />
            Śniadanie: 8:30 – 10:30
            <br />
            Obiadokolacja: 16:30 – 18:30
          </li>
        </ol>
      </div>
    </div>
  </Layout>
);

export default Regulations;
