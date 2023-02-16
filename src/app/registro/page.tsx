"use client";
import { useState } from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { useCreateRegistro } from 'lib/swr-hooks';

export default function Registro() {

  const [ enviado, setEnviado ] = useState('false');

  async function registro(e: any) {
    e.preventDefault();
    let nombre = e.target.nombre.value;
    let apaterno = e.target.apaterno.value;
    let amaterno = e.target.amaterno.value;
    let email = e.target.email.value;
    let titulo = e.target.titulo.value;
    let telefono = e.target.telefono.value;
    let fnacimiento = e.target.fnacimiento.value;
    let sexo = e.target.sexo.value;
    let activo = 0;
    try {
      const res = await fetch('/api/create-registro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nombre,
            apaterno,
            amaterno,
            email,
            titulo,
            telefono,
            fnacimiento,
            sexo,
            activo
        }),
      })
      setEnviado('true');
      const json = await res.json()
      if (!res.ok) throw Error(json.message)
    } catch(e: any){
      throw Error(e.message)
    }
  };

  return (
    <Container className='registro' fluid>
      <Row>
        <Col>
          <h1>REGISTRO - {enviado === 'false' ? 'no enviado' : 'enviado'}</h1>
          <hr/>
        </Col>
      </Row>
      <Row>
        <Col></Col>
        <Col xs={12} md={6}>
          <Form onSubmit={registro}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre:</Form.Label>
              <Form.Control type="text" name="nombre" placeholder="Ingrese su nombre" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Apellido paterno:</Form.Label>
              <Form.Control type="text" name="apaterno" placeholder="Ingrese su apellido paterno" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Apellido materno:</Form.Label>
              <Form.Control type="text" name="amaterno" placeholder="Ingrese su apellido materno" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Correo electrónico:</Form.Label>
              <Form.Control type="email" name="email" placeholder="Ingrese su correo electrónico" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Título:</Form.Label>
              <Form.Select name='titulo'>
                <option>Dr.</option>
                <option>Dra.</option>
                <option>Lic.</option>
                <option>Mtro.</option>
                <option>Mtra.</option>
                <option>Ing.</option>
                <option>Psic.</option>
                <option>Otro.</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Teléfono:</Form.Label>
              <Form.Control type="text" name="telefono" placeholder="Ingrese su teléfono" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Fecha de nacimiento:</Form.Label>
              <Form.Control type="date" name="fnacimiento" placeholder="Ingrese su teléfono" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Sexo:</Form.Label>
              <Form.Select name='sexo'>
                <option>Femenino</option>
                <option>Masculino</option>
              </Form.Select>
            </Form.Group>
            <Button type="submit">REGISTRARSE</Button>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  )
}
