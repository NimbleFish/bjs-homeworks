import { useNavigate, useLocation } from 'react-router-dom';

const activePage = (location, loc) => location.pathname == loc ? "menu__item-active" : null;

export default function Menu() {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <ul className="menu">
            <li onClick={() => navigate('/')} className={"menu__item " + activePage(location, '/')}>Главная</li>
            <li onClick={() => navigate('/drift')} className={"menu__item " + activePage(location, '/drift')}>Дрифт-такси</li>
            <li onClick={() => navigate('/timeattack')} className={"menu__item " + activePage(location, '/timeattack')}>Time Attack</li>
            <li onClick={() => navigate('/forza')} className={"menu__item " + activePage(location, '/forza')}>Forza Karting</li>
        </ul>
    );
  }