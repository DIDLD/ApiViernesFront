import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/formulario.css'; 

function GridComplexExample() {
  return (
    <div className="form-container">
      <h2 className="text-center mb-4">Formulario de Registro</h2>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridNombre">
            <Form.Label>NOMBRE</Form.Label>
            <Form.Control type="text" placeholder="Ingresa tu nombre" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEdad">
            <Form.Label>EDAD</Form.Label>
            <Form.Control type="number" placeholder="Ingresa tu edad" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridTelefono">
          <Form.Label>TELÉFONO</Form.Label>
          <Form.Control type="tel" placeholder="Ingresa tu número de teléfono" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridCorreo">
          <Form.Label>CORREO</Form.Label>
          <Form.Control type="email" placeholder="Ingresa tu correo" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridContrasena">
          <Form.Label>CONTRASEÑA</Form.Label>
          <Form.Control type="password" placeholder="Ingresa tu contraseña" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridFechaRegistro">
            <Form.Label>FECHA DE REGISTRO</Form.Label>
            <Form.Control type="date" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCiudad">
            <Form.Label>CIUDAD</Form.Label>
            <Form.Control placeholder="Ingresa tu ciudad" />
          </Form.Group>
        </Row>
<br />
        <Button type="submit" className="btn-submit"> {/* Clase CSS personalizada para el botón */}
          ENVIAR
        </Button>
      </Form>
        <br />
        <Link to="/nuevo-formulario" className='hol'>IR A GASTOS</Link>
      
    </div>
  );
}

export default GridComplexExample;
