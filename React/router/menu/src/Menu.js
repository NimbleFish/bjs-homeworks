import { NavLink } from 'react-router-dom';

export default function Menu() {
    return (
        <ul className="menu">
            <NavLink className='menu__item'to='/' activeClassName="active" >Главная</NavLink>
            <NavLink className='menu__item'to='/drift' activeClassName="active" >Дрифт-такси</NavLink>
            <NavLink className='menu__item'to='/timeattack' activeClassName="active" >Time Attack</NavLink>
            <NavLink className='menu__item'to='/forza' activeClassName="active" >Forza Karting</NavLink>
        </ul>
    );
  }