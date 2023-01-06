import styles from "../styles/Header.module.css";

export default function Header() {
    return (
        <div>
            <header className={styles.header}>
                <div className={styles.wrapper}>
                    <a className={styles.title} href="#">
                        OrcaSquad
                    </a>
                    <nav className={styles.nav}>
                        <ul>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Discord</a>
                            </li>
                        </ul>
                        <div className='max-w-full h-12 flex justify-start items-center bg-black mb-4 text-white rounded-md '>
                            <div className='flex md:hidden'><HamburgerMenu /></div>
                            <div className='hidden md:flex'>
                                <Links />
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    );
}
