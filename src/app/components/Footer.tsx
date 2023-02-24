"use client";
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'next/image'

export default function Footer() {
  return (
    <Container className="wrapFooter" fluid>
      <Row>
        <Col>
          <Link href="/privacidad">Aviso de privacidad</Link>
        </Col>
        <Col>
          <Link href="/privacidad">Términos y condiciones</Link>
        </Col>
        <Col>
          <Link href="/privacidad">
            <Image
              src='/logo-amgg-blanco.png'
              width='70'
              height='50'
              alt='Curso Latinoamericano en Nutrición y Alimentación Geriátrica'
            />
          </Link>
        </Col>
        <Col></Col>
        <Col>
          <div>
            <p>® 2023 Asociación Mexicana de Gerontología y Geriatría A.C.</p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
