import style from './Navbar.module.scss';
import Logo from '../../assets/Dev-Market.png';
import classNames from 'classnames';
import { RiShoppingCart2Line, RiShoppingCartFill } from 'react-icons/ri';
import Busca from '../Busca';

const iconesProps = {
    size: 24,
    color: '#fff'
}

export default function Navbar() {
    return (
        <nav className={style.nav}>
            <img src={Logo} width="150px" className={style.logo} />
            <div className={style.links}>
                <div>
                    <a href="/" className={classNames(style.link, {
                        [style.selected]: window.location.pathname === '/'
                    })}> Pagina Inicial </a>
                </div>
            </div>
                <div className={style.busca}>
                    <Busca />
                </div>
                <div className={style.icones}>
                    <a href="/carrinhos">
                        {window.location.pathname === '/carrinhos'
                            ? <RiShoppingCartFill {...iconesProps} />
                            : <RiShoppingCart2Line {...iconesProps} />
                        }
                    </a>
                </div>
        </nav>
    )

}

