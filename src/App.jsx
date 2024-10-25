import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GridComplexExample from './componentes/Formulario';
import FormularioGastos from './componentes/Gastos'; 
import MetodoPago from './componentes/MetodoPago'
import Categoria from './componentes/Categoria';
import Factura from './componentes/Factura';
function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          {}
          <Route path="/" element={<GridComplexExample />} />
          {}
          <Route path="/nuevo-formulario" element={<FormularioGastos />} />
          {}
          <Route path="/metodo-pago" element={<MetodoPago />} />
          {}
          <Route path="/categoria" element={<Categoria />} />
           {}
           <Route path="/factura" element={<Factura />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
