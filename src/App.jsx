import './App.css';
import {Layout} from './componentes/Layout/Layout';
import TarjetaProducto from './componentes/TarjetaProducto/TarjetaProducto';
import { TarjetaProductoContainer } from './componentes/TarjetaProductoContainer/TarjetaProductoContainer';

function App() {
return (
  <Layout>
    {/* Todo lo que pongamos acá adentro irá donde estaba {children} */}
    <h1 className="tituloprincipal">¡Elegí tu souvenir!</h1>

    <TarjetaProductoContainer />

{/* 
    <section className="productos">
      <TarjetaProducto
        imagen="../img/producto1.jpg"
        nombre="Souvenir1"
        precio={14400}
        stock={10}
      />
    
      <TarjetaProducto
        imagen="https://images.unsplash.com/photo-1533158307587-828f0a76ef46?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
        nombre="Souvenir2"
        precio={14400}
        stock={15}
      />

        <TarjetaProducto
        imagen="https://media.istockphoto.com/id/2228537204/photo/tourist-choosing-souvenir-fridge-magnet-in-belgium.jpg?s=1024x1024&w=is&k=20&c=0vV_4QS8H58Pjqf5ZATcDMTzihPc6dxFsk6hcU5DsW4="
        nombre="Souvenir3"
        precio={22000}
        stock={22}
      />

      <TarjetaProducto
        imagen="../img/producto2.jpg"
        nombre="Souvenir4"
        precio={16800}
        stock={40}
      />

    </section>
*/}
  </Layout>
  );
}
export default App;