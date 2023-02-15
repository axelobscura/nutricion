"use client";
import Image from 'next/image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Home() {
  return (
    <Container className='entrada' fluid>
      <Row>
        <Col>
          <Image
            src='/logo-amgg-blanco.png'
            width='200'
            height='150'
            alt='Curso Latinoamericano en Nutrición y Alimentación Geriátrica'
            style={{marginBottom: '20px'}}
          />
          <h1>Curso Latinoamericano en<br/>Nutrición y Alimentación Geriátrica</h1>
          <h4>CURSO DE NUTRICIÓN DEL ADULTO MAYOR</h4>
          <h3>16 y 17 de Marzo 2023</h3>
        </Col>
      </Row>
    </Container>
  )
}
