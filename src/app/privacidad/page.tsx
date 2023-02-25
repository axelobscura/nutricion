"use client";
import Image from 'next/image';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Banner from '../components/Banner'

export default function Privacidad() {
  return (
    <Container className='registro' fluid>
      <Banner/>
      <Row>
        <Col style={{padding: '50px'}}>
          <h2>Aviso de privacidad</h2>
          <hr/>
          <p>Sus datos personales, serán utilizados para las siguientes finalidades:<br/><br/>a) Registrar su inscripción a
la modalidad de capacitación que haya elegido;<br/><br/>b) generar listas de asistencias y validación de las
mismas;<br/><br/>c) emisión de constancia de participación o asistencia de acuerdo a la modalidad de que
se trate;<br/><br/>d) establecer comunicación para dar seguimiento de los cursos o aclaración de dudas
sobre sus datos, notificación de cancelación o cambio de horario, fecha o sede; y e) generar
estadísticas para informes obligatorios.
De manera adicional, utilizaremos su información personal para las siguientes finalidades que no
son necesarias, pero que nos permiten y facilitan brindarle una mejor atención:<br/><br/>a) envío de material
de exposición o apoyo; y,<br/><br/>b) invitaciones a futuros eventos.</p>
        </Col>
      </Row>
    </Container>
  )
}
