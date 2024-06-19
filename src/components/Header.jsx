import { Link } from "react-router-dom"
import style from '../styles/Header.module.css'
export default function Header() {
    return (
        <header className={style.header}>
            <div className={style.container}>
                <div className={style.headerContent}>
                    <Link className={style.headerLogo} to={'/'}><img src="/headerLogo/logo.svg" alt="" /></Link>
                    <nav className={style.headerNav}>
                        <ul className={style.headerList}>
                            <li className={style.headerList}><Link className={style.headerLink} to={''}>Characters</Link></li>
                            <li className={style.headerList}><Link className={style.headerLink} to={''}>Locations</Link></li>
                            <li className={style.headerList}><Link className={style.headerLink} to={''}>Episodes</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}