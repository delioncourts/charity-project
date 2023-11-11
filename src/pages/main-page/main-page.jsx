import styles from './main-page.module.css';

const MainPage = () => {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>Привет!</h1>
            <p className={styles.subtitle}>Предлагаем сыграть в игру Memory Game</p>
        </main>
    )
}

export default MainPage;