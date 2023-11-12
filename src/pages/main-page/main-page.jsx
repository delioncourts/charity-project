import { Link } from 'react-router-dom';

import styles from './main-page.module.css';
import logo from '../../assets/logo.png';

const MainPage = () => {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>Привет!</h1>
            <img src={logo} alt="логотип команды 48" />
            <p className={styles.subtitle}>Предлагаем сыграть в игру Memory Game</p>

            <Link to='/'>Главная</Link>
            <Link to='*'>404</Link>
            <Link to='game'>Игра</Link>
            <Link to='result'>Результат</Link>
        </main>
    )
}

export default MainPage;