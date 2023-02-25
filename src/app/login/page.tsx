"use client";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Banner from '../components/Banner'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

export default function Login() {
  return (
    <Container className='registro' fluid>
      <Banner boton="inicio"/>
      <Row>
        <Col></Col>
        <Col xs={12} md={6} className='reg' style={{ padding: '70px 0'}}>
          <h3>ACCESO</h3>
          <hr/>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Correo electrónico:</Form.Label>
              <Form.Control type="email" name="email" placeholder="Ingrese su correo electrónico" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Contraseña:</Form.Label>
              <Form.Control type="password" name="contrasena" placeholder="Ingrese su contraseña" />
            </Form.Group>
            <Button type="submit" className="btn_login">INGRESAR</Button>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  )
}
