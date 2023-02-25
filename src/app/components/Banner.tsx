"use client";
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'next/image'
import Card from 'react-bootstrap/Card'

export default function Banner() {
  return (
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
  )
}