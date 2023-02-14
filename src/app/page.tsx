"use client";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FaBeer } from "react-icons/fa"

export default function Home() {
  return (
    <Container className='entrada' fluid>
      <Row>
        <Col>
          <p>Asociación Mexicana de Gerontología y Geriatría A.C.</p>
          <h1>Curso Latinoamericano en Nutrición y Alimentación Geriátrica</h1>
          <h4>CURSO DE NUTRICIÓN DEL ADULTO MAYOR</h4>
          <h3>16 y 17 de Marzo 2023<FaBeer /></h3>
        </Col>
      </Row>
    </Container>
  )
}
