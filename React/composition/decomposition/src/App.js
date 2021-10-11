import React from "react";
import config from './config.json'; // Конфигурационный файл с настройками и названиями


/* Начало импорта изображений */ 

import logoLogo from './img/Logo.png'; // Лого Яндекса
import advertisingLogo from './img/Advertising.png'; // Баннер рекламы
import weatherLogo from './img/weather.png'; // Лого погоды
import img1 from './img/new_1-2.png'; // Лого для новости №1 
import img3 from './img/new_3.png'; // Лого для новости №3 
import img4 from './img/new_4.png'; // Лого для новости №4 
import img5 from './img/new_5.png'; // Лого для новости №5
import TVPlayIcon from './img/tv_play.png'; // Лого для TV

/* Конец импорта изображений */ 


/* Начало импорта компонентов */

import Logo from './components/Logo';
import Menu from "./components/Menu";
import News from "./components/News";
import Course from "./components/Course";
import Search from "./components/Search";
import Advertising from "./components/Advertising";
import CountryCard from "./components/CountryCard";
import Weather from "./components/Weather";
import Vizits from "./components/Vizits";
import Afisha from "./components/Afisha";
import TV from "./components/TV";

/* Конец импорта компонентов */


const imagesForNews = [img1, img1, img3, img4, img5];

export default function App() {
  return (
    <React.Fragment>
      <header>
        <News news={config.news} imgs={imagesForNews} />
        <Course valute={config.valute} />
      </header>
      <main>
        <Logo logo={logoLogo} />
        <div>
          <Menu categories={config.menuCat} />
          <Search btnText={config.searchButtonText} diviz={config.diviz} />
        </div>
      </main>
      <Advertising img={advertisingLogo} />
      <footer>
        <div className="fCol">
          <Weather weather={config.weather} icon={weatherLogo} />
          <Vizits vizits={config.vizits} />
        </div>
        <div className="fCol">
          <CountryCard country={config.country} />
          <Afisha afisha={config.afisha} />
        </div>
        <div className="fCol">
          <TV TV={config.TV} icon={TVPlayIcon} />
        </div>
      </footer>
    </React.Fragment>
  );
}