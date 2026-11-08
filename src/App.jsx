import { Route, Routes } from 'react-router-dom';
import './App.css';
import FormularioProductoContainer from './componentes/Formulario/FormularioProductoContainer';
//import {Layout} from './componentes/Layout/Layout';
import { TarjetaProductoContainer } from './componentes/TarjetaProductoContainer/TarjetaProductoContainer';
import { TarjetaEquipoContainer } from './componentes/Equipo/TarjetaEquipoContainer/TarjetaEquipoContainer';
import { Layout } from './componentes/Layout/Layout';
import ProductoDetalle from './componentes/ProductoDetalle/ProductoDetalle';

function App() {
return (
  <Routes>
    <Route
      element={<Layout/>}>

      <Route
        path="/" element={ <h1>Inicio</h1> }
      />

      <Route
        path="/productos" element={<TarjetaProductoContainer/>}
      />

      <Route
        path="/nosotros" element={<TarjetaEquipoContainer/>}
      />

      <Route
        path="/nuevo" element={<FormularioProductoContainer/>}
      />

      <Route
        path="/productos/:id" element={<ProductoDetalle/>}
      />

      <Route
        path="*" element={<h1>Página No Encontrada</h1>}
      />
    </Route>

  </Routes>

  );
}

export default App;