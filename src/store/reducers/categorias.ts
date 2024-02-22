import { createSlice } from '@reduxjs/toolkit';
import { Categoria } from '../../types/categoria';
import eletronicosThumb from '../../assets/thumbnail/eletronicos.png'
import eletronicosHeader from '../../assets/header/eletronicos.png'
import automotivoThumb from '../../assets/thumbnail/automotivo.png'
import automotivoHeader from '../../assets/header/automotivo.png'
import jogosThumb from '../../assets/thumbnail/jogos.png'
import jogosHeader from '../../assets/header/jogos.png'
import escritorioThumb from '../../assets/thumbnail/escritorio.png'
import escritorioHeader from '../../assets/header/escritorio.png'
import somThumb from '../../assets/thumbnail/som.png'
import somHeader from '../../assets/header/som.png'



const initialState :Categoria [] = [{
    nome: 'Eletrônicos',
    thumbnail: eletronicosThumb,
    header: eletronicosHeader,
    id: 'eletronicos',
    descricao: 'Os melhores e mais atuais dispositivos eletrônicos estão aqui!'
}, {
    nome: 'Automotivo',
    thumbnail: automotivoThumb,
    header: automotivoHeader,
    id: 'automotivos',
    descricao: 'Encontre aqui equipamentos para deixar seu carro com a sua cara!'
}, {
    nome: 'Jogos',
    thumbnail: jogosThumb,
    header: jogosHeader,
    id: 'jogos',
    descricao: 'Adquira os consoles e jogos mais atuais do mercado !'
}, {
    nome: 'Escritório',
    thumbnail: escritorioThumb,
    header: escritorioHeader,
    id: 'escritorio',
    descricao: 'Tudo para o que escritório ficar incrível!'
}, {
    nome: 'Som e imagem',
    thumbnail: somThumb,
    header: somHeader,
    id: 'som',
    descricao: 'Curta suas músicas e seus filmes com a melhor qualidade!'
}];

const categoriasSlice = createSlice({
    name: 'categorias',
    initialState,
    reducers: {}
});

export default categoriasSlice.reducer;