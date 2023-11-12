import styles from './not-found-404.module.css';
import { Link } from 'react-router-dom';
import back from '../../../public/back.png';

const NotFound = () => {
    return (
        <main className={styles.main}>
            <section className={styles.container}>
            <h1 className={styles.title}>ОШЫпКА</h1>
            <p className={styles.subtitle}>Команда 48 сожалеет, что всё так вышло и прикладывает все усилия, чтобы всё поправить.</p>
            <p className={styles.subtitle}>Но это не точно&rang;</p>
            <Link to='/' className={styles.link}><img src={back} alt="Вернуться в меню" className={styles.image}/></Link>
            </section>
        </main>
    )
}

export default NotFound;