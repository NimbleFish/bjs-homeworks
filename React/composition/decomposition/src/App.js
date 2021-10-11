import React from "react";
import config from './config.json'; // Конфигурационный файл с настройками и названиями



/* Начало импорта изображений */ 

import logoLogo from './img/Logo.png'; // Лого Яндекса
import advertisingLogo from './img/Advertising.png'; // Баннер рекламы

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



export default function App() {
  return (
    <React.Fragment>
      <header>
        <News news={config.news} />
        <Course valute={config.valute} />
      </header>
      <main>
        <Logo logo={logoLogo} />
        <div>
          <Menu categories={config.menuCat} />
          <Search btnText={config.searchButtonText} />
        </div>
      </main>
      <Advertising img={advertisingLogo} />
      <footer>
        <div className="fCol">
          <Weather weather={config.weather} />
          <Vizits vizits={config.vizits} />
        </div>
        <div className="fCol">
          <CountryCard country={config.country} />
          <Afisha afisha={config.afisha} />
        </div>
        <div className="fCol">
          <TV TV={config.TV} />
        </div>
      </footer>
    </React.Fragment>
  );
}