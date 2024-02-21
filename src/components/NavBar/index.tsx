import style from './Navbar.module.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg';

export default function Navbar () {
    return (
        <nav className={style.nav}>
            <Logo className ={style.logo}/>
        </nav>
    )
    
}
