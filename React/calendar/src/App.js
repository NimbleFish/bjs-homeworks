import ReactDOM from 'react-dom';
import React from 'react';
import Week from './Week.js';
import './App.css';

function App(props) {
  const {data} = props;
  function getDayOfWeek(day) {
    const week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    for (let i = 0; i < week.length; i++) {
      if (day == i) {
        return week[i];
      }
    }
  }
  function daysInMonth() {
    const date = new Date();
    return 33 - new Date(date.getFullYear(), date.getMonth(), 33).getDate();
  }
  function generateArrayDaysInMonts(days) {
    let array = [];
    for (let i = 1; i <= days; i++) array[i] = i;
    return array;
  }
  function getMonthOfYear(month, parentContext = false) {
    const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    const monthsParent = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
    for (let i = 0; i < months.length; i++) {
      if (month == i) {
        if (parentContext) {
          return monthsParent[i];
        } else {
          return months[i];
        }
      }
    }
  }
  function renderWeek(step, step_to, target) {
    ReactDOM.render(<Week days={generateArrayDaysInMonts(daysInMonth())} step={step} step_to={step_to} data={data} getDayOfWeek={function getDayOfWeek(){}} />, document.getElementById(target));
  }
  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{getDayOfWeek(data.getDay())}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{data.getDate()}</div>
          <div className="ui-datepicker-material-month">{getMonthOfYear(data.getMonth(), true)}</div>
          <div className="ui-datepicker-material-year">{data.getFullYear()}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{getMonthOfYear(data.getMonth())}</span>&nbsp;<span className="ui-datepicker-year">{data.getFullYear()}</span>
        </div>
      </div>
      <table className="ui-datepicker-calendar">
        <colgroup>
          <col />
          <col />
          <col />
          <col />
          <col />
          <col className="ui-datepicker-week-end" />
          <col className="ui-datepicker-week-end" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col" title="Понедельник">Пн</th>
            <th scope="col" title="Вторник">Вт</th>
            <th scope="col" title="Среда">Ср</th>
            <th scope="col" title="Четверг">Чт</th>
            <th scope="col" title="Пятница">Пт</th>
            <th scope="col" title="Суббота">Сб</th>
            <th scope="col" title="Воскресенье">Вс</th>
          </tr>
        </thead>
        <tbody>
          {
            generateArrayDaysInMonts(daysInMonth()).map((index, elem) => {
              if (index <= 5) {
                return <tr id={'tr_'+index} key={index} />
              }
            })
          }
          {document.addEventListener('DOMContentLoaded', ()=>{renderWeek(0, 7, 'tr_1')})}
          {document.addEventListener('DOMContentLoaded', ()=>{renderWeek(8, 14, 'tr_2')})}
          {document.addEventListener('DOMContentLoaded', ()=>{renderWeek(14, 20, 'tr_3')})}
          {document.addEventListener('DOMContentLoaded', ()=>{renderWeek(21, 27, 'tr_4')})}
          {document.addEventListener('DOMContentLoaded', ()=>{renderWeek(28, 35, 'tr_5')})}
        </tbody>
      </table>
    </div>
  );
}

export default App;
