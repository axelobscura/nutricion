"use client";
import Image from 'next/image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Home() {
  return (
    <Container className='entrada' fluid>
      <Row className='banner'>
        <Col>
          <h1>Curso Latinoamericano en<br/>Nutrición y Alimentación Geriátrica</h1>
          <h4 style={{marginBottom: '20px'}}>CURSO DE NUTRICIÓN DEL ADULTO MAYOR</h4>
          <h3>16 y 17 de Marzo 2023</h3>
        </Col>
      </Row>
      <Container className='objetivo'>
        <Row>
          <Col>
            <div>
              <h3>OBJETIVO</h3>
              <p>Ut fermentum leo sed purus egestas porta. Duis malesuada maximus leo sit amet viverra. Sed nec purus sit amet turpis viverra posuere eget a mi. Nulla nec varius elit. Phasellus vestibulum consequat facilisis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque nec volutpat odio. Ut at varius lacus, lacinia sollicitudin est. Proin mollis quam et libero tincidunt elementum.</p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className='temario' fluid>
        <Row>
          <Col>
            <div>
              <h3>Temario General</h3>
              <p>Ut fermentum leo sed purus egestas porta. Duis malesuada maximus leo sit amet viverra. Sed nec purus sit amet turpis viverra posuere eget a mi. Nulla nec varius elit. Phasellus vestibulum consequat facilisis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque nec volutpat odio. Ut at varius lacus, lacinia sollicitudin est. Proin mollis quam et libero tincidunt elementum.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
