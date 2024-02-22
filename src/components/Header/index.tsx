import style from "./Header.module.scss"
import { HeaderProps } from "types/header"

export default function Header({ titulo, descricao, className = '', imagem }: HeaderProps) {
    return (
        <header className={`${style.header} ${className}`}>
            <div className={style["header-texto"]}>
                <h1>{titulo}</h1>
                <p>{descricao}</p>
            </div>
            <div className={style["header-imagem"]}>
                <img
                    src={imagem}
                    alt={titulo} />
            </div>
        </header>
    )
}