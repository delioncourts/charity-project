import { Link } from 'react-router-dom';

import styles from './main-page.module.css';
import logo from '../../../public/logo.png';

const MainPage = () => {
    return (
        <main className={styles.main}>
            <img className={styles.logo} src={logo} alt="логотип команды 48" />
            <div className={styles.container}>
                <p className={styles.subtitle}>Предлагаем сыграть в&nbsp;игру Memory Game</p>
                <p className={styles.text}>Вам предлагается поле 4х4, состоящее из разных парных карточек, но расположенных в рандомном порядке. Ваша задача найти одинаковые и хорошо провести время &#9786;</p>

                <Link to='game' className={styles.link}>НОВАЯ ИГРА</Link>
                <Link to='*' className={styles.link}>НИНАЖЫМАДЬ!</Link>
            </div>
        </main>
    )
}

export default MainPage;