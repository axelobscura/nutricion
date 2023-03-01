"use client";
import Image from 'next/image';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Banner from '../components/Banner'

export default function Confirmacion() {
  return (
    <Container className='registro' fluid>
      <Banner/>
      <Row>
        <Col style={{padding: '50px'}}>
          <h3>Gracias por su pago!</h3>
          <hr/>
          <h3>¡BIENVENIDO!</h3>
          <p style={{textAlign: 'center',padding: '90px'}}>Muchas Gracias por su suscripción, en breve recibira sus datos de acceso al evento.</p>
        </Col>
      </Row>
    </Container>
  )
}
