import React, { useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Img from '../assets/5.png'
//import ErrorModal from './ErrorModal'


const LoginForm = () => {
    const form = useRef();
    const navigate = useNavigate();
    //const [modalShow, setModalShow] = useState(false)

    
    const handleSubmit = async (e) => {
      e.preventDefault()
      //Recuperar información del form
      const formData = new FormData(form.current)   
  
      const response = await fetch('http://localhost:4000/login',
                                    { method: 'POST', body: formData}
                                  );
      const data = await response.json();
      if(data.mensaje !== 'Usuario o contraseña inválidos'){
        localStorage.setItem('token', data.token);
        console.log(data.token);
        //sessionStorage.setItem('token', data.token);
        //let fecha = new Date();
        //fecha.setTime(fecha.getTime() + (3600*1000));
        //document.cookie = `token=${data.token}; expires=${fecha.toUTCString()}`;
  
        navigate('/home');
      }
      /*else {
        setModalShow(true)
      }*/
  
    }
  
    return (
      <Container id="main-container" className="d-grid h-100">
        <Form ref={form} onSubmit={handleSubmit}
              id="sign-in-form" className="w-100 text-center">
          <img src= {Img}
              alt="Logo Higea" className="login-logo mb-4"/>
          <Form.Group className="mb-1">
            <Form.Control type="text" placeholder="Correo"
                          name="user" required />
          </Form.Group>
          <Form.Group className="mb-1">
            <Form.Control type="password" placeholder="Contraseña"
                          name="password" required />
          </Form.Group>
          <Button className="w-100" 
                  type="submit" variant="primary">Iniciar sesión</Button>
        </Form>
        
      </Container>
      
    )
}
export default LoginForm;

