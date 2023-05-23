import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import "../App.css"

function Formulario(){
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [dni, setDni] = useState("")
    const [email, setEmail] = useState("")


const handleSubmit = (e) =>{
e.preventDefault()

if (nombre && apellido && dni && email){
    alert("Datos enviados")
}else{
    alert("Completar todos los datos")
 }
}

return(
    <Container>
        <h1 className="titulo">Formulario</h1>
        <Form onSubmit={handleSubmit}>
         <Form.Group controlId="nombre">
            <Form.Label>Nombre: </Form.Label>
            <Form.Control type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
         </Form.Group>
         <Form.Group controlId="apellido">
            <Form.Label>Apellido: </Form.Label>
            <Form.Control type="text" value={apellido} onChange={(e) => setApellido(e.target.value)}/>
         </Form.Group>
         <Form.Group controlId="dni">
            <Form.Label>D.N.I: </Form.Label>
            <Form.Control type="text" value={dni} onChange={(e) => setDni(e.target.value)}/>
         </Form.Group>
         <Form.Group controlId="email">
            <Form.Label>E-mail: </Form.Label>
            <Form.Control type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
         </Form.Group>
         <Button type="submit" variant="info"></Button>
        </Form>
    </Container>
)

}

export default Formulario