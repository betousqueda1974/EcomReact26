import './App.css';
import {Layout} from './componentes/Layout/Layout';
import { TarjetaProductoContainer } from './componentes/TarjetaProductoContainer/TarjetaProductoContainer';

function App() {
return (
  <Layout>
    {/* Todo lo que pongamos acá adentro irá donde estaba {children} */}
    <h1 className="tituloprincipal">¡Elegí tu souvenir!</h1>
    <TarjetaProductoContainer />

  </Layout>
  );
}
export default App;