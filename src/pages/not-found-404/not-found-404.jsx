import styles from './not-found-404.module.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <main className={styles.main}>
            <section className={styles.container}>
            <h1 className={styles.title}>ОШЫпКА</h1>
            <p className={styles.subtitle}>Команда 48 сожалеет, что всё так вышло и прикладывает все усилия, чтобы всё поправить.</p>
            <p className={styles.subtitle}>Но это не точно&rang;</p>
            <Link to='/' className={styles.link}>Меню</Link>
            </section>
        </main>
    )
}

export default NotFound;