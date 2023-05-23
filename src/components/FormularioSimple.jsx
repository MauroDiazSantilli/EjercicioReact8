import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import '../App.css';

function Formulario() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [dni, setDni] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre && apellido && dni && email) {
      alert('Datos enviados');
    } else {
      alert('Completar todos los datos');
    }
  };

  return (
    <Container className="formcontainer">
      <h1 className="titulo mb-4">Formulario</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="nombre">
          <Form.Label className="fw-bold">Nombre:</Form.Label>
          <Form.Control type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="apellido">
          <Form.Label className="fw-bold">Apellido:</Form.Label>
          <Form.Control type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="dni">
          <Form.Label className="fw-bold">D.N.I:</Form.Label>
          <Form.Control type="text" value={dni} onChange={(e) => setDni(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label className="fw-bold">E-mail:</Form.Label>
          <Form.Control type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        <Button className="mt-3"type="submit" variant="info">
          Enviar
        </Button>
      </Form>
    </Container>
  );
}

export default Formulario