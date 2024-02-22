import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../../components/Header';
import styles from './Home.module.scss';
import { Categoria } from '../../types/categoria';
import Imagem from '../../assets/inicial.png'

const Home: React.FC = () => {
    const navigate = useNavigate();
    const categorias = useSelector((state: { categorias: Categoria[] }) => state.categorias);

    return (
        <div>
            <Header
                titulo='Classificados Tech'
                descricao='Compre diversos tipos de produtos no melhor site do Brasil!'
                imagem={Imagem}
                className={styles.header}
            />
            <div className={styles.categorias}>
                <div className={styles['categorias-title']}>
                    <h1>Categorias</h1>
                </div>
                <div className={styles['categorias-container']}>
                    {categorias.map((categoria, index) => (
                        <div key={index} onClick={() => navigate(`/categoria/${categoria.id}`)}>
                            <img src={categoria.thumbnail} alt={categoria.nome} />
                            <h1>{categoria.nome}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
