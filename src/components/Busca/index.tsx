import style from './Busca.module.scss'

export default function Busca() {
    return (
        <div className={style.busca}>
            <input 
            type="text" 
            placeholder="O que vc procura?" 
            className={style.input} />
        </div>
    )

}