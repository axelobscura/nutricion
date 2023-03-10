"use client";
import { useState, useEffect } from 'react'
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Banner from '../components/Banner'
import CheckoutForm from "../components/CheckoutForm"
import { BiChevronRight } from "react-icons/bi"
import axios from 'axios'

let strpe_key: string | any = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(strpe_key);

export default function Registro() {
  const [ enviado, setEnviado ] = useState('false');
  const [clientSecret, setClientSecret] = useState("");

  /*
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [
        {
          item_id: 'id_1',
          quantity: 1,
        },
      ] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);
  */

  const appearance: any = {
    theme: 'night',
  };

  const options: any = {
    clientSecret,
    appearance,
  };

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

      
      const response = await axios.post('https://amgg.com.mx/nutricion/mail/index.php', {
        nombre: nombre,
        apaterno: apaterno,
        email: email,
      })
      .then(function (response) {
        console.log('RESPUESTA DE AXIOS: '+JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
      

      setEnviado('true');
      window.location.href = "https://buy.stripe.com/4gwaEI3GE11UaVGcMM";
      const json = await res.json()
      if (!res.ok) throw Error(json.message)
    } catch(e: any){
      throw Error(e.message)
    }
  };

  return (
    <Container className='registro' fluid>
      <Banner boton="registro"/>
      <Row>
        <Col></Col>
        <Col xs={12} md={6} className='reg' style={{ padding: '70px 0'}}>
          <h3>REGISTRO</h3>
          <hr/>
          {enviado === 'false' &&
          <Form onSubmit={registro}>
            <Form.Group className="mb-3">
              <Form.Label><BiChevronRight /> Título:</Form.Label>
              <Form.Select name='titulo'>
                <option>Dr.</option>
                <option>Dra.</option>
                <option>Lic.</option>
                <option>Mtro.</option>
                <option>Mtra.</option>
                <option>Ing.</option>
                <option>Psic.</option>
                <option>Otro</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label><BiChevronRight /> Profesión/especialidad:</Form.Label>
              <Form.Control type="text" name="profesion" placeholder="Ingrese su profesión/especialidad" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label><BiChevronRight /> Nombre(s):</Form.Label>
              <Form.Control type="text" name="nombre" placeholder="Ingrese su nombre completo" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label><BiChevronRight /> Apellido paterno:</Form.Label>
              <Form.Control type="text" name="apaterno" placeholder="Ingrese su apellido paterno" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label><BiChevronRight /> Apellido materno:</Form.Label>
              <Form.Control type="text" name="amaterno" placeholder="Ingrese su apellido materno" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label><BiChevronRight /> Correo electrónico:</Form.Label>
              <Form.Control type="email" name="email" placeholder="Ingrese su correo electrónico" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label><BiChevronRight /> Confirme su correo electrónico:</Form.Label>
              <Form.Control type="email" name="confirmeEmail" placeholder="Vuelva a ingresar su correo electrónico" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label><BiChevronRight /> Teléfono:</Form.Label>
              <Form.Control type="text" name="telefono" placeholder="Ingrese su teléfono" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label><BiChevronRight /> Fecha de nacimiento:</Form.Label>
              <Form.Control type="date" name="fnacimiento" placeholder="Ingrese su teléfono" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label><BiChevronRight /> Sexo:</Form.Label>
              <Form.Select name='sexo'>
                <option>Femenino</option>
                <option>Masculino</option>
              </Form.Select>
            </Form.Group>
            <Button type="submit" className="btn_login">REGISTRARSE</Button>
          </Form>
          }
          {enviado === 'true' &&
          <div className='exito'>
            <h3>Gracias sus datos han sido enviados con éxito!</h3>
          </div>
          }
          {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          )}
        </Col>
        <Col></Col>
      </Row>
    </Container>
  )
}
