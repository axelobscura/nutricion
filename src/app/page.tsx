"use client";
import Link from 'next/link'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Banner from './components/Banner'
import Image from 'next/image'

export default function Home() {
  return (
    <Container className='entrada' fluid>
      <Banner boton="inicio"/>
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
              <p style={{marginBottom:'40px'}}>Nutrición y envejecimiento - Antropometría en el adulto mayor - Composición corporal - Métodos dietarios y métodos para medir/estimar el gasto energético total o los requerimientos de energía dentro de la evaluación nutricional - Consumo calórico y guías de alimentación - Tamizaje del estado de nutrición - Desarrollo e implementación de estrategias dietéticas y nutricionales basadas en evidencias - Nutrigenómica y nutrigenética - Nutrición en el adulto mayor hospitalizado - Nutrición en el adulto mayor con deterioro cognitivo mayor - Evaluación de la actividad física, desempeño físico y prescripción del ejercicio físico del adulto mayor.</p>
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
        <Row>
          <Col>
            <div style={{textAlign: 'center', marginBottom: '20px'}}>
              <Link href='https://amgg.com.mx/nutricion/poster_curso_nutricion_2023.pdf' className='btn_login'>Descargar aquí programa en PDF</Link>
            </div>
            <div style={{width: '100%', height: '2000px', position: 'relative'}}>
              <Image
                fill
                src='https://amgg.com.mx/nutricion/poster_curso_nutricion_2023.jpg'
                alt='Curso Latinoamericano en Nutrición y Alimentación Geriátrica'
                sizes='100vw'
              />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
