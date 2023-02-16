"use client";
import Image from 'next/image';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { BiChevronRight, BiUserCircle } from "react-icons/bi"


export default function Programa() {
  return (
    <Container className='programa' fluid>
      <Row>
        <Col></Col>
        <Col xs={12} md={6} className='uno'>
          <h1>Curso Latinoamericano en Nutrición y Alimentación Geriátrica</h1>
          <p className='objetivo'><b>Objetivo general</b><br/>Aportar los conocimientos teóricos y prácticos básicos para el proceso de atención nutricia en las personas adultas mayores (PAM) (institucionalizado, en hospital y de la comunidad), para promover un envejecimiento saludable y activo.</p>
          <h5><BiChevronRight/> Profesor titular:</h5>
          <div className='dr'>
            <h6><BiUserCircle style={{marginRight: '5px'}}/> Dr. Oscar Rosas Carrasco</h6>
            <p>Médico, especialista en Medicina Interna y Geriatría, Profesor-investigador nacional nivel II</p>
          </div>
          <h5><BiChevronRight/> Profesores adjuntos:</h5>
          <div className='dr'>
            <h6><BiUserCircle style={{marginRight: '5px'}}/> Dra. María del Consuelo Velázquez Alva</h6>
            <p>Médico, maestra en Ciencias de la Nutrición, Doctorado en Ciencias, SNI nivel 1</p>
          </div>
          <div className='dr'>
            <h6><BiUserCircle style={{marginRight: '5px'}}/> Maestra. Alejandra Alonso Flores</h6>
            <p>Nutriología, especialista en Nutrición geriátrica, maestra en nutrición aplicada</p>
          </div>
          <div className='dr'>
            <h6><BiUserCircle style={{marginRight: '5px'}}/> Dra. Ana Isabel García González</h6>
            <p>Médico, especialista en rehabilitación, alta especialidad en rehabilitación geriátrica</p>
          </div>
          <div className='dr'>
            <h6><BiUserCircle style={{marginRight: '5px'}}/> Maestra Ana Itzel Olvera Cruz</h6>
            <p>Nutriología, especialista en Nutrición geriátrica, maestra en nutrición aplicada</p>
          </div>
          <div className='dr'>
            <h6><BiUserCircle style={{marginRight: '5px'}}/> Maestra Victoria Ramos Barragán</h6>
            <p>Nutriología, maestría en ciencias de la Nutrición, profesora Universidad Iberoamericana, CDMX</p>
          </div>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  )
}
