import { Route, Routes } from 'react-router-dom';
import './App.css';
//import FormularioProductoContainer from './componentes/Formulario/FormularioProductoContainer';
import { TarjetaProductoContainer } from './componentes/Productos/TarjetaProductoContainer/TarjetaProductoContainer';
import { TarjetaEquipoContainer } from './componentes/Equipo/TarjetaEquipoContainer/TarjetaEquipoContainer';
import { Layout } from './componentes/Layout/Layout';
import ProductoDetalle from './componentes/Productos/ProductoDetalle/ProductoDetalle';
import Gestion from './componentes/Gestion/gestion';
import Cart from './componentes/Cart/Cart';

function App() {
return (
  <Routes>
    <Route
      element={<Layout/>}>

      <Route
        path="/" element={<TarjetaProductoContainer destacado={true}/>}
      />

      <Route
        path="/inicio" element={<TarjetaProductoContainer destacado={true}/>}
      />

      <Route
        path="/productos" element={<TarjetaProductoContainer destacado={false}/>}
      />

      <Route
        path="/nosotros" element={<TarjetaEquipoContainer/>}
      />

      <Route
        path="/gestion" element={<Gestion/>}
      />

      <Route
        path="/productos/:id" element={<ProductoDetalle/>}
      />

      <Route
        path="/carrito" element={<Cart/>}
      />

      <Route
        path="*" element={<h1>Página No Encontrada</h1>}
      />
    </Route>

  </Routes>

  );
}

export default App;