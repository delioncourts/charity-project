import styles from './result-page.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import logo from '../../../public/logo.png';
import back from '../../../public/back.png';

const ResultPage = () => {
    const [count, setCount] = useState(0);

    return (
        <main className={styles.main}>

            <img className={styles.logo} src={logo} alt="логотип команды 48" />

            <h1 className={styles.title}>Победа!</h1>
            
            <div className={styles.container}>
            <p className={styles.subtitle}>Ходы</p>
            <p className={styles.count}>{count}</p>
            </div>

            <Link to='/' className={styles.link}><img src={back} alt="Вернуться в меню" className={styles.image} /></Link>
        </main>
    )
}

export default ResultPage;