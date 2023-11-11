import styles from './not-found-404.module.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>404</h1>
            <p className={styles.subtitle}>К сожалению, страница не найдена</p>
            <Link to='/' className={styles.link}>Вернуться на главную</Link>
        </main>
    )
}

export default NotFound;