import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/gastos.css';

function FormularioGastos() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">GASTOS</h2>
      <div className="border rounded p-4 shadow" style={{ maxWidth: '500px', margin: 'auto' }}>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridNombre">
              <Form.Label>PRODUCTO</Form.Label>
              <Form.Control type="text" placeholder="Nombre del producto" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridMonto">
              <Form.Label>MONTO</Form.Label>
              <Form.Control type="number" placeholder="Ingresa el monto" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridDescripcion">
            <Form.Label>DESCRIPCIÓN</Form.Label>
            <Form.Control type="text" placeholder="Ingresa una descripción" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridFecha">
            <Form.Label>FECHA</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
          <br></br>
          <Button variant="primary" type="submit">
            ENVIAR
          </Button>
        </Form>
        {}<br></br>
          <Link to="/metodo-pago" className='hol'>Ir al Método de Pago</Link>
      </div>
    </div>
  );
}

export default FormularioGastos;
