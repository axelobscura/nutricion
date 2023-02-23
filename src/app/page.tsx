"use client";
import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Home() {
  return (
    <Container className='entrada' fluid>
      <Card className="text-white">
        <Card.Img src="/slider.jpeg" alt="Card image" />
        <Card.ImgOverlay>
          <div className='entradaTxt'>
            <Card.Title>
              <h1>CURSO<br/>LATINOAMERICANO<br/>EN NUTRICIÓN<br/>Y ALIMENTACIÓN<br/>GERIÁTRICA</h1>
            </Card.Title>
            <h4 style={{marginBottom: '20px'}}>16 y 17 de Marzo 2023<br/>Modalidad: On Line / On Demand<br/>Horario: 09:00 a 14:00 hrs.<br/>Costo: $300</h4>
            <Link href='/registro' className='btn_login'>INSCRIBIRSE</Link>
          </div>
        </Card.ImgOverlay>
      </Card>
      <Container className='objetivo'>
        <Row>
          <Col>
            <div>
              <h3>OBJETIVO GENERAL</h3>
              <p>Aportar los conocimientos teóricos y prácticos básicos para el proceso de atención nutricia en las personas adultas mayores (PAM) (institucionalizado, en hospital y de la comunidad), para promover un envejecimiento saludable y activo.</p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className='temario' fluid>
        <Row>
          <Col>
            <div className='doteada'>
              <h3 style={{marginBottom:'20px'}}>Temario General</h3>
              <p style={{marginBottom:'40px'}}>Ut fermentum leo sed purus egestas porta. Duis malesuada maximus leo sit amet viverra. Sed nec purus sit amet turpis viverra posuere eget a mi. Nulla nec varius elit. Phasellus vestibulum consequat facilisis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque nec volutpat odio. Ut at varius lacus, lacinia sollicitudin est. Proin mollis quam et libero tincidunt elementum.</p>
              <Link href='/registro' className='btn_login'>INSCRIBIRSE</Link>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className='profesores'>
        <Row>
          <Col>
            <h3>PROFESOR TITULAR</h3>
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <Card className="profesores">
              <h4>Dr. Oscar Rosas Carrasco</h4>
              <p>Médico, especialista en Medicina Interna y Geriatría, Profesor-investigador nacional nivel II</p>
            </Card>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col>
            <h3>PROFESORES ADJUNTOS</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="profesores">
              <h4>Dra. María del Consuelo Velázquez Alva</h4>
              <p>Médico, maestra en Ciencias de la Nutrición, Doctorado en Ciencias, SNI nivel 1.</p>
            </Card>
          </Col>
          <Col>
            <Card className="profesores">
              <h4>Maestra. Alejandra Alonso Flores</h4>
              <p>Nutriología, especialista en Nutrición geriátrica, maestra en nutrición aplicada.</p>
            </Card>
          </Col>
          <Col>
            <Card className="profesores">
              <h4>Dra. Ana Isabel García González</h4>
              <p>Médico, especialista en rehabilitación, alta especialidad en rehabilitación geriátrica.</p>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="profesores">
              <h4>Maestra Ana Itzel Olvera Cruz</h4>
              <p>Nutriología, especialista en Nutrición geriátrica, maestra en nutrición aplicada.</p>
            </Card>
          </Col>
          <Col>
            <Card className="profesores">
              <h4>Maestra Victoria Ramos Barragán</h4>
              <p>Nutriología, maestría en ciencias de la Nutrición, profesora Universidad Iberoamericana, CDMX.</p>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
