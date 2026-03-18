import { Routes, Route, Router } from 'react-router-dom';
import Home from './paginas/Home';
import VitrineRestaurantes from './paginas/VitrineRestaurantes';
import AdministracaoRestaurantes from './paginas/Administracao/AdministracaoRestaurantes';
import FormularioRestaurante from './paginas/Administracao/FormularioRestaurantes';
import PaginaBaseAdmin from './paginas/Administracao/PaginaBaseAdmin'
import AdministracaoPratos from './paginas/Administracao/AdministracaoPratos';
import FormularioPrato from './paginas/Administracao/FormularioPratos';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<VitrineRestaurantes />} />
      <Route path='/admin' element={PaginaBaseAdmin}> 
        <Route path="restaurantes" element={<AdministracaoRestaurantes />} />
        <Route path='restaurante/novo' element={<FormularioRestaurante />} />
        <Route path='restaurantes/:id' element={<FormularioRestaurante />} />

        <Route path='pratos' element={<AdministracaoPratos />}  />
        <Route path='pratos/novo' element={<FormularioPrato />}  />
      </Route>
    </Routes>
  );
}

export default App;
