import React, { useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Img from '../assets/5.png'

const SignUpGeneral = () => {
    const form = useRef();
    const navigate = useNavigate();
    //const [modalShow, setModalShow] = useState(false)

    
    const handleSubmit = async (e) => {
      e.preventDefault()
      //Recuperar información del form
      const formData = new FormData(form.current)   
  
      const response = await fetch('http://localhost:4000/signUp',
                                    { method: 'POST', body: formData}
                                  );
      const data = await response.json();
      if(data.mensaje !== 'User already exists'){
        //sessionStorage.setItem('token', data.token);
        //let fecha = new Date();
        //fecha.setTime(fecha.getTime() + (3600*1000));
        //document.cookie = `token=${data.token}; expires=${fecha.toUTCString()}`;
        
        
        if(data.idType = 'D'){
            navigate('/SignUpDoctor');
        }
        else{
            navigate('/SignUpPaciente');
        }

      }

      /*else {
        setModalShow(true)
      }*/
  
    }
/*
    const filterCompleted = event => {
        if(event.target.checked){
           type = 'D'
        } else {
            type = 'P'
        }
     }*/

  
    return (
      <Container id="main-container" className="d-grid h-100">
        <Form ref={form} onSubmit={handleSubmit}
              id="sign-in-form" className="w-100 text-center">
          <img src= {Img}
              alt="Logo Higea" className="login-logo mb-4"/>
          <Form.Group className="mb-1">
            <Form.Control type="text" placeholder="Correo"
                          name="mail" required />
          </Form.Group>
          <Form.Group className="mb-1">
            <Form.Control type="password" placeholder="Contraseña"
                          name="passw0rd" required />
          </Form.Group>
          <Form.Group className="mb-1">
            <Form.Control type="text" placeholder="Paciente o Doctor"
                          name="type" required />
          </Form.Group>
          <Form.Group className="mb-1">
            <Form.Control type="text" placeholder="Nombres"
                          name="firstName" required />
          </Form.Group>
          <Form.Group className="mb-1">
            <Form.Control type="text" placeholder="Edad"
                          name="age" required />
          </Form.Group>
          <Form.Group className="mb-1">
            <Form.Control type="text" placeholder="Teléfono"
                          name="telephone" required />
          </Form.Group>
          
          <Button className="w-100" 
                  type="submit" variant="primary">Iniciar sesión</Button>
        </Form>
        
      </Container>
      
    )
}

export default SignUpGeneral;