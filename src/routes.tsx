import {BrowserRouter ,Routes, Route} from 'react-router-dom';
import './index.css';
import PaginaPadrao from './components/PaginaPadrao';
import Home from './pages/Home';


export default function Router () {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element= {<PaginaPadrao/>}>
            <Route index element={<Home/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

